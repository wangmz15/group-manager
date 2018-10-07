'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _api = require('./utils/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/first_page', 'pages/album_insert_image', 'pages/album_detail', 'pages/community', 'pages/album_add', 'pages/album_list', 'pages/notice_list', 'pages/notice_new', 'pages/notice_detail', 'pages/notice_detail_viewers', 'pages/user', 'pages/post_detail', 'pages/post_new', 'pages/comment_new', 'pages/comment_detail'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        list: [{
          pagePath: 'pages/first_page',
          text: '首页',
          iconPath: 'images/home.png',
          selectedIconPath: 'images/home_fill.png'
        }, {
          pagePath: 'pages/community',
          text: '社区',
          iconPath: 'images/group.png',
          selectedIconPath: 'images/group_fill.png'
        }, {
          pagePath: 'pages/user',
          text: '我的',
          iconPath: 'images/mine.png',
          selectedIconPath: 'images/mine_fill.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null, // 用户信息
      openID: null, // 用户的openID
      shareTicket: null,
      openGID: null, // 当前的群ID，如果为null表示是从下拉进入的，请使用fetchOpenGID获取
      initOK: false, // 是否初始化完成
      authorized: null, // 是否已经登录，null表示未知,
      index: 0
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onShow',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var shareTicket, authRes, info, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.globalData.index++;
                // 快速从不同的群打开不会执行onLoad
                shareTicket = options.shareTicket || this.globalData.shareTicket || null;

                if (shareTicket !== this.globalData.shareTicket) {
                  this.globalData.shareTicket = null;
                  this.globalData.openGID = null;
                  this.globalData.initOK = false;
                }

                this.globalData.shareTicket = shareTicket;
                console.log('index:', this.globalData.index);
                console.log('shareTicket:', this.globalData.shareTicket);

                _context.next = 8;
                return _api2.default.login();

              case 8:
                authRes = _context.sent;

                this.globalData.openID = authRes.data.openID;

                if (!this.globalData.shareTicket) {
                  _context.next = 18;
                  break;
                }

                _context.next = 13;
                return _wepy2.default.getShareInfo({
                  shareTicket: this.globalData.shareTicket
                });

              case 13:
                info = _context.sent;
                _context.next = 16;
                return _api2.default.authRequest({
                  url: 'updateGID',
                  data: {
                    encryptedData: info.encryptedData,
                    iv: info.iv
                  },
                  method: 'POST'
                }, false);

              case 16:
                res = _context.sent;

                this.globalData.openGID = res.data.openGID;

              case 18:

                if (options.query.openGID && options.query.openGID !== this.globalData.openGID && ['pages/first_page', 'pages/user'].indexOf(options.path) === -1) {
                  // 从其他群打开时跳转到首页
                  _wepy2.default.switchTab({
                    url: '/pages/first_page'
                  });
                }

                this.globalData.initOK = true;

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow(_x) {
        return _ref.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'sleep',
    value: function sleep(ms) {
      return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
      });
    }

    // 如果已经登录则返回true，否则返回false并跳转到user页面

  }, {
    key: 'authorizeRequired',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.globalData.authorized === null)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return _wepy2.default.getSetting();

              case 3:
                res = _context2.sent;

                this.globalData.authorized = res.authSetting['scope.userInfo'] || false;

              case 5:
                if (!this.globalData.authorized) {
                  _context2.next = 10;
                  break;
                }

                this.updateUserInfo();
                return _context2.abrupt('return', true);

              case 10:
                // await wepy.showModal({
                //   title: '错误',
                //   content: '需要登录',
                //   showCancel: false
                // });
                _wepy2.default.switchTab({
                  url: '/pages/user'
                });
                return _context2.abrupt('return', false);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function authorizeRequired() {
        return _ref2.apply(this, arguments);
      }

      return authorizeRequired;
    }()

    // 需要从群里打开

  }, {
    key: 'groupRequired',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.globalData.initOK) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.sleep(100);

              case 3:
                _context3.next = 0;
                break;

              case 5:
                if (!this.globalData.openGID) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt('return', true);

              case 9:
                _context3.next = 11;
                return _wepy2.default.showModal({
                  title: '错误',
                  content: '只有从群里打开才能使用该功能',
                  showCancel: false
                });

              case 11:
                _wepy2.default.switchTab({
                  url: '/pages/user'
                });
                return _context3.abrupt('return', false);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function groupRequired() {
        return _ref3.apply(this, arguments);
      }

      return groupRequired;
    }()
  }, {
    key: 'fetchOpenGID',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.globalData.initOK) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 3;
                return this.sleep(100);

              case 3:
                _context4.next = 0;
                break;

              case 5:
                return _context4.abrupt('return', this.globalData.openGID);

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchOpenGID() {
        return _ref4.apply(this, arguments);
      }

      return fetchOpenGID;
    }()

    // 更新用户信息

  }, {
    key: 'updateUserInfo',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _api2.default.login();

              case 2:
                _context5.next = 4;
                return _wepy2.default.getUserInfo({ withCredentials: true });

              case 4:
                data = _context5.sent;

                this.globalData.userInfo = data.userInfo;
                _context5.next = 8;
                return _api2.default.authRequest({
                  url: 'updateInfo',
                  data: {
                    rawData: data.rawData,
                    signature: data.signature
                  },
                  method: 'POST'
                }, false);

              case 8:
                this.globalData.authorized = null;

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateUserInfo() {
        return _ref5.apply(this, arguments);
      }

      return updateUserInfo;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwib3BlbklEIiwic2hhcmVUaWNrZXQiLCJvcGVuR0lEIiwiaW5pdE9LIiwiYXV0aG9yaXplZCIsImluZGV4IiwidXNlIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJhcGkiLCJsb2dpbiIsImF1dGhSZXMiLCJkYXRhIiwid2VweSIsImdldFNoYXJlSW5mbyIsImluZm8iLCJhdXRoUmVxdWVzdCIsInVybCIsImVuY3J5cHRlZERhdGEiLCJpdiIsIm1ldGhvZCIsInJlcyIsInF1ZXJ5IiwiaW5kZXhPZiIsInBhdGgiLCJzd2l0Y2hUYWIiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImdldFNldHRpbmciLCJhdXRoU2V0dGluZyIsInVwZGF0ZVVzZXJJbmZvIiwic2xlZXAiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiZ2V0VXNlckluZm8iLCJ3aXRoQ3JlZGVudGlhbHMiLCJyYXdEYXRhIiwic2lnbmF0dXJlIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQTZERSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBMURkQSxNQTBEYyxHQTFETDtBQUNQQyxhQUFPLENBQ0wsa0JBREssRUFFTCwwQkFGSyxFQUdMLG9CQUhLLEVBSUwsaUJBSkssRUFLTCxpQkFMSyxFQU1MLGtCQU5LLEVBT0wsbUJB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OztrREFDL0IsS0FBS3JDLFVBQUwsQ0FBZ0JJLE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3pCOzs7Ozs7Ozs7Ozs7dUJBRVFRLGNBQUlDLEtBQUosRTs7Ozt1QkFDV0csZUFBSzBCLFdBQUwsQ0FBaUIsRUFBRUMsaUJBQWlCLElBQW5CLEVBQWpCLEM7OztBQUFiNUIsb0I7O0FBQ0oscUJBQUtmLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCYyxLQUFLZCxRQUFoQzs7dUJBQ01XLGNBQUlPLFdBQUosQ0FDSjtBQUNFQyx1QkFBSyxZQURQO0FBRUVMLHdCQUFNO0FBQ0o2Qiw2QkFBUzdCLEtBQUs2QixPQURWO0FBRUpDLCtCQUFXOUIsS0FBSzhCO0FBRlosbUJBRlI7QUFNRXRCLDBCQUFRO0FBTlYsaUJBREksRUFTSixLQVRJLEM7OztBQVdOLHFCQUFLdkIsVUFBTCxDQUFnQk0sVUFBaEIsR0FBNkIsSUFBN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqTHlCVSxlQUFLOEIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcbmltcG9ydCBhcGkgZnJvbSAnQC91dGlscy9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvZmlyc3RfcGFnZScsXG4gICAgICAncGFnZXMvYWxidW1faW5zZXJ0X2ltYWdlJyxcbiAgICAgICdwYWdlcy9hbGJ1bV9kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL2NvbW11bml0eScsXG4gICAgICAncGFnZXMvYWxidW1fYWRkJyxcbiAgICAgICdwYWdlcy9hbGJ1bV9saXN0JyxcbiAgICAgICdwYWdlcy9ub3RpY2VfbGlzdCcsXG4gICAgICAncGFnZXMvbm90aWNlX25ldycsXG4gICAgICAncGFnZXMvbm90aWNlX2RldGFpbCcsXG4gICAgICAncGFnZXMvbm90aWNlX2RldGFpbF92aWV3ZXJzJyxcbiAgICAgICdwYWdlcy91c2VyJyxcbiAgICAgICdwYWdlcy9wb3N0X2RldGFpbCcsXG4gICAgICAncGFnZXMvcG9zdF9uZXcnLFxuICAgICAgJ3BhZ2VzL2NvbW1lbnRfbmV3JyxcbiAgICAgICdwYWdlcy9jb21tZW50X2RldGFpbCdcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2ZpcnN0X3BhZ2UnLFxuICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL2hvbWUucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2hvbWVfZmlsbC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2NvbW11bml0eScsXG4gICAgICAgICAgdGV4dDogJ+ekvuWMuicsXG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvZ3JvdXAucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2dyb3VwX2ZpbGwucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy91c2VyJyxcbiAgICAgICAgICB0ZXh0OiAn5oiR55qEJyxcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9taW5lLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9taW5lX2ZpbGwucG5nJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGwsIC8vIOeUqOaIt+S/oeaBr1xuICAgIG9wZW5JRDogbnVsbCwgLy8g55So5oi355qEb3BlbklEXG4gICAgc2hhcmVUaWNrZXQ6IG51bGwsXG4gICAgb3BlbkdJRDogbnVsbCwgLy8g5b2T5YmN55qE576kSUTvvIzlpoLmnpzkuLpudWxs6KGo56S65piv5LuO5LiL5ouJ6L+b5YWl55qE77yM6K+35L2/55SoZmV0Y2hPcGVuR0lE6I635Y+WXG4gICAgaW5pdE9LOiBmYWxzZSwgLy8g5piv5ZCm5Yid5aeL5YyW5a6M5oiQXG4gICAgYXV0aG9yaXplZDogbnVsbCwgLy8g5piv5ZCm5bey57uP55m75b2V77yMbnVsbOihqOekuuacquefpSxcbiAgICBpbmRleDogMFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gIH1cblxuICBhc3luYyBvblNob3cob3B0aW9ucykge1xuICAgIHRoaXMuZ2xvYmFsRGF0YS5pbmRleCArKztcbiAgICAvLyDlv6vpgJ/ku47kuI3lkIznmoTnvqTmiZPlvIDkuI3kvJrmiafooYxvbkxvYWRcbiAgICBsZXQgc2hhcmVUaWNrZXQgPSBvcHRpb25zLnNoYXJlVGlja2V0IHx8IHRoaXMuZ2xvYmFsRGF0YS5zaGFyZVRpY2tldCB8fCBudWxsO1xuICAgIGlmIChzaGFyZVRpY2tldCAhPT0gdGhpcy5nbG9iYWxEYXRhLnNoYXJlVGlja2V0KSB7XG4gICAgICB0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQgPSBudWxsO1xuICAgICAgdGhpcy5nbG9iYWxEYXRhLm9wZW5HSUQgPSBudWxsO1xuICAgICAgdGhpcy5nbG9iYWxEYXRhLmluaXRPSyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuZ2xvYmFsRGF0YS5zaGFyZVRpY2tldCA9IHNoYXJlVGlja2V0O1xuICAgIGNvbnNvbGUubG9nKCdpbmRleDonLCB0aGlzLmdsb2JhbERhdGEuaW5kZXgpO1xuICAgIGNvbnNvbGUubG9nKCdzaGFyZVRpY2tldDonLCB0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQpO1xuXG4gICAgbGV0IGF1dGhSZXMgPSBhd2FpdCBhcGkubG9naW4oKTtcbiAgICB0aGlzLmdsb2JhbERhdGEub3BlbklEID0gYXV0aFJlcy5kYXRhLm9wZW5JRDtcblxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQpIHtcbiAgICAgIGxldCBpbmZvID0gYXdhaXQgd2VweS5nZXRTaGFyZUluZm8oe1xuICAgICAgICBzaGFyZVRpY2tldDogdGhpcy5nbG9iYWxEYXRhLnNoYXJlVGlja2V0XG4gICAgICB9KTtcbiAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuYXV0aFJlcXVlc3QoXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6ICd1cGRhdGVHSUQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGluZm8uZW5jcnlwdGVkRGF0YSxcbiAgICAgICAgICAgIGl2OiBpbmZvLml2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB9LFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2xvYmFsRGF0YS5vcGVuR0lEID0gcmVzLmRhdGEub3BlbkdJRDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5xdWVyeS5vcGVuR0lEICYmIG9wdGlvbnMucXVlcnkub3BlbkdJRCAhPT0gdGhpcy5nbG9iYWxEYXRhLm9wZW5HSUQgJiYgWydwYWdlcy9maXJzdF9wYWdlJywgJ3BhZ2VzL3VzZXInXS5pbmRleE9mKG9wdGlvbnMucGF0aCkgPT09IC0xKSB7IC8vIOS7juWFtuS7lue+pOaJk+W8gOaXtui3s+i9rOWIsOmmlumhtVxuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6ICcvcGFnZXMvZmlyc3RfcGFnZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZ2xvYmFsRGF0YS5pbml0T0sgPSB0cnVlO1xuICB9XG5cbiAgc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDlpoLmnpzlt7Lnu4/nmbvlvZXliJnov5Tlm550cnVl77yM5ZCm5YiZ6L+U5ZueZmFsc2Xlubbot7PovazliLB1c2Vy6aG16Z2iXG4gIGFzeW5jIGF1dGhvcml6ZVJlcXVpcmVkKCkge1xuICAgIGlmICh0aGlzLmdsb2JhbERhdGEuYXV0aG9yaXplZCA9PT0gbnVsbCkge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0U2V0dGluZygpO1xuICAgICAgdGhpcy5nbG9iYWxEYXRhLmF1dGhvcml6ZWQgPSByZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10gfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS5hdXRob3JpemVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYXdhaXQgd2VweS5zaG93TW9kYWwoe1xuICAgICAgLy8gICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAvLyAgIGNvbnRlbnQ6ICfpnIDopoHnmbvlvZUnLFxuICAgICAgLy8gICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgLy8gfSk7XG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogJy9wYWdlcy91c2VyJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8g6ZyA6KaB5LuO576k6YeM5omT5byAXG4gIGFzeW5jIGdyb3VwUmVxdWlyZWQoKSB7XG4gICAgd2hpbGUgKCF0aGlzLmdsb2JhbERhdGEuaW5pdE9LKSBhd2FpdCB0aGlzLnNsZWVwKDEwMCk7XG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS5vcGVuR0lEKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAgIGNvbnRlbnQ6ICflj6rmnInku47nvqTph4zmiZPlvIDmiY3og73kvb/nlKjor6Xlip/og70nLFxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogJy9wYWdlcy91c2VyJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hPcGVuR0lEKCkge1xuICAgIHdoaWxlICghdGhpcy5nbG9iYWxEYXRhLmluaXRPSykgYXdhaXQgdGhpcy5zbGVlcCgxMDApO1xuICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEub3BlbkdJRDtcbiAgfVxuXG4gIC8vIOabtOaWsOeUqOaIt+S/oeaBr1xuICBhc3luYyB1cGRhdGVVc2VySW5mbygpIHtcbiAgICBhd2FpdCBhcGkubG9naW4oKTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4gICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZGF0YS51c2VySW5mbztcbiAgICBhd2FpdCBhcGkuYXV0aFJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogJ3VwZGF0ZUluZm8nLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcmF3RGF0YTogZGF0YS5yYXdEYXRhLFxuICAgICAgICAgIHNpZ25hdHVyZTogZGF0YS5zaWduYXR1cmVcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgdGhpcy5nbG9iYWxEYXRhLmF1dGhvcml6ZWQgPSBudWxsO1xuICB9XG59XG4iXX0=