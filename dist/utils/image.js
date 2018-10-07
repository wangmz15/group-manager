'use strict';

var _cosWxSdkV = require('./../libs/cos-wx-sdk-v5.js');

var _cosWxSdkV2 = _interopRequireDefault(_cosWxSdkV);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./api.js');

var _api2 = _interopRequireDefault(_api);

var _lodash = require('./../npm/lodash/lodash.js');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Bucket = 'tsinghua-1256729491';
var Region = 'ap-guangzhou';
var cos = new _cosWxSdkV2.default({
    getAuthorization: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options, callback) {
            var res, data, tmp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            console.log('getAuthorization options:');
                            console.log(options);
                            // 异步获取签名
                            _context.next = 4;
                            return _api2.default.request({
                                url: 'cosSign', // 步骤二提供的签名接口
                                method: 'POST',
                                data: options,
                                dataType: 'text'
                            });

                        case 4:
                            res = _context.sent;

                            console.log('getAuthorization res:');
                            console.log(res);
                            data = JSON.parse(res.data);
                            tmp = {
                                TmpSecretId: data.Authorization.tmpSecretId,
                                TmpSecretKey: data.Authorization.tmpSecretKey,
                                XCosSecurityToken: data.Authorization.sessionToken,
                                ExpiredTime: data.Authorization.ExpiredTime
                            };

                            callback(tmp);

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getAuthorization(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return getAuthorization;
    }()
});

exports.uploadImage = function (key, filepath) {
    return new Promise(function (resolve, reject) {
        cos.postObject({
            Bucket: Bucket,
            Region: Region,
            Key: key,
            FilePath: filepath
        }, function (err, data) {
            if (err) return reject(err);
            resolve(data);
        });
    });
};

// 获取万象优图的签名
var getPicSign = exports.getPicSign = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var picSign, expiredAt, res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    // 从缓存中取出 Sign
                    picSign = _wepy2.default.getStorageSync('pic_sign');
                    expiredAt = _wepy2.default.getStorageSync('pic_sign_expired_at');

                    // 如果 sign 过期了，则调用刷新方法

                    if (!(!picSign || new Date().getTime() > expiredAt)) {
                        _context2.next = 8;
                        break;
                    }

                    _context2.next = 5;
                    return _api2.default.authRequest({
                        url: 'picSign',
                        method: 'POST'
                    }, false);

                case 5:
                    res = _context2.sent;


                    res.data.sign_expired_in = res.data.sign_expired_in || 60;

                    if (res.data.success) {
                        picSign = res.data.sign;
                        _wepy2.default.setStorageSync('pic_sign', picSign);
                        _wepy2.default.setStorageSync('pic_sign_expired_at', new Date().getTime() + res.data.sign_expired_in * 1000);
                    }

                case 8:
                    return _context2.abrupt('return', picSign);

                case 9:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
}));

exports.getUrl = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key) {
        var sign;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (!key.startsWith('http')) {
                            _context3.next = 2;
                            break;
                        }

                        return _context3.abrupt('return', key);

                    case 2:
                        _context3.next = 4;
                        return getPicSign();

                    case 4:
                        sign = _context3.sent;
                        return _context3.abrupt('return', 'http://' + Bucket + '.picgz.myqcloud.com/' + key + '?sign=' + sign);

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function (_x3) {
        return _ref3.apply(this, arguments);
    };
}();

exports.fixImagesUrls = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(images) {
        var sign, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, img;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return getPicSign();

                    case 2:
                        sign = _context4.sent;
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context4.prev = 6;

                        for (_iterator = images[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            img = _step.value;

                            img.url = img.key.startsWith('http') ? img.key : 'http://' + Bucket + '.picgz.myqcloud.com/' + img.key + '?sign=' + sign;
                        }
                        _context4.next = 14;
                        break;

                    case 10:
                        _context4.prev = 10;
                        _context4.t0 = _context4['catch'](6);
                        _didIteratorError = true;
                        _iteratorError = _context4.t0;

                    case 14:
                        _context4.prev = 14;
                        _context4.prev = 15;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 17:
                        _context4.prev = 17;

                        if (!_didIteratorError) {
                            _context4.next = 20;
                            break;
                        }

                        throw _iteratorError;

                    case 20:
                        return _context4.finish(17);

                    case 21:
                        return _context4.finish(14);

                    case 22:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[6, 10, 14, 22], [15,, 17, 21]]);
    }));

    return function (_x4) {
        return _ref4.apply(this, arguments);
    };
}();

