'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var host = 'https://mina.lexiangla.net'; // 'http://193.112.234.197:8081/app/mock/16';
// const host = 'http://193.112.234.197:8081/app/mock/16';
// 普通请求
var request = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
    var showLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (typeof options === 'string') {
              options = {
                url: options
              };
            }
            // 显示加载中
            if (showLoading) {
              _wepy2.default.showLoading({ title: '加载中' });
            }
            // 拼接请求地址
            options.url = host + '/' + options.url;
            // 调用小程序的 request 方法
            _context.next = 5;
            return _wepy2.default.request(options);

          case 5:
            response = _context.sent;


            if (showLoading) {
              // 隐藏加载中
              _wepy2.default.hideLoading();
            }

            // 服务器异常后给与提示
            if (response.statusCode === 500) {
              _wepy2.default.showModal({
                title: '提示',
                content: '服务器错误，请联系管理员或重试'
              });
            }
            return _context.abrupt('return', response);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function request(_x2) {
    return _ref.apply(this, arguments);
  };
}();

// 登录
var login = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var loginData, authResponse;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _wepy2.default.login();

          case 2:
            loginData = _context2.sent;


            // 参数中增加code
            params.code = loginData.code;

            // 接口请求 authorizations
            _context2.next = 6;
            return request({
              url: 'authorizations',
              data: params,
              method: 'POST'
            }, false);

          case 6:
            authResponse = _context2.sent;


            authResponse.data.expires_in = authResponse.data.expires_in || 5 * 60;

            // 登录成功，记录 token 信息
            if (authResponse.statusCode === 200) {
              _wepy2.default.setStorageSync('token', authResponse.data.token);
              _wepy2.default.setStorageSync('token_expired_at', new Date().getTime() + authResponse.data.expires_in * 1000);
            }

            return _context2.abrupt('return', authResponse);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function login() {
    return _ref2.apply(this, arguments);
  };
}();

