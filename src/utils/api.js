import wepy from 'wepy'


const host = 'https://mina.lexiangla.net'; // 'http://193.112.234.197:8081/app/mock/16';
// const host = 'http://193.112.234.197:8081/app/mock/16';
// 普通请求
const request = async (options, showLoading = true) => {
  if (typeof options === 'string') {
    options = {
      url: options
    }
  }
  // 显示加载中
  if (showLoading) {
    wepy.showLoading({ title: '加载中' })
  }
  // 拼接请求地址
  options.url = host + '/' + options.url
  // 调用小程序的 request 方法
  let response = await wepy.request(options)

  if (showLoading) {
    // 隐藏加载中
    wepy.hideLoading()
  }

  // 服务器异常后给与提示
  if (response.statusCode === 500) {
    wepy.showModal({
      title: '提示',
      content: '服务器错误，请联系管理员或重试'
    })
  }
  return response
}

// 登录
const login = async (params = {}) => {
  // code 只能使用一次，所以每次单独调用
  let loginData = await wepy.login()

  // 参数中增加code
  params.code = loginData.code

  // 接口请求 authorizations
  let authResponse = await request({
    url: 'authorizations',
    data: params,
    method: 'POST'
  }, false)

  authResponse.data.expires_in = authResponse.data.expires_in || 5 * 60;

  // 登录成功，记录 token 信息
  if (authResponse.statusCode === 200) {
    wepy.setStorageSync('token', authResponse.data.token)
    wepy.setStorageSync('token_expired_at', new Date().getTime() + authResponse.data.expires_in * 1000)
  }

  return authResponse
}

// 获取 Token
const getToken = async (options) => {
  // 从缓存中取出 Token
  let accessToken = wepy.getStorageSync('token')
  let expiredAt = wepy.getStorageSync('token_expired_at')

  // 如果 token 过期了，则调用刷新方法
  if (accessToken && new Date().getTime() > expiredAt) {
    let authResponse = await login()
    if (authResponse.statusCode === 200) {
      accessToken = authResponse.data.token
    }
  }

  return accessToken
}

// 带身份认证的请求
const authRequest = async (options, showLoading = true) => {
  if (typeof options === 'string') {
    options = {
      url: options
    }
  }
  // 获取Token
  let accessToken = await getToken()

  // 将 Token 设置在 header 中
  let header = options.header || {}
  header.AUTH = accessToken
  options.header = header

  return request(options, showLoading)
}

//  退出登录
const logout = async (params = {}) => {
  let accessToken = wepy.getStorageSync('token')
  // 调用删除 Token 接口，让 Token 失效
  let logoutResponse = await wepy.request({
    url: host + '/' + 'authorizations/current',
    method: 'DELETE',
    header: {
      'AUTH': accessToken
    }
  })

  // 调用接口成功则清空缓存
  if (logoutResponse.statusCode === 200) {
    wepy.clearStorage()
  }

  return logoutResponse
}

const updateFile = async (options = {}) => {
  // 显示loading
  wepy.showLoading({ title: '上传中' })

  // 获取 token
  let accessToken = await getToken()

  // 拼接url
  options.url = host + '/' + options.url
  let header = options.header || {}
  // 将 token 设置在 header 中
  header.AUTH = accessToken
  options.header = header

  // 上传文件
  let response = await wepy.uploadFile(options)

  // 隐藏 loading
  wepy.hideLoading()

  return response
}

export default {
  request,
  authRequest,
  login,
  logout,
  updateFile
}

