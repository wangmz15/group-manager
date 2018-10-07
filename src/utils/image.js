import COS from '../libs/cos-wx-sdk-v5';
import wepy from 'wepy';
import api from './api';
import _ from 'lodash';

const Bucket = 'tsinghua-1256729491';
const Region = 'ap-guangzhou';
let cos = new COS({
    getAuthorization: async function (options, callback) {
        console.log('getAuthorization options:');
        console.log(options);
        // 异步获取签名
        let res = await api.request({
            url: 'cosSign', // 步骤二提供的签名接口
            method: 'POST',
            data: options,
            dataType: 'text'
        });
        console.log('getAuthorization res:');
        console.log(res);
        let data = JSON.parse(res.data);
        let tmp = {
            TmpSecretId: data.Authorization.tmpSecretId,
            TmpSecretKey: data.Authorization.tmpSecretKey,
            XCosSecurityToken: data.Authorization.sessionToken,
            ExpiredTime: data.Authorization.ExpiredTime,
        };
        callback(tmp);
    }
});

exports.uploadImage = function (key, filepath) {
    return new Promise((resolve, reject) => {
        cos.postObject(
            {
                Bucket: Bucket,
                Region: Region,
                Key: key,
                FilePath: filepath
            },
            function (err, data) {
                if (err) return reject(err);
                resolve(data);
            }
        );
    });
}

// 获取万象优图的签名
let getPicSign = exports.getPicSign = async () => {
    // 从缓存中取出 Sign
    let picSign = wepy.getStorageSync('pic_sign');
    let expiredAt = wepy.getStorageSync('pic_sign_expired_at');

    // 如果 sign 过期了，则调用刷新方法
    if (!picSign || new Date().getTime() > expiredAt) {
        let res = await api.authRequest({
            url: 'picSign',
            method: 'POST'
        }, false);

        res.data.sign_expired_in = res.data.sign_expired_in || 60;

        if (res.data.success) {
            picSign = res.data.sign;
            wepy.setStorageSync('pic_sign', picSign);
            wepy.setStorageSync('pic_sign_expired_at', new Date().getTime() + res.data.sign_expired_in * 1000);
        }
    }

    return picSign;
}

exports.getUrl = async (key) => {
    if (key.startsWith('http')) return key;
    let sign = await getPicSign();
    return `http://${Bucket}.picgz.myqcloud.com/` + key + '?sign=' + sign;
}

exports.fixImagesUrls = async (images) => {
    let sign = await getPicSign();
    for(let img of images) {
        img.url = img.key.startsWith('http') ? img.key : `http://${Bucket}.picgz.myqcloud.com/` + img.key + '?sign=' + sign;
    }
}

exports.debug = async (filename, filepath) => {
}