// 获取 Token
var getToken = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
    var accessToken, expiredAt, authResponse;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // 从缓存中取出 Token
            accessToken = _wepy2.default.getStorageSync('token');
            expiredAt = _wepy2.default.getStorageSync('token_expired_at');

            // 如果 token 过期了，则调用刷新方法

            if (!(accessToken && new Date().getTime() > expiredAt)) {
              _context3.next = 7;
              break;
            }

            _context3.next = 5;
            return login();

          case 5:
            authResponse = _context3.sent;

            if (authResponse.statusCode === 200) {
              accessToken = authResponse.data.token;
            }

          case 7:
            return _context3.abrupt('return', accessToken);

          case 8:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getToken(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

// 带身份认证的请求
var authRequest = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(options) {
    var showLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var accessToken, header;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (typeof options === 'string') {
              options = {
                url: options
              };
            }
            // 获取Token
            _context4.next = 3;
            return getToken();

          case 3:
            accessToken = _context4.sent;


            // 将 Token 设置在 header 中
            header = options.header || {};

            header.AUTH = accessToken;
            options.header = header;

            return _context4.abrupt('return', request(options, showLoading));

          case 8:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function authRequest(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

//  退出登录
var logout = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var accessToken, logoutResponse;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            accessToken = _wepy2.default.getStorageSync('token');
            // 调用删除 Token 接口，让 Token 失效

            _context5.next = 3;
            return _wepy2.default.request({
              url: host + '/' + 'authorizations/current',
              method: 'DELETE',
              header: {
                'AUTH': accessToken
              }
            });

          case 3:
            logoutResponse = _context5.sent;


            // 调用接口成功则清空缓存
            if (logoutResponse.statusCode === 200) {
              _wepy2.default.clearStorage();
            }

            return _context5.abrupt('return', logoutResponse);

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function logout() {
    return _ref5.apply(this, arguments);
  };
}();

var updateFile = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var accessToken, header, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // 显示loading
            _wepy2.default.showLoading({ title: '上传中' });

            // 获取 token
            _context6.next = 3;
            return getToken();

          case 3:
            accessToken = _context6.sent;


            // 拼接url
            options.url = host + '/' + options.url;
            header = options.header || {};
            // 将 token 设置在 header 中

            header.AUTH = accessToken;
            options.header = header;

            // 上传文件
            _context6.next = 10;
            return _wepy2.default.uploadFile(options);

          case 10:
            response = _context6.sent;


            // 隐藏 loading
            _wepy2.default.hideLoading();

            return _context6.abrupt('return', response);

          case 13:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function updateFile() {
    return _ref6.apply(this, arguments);
  };
}();

exports.default = {
  request: request,
  authRequest: authRequest,
  login: login,
  logout: logout,
  updateFile: updateFile
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0IiwicmVxdWVzdCIsIm9wdGlvbnMiLCJzaG93TG9hZGluZyIsInVybCIsIndlcHkiLCJ0aXRsZSIsInJlc3BvbnNlIiwiaGlkZUxvYWRpbmciLCJzdGF0dXNDb2RlIiwic2hvd01vZGFsIiwiY29udGVudCIsImxvZ2luIiwicGFyYW1zIiwibG9naW5EYXRhIiwiY29kZSIsImRhdGEiLCJtZXRob2QiLCJhdXRoUmVzcG9uc2UiLCJleHBpcmVzX2luIiwic2V0U3RvcmFnZVN5bmMiLCJ0b2tlbiIsIkRhdGUiLCJnZXRUaW1lIiwiZ2V0VG9rZW4iLCJhY2Nlc3NUb2tlbiIsImdldFN0b3JhZ2VTeW5jIiwiZXhwaXJlZEF0IiwiYXV0aFJlcXVlc3QiLCJoZWFkZXIiLCJBVVRIIiwibG9nb3V0IiwibG9nb3V0UmVzcG9uc2UiLCJjbGVhclN0b3JhZ2UiLCJ1cGRhdGVGaWxlIiwidXBsb2FkRmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBR0EsSUFBTUEsT0FBTyw0QkFBYixDLENBQTJDO0FBQzNDO0FBQ0E7QUFDQSxJQUFNQztBQUFBLHFFQUFVLGlCQUFPQyxPQUFQO0FBQUEsUUFBZ0JDLFdBQWhCLHVFQUE4QixJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxnQkFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CQSx3QkFBVTtBQUNSRSxxQkFBS0Y7QUFERyxlQUFWO0FBR0Q7QUFDRDtBQUNBLGdCQUFJQyxXQUFKLEVBQWlCO0FBQ2ZFLDZCQUFLRixXQUFMLENBQWlCLEVBQUVHLE9BQU8sS0FBVCxFQUFqQjtBQUNEO0FBQ0Q7QUFDQUosb0JBQVFFLEdBQVIsR0FBY0osT0FBTyxHQUFQLEdBQWFFLFFBQVFFLEdBQW5DO0FBQ0E7QUFaYztBQUFBLG1CQWFPQyxlQUFLSixPQUFMLENBQWFDLE9BQWIsQ0FiUDs7QUFBQTtBQWFWSyxvQkFiVTs7O0FBZWQsZ0JBQUlKLFdB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QWZKOztBQUFBO0FBZWJLLG9CQWZhOzs7QUFpQmpCO0FBQ0FGLDJCQUFLRyxXQUFMOztBQWxCaUIsOENBb0JWRCxRQXBCVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O2tCQXVCZTtBQUNiTixrQkFEYTtBQUViMkIsMEJBRmE7QUFHYmhCLGNBSGE7QUFJYm1CLGdCQUphO0FBS2JHO0FBTGEsQyIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5cbmNvbnN0IGhvc3QgPSAnaHR0cHM6Ly9taW5hLmxleGlhbmdsYS5uZXQnOyAvLyAnaHR0cDovLzE5My4xMTIuMjM0LjE5Nzo4MDgxL2FwcC9tb2NrLzE2Jztcbi8vIGNvbnN0IGhvc3QgPSAnaHR0cDovLzE5My4xMTIuMjM0LjE5Nzo4MDgxL2FwcC9tb2NrLzE2Jztcbi8vIOaZrumAmuivt+axglxuY29uc3QgcmVxdWVzdCA9IGFzeW5jIChvcHRpb25zLCBzaG93TG9hZGluZyA9IHRydWUpID0+IHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICB1cmw6IG9wdGlvbnNcbiAgICB9XG4gIH1cbiAgLy8g5pi+56S65Yqg6L295LitXG4gIGlmIChzaG93TG9hZGluZykge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+WKoOi9veS4rScgfSlcbiAgfVxuICAvLyDmi7zmjqXor7fmsYLlnLDlnYBcbiAgb3B0aW9ucy51cmwgPSBob3N0ICsgJy8nICsgb3B0aW9ucy51cmxcbiAgLy8g6LCD55So5bCP56iL5bqP55qEIHJlcXVlc3Qg5pa55rOVXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IHdlcHkucmVxdWVzdChvcHRpb25zKVxuXG4gIGlmIChzaG93TG9hZGluZykge1xuICAgIC8vIOmakOiXj+WKoOi9veS4rVxuICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICB9XG5cbiAgLy8g5pyN5Yqh5Zmo5byC5bi45ZCO57uZ5LiO5o+Q56S6XG4gIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSA1MDApIHtcbiAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICBjb250ZW50OiAn5pyN5Yqh5Zmo6ZSZ6K+v77yM6K+36IGU57O7566h55CG5ZGY5oiW6YeN6K+VJ1xuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cbi8vIOeZu+W9lVxuY29uc3QgbG9naW4gPSBhc3luYyAocGFyYW1zID0ge30pID0+IHtcbiAgLy8gY29kZSDlj6rog73kvb/nlKjkuIDmrKHvvIzmiYDku6Xmr4/mrKHljZXni6zosIPnlKhcbiAgbGV0IGxvZ2luRGF0YSA9IGF3YWl0IHdlcHkubG9naW4oKVxuXG4gIC8vIOWPguaVsOS4reWinuWKoGNvZGVcbiAgcGFyYW1zLmNvZGUgPSBsb2dpbkRhdGEuY29kZVxuXG4gIC8vIOaOpeWPo+ivt+axgiBhdXRob3JpemF0aW9uc1xuICBsZXQgYXV0aFJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdCh7XG4gICAgdXJsOiAnYXV0aG9yaXphdGlvbnMnLFxuICAgIGRhdGE6IHBhcmFtcyxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9LCBmYWxzZSlcblxuICBhdXRoUmVzcG9uc2UuZGF0YS5leHBpcmVzX2luID0gYXV0aFJlc3BvbnNlLmRhdGEuZXhwaXJlc19pbiB8fCA1ICogNjA7XG5cbiAgLy8g55m75b2V5oiQ5Yqf77yM6K6w5b2VIHRva2VuIOS/oeaBr1xuICBpZiAoYXV0aFJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgYXV0aFJlc3BvbnNlLmRhdGEudG9rZW4pXG4gICAgd2VweS5zZXRTdG9yYWdlU3luYygndG9rZW5fZXhwaXJlZF9hdCcsIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgYXV0aFJlc3BvbnNlLmRhdGEuZXhwaXJlc19pbiAqIDEwMDApXG4gIH1cblxuICByZXR1cm4gYXV0aFJlc3BvbnNlXG59XG5cbi8vIOiOt+WPliBUb2tlblxuY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAob3B0aW9ucykgPT4ge1xuICAvLyDku47nvJPlrZjkuK3lj5blh7ogVG9rZW5cbiAgbGV0IGFjY2Vzc1Rva2VuID0gd2VweS5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxuICBsZXQgZXhwaXJlZEF0ID0gd2VweS5nZXRTdG9yYWdlU3luYygndG9rZW5fZXhwaXJlZF9hdCcpXG5cbiAgLy8g5aaC5p6cIHRva2VuIOi/h+acn+S6hu+8jOWImeiwg+eUqOWIt+aWsOaWueazlVxuICBpZiAoYWNjZXNzVG9rZW4gJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgPiBleHBpcmVkQXQpIHtcbiAgICBsZXQgYXV0aFJlc3BvbnNlID0gYXdhaXQgbG9naW4oKVxuICAgIGlmIChhdXRoUmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICBhY2Nlc3NUb2tlbiA9IGF1dGhSZXNwb25zZS5kYXRhLnRva2VuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjY2Vzc1Rva2VuXG59XG5cbi8vIOW4pui6q+S7veiupOivgeeahOivt+axglxuY29uc3QgYXV0aFJlcXVlc3QgPSBhc3luYyAob3B0aW9ucywgc2hvd0xvYWRpbmcgPSB0cnVlKSA9PiB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgdXJsOiBvcHRpb25zXG4gICAgfVxuICB9XG4gIC8vIOiOt+WPllRva2VuXG4gIGxldCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdldFRva2VuKClcblxuICAvLyDlsIYgVG9rZW4g6K6+572u5ZyoIGhlYWRlciDkuK1cbiAgbGV0IGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyIHx8IHt9XG4gIGhlYWRlci5BVVRIID0gYWNjZXNzVG9rZW5cbiAgb3B0aW9ucy5oZWFkZXIgPSBoZWFkZXJcblxuICByZXR1cm4gcmVxdWVzdChvcHRpb25zLCBzaG93TG9hZGluZylcbn1cblxuLy8gIOmAgOWHuueZu+W9lVxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XG4gIGxldCBhY2Nlc3NUb2tlbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcbiAgLy8g6LCD55So5Yig6ZmkIFRva2VuIOaOpeWPo++8jOiuqSBUb2tlbiDlpLHmlYhcbiAgbGV0IGxvZ291dFJlc3BvbnNlID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGhvc3QgKyAnLycgKyAnYXV0aG9yaXphdGlvbnMvY3VycmVudCcsXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICdBVVRIJzogYWNjZXNzVG9rZW5cbiAgICB9XG4gIH0pXG5cbiAgLy8g6LCD55So5o6l5Y+j5oiQ5Yqf5YiZ5riF56m657yT5a2YXG4gIGlmIChsb2dvdXRSZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICB3ZXB5LmNsZWFyU3RvcmFnZSgpXG4gIH1cblxuICByZXR1cm4gbG9nb3V0UmVzcG9uc2Vcbn1cblxuY29uc3QgdXBkYXRlRmlsZSA9IGFzeW5jIChvcHRpb25zID0ge30pID0+IHtcbiAgLy8g5pi+56S6bG9hZGluZ1xuICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfkuIrkvKDkuK0nIH0pXG5cbiAgLy8g6I635Y+WIHRva2VuXG4gIGxldCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdldFRva2VuKClcblxuICAvLyDmi7zmjqV1cmxcbiAgb3B0aW9ucy51cmwgPSBob3N0ICsgJy8nICsgb3B0aW9ucy51cmxcbiAgbGV0IGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyIHx8IHt9XG4gIC8vIOWwhiB0b2tlbiDorr7nva7lnKggaGVhZGVyIOS4rVxuICBoZWFkZXIuQVVUSCA9IGFjY2Vzc1Rva2VuXG4gIG9wdGlvbnMuaGVhZGVyID0gaGVhZGVyXG5cbiAgLy8g5LiK5Lyg5paH5Lu2XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IHdlcHkudXBsb2FkRmlsZShvcHRpb25zKVxuXG4gIC8vIOmakOiXjyBsb2FkaW5nXG4gIHdlcHkuaGlkZUxvYWRpbmcoKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlcXVlc3QsXG4gIGF1dGhSZXF1ZXN0LFxuICBsb2dpbixcbiAgbG9nb3V0LFxuICB1cGRhdGVGaWxlXG59XG5cbiJdfQ==