exports.debug = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(filename, filepath) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function (_x5, _x6) {
        return _ref5.apply(this, arguments);
    };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmpzIl0sIm5hbWVzIjpbIkJ1Y2tldCIsIlJlZ2lvbiIsImNvcyIsIkNPUyIsImdldEF1dGhvcml6YXRpb24iLCJvcHRpb25zIiwiY2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiYXBpIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJkYXRhVHlwZSIsInJlcyIsIkpTT04iLCJwYXJzZSIsInRtcCIsIlRtcFNlY3JldElkIiwiQXV0aG9yaXphdGlvbiIsInRtcFNlY3JldElkIiwiVG1wU2VjcmV0S2V5IiwidG1wU2VjcmV0S2V5IiwiWENvc1NlY3VyaXR5VG9rZW4iLCJzZXNzaW9uVG9rZW4iLCJFeHBpcmVkVGltZSIsImV4cG9ydHMiLCJ1cGxvYWRJbWFnZSIsImtleSIsImZpbGVwYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwb3N0T2JqZWN0IiwiS2V5IiwiRmlsZVBhdGgiLCJlcnIiLCJnZXRQaWNTaWduIiwicGljU2lnbiIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsImV4cGlyZWRBdCIsIkRhdGUiLCJnZXRUaW1lIiwiYXV0aFJlcXVlc3QiLCJzaWduX2V4cGlyZWRfaW4iLCJzdWNjZXNzIiwic2lnbiIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0VXJsIiwic3RhcnRzV2l0aCIsImZpeEltYWdlc1VybHMiLCJpbWFnZXMiLCJpbWciLCJkZWJ1ZyIsImZpbGVuYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMscUJBQWY7QUFDQSxJQUFNQyxTQUFTLGNBQWY7QUFDQSxJQUFJQyxNQUFNLElBQUlDLG1CQUFKLENBQVE7QUFDZEM7QUFBQSwyRUFBa0IsaUJBQWdCQyxPQUFoQixFQUF5QkMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RDLG9DQUFRQyxHQUFSLENBQVksMkJBQVo7QUFDQUQsb0NBQVFDLEdBQVIsQ0FBWUgs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O0FBQUE7QUFBQSwrQkFFSVMsWUFGSjs7QUFBQTtBQUVUVSw0QkFGUztBQUFBLDBEQUdOLFlBQVVoRCxNQUFWLDRCQUF5QzZCLEdBQXpDLEdBQStDLFFBQS9DLEdBQTBEbUIsSUFIcEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUFyQixRQUFReUIsYUFBUjtBQUFBLHdFQUF3QixrQkFBT0MsTUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDSGYsWUFERzs7QUFBQTtBQUNoQlUsNEJBRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRXBCLHlDQUFlSyxNQUFmLHVIQUF1QjtBQUFmQywrQkFBZTs7QUFDbkJBLGdDQUFJM0MsR0FBSixHQUFVMkMsSUFBSXpCLEdBQUosQ0FBUXNCLFVBQVIsQ0FBbUIsTUFBbkIsSUFBNkJHLElBQUl6QixHQUFqQyxHQUF1QyxZQUFVN0IsTUFBViw0QkFBeUNzRCxJQUFJekIsR0FBN0MsR0FBbUQsUUFBbkQsR0FBOERtQixJQUEvRztBQUNIO0FBSm1CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9BckIsUUFBUTRCLEtBQVI7QUFBQSx3RUFBZ0Isa0JBQU9DLFFBQVAsRUFBaUIxQixRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENPUyBmcm9tICcuLi9saWJzL2Nvcy13eC1zZGstdjUnO1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IEJ1Y2tldCA9ICd0c2luZ2h1YS0xMjU2NzI5NDkxJztcbmNvbnN0IFJlZ2lvbiA9ICdhcC1ndWFuZ3pob3UnO1xubGV0IGNvcyA9IG5ldyBDT1Moe1xuICAgIGdldEF1dGhvcml6YXRpb246IGFzeW5jIGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0QXV0aG9yaXphdGlvbiBvcHRpb25zOicpO1xuICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgLy8g5byC5q2l6I635Y+W562+5ZCNXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdjb3NTaWduJywgLy8g5q2l6aqk5LqM5o+Q5L6b55qE562+5ZCN5o6l5Y+jXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IG9wdGlvbnMsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ3RleHQnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0QXV0aG9yaXphdGlvbiByZXM6Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG4gICAgICAgIGxldCB0bXAgPSB7XG4gICAgICAgICAgICBUbXBTZWNyZXRJZDogZGF0YS5BdXRob3JpemF0aW9uLnRtcFNlY3JldElkLFxuICAgICAgICAgICAgVG1wU2VjcmV0S2V5OiBkYXRhLkF1dGhvcml6YXRpb24udG1wU2VjcmV0S2V5LFxuICAgICAgICAgICAgWENvc1NlY3VyaXR5VG9rZW46IGRhdGEuQXV0aG9yaXphdGlvbi5zZXNzaW9uVG9rZW4sXG4gICAgICAgICAgICBFeHBpcmVkVGltZTogZGF0YS5BdXRob3JpemF0aW9uLkV4cGlyZWRUaW1lLFxuICAgICAgICB9O1xuICAgICAgICBjYWxsYmFjayh0bXApO1xuICAgIH1cbn0pO1xuXG5leHBvcnRzLnVwbG9hZEltYWdlID0gZnVuY3Rpb24gKGtleSwgZmlsZXBhdGgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb3MucG9zdE9iamVjdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBCdWNrZXQ6IEJ1Y2tldCxcbiAgICAgICAgICAgICAgICBSZWdpb246IFJlZ2lvbixcbiAgICAgICAgICAgICAgICBLZXk6IGtleSxcbiAgICAgICAgICAgICAgICBGaWxlUGF0aDogZmlsZXBhdGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbi8vIOiOt+WPluS4h+ixoeS8mOWbvueahOetvuWQjVxubGV0IGdldFBpY1NpZ24gPSBleHBvcnRzLmdldFBpY1NpZ24gPSBhc3luYyAoKSA9PiB7XG4gICAgLy8g5LuO57yT5a2Y5Lit5Y+W5Ye6IFNpZ25cbiAgICBsZXQgcGljU2lnbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3BpY19zaWduJyk7XG4gICAgbGV0IGV4cGlyZWRBdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3BpY19zaWduX2V4cGlyZWRfYXQnKTtcblxuICAgIC8vIOWmguaenCBzaWduIOi/h+acn+S6hu+8jOWImeiwg+eUqOWIt+aWsOaWueazlVxuICAgIGlmICghcGljU2lnbiB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKSA+IGV4cGlyZWRBdCkge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmF1dGhSZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ3BpY1NpZ24nLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIHJlcy5kYXRhLnNpZ25fZXhwaXJlZF9pbiA9IHJlcy5kYXRhLnNpZ25fZXhwaXJlZF9pbiB8fCA2MDtcblxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgcGljU2lnbiA9IHJlcy5kYXRhLnNpZ247XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdwaWNfc2lnbicsIHBpY1NpZ24pO1xuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygncGljX3NpZ25fZXhwaXJlZF9hdCcsIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcmVzLmRhdGEuc2lnbl9leHBpcmVkX2luICogMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGljU2lnbjtcbn1cblxuZXhwb3J0cy5nZXRVcmwgPSBhc3luYyAoa2V5KSA9PiB7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKCdodHRwJykpIHJldHVybiBrZXk7XG4gICAgbGV0IHNpZ24gPSBhd2FpdCBnZXRQaWNTaWduKCk7XG4gICAgcmV0dXJuIGBodHRwOi8vJHtCdWNrZXR9LnBpY2d6Lm15cWNsb3VkLmNvbS9gICsga2V5ICsgJz9zaWduPScgKyBzaWduO1xufVxuXG5leHBvcnRzLmZpeEltYWdlc1VybHMgPSBhc3luYyAoaW1hZ2VzKSA9PiB7XG4gICAgbGV0IHNpZ24gPSBhd2FpdCBnZXRQaWNTaWduKCk7XG4gICAgZm9yKGxldCBpbWcgb2YgaW1hZ2VzKSB7XG4gICAgICAgIGltZy51cmwgPSBpbWcua2V5LnN0YXJ0c1dpdGgoJ2h0dHAnKSA/IGltZy5rZXkgOiBgaHR0cDovLyR7QnVja2V0fS5waWNnei5teXFjbG91ZC5jb20vYCArIGltZy5rZXkgKyAnP3NpZ249JyArIHNpZ247XG4gICAgfVxufVxuXG5leHBvcnRzLmRlYnVnID0gYXN5bmMgKGZpbGVuYW1lLCBmaWxlcGF0aCkgPT4ge1xufVxuIl19