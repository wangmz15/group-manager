'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = require('./../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _time = require('./../utils/time.js');

var _time2 = _interopRequireDefault(_time);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的',
      usingComponents: {
        'i-panel': '../iview/panel/index',
        'i-button': '../iview/button/index',
        'i-row': '../iview/row/index',
        'i-col': '../iview/col/index',
        'i-card': '../iview/card/index',
        'i-input': '../iview/input/index',
        'i-cell-group': '../iview/cell-group/index',
        'i-cell': '../iview/cell/index',
        'i-icon': '../iview/icon/index',
        'i-avatar': '../iview/avatar/index',
        'i-spin': '../iview/spin/index',
        'i-divider': '../iview/divider/index'
      }
    }, _this.components = {}, _this.methods = {
      handleActivity: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(activityID, activityContent) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = activityContent;
                  _context.next = _context.t0 === 'album' ? 3 : _context.t0 === 'notice' ? 5 : 7;
                  break;

                case 3:
                  _wepy2.default.navigateTo({
                    url: '/pages/album_detail?album_id=' + activityID
                  });
                  return _context.abrupt('break', 9);

                case 5:
                  _wepy2.default.navigateTo({
                    url: '/pages/notice_detail?notice_id=' + activityID
                  });
                  return _context.abrupt('break', 9);

                case 7:
                  _wepy2.default.navigateTo({
                    url: '/pages/post_detail?post_id=' + activityID
                  });
                  return _context.abrupt('break', 9);

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function handleActivity(_x, _x2) {
          return _ref2.apply(this, arguments);
        }

        return handleActivity;
      }(),
      handleGetUserInfo: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _wepy2.default.getUserInfo();

                case 2:
                  this.userinfo = _context2.sent.userInfo;

                  this.$parent.updateUserInfo();
                  this.$apply();

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function handleGetUserInfo() {
          return _ref3.apply(this, arguments);
        }

        return handleGetUserInfo;
      }(),
      handleShare: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '点击右上角的分享按钮，将小程序分享到群',
                    showCancel: false
                  });

                case 2:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function handleShare() {
          return _ref4.apply(this, arguments);
        }

        return handleShare;
      }(),
      handleNotice: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _wepy2.default.navigateTo({
                    url: '/pages/notice_list?from=' + this.from
                  });

                case 1:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function handleNotice() {
          return _ref5.apply(this, arguments);
        }

        return handleNotice;
      }(),
      handleAlbum: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _wepy2.default.navigateTo({
                    url: '/pages/album_list?from=' + this.from
                  });

                case 1:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function handleAlbum() {
          return _ref6.apply(this, arguments);
        }

        return handleAlbum;
      }(),
      handlePost: function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _wepy2.default.switchTab({
                    url: '/pages/community?from=' + this.from
                  });

                case 1:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function handlePost() {
          return _ref7.apply(this, arguments);
        }

        return handlePost;
      }()
    }, _this.data = {
      userinfo: null,
      openGID: null,
      imgUrl: null,
      picSign: null,
      activities: [],
      from: '1', // 主页0，个人中心1, 别人从个人主页2
      sumofrefresh: 0,
      time: null,
      currentac: [],
      fieldnew: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      /* 获取当前去年时间并且只执行一次 */
      var timestamp = Date.parse(new Date());
      timestamp = timestamp / 1000;
      console.log('当前时间戳为：' + timestamp);
      this.time = timestamp;
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var res;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.activities.length = 0;
                this.sumofrefresh = 0;
                this.fieldnew = false;
                //  ...
                _wepy2.default.showShareMenu({
                  withShareTicket: true
                });
                _context7.next = 6;
                return _wepy2.default.showLoading();

              case 6:
                _context7.next = 8;
                return _wepy2.default.getSetting();

              case 8:
                res = _context7.sent;

                if (!res.authSetting['scope.userInfo']) {
                  _context7.next = 16;
                  break;
                }

                _context7.next = 12;
                return _wepy2.default.getUserInfo();

              case 12:
                this.userinfo = _context7.sent.userInfo;

                this.$parent.updateUserInfo();
                _context7.next = 17;
                break;

              case 16:
                this.userinfo = false;

              case 17:
                this.$apply();
                _context7.next = 20;
                return _wepy2.default.hideLoading();

              case 20:
                _context7.next = 22;
                return this.$parent.fetchOpenGID();

              case 22:
                this.openGID = _context7.sent;

                this.$apply();

                this.refreshField();
                this.$apply();

              case 26:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onShow() {
        return _ref8.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      // console.log('上拉刷新');
      // console.log(this.sumofrefresh);
      this.refreshField();
      this.sumofrefresh = this.sumofrefresh + 1;
      this.$apply();
    }
  }, {
    key: 'refreshField',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var res, success;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.t0 = _api2.default;
                _context8.next = 3;
                return this.$parent.fetchOpenGID();

              case 3:
                _context8.t1 = _context8.sent;
                _context8.t2 = this.time;
                _context8.t3 = this.sumofrefresh;
                _context8.t4 = {
                  openGID: _context8.t1,
                  refreshTime: _context8.t2,
                  refreshSum: _context8.t3
                };
                _context8.t5 = {
                  url: 'myActivities',
                  method: 'POST',
                  data: _context8.t4
                };
                _context8.next = 10;
                return _context8.t0.authRequest.call(_context8.t0, _context8.t5, false);

              case 10:
                res = _context8.sent;

                // console.log(res.data.success);
                success = res.data.success;

                if (!(success === -1)) {
                  _context8.next = 16;
                  break;
                }

                // console.log('null');
                this.fieldnew = true;
                this.$apply();
                return _context8.abrupt('return');

              case 16:
                if (res.data.activities.length < 10) {
                  this.fieldnew = true;
                }
                res.data.activities.forEach(function (element) {
                  element.createdAt = _time2.default.getTime(element.createdAt);
                  element.showText = element.authorNickName + (element.activityType === 'create' ? '创建了' : '修改了');
                  switch (element.activityContent) {
                    case 'album':
                      element.showText += '相册';
                      break;
                    case 'post':
                      element.showText += '帖子';
                      break;
                    default:
                      element.showText += '公告';
                      break;
                  }
                });
                this.currentac = res.data.activities;
                // currentac 附加给 activities 更新页面
                this.activities = this.activities.concat(this.currentac);
                this.$apply();

              case 21:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function refreshField() {
        return _ref9.apply(this, arguments);
      }

      return refreshField;
    }()
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      return {
        title: '乐享个人体验',
        path: '/pages/user?openGID=' + this.$parent.globalData.openGID,
        imageUrl: '/images/logo.png'
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJoYW5kbGVBY3Rpdml0eSIsImFjdGl2aXR5SUQiLCJhY3Rpdml0eUNvbnRlbnQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUdldFVzZXJJbmZvIiwiZ2V0VXNlckluZm8iLCJ1c2VyaW5mbyIsInVzZXJJbmZvIiwiJHBhcmVudCIsInVwZGF0ZVVzZXJJbmZvIiwiJGFwcGx5IiwiaGFuZGxlU2hhcmUiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiaGFuZGxlTm90aWNlIiwiZnJvbSIsImhhbmRsZUFsYnVtIiwiaGFuZGxlUG9zdCIsInN3aXRjaFRhYiIsImRhdGEiLCJvcGVuR0lEIiwiaW1nVXJsIiwicGljU2lnbiIsImFjdGl2aXRpZXMiLCJzdW1vZnJlZnJlc2giLCJ0aW1lIiwiY3VycmVudGFjIiwiZmllbGRuZXciLCJ0aW1lc3RhbXAiLCJEYXRlIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsInNob3dMb2FkaW5nIiwiZ2V0U2V0dGluZyIsInJlcyIsImF1dGhTZXR0aW5nIiwiaGlkZUxvYWRpbmciLCJmZXRjaE9wZW5HSUQiLCJyZWZyZXNoRmllbGQiLCJhcGkiLCJyZWZyZXNoVGltZSIsInJlZnJlc2hTdW0iLCJtZXRob2QiLCJhdXRoUmVxdWVzdCIsInN1Y2Nlc3MiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNyZWF0ZWRBdCIsImdldFRpbWUiLCJzaG93VGV4dCIsImF1dGhvck5pY2tOYW1lIiwiYWN0aXZpdHlUeXBlIiwiY29uY2F0Iiwib3B0aW9ucyIsInBhdGgiLCJnbG9iYWxEYXRhIiwiaW1hZ2VVcmwiLCJwYWdlIl0sIm1hcHBpbmdz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QUFsQjtBQUNBLHFCQUFLbEIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdnQmlELE8sRUFBUztBQUN6QixhQUFPO0FBQ0w5QyxlQUFPLFFBREY7QUFFTCtDLHVDQUE2QixLQUFLcEQsT0FBTCxDQUFhcUQsVUFBYixDQUF3QnZDLE9BRmhEO0FBR0x3QyxrQkFBVTtBQUhMLE9BQVA7QUFLRDs7OztFQWxMZ0M3RCxlQUFLOEQsSTs7a0JBQW5CdkUsSyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcbmltcG9ydCB0aW1lIGZyb20gJ0AvdXRpbHMvdGltZSc7XG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnaS1wYW5lbCc6ICcuLi9pdmlldy9wYW5lbC9pbmRleCcsXG4gICAgICAnaS1idXR0b24nOiAnLi4vaXZpZXcvYnV0dG9uL2luZGV4JyxcbiAgICAgICdpLXJvdyc6ICcuLi9pdmlldy9yb3cvaW5kZXgnLFxuICAgICAgJ2ktY29sJzogJy4uL2l2aWV3L2NvbC9pbmRleCcsXG4gICAgICAnaS1jYXJkJzogJy4uL2l2aWV3L2NhcmQvaW5kZXgnLFxuICAgICAgJ2ktaW5wdXQnOiAnLi4vaXZpZXcvaW5wdXQvaW5kZXgnLFxuICAgICAgJ2ktY2VsbC1ncm91cCc6ICcuLi9pdmlldy9jZWxsLWdyb3VwL2luZGV4JyxcbiAgICAgICdpLWNlbGwnOiAnLi4vaXZpZXcvY2VsbC9pbmRleCcsXG4gICAgICAnaS1pY29uJzogJy4uL2l2aWV3L2ljb24vaW5kZXgnLFxuICAgICAgJ2ktYXZhdGFyJzogJy4uL2l2aWV3L2F2YXRhci9pbmRleCcsXG4gICAgICAnaS1zcGluJzogJy4uL2l2aWV3L3NwaW4vaW5kZXgnLFxuICAgICAgJ2ktZGl2aWRlcic6ICcuLi9pdmlldy9kaXZpZGVyL2luZGV4J1xuICAgIH1cbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgaGFuZGxlQWN0aXZpdHkoYWN0aXZpdHlJRCwgYWN0aXZpdHlDb250ZW50KSB7XG4gICAgICBzd2l0Y2ggKGFjdGl2aXR5Q29udGVudCkge1xuICAgICAgICBjYXNlICdhbGJ1bSc6XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9hbGJ1bV9kZXRhaWw/YWxidW1faWQ9JyArIGFjdGl2aXR5SURcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbm90aWNlJzpcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL25vdGljZV9kZXRhaWw/bm90aWNlX2lkPScgKyBhY3Rpdml0eUlEXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9wb3N0X2RldGFpbD9wb3N0X2lkPScgKyBhY3Rpdml0eUlEXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVHZXRVc2VySW5mbygpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdoYW5kbGVHZXRVc2VySW5mbycpO1xuICAgICAgdGhpcy51c2VyaW5mbyA9IChhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKCkpLnVzZXJJbmZvO1xuICAgICAgdGhpcy4kcGFyZW50LnVwZGF0ZVVzZXJJbmZvKCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlU2hhcmUoKSB7XG4gICAgICBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+eCueWHu+WPs+S4iuinkueahOWIhuS6q+aMiemSru+8jOWwhuWwj+eoi+W6j+WIhuS6q+WIsOe+pCcsXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU5vdGljZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9ub3RpY2VfbGlzdD9mcm9tPScgKyB0aGlzLmZyb21cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlQWxidW0oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvYWxidW1fbGlzdD9mcm9tPScgKyB0aGlzLmZyb21cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlUG9zdCgpIHtcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eT9mcm9tPScgKyB0aGlzLmZyb21cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBkYXRhID0ge1xuICAgIHVzZXJpbmZvOiBudWxsLFxuICAgIG9wZW5HSUQ6IG51bGwsXG4gICAgaW1nVXJsOiBudWxsLFxuICAgIHBpY1NpZ246IG51bGwsXG4gICAgYWN0aXZpdGllczogW10sXG4gICAgZnJvbTogJzEnLCAvLyDkuLvpobUw77yM5Liq5Lq65Lit5b+DMSwg5Yir5Lq65LuO5Liq5Lq65Li76aG1MlxuICAgIHN1bW9mcmVmcmVzaDogMCxcbiAgICB0aW1lOiBudWxsLFxuICAgIGN1cnJlbnRhYzogW10sXG4gICAgZmllbGRuZXc6IGZhbHNlXG4gIH07XG5cbiAgb25Mb2FkKCkge1xuICAgIC8qIOiOt+WPluW9k+WJjeWOu+W5tOaXtumXtOW5tuS4lOWPquaJp+ihjOS4gOasoSAqL1xuICAgIHZhciB0aW1lc3RhbXAgPSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xuICAgIHRpbWVzdGFtcCA9IHRpbWVzdGFtcCAvIDEwMDA7XG4gICAgY29uc29sZS5sb2coJ+W9k+WJjeaXtumXtOaIs+S4uu+8micgKyB0aW1lc3RhbXApO1xuICAgIHRoaXMudGltZSA9IHRpbWVzdGFtcDtcbiAgfVxuICBhc3luYyBvblNob3coKSB7XG4gICAgdGhpcy5hY3Rpdml0aWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zdW1vZnJlZnJlc2ggPSAwO1xuICAgIHRoaXMuZmllbGRuZXcgPSBmYWxzZTtcbiAgICAvLyAgLi4uXG4gICAgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuICAgIGF3YWl0IHdlcHkuc2hvd0xvYWRpbmcoKTtcbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5nZXRTZXR0aW5nKCk7XG4gICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgdGhpcy51c2VyaW5mbyA9IChhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKCkpLnVzZXJJbmZvO1xuICAgICAgdGhpcy4kcGFyZW50LnVwZGF0ZVVzZXJJbmZvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlcmluZm8gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgICBhd2FpdCB3ZXB5LmhpZGVMb2FkaW5nKCk7XG5cbiAgICB0aGlzLm9wZW5HSUQgPSBhd2FpdCB0aGlzLiRwYXJlbnQuZmV0Y2hPcGVuR0lEKCk7XG4gICAgdGhpcy4kYXBwbHkoKTtcblxuICAgIHRoaXMucmVmcmVzaEZpZWxkKCk7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxuXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ+S4iuaLieWIt+aWsCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3Vtb2ZyZWZyZXNoKTtcbiAgICB0aGlzLnJlZnJlc2hGaWVsZCgpO1xuICAgIHRoaXMuc3Vtb2ZyZWZyZXNoID0gdGhpcy5zdW1vZnJlZnJlc2ggKyAxO1xuICAgIHRoaXMuJGFwcGx5KCk7XG4gIH1cblxuICBhc3luYyByZWZyZXNoRmllbGQoKSB7XG4gICAgLy8g6I635Y+W5paw55qEYWN0aXZpdHnnu5ljdXJyZWV0YWNcbiAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmF1dGhSZXF1ZXN0KFxuICAgICAge1xuICAgICAgICB1cmw6ICdteUFjdGl2aXRpZXMnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKSxcbiAgICAgICAgICByZWZyZXNoVGltZTogdGhpcy50aW1lLFxuICAgICAgICAgIHJlZnJlc2hTdW06IHRoaXMuc3Vtb2ZyZWZyZXNoXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEuc3VjY2Vzcyk7XG4gICAgbGV0IHN1Y2Nlc3MgPSByZXMuZGF0YS5zdWNjZXNzO1xuICAgIGlmIChzdWNjZXNzID09PSAtMSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ251bGwnKTtcbiAgICAgIHRoaXMuZmllbGRuZXcgPSB0cnVlO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlcy5kYXRhLmFjdGl2aXRpZXMubGVuZ3RoIDwgMTApIHtcbiAgICAgIHRoaXMuZmllbGRuZXcgPSB0cnVlO1xuICAgIH1cbiAgICByZXMuZGF0YS5hY3Rpdml0aWVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmNyZWF0ZWRBdCA9IHRpbWUuZ2V0VGltZShlbGVtZW50LmNyZWF0ZWRBdCk7XG4gICAgICBlbGVtZW50LnNob3dUZXh0ID1cbiAgICAgICAgZWxlbWVudC5hdXRob3JOaWNrTmFtZSArXG4gICAgICAgIChlbGVtZW50LmFjdGl2aXR5VHlwZSA9PT0gJ2NyZWF0ZScgPyAn5Yib5bu65LqGJyA6ICfkv67mlLnkuoYnKTtcbiAgICAgIHN3aXRjaCAoZWxlbWVudC5hY3Rpdml0eUNvbnRlbnQpIHtcbiAgICAgICAgY2FzZSAnYWxidW0nOlxuICAgICAgICAgIGVsZW1lbnQuc2hvd1RleHQgKz0gJ+ebuOWGjCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICAgIGVsZW1lbnQuc2hvd1RleHQgKz0gJ+W4luWtkCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZWxlbWVudC5zaG93VGV4dCArPSAn5YWs5ZGKJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmN1cnJlbnRhYyA9IHJlcy5kYXRhLmFjdGl2aXRpZXM7XG4gICAgLy8gY3VycmVudGFjIOmZhOWKoOe7mSBhY3Rpdml0aWVzIOabtOaWsOmhtemdolxuICAgIHRoaXMuYWN0aXZpdGllcyA9IHRoaXMuYWN0aXZpdGllcy5jb25jYXQodGhpcy5jdXJyZW50YWMpO1xuICAgIHRoaXMuJGFwcGx5KCk7XG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5LmQ5Lqr5Liq5Lq65L2T6aqMJyxcbiAgICAgIHBhdGg6IGAvcGFnZXMvdXNlcj9vcGVuR0lEPSR7dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbkdJRH1gLFxuICAgICAgaW1hZ2VVcmw6ICcvaW1hZ2VzL2xvZ28ucG5nJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==