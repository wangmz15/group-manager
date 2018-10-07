'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _image = require('./../utils/image.js');

var _image2 = _interopRequireDefault(_image);

var _api = require('./../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _time = require('./../utils/time.js');

var _time2 = _interopRequireDefault(_time);

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
      navigationBarTitleText: '首页',
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
        'i-tab-bar': '../iview/tab-bar/index',
        'i-tab-bar-item': '../iview/tab-bar-item/index',
        'i-notice-bar': '../iview/notice-bar/index',
        'i-toast': '../iview/toast/index',
        'i-spin': '../iview/spin/index',
        'i-divider': '../iview/divider/index'
      },
      enablePullDownRefresh: true
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
      handleNotice: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _wepy2.default.navigateTo({
                    url: '/pages/notice_list'
                  });

                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function handleNotice() {
          return _ref3.apply(this, arguments);
        }

        return handleNotice;
      }(),
      handleWeekly: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _wepy2.default.switchTab({
                    url: '/pages/community?from=' + '0'
                  });

                case 1:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function handleWeekly() {
          return _ref4.apply(this, arguments);
        }

        return handleWeekly;
      }(),
      handleAlbum: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _wepy2.default.navigateTo({
                    url: '/pages/album_list'
                  });

                case 1:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function handleAlbum() {
          return _ref5.apply(this, arguments);
        }

        return handleAlbum;
      }()
    }, _this.data = {
      picSign: null,
      notices: [],
      albums: [],
      posts: [],
      activities: [],
      sumofrefresh: 0,
      time: null,
      currentac: [],
      fieldnew: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      return {
        title: '乐享个人体验',
        path: '/pages/first_page',
        imageUrl: '/images/logo.png'
      };
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.$parent.authorizeRequired();

              case 2:
                _context5.t0 = !_context5.sent;

                if (_context5.t0) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 6;
                return this.$parent.groupRequired();

              case 6:
                _context5.t0 = !_context5.sent;

              case 7:
                if (!_context5.t0) {
                  _context5.next = 9;
                  break;
                }

                return _context5.abrupt('return');

              case 9:
                _wepy2.default.showShareMenu({
                  withShareTicket: true
                });
                this.refreshHomepage();
                this.refreshField();

              case 12:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onShow() {
        return _ref6.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.stopPullDownRefresh();
      this.refreshHomepage();
      this.refreshField();
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('上拉刷新');
      console.log(this.sumofrefresh);
      this.refreshField();
      this.sumofrefresh = this.sumofrefresh + 1;
      this.$apply();
    }
  }, {
    key: 'refreshField',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var res, success;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = _api2.default;
                _context6.next = 3;
                return this.$parent.fetchOpenGID();

              case 3:
                _context6.t1 = _context6.sent;
                _context6.t2 = this.time;
                _context6.t3 = this.sumofrefresh;
                _context6.t4 = {
                  openGID: _context6.t1,
                  refreshTime: _context6.t2,
                  refreshSum: _context6.t3
                };
                _context6.t5 = {
                  url: 'allActivities',
                  method: 'POST',
                  data: _context6.t4
                };
                _context6.next = 10;
                return _context6.t0.authRequest.call(_context6.t0, _context6.t5, false);

              case 10:
                res = _context6.sent;

                console.log(res.data.success);
                success = res.data.success;

                if (!(success === -1)) {
                  _context6.next = 18;
                  break;
                }

                console.log('null');
                this.fieldnew = true;
                this.$apply();
                return _context6.abrupt('return');

              case 18:
                if (res.data.activities.length < 10) this.fieldnew = true;
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
                // console.log('当前');
                // console.log(this.currentac);
                // currentac 附加给 activities 更新页面
                this.activities = this.activities.concat(this.currentac);
                this.$apply();

              case 23:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function refreshField() {
        return _ref7.apply(this, arguments);
      }

      return refreshField;
    }()
  }, {
    key: 'refreshHomepage',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var timestamp, noticeRes, albumRes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, album, postsRes, activities;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _wepy2.default.showNavigationBarLoading();
                /* 获取当前去年时间 */
                timestamp = Date.parse(new Date());

                timestamp = timestamp / 1000;
                console.log('当前时间戳为：' + timestamp);
                this.sumofrefresh = 0;
                this.fieldnew = false;
                this.time = timestamp;
                //  mew
                _context7.t0 = _api2.default;
                _context7.next = 10;
                return this.$parent.fetchOpenGID();

              case 10:
                _context7.t1 = _context7.sent;
                _context7.t2 = {
                  openGID: _context7.t1
                };
                _context7.t3 = {
                  url: 'listNotice',
                  method: 'POST',
                  data: _context7.t2
                };
                _context7.next = 15;
                return _context7.t0.authRequest.call(_context7.t0, _context7.t3, false);

              case 15:
                noticeRes = _context7.sent;

                this.notices = noticeRes.data.notices;
                // console.log(this.notices);
                this.$apply();

                _context7.t4 = _api2.default;
                _context7.next = 21;
                return this.$parent.fetchOpenGID();

              case 21:
                _context7.t5 = _context7.sent;
                _context7.t6 = {
                  openGID: _context7.t5
                };
                _context7.t7 = {
                  url: 'listAlbum',
                  method: 'POST',
                  data: _context7.t6
                };
                _context7.next = 26;
                return _context7.t4.authRequest.call(_context7.t4, _context7.t7, false);

              case 26:
                albumRes = _context7.sent;

                this.albums = albumRes.data.albums.filter(function (x) {
                  return x.images.length > 0;
                });
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context7.prev = 31;
                _iterator = this.albums[Symbol.iterator]();

              case 33:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context7.next = 41;
                  break;
                }

                album = _step.value;
                _context7.next = 37;
                return _image2.default.getUrl(album.images[0].key);

              case 37:
                album.cover = _context7.sent;

              case 38:
                _iteratorNormalCompletion = true;
                _context7.next = 33;
                break;

              case 41:
                _context7.next = 47;
                break;

              case 43:
                _context7.prev = 43;
                _context7.t8 = _context7['catch'](31);
                _didIteratorError = true;
                _iteratorError = _context7.t8;

              case 47:
                _context7.prev = 47;
                _context7.prev = 48;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 50:
                _context7.prev = 50;

                if (!_didIteratorError) {
                  _context7.next = 53;
                  break;
                }

                throw _iteratorError;

              case 53:
                return _context7.finish(50);

              case 54:
                return _context7.finish(47);

              case 55:
                this.albums = this.albums.slice(0, 3);
                this.$apply();

                _context7.t9 = _api2.default;
                _context7.next = 60;
                return this.$parent.fetchOpenGID();

              case 60:
                _context7.t10 = _context7.sent;
                _context7.t11 = {
                  openGID: _context7.t10
                };
                _context7.t12 = {
                  url: 'fetchPostList',
                  method: 'POST',
                  data: _context7.t11
                };
                _context7.next = 65;
                return _context7.t9.authRequest.call(_context7.t9, _context7.t12, false);

              case 65:
                postsRes = _context7.sent;

                this.posts = postsRes.data.postList;

                _context7.t13 = _api2.default;
                _context7.next = 70;
                return this.$parent.fetchOpenGID();

              case 70:
                _context7.t14 = _context7.sent;
                _context7.t15 = this.time;
                _context7.t16 = this.sumofrefresh;
                _context7.t17 = {
                  openGID: _context7.t14,
                  refreshTime: _context7.t15,
                  refreshSum: _context7.t16
                };
                _context7.t18 = {
                  url: 'allActivities',
                  method: 'POST',
                  data: _context7.t17
                };
                _context7.next = 77;
                return _context7.t13.authRequest.call(_context7.t13, _context7.t18, false);

              case 77:
                activities = _context7.sent;

                // console.log(activities);
                activities.data.activities.forEach(function (element) {
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
                this.activities = activities.data.activities;
                // console.log(this.activities);
                this.$apply();
                _wepy2.default.hideNavigationBarLoading();

              case 82:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[31, 43, 47, 55], [48,, 50, 54]]);
      }));

      function refreshHomepage() {
        return _ref8.apply(this, arguments);
      }

      return refreshHomepage;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/first_page'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0X3BhZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJoYW5kbGVBY3Rpdml0eSIsImFjdGl2aXR5SUQiLCJhY3Rpdml0eUNvbnRlbnQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZU5vdGljZSIsImhhbmRsZVdlZWtseSIsInN3aXRjaFRhYiIsImhhbmRsZUFsYnVtIiwiZGF0YSIsInBpY1NpZ24iLCJub3RpY2VzIiwiYWxidW1zIiwicG9zdHMiLCJhY3Rpdml0aWVzIiwic3Vtb2ZyZWZyZXNoIiwidGltZSIsImN1cnJlbnRhYyIsImZpZWxkbmV3Iiwib3B0aW9ucyIsInRpdGxlIiwicGF0aCIsImltYWdlVXJsIiwiJHBhcmVudCIsImF1dGhvcml6ZVJlcXVpcmVkIiwiZ3JvdXBSZXF1aXJlZCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJyZWZyZXNoSG9tZXBhZ2UiLCJyZWZyZXNoRmllbGQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsImFwaSIsImZldGNoT3BlbkdJRCIsIm9wZW5HSUQiLCJyZWZyZXNoVGltZSIsInJlZnJlc2hTdW0iLCJtZXRob2QiLCJhdXRoUmVxdWVzdCIsInJlcyIsInN1Y2Nlc3MiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNyZWF0ZWRBdCIsImdldFRpbWUiLCJzaG93VGV4dCIsImF1dGhvck5pY2tOYW1lIiwiYWN0aXZpdHlUeXBlIiwiY29uY2F0Iiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwidGltZXN0YW1wIiwiRGF0ZSIsInBhcnNlIiwibm90aWNlUmVzIiwiYWxidW1SZXMiLCJmaWx0ZXIiLCJ4IiwiaW1hZ2VzIiwiYWxidW0iLCJpbWFnZSIsImdldFVybCIsImtleSIsImNvdmVyIiwic2xpY2UiLCJwb3N0c1JlcyIsInBvc3RMaXN0IiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsdUJBQWlCO0FBQ2YsbUJBQVcsc0JBREk7QUFFZixvQkFBWSx1QkFGRztBQUdmLGlCQUFTLG9CQUhNO0FBSWYsaUJBQVMsb0JBSk07QUFLZixrQkFBVSxxQkFMSztBQU1mLG1CQUFXLHNCQU5JO0FBT2Ysd0JBQWdCLDJCQVBEO0FBUWYsa0JBQVUscUJBUks7QUFTZixrQkFBVSxxQkFUSztBQVVmLG9CQUFZLHVCQVZHO0FBV2YscUJBQWEsd0JBWEU7QUFZZiwwQkFBa0IsNkJBWkg7QUFhZix3QkFBZ0IsMkJBYkQ7QUFjZixtQkFBVyxzQkFkSTtBQWVmLGtCQUFVLHFCQWZLO0FBZ0JmLHFCQUFhO0FBaEJFLE9BRlY7QUFvQlBDLDZCQUF1QjtBQXBCaEIsSyxRQXNCVEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVO0FBQ0ZDLG9CQURFO0FBQUEsNkZBQ2FDLFVBRGIsRUFDeUJDLGVBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FFRUEsZUFGRjtBQUFBLGtEQUdDLE9BSEQsdUJBUUMsUUFSRDtBQUFBOztBQUFBO0FBSUZDLGlDQUFLQyxVQUFMLENBQWdCO0FBQ2RDLHlCQUFLLGtDQUFrQ0o7QUFEekIsbUJBQWhCO0FBSkU7O0FBQUE7QUFTRkUsaUNBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMseUJBQUssb0NBQW9DSjtBQUQzQixtQkFBaEI7QUFURTs7QUFBQTtBQWNGRSxpQ0FBS0MsVUFBTCxDQUFnQjtBQUNkQyx5QkFBSyxnQ0FBZ0NKO0FBRHZCLG1CQUFoQjtBQWRFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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bUMsbUJBQVc7QUFDNUNDLDBCQUFRQyxTQUFSLEdBQW9COUIsZUFBSytCLE9BQUwsQ0FBYUYsUUFBUUMsU0FBckIsQ0FBcEI7QUFDQUQsMEJBQVFHLFFBQVIsR0FDRUgsUUFBUUksY0FBUixJQUNDSixRQUFRSyxZQUFSLEtBQXlCLFFBQXpCLEdBQW9DLEtBQXBDLEdBQTRDLEtBRDdDLENBREY7QUFHQSwwQkFBUUwsUUFBUTVDLGVBQWhCO0FBQ0UseUJBQUssT0FBTDtBQUNFNEMsOEJBQVFHLFFBQVIsSUFBb0IsSUFBcEI7QUFDQTtBQUNGLHlCQUFLLE1BQUw7QUFDRUgsOEJBQVFHLFFBQVIsSUFBb0IsSUFBcEI7QUFDQTtBQUNGO0FBQ0VILDhCQUFRRyxRQUFSLElBQW9CLElBQXBCO0FBQ0E7QUFUSjtBQVdELGlCQWhCRDtBQWlCQSxxQkFBS2xDLFVBQUwsR0FBa0JBLFdBQVdMLElBQVgsQ0FBZ0JLLFVBQWxDO0FBQ0E7QUFDQSxxQkFBS21CLE1BQUw7QUFDQS9CLCtCQUFLbUUsd0JBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyUCtCbkUsZUFBS29FLEk7O2tCQUFuQjlFLEsiLCJmaWxlIjoiZmlyc3RfcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgaW1hZ2UgZnJvbSAnQC91dGlscy9pbWFnZSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcbmltcG9ydCB0aW1lIGZyb20gJ0AvdXRpbHMvdGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ2ktcGFuZWwnOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgJ2ktYnV0dG9uJzogJy4uL2l2aWV3L2J1dHRvbi9pbmRleCcsXG4gICAgICAnaS1yb3cnOiAnLi4vaXZpZXcvcm93L2luZGV4JyxcbiAgICAgICdpLWNvbCc6ICcuLi9pdmlldy9jb2wvaW5kZXgnLFxuICAgICAgJ2ktY2FyZCc6ICcuLi9pdmlldy9jYXJkL2luZGV4JyxcbiAgICAgICdpLWlucHV0JzogJy4uL2l2aWV3L2lucHV0L2luZGV4JyxcbiAgICAgICdpLWNlbGwtZ3JvdXAnOiAnLi4vaXZpZXcvY2VsbC1ncm91cC9pbmRleCcsXG4gICAgICAnaS1jZWxsJzogJy4uL2l2aWV3L2NlbGwvaW5kZXgnLFxuICAgICAgJ2ktaWNvbic6ICcuLi9pdmlldy9pY29uL2luZGV4JyxcbiAgICAgICdpLWF2YXRhcic6ICcuLi9pdmlldy9hdmF0YXIvaW5kZXgnLFxuICAgICAgJ2ktdGFiLWJhcic6ICcuLi9pdmlldy90YWItYmFyL2luZGV4JyxcbiAgICAgICdpLXRhYi1iYXItaXRlbSc6ICcuLi9pdmlldy90YWItYmFyLWl0ZW0vaW5kZXgnLFxuICAgICAgJ2ktbm90aWNlLWJhcic6ICcuLi9pdmlldy9ub3RpY2UtYmFyL2luZGV4JyxcbiAgICAgICdpLXRvYXN0JzogJy4uL2l2aWV3L3RvYXN0L2luZGV4JyxcbiAgICAgICdpLXNwaW4nOiAnLi4vaXZpZXcvc3Bpbi9pbmRleCcsXG4gICAgICAnaS1kaXZpZGVyJzogJy4uL2l2aWV3L2RpdmlkZXIvaW5kZXgnXG4gICAgfSxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgaGFuZGxlQWN0aXZpdHkoYWN0aXZpdHlJRCwgYWN0aXZpdHlDb250ZW50KSB7XG4gICAgICBzd2l0Y2ggKGFjdGl2aXR5Q29udGVudCkge1xuICAgICAgICBjYXNlICdhbGJ1bSc6XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9hbGJ1bV9kZXRhaWw/YWxidW1faWQ9JyArIGFjdGl2aXR5SURcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbm90aWNlJzpcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL25vdGljZV9kZXRhaWw/bm90aWNlX2lkPScgKyBhY3Rpdml0eUlEXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9wb3N0X2RldGFpbD9wb3N0X2lkPScgKyBhY3Rpdml0eUlEXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVOb3RpY2UoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbm90aWNlX2xpc3QnXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZVdlZWtseSgpIHtcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW11bml0eT9mcm9tPScgKyAnMCdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlQWxidW0oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvYWxidW1fbGlzdCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBkYXRhID0ge1xuICAgIHBpY1NpZ246IG51bGwsXG4gICAgbm90aWNlczogW10sXG4gICAgYWxidW1zOiBbXSxcbiAgICBwb3N0czogW10sXG4gICAgYWN0aXZpdGllczogW10sXG4gICAgc3Vtb2ZyZWZyZXNoOiAwLFxuICAgIHRpbWU6IG51bGwsXG4gICAgY3VycmVudGFjOiBbXSxcbiAgICBmaWVsZG5ldzogZmFsc2VcbiAgfTtcblxuICBvblNoYXJlQXBwTWVzc2FnZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5LmQ5Lqr5Liq5Lq65L2T6aqMJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvZmlyc3RfcGFnZScsXG4gICAgICBpbWFnZVVybDogJy9pbWFnZXMvbG9nby5wbmcnXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBpZiAoXG4gICAgICAhYXdhaXQgdGhpcy4kcGFyZW50LmF1dGhvcml6ZVJlcXVpcmVkKCkgfHxcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuZ3JvdXBSZXF1aXJlZCgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdlcHkuc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnJlZnJlc2hIb21lcGFnZSgpO1xuICAgIHRoaXMucmVmcmVzaEZpZWxkKCk7XG4gIH1cblxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKTtcbiAgICB0aGlzLnJlZnJlc2hIb21lcGFnZSgpO1xuICAgIHRoaXMucmVmcmVzaEZpZWxkKCk7XG4gIH1cblxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnNvbGUubG9nKCfkuIrmi4nliLfmlrAnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN1bW9mcmVmcmVzaCk7XG4gICAgdGhpcy5yZWZyZXNoRmllbGQoKTtcbiAgICB0aGlzLnN1bW9mcmVmcmVzaCA9IHRoaXMuc3Vtb2ZyZWZyZXNoICsgMTtcbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaEZpZWxkKCkge1xuICAgIC8vIOiOt+WPluaWsOeahGFjdGl2aXR557uZY3VycmVldGFjXG4gICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5hdXRoUmVxdWVzdChcbiAgICAgIHtcbiAgICAgICAgdXJsOiAnYWxsQWN0aXZpdGllcycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxuICAgICAgICAgIHJlZnJlc2hUaW1lOiB0aGlzLnRpbWUsXG4gICAgICAgICAgcmVmcmVzaFN1bTogdGhpcy5zdW1vZnJlZnJlc2hcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5zdWNjZXNzKTtcbiAgICBsZXQgc3VjY2VzcyA9IHJlcy5kYXRhLnN1Y2Nlc3M7XG4gICAgaWYgKHN1Y2Nlc3MgPT09IC0xKSB7XG4gICAgICBjb25zb2xlLmxvZygnbnVsbCcpO1xuICAgICAgdGhpcy5maWVsZG5ldyA9IHRydWU7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVzLmRhdGEuYWN0aXZpdGllcy5sZW5ndGggPCAxMClcbiAgICAgIHRoaXMuZmllbGRuZXcgPSB0cnVlO1xuICAgIHJlcy5kYXRhLmFjdGl2aXRpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuY3JlYXRlZEF0ID0gdGltZS5nZXRUaW1lKGVsZW1lbnQuY3JlYXRlZEF0KTtcbiAgICAgIGVsZW1lbnQuc2hvd1RleHQgPVxuICAgICAgICBlbGVtZW50LmF1dGhvck5pY2tOYW1lICtcbiAgICAgICAgKGVsZW1lbnQuYWN0aXZpdHlUeXBlID09PSAnY3JlYXRlJyA/ICfliJvlu7rkuoYnIDogJ+S/ruaUueS6hicpO1xuICAgICAgc3dpdGNoIChlbGVtZW50LmFjdGl2aXR5Q29udGVudCkge1xuICAgICAgICBjYXNlICdhbGJ1bSc6XG4gICAgICAgICAgZWxlbWVudC5zaG93VGV4dCArPSAn55u45YaMJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgICAgZWxlbWVudC5zaG93VGV4dCArPSAn5biW5a2QJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBlbGVtZW50LnNob3dUZXh0ICs9ICflhazlkYonO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuY3VycmVudGFjID0gcmVzLmRhdGEuYWN0aXZpdGllcztcbiAgICAvLyBjb25zb2xlLmxvZygn5b2T5YmNJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyZW50YWMpO1xuICAgIC8vIGN1cnJlbnRhYyDpmYTliqDnu5kgYWN0aXZpdGllcyDmm7TmlrDpobXpnaJcbiAgICB0aGlzLmFjdGl2aXRpZXMgPSB0aGlzLmFjdGl2aXRpZXMuY29uY2F0KHRoaXMuY3VycmVudGFjKTtcbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaEhvbWVwYWdlKCkge1xuICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7XG4gICAgLyog6I635Y+W5b2T5YmN5Y675bm05pe26Ze0ICovXG4gICAgdmFyIHRpbWVzdGFtcCA9IERhdGUucGFyc2UobmV3IERhdGUoKSk7XG4gICAgdGltZXN0YW1wID0gdGltZXN0YW1wIC8gMTAwMDtcbiAgICBjb25zb2xlLmxvZygn5b2T5YmN5pe26Ze05oiz5Li677yaJyArIHRpbWVzdGFtcCk7XG4gICAgdGhpcy5zdW1vZnJlZnJlc2ggPSAwO1xuICAgIHRoaXMuZmllbGRuZXcgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWUgPSB0aW1lc3RhbXA7XG4gICAgLy8gIG1ld1xuICAgIGxldCBub3RpY2VSZXMgPSBhd2FpdCBhcGkuYXV0aFJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogJ2xpc3ROb3RpY2UnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHRoaXMubm90aWNlcyA9IG5vdGljZVJlcy5kYXRhLm5vdGljZXM7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5ub3RpY2VzKTtcbiAgICB0aGlzLiRhcHBseSgpO1xuXG4gICAgbGV0IGFsYnVtUmVzID0gYXdhaXQgYXBpLmF1dGhSZXF1ZXN0KFxuICAgICAge1xuICAgICAgICB1cmw6ICdsaXN0QWxidW0nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHRoaXMuYWxidW1zID0gYWxidW1SZXMuZGF0YS5hbGJ1bXMuZmlsdGVyKHggPT4geC5pbWFnZXMubGVuZ3RoID4gMCk7XG4gICAgZm9yIChsZXQgYWxidW0gb2YgdGhpcy5hbGJ1bXMpIHtcbiAgICAgIGFsYnVtLmNvdmVyID0gYXdhaXQgaW1hZ2UuZ2V0VXJsKGFsYnVtLmltYWdlc1swXS5rZXkpO1xuICAgIH1cbiAgICB0aGlzLmFsYnVtcyA9IHRoaXMuYWxidW1zLnNsaWNlKDAsIDMpO1xuICAgIHRoaXMuJGFwcGx5KCk7XG5cbiAgICBsZXQgcG9zdHNSZXMgPSBhd2FpdCBhcGkuYXV0aFJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogJ2ZldGNoUG9zdExpc3QnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHRoaXMucG9zdHMgPSBwb3N0c1Jlcy5kYXRhLnBvc3RMaXN0O1xuXG4gICAgbGV0IGFjdGl2aXRpZXMgPSBhd2FpdCBhcGkuYXV0aFJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogJ2FsbEFjdGl2aXRpZXMnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKSxcbiAgICAgICAgICByZWZyZXNoVGltZTogdGhpcy50aW1lLFxuICAgICAgICAgIHJlZnJlc2hTdW06IHRoaXMuc3Vtb2ZyZWZyZXNoXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coYWN0aXZpdGllcyk7XG4gICAgYWN0aXZpdGllcy5kYXRhLmFjdGl2aXRpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuY3JlYXRlZEF0ID0gdGltZS5nZXRUaW1lKGVsZW1lbnQuY3JlYXRlZEF0KTtcbiAgICAgIGVsZW1lbnQuc2hvd1RleHQgPVxuICAgICAgICBlbGVtZW50LmF1dGhvck5pY2tOYW1lICtcbiAgICAgICAgKGVsZW1lbnQuYWN0aXZpdHlUeXBlID09PSAnY3JlYXRlJyA/ICfliJvlu7rkuoYnIDogJ+S/ruaUueS6hicpO1xuICAgICAgc3dpdGNoIChlbGVtZW50LmFjdGl2aXR5Q29udGVudCkge1xuICAgICAgICBjYXNlICdhbGJ1bSc6XG4gICAgICAgICAgZWxlbWVudC5zaG93VGV4dCArPSAn55u45YaMJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgICAgZWxlbWVudC5zaG93VGV4dCArPSAn5biW5a2QJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBlbGVtZW50LnNob3dUZXh0ICs9ICflhazlkYonO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWN0aXZpdGllcyA9IGFjdGl2aXRpZXMuZGF0YS5hY3Rpdml0aWVzO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWN0aXZpdGllcyk7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICB9XG59XG4iXX0=