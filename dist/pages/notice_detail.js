'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _refresh_notice = require('./../mixins/refresh_notice.js');

var _refresh_notice2 = _interopRequireDefault(_refresh_notice);

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
      navigationBarTitleText: '加载中...',
      usingComponents: {
        'i-panel': '../iview/panel/index',
        'i-button': '../iview/button/index',
        'i-row': '../iview/row/index',
        'i-col': '../iview/col/index',
        'i-card': '../iview/card/index',
        'i-input': '../iview/input/index',
        'i-cell-group': '../iview/cell-group/index',
        'i-cell': '../iview/cell/index',
        'i-avatar': '../iview/avatar/index'
      },
      enablePullDownRefresh: true
    }, _this.components = {}, _this.methods = {
      handleDelete: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var info;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.showModal({
                    title: '确认删除',
                    content: '确认删除公告？'
                  });

                case 2:
                  info = _context.sent;

                  if (!info.cancel) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt('return');

                case 5:
                  _context.t0 = _api2.default;
                  _context.t1 = this.noticeID;
                  _context.next = 9;
                  return this.$parent.fetchOpenGID();

                case 9:
                  _context.t2 = _context.sent;
                  _context.t3 = {
                    noticeID: _context.t1,
                    openGID: _context.t2
                  };
                  _context.t4 = {
                    url: 'deleteNotice',
                    method: 'POST',
                    data: _context.t3
                  };
                  _context.next = 14;
                  return _context.t0.authRequest.call(_context.t0, _context.t4);

                case 14:
                  // console.log(res);
                  _wepy2.default.navigateBack();

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function handleDelete() {
          return _ref2.apply(this, arguments);
        }

        return handleDelete;
      }(),
      handleClickViewers: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // console.log('handleClickViewers');
                  _wepy2.default.navigateTo({
                    url: '/pages/notice_detail_viewers?notice_id=' + this.noticeID
                  });

                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function handleClickViewers() {
          return _ref3.apply(this, arguments);
        }

        return handleClickViewers;
      }()
    }, _this.computed = {
      moreViewers: function moreViewers() {
        return this.notice && this.notice.viewers.length > 6;
      },
      frontViewers: function frontViewers() {
        return this.notice ? this.notice.viewers.slice(0, 6) : [];
      },
      deleteable: function deleteable() {
        return this.notice ? this.notice.authorOpenID === this.$parent.globalData.openID : false;
      },
      noticeContent: function noticeContent() {
        return this.notice ? this.notice.noticeContent : '';
      }
    }, _this.mixins = [_refresh_notice2.default], _this.data = {
      noticeID: null,
      notice: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      var title = '群公告';
      var path = '/pages/notice_detail?openGID=' + this.$parent.globalData.openGID + '&notice_id=' + this.noticeID;
      if (this.notice && this.notice.noticeTitle) {
        title = '我分享了一个群公告：' + this.notice.noticeTitle;
      }

      return {
        title: title,
        path: path,
        imageUrl: '/images/logo.png'
      };
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      // console.log('/pages/notice_detail onLoad:');
      // console.log(options);
      this.noticeID = options.notice_id;
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$parent.authorizeRequired();

              case 2:
                _context3.t0 = !_context3.sent;

                if (_context3.t0) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return this.$parent.groupRequired();

              case 6:
                _context3.t0 = !_context3.sent;

              case 7:
                if (!_context3.t0) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt('return');

              case 9:
                _wepy2.default.showShareMenu({
                  withShareTicket: true
                });

                if (this.noticeID) {
                  _context3.next = 16;
                  break;
                }

                _context3.next = 13;
                return _wepy2.default.showModal({
                  title: '未知错误',
                  content: '发送未知错误',
                  showCancel: false
                });

              case 13:
                _wepy2.default.navigateBack();
                _context3.next = 18;
                break;

              case 16:
                _context3.next = 18;
                return this.refreshNotice();

              case 18:
                this.$apply();

              case 19:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.stopPullDownRefresh();
      this.refreshNotice();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/notice_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZV9kZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJoYW5kbGVEZWxldGUiLCJ3ZXB5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiaW5mbyIsImNhbmNlbCIsImFwaSIsIm5vdGljZUlEIiwiJHBhcmVudCIsImZldGNoT3BlbkdJRCIsIm9wZW5HSUQiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiYXV0aFJlcXVlc3QiLCJuYXZpZ2F0ZUJhY2siLCJoYW5kbGVDbGlja1ZpZXdlcnMiLCJuYXZpZ2F0ZVRvIiwiY29tcHV0ZWQiLCJtb3JlVmlld2VycyIsIm5vdGljZSIsInZpZXdlcnMiLCJsZW5ndGgiLCJmcm9udFZpZXdlcnMiLCJzbGljZSIsImRlbGV0ZWFibGUiLCJhdXRob3JPcGVuSUQiLCJnbG9iYWxEYXRhIiwib3BlbklEIiwibm90aWNlQ29udGVudCIsIm1peGlucyIsInJlZnJlc2hOb3RpY2VNaXhpbiIsIm9wdGlvbnMiLCJwYXRoIiwibm90aWNlVGl0bGUiLCJpbWFnZVVybCIsIm5vdGljZV9pZCIsImF1dGhvcml6ZVJlcXVpcmVkIiwiZ3JvdXBSZXF1aXJlZCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJzaG93Q2FuY2VsIiwicmVmcmVzaE5vdGljZSIsIiRhcHBseSIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsUUFEakI7QUFFUEMsdUJBQWlCO0FBQ2YsbUJBQVcsc0JBREk7QUFFZixvQkFBWSx1QkFGRztBQUdmLGlCQUFTLG9CQUhNO0FBSWYsaUJBQVMsb0JBSk07QUFLZixrQkFBVSxxQkFMSztBQU1mLG1CQUFXLHNCQU5JO0FBT2Ysd0JBQWdCLDJCQVBEO0FBUWYsa0JBQVUscUJBUks7QUFTZixvQkFBWTtBQVRHLE9BRlY7QUFhUEMsNkJBQXVCO0FBYmhCLEssUUFnQlRDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVTtBQUNGQyxrQkFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRVdDLGVBQUtDLFNBQUwsQ0FBZTtBQUM5QkMsMkJBQU8sTUFEdUI7QUFFOUJDLDZCQUFTO0FBRnFCLG1CQUFmLENBRlg7O0FBQUE7QUFFRkMsc0JBRkU7O0FBQUEsdUJBT0ZBLEtBQUtDLE1BUEg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQSxnQ0FRQUMsYUFSQTtBQUFBLGdDQVlRLEtBQUtDLFFBWmI7QUFBQTtBQUFBLHlCQWFhLEtBQUtDLE9BQUwsQ0FBYUMsWUFBYixFQWJiOztBQUFBO0FBQUE7QUFBQTtBQVlGRiw0QkFaRTtBQWFGRywyQkFiRTtBQUFBO0FBQUE7QUFTSkMsdUJBVEksRUFTQyxjQVREO0FBVUpDLDBCQVZJLEVBVUksTUFWSjtBQVdKQyx3QkFYSTtBQUFBO0FBQUE7QUFBQSxxQ0FRSUMsV0FSSjs7QUFBQTtBQWdCTjtBQUNBZCxpQ0FBS2UsWUFBTDs7QUFqQk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFtQkZDLHdCQW5CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQk47QUFDQWhCLGlDQUFLaUIsVUFBTCxDQUFnQjtBQUNkTix5QkFBSyw0Q0FBNEMsS0FBS0o7QUFEeEMsbUJBQWhCOztBQXJCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEssUUEyQlZXLFEsR0FBVztBQUNUQyxpQkFEUyx5QkFDSztBQUNaLGVBQU8sS0FBS0MsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWUMsT0FBWixDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBbkQ7QUFDRCxPQUhRO0FBSVRDLGtCQUpTLDBCQUlNO0FBQ2IsZUFBTyxLQUFLSCxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZQyxPQUFaLENBQW9CRyxLQUFwQixDQUEwQixDQUExQixFQUE2QixDQUE3QixDQUFkLEdBQWdELEVBQXZEO0FBQ0QsT0FOUTtBQU9UQyxnQkFQUyx3QkFPSTtBQUNYLGVBQU8sS0FBS0wsTUFBTCxHQUNILEtBQUtBLE1BQUwsQ0FBWU0sWUFBWixLQUE2QixLQUFLbEIsT0FBTCxDQUFhbUIsVUFBYixDQUF3QkMsTUFEbEQsR0FFSCxLQUZKO0FBR0QsT0FYUTtBQVlUQyxtQkFaUywyQkFZTztBQUNkLGVBQU8sS0FBS1QsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWVMsYUFBMUIsR0FBMEMsRUFBakQ7QUFDRDtBQWRRLEssUUFpQlhDLE0sR0FBUyxDQUFDQyx3QkFBRCxDLFFBa0RUbEIsSSxHQUFPO0FBQ0xOLGdCQUFVLElBREw7QUFFTGEsY0FBUTtBQUZILEs7Ozs7O3NDQWhEV1ksTyxFQUFTO0FBQ3pCLFVBQUk5QixRQUFRLEtBQVo7QUFDQSxVQUFJK0IseUNBQXVDLEtBQUt6QixPQUFMLENBQWFtQixVQUFiLENBQXdCakIsT0FBL0QsbUJBQW9GLEtBQUtILFFBQTdGO0FBQ0EsVUFBSSxLQUFLYSxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZYyxXQUEvQixFQUE0QztBQUMxQ2hDLGdCQUFRLGVBQWUsS0FBS2tCLE1BQUwsQ0FBWWMsV0FBbkM7QUFDRDs7QUFFRCxhQUFPO0FBQ0xoQyxlQUFPQSxLQURGO0FBRUwrQixjQUFNQSxJQUZEO0FBR0xFLGtCQUFVO0FBSEwsT0FBUDtBQUtEOzs7MkJBRU1ILE8sRUFBUztBQUNkO0FBQ0E7QUFDQSxXQUFLekIsUUFBTCxHQUFnQnlCLFFBQVFJLFNBQXhCO0FBQ0Q7Ozs7Ozs7Ozs7dUJBSVUsS0FBSzVCLE9BQUwsQ0FBYTZCLGlCQUFiLEU7Ozs7Ozs7Ozs7O3VCQUNBLEtBQUs3QixPQUFMLENBQWE4QixhQUFiLEU7Ozs7Ozs7Ozs7Ozs7O0FBSVR0QywrQkFBS3VDLGFBQUwsQ0FBbUI7QUFDakJDLG1DQUFpQjtBQURBLGlCQUFuQjs7b0JBR0ssS0FBS2pDLFE7Ozs7Ozt1QkFDRlAsZUFBS0MsU0FBTCxDQUFlO0FBQ25CQyx5QkFBTyxNQURZO0FBRW5CQywyQkFBUyxRQUZVO0FBR25Cc0MsOEJBQVk7QUFITyxpQkFBZixDOzs7QUFLTnpDLCtCQUFLZSxZQUFMOzs7Ozs7dUJBRU0sS0FBSzJCLGFBQUwsRTs7O0FBRVIscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FHa0I7QUFDbEIzQyxxQkFBSzRDLG1CQUFMO0FBQ0EsV0FBS0YsYUFBTDtBQUNEOzs7O0VBL0dnQzFDLGVBQUs2QyxJOztrQkFBbkJyRCxLIiwiZmlsZSI6Im5vdGljZV9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IGFwaSBmcm9tICdAL3V0aWxzL2FwaSc7XG5pbXBvcnQgcmVmcmVzaE5vdGljZU1peGluIGZyb20gJ0AvbWl4aW5zL3JlZnJlc2hfbm90aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WKoOi9veS4rS4uLicsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnaS1wYW5lbCc6ICcuLi9pdmlldy9wYW5lbC9pbmRleCcsXG4gICAgICAnaS1idXR0b24nOiAnLi4vaXZpZXcvYnV0dG9uL2luZGV4JyxcbiAgICAgICdpLXJvdyc6ICcuLi9pdmlldy9yb3cvaW5kZXgnLFxuICAgICAgJ2ktY29sJzogJy4uL2l2aWV3L2NvbC9pbmRleCcsXG4gICAgICAnaS1jYXJkJzogJy4uL2l2aWV3L2NhcmQvaW5kZXgnLFxuICAgICAgJ2ktaW5wdXQnOiAnLi4vaXZpZXcvaW5wdXQvaW5kZXgnLFxuICAgICAgJ2ktY2VsbC1ncm91cCc6ICcuLi9pdmlldy9jZWxsLWdyb3VwL2luZGV4JyxcbiAgICAgICdpLWNlbGwnOiAnLi4vaXZpZXcvY2VsbC9pbmRleCcsXG4gICAgICAnaS1hdmF0YXInOiAnLi4vaXZpZXcvYXZhdGFyL2luZGV4J1xuICAgIH0sXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH07XG5cbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgaGFuZGxlRGVsZXRlKCkge1xuICAgICAgbGV0IGluZm8gPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn56Gu6K6k5Yig6ZmkJyxcbiAgICAgICAgY29udGVudDogJ+ehruiupOWIoOmZpOWFrOWRiu+8nydcbiAgICAgIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2coaW5mbyk7XG4gICAgICBpZiAoaW5mby5jYW5jZWwpIHJldHVybjtcbiAgICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2RlbGV0ZU5vdGljZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbm90aWNlSUQ6IHRoaXMubm90aWNlSUQsXG4gICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHdlcHkubmF2aWdhdGVCYWNrKCk7XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVDbGlja1ZpZXdlcnMoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaGFuZGxlQ2xpY2tWaWV3ZXJzJyk7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbm90aWNlX2RldGFpbF92aWV3ZXJzP25vdGljZV9pZD0nICsgdGhpcy5ub3RpY2VJRFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXB1dGVkID0ge1xuICAgIG1vcmVWaWV3ZXJzKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm90aWNlICYmIHRoaXMubm90aWNlLnZpZXdlcnMubGVuZ3RoID4gNjtcbiAgICB9LFxuICAgIGZyb250Vmlld2VycygpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vdGljZSA/IHRoaXMubm90aWNlLnZpZXdlcnMuc2xpY2UoMCwgNikgOiBbXTtcbiAgICB9LFxuICAgIGRlbGV0ZWFibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub3RpY2VcbiAgICAgICAgPyB0aGlzLm5vdGljZS5hdXRob3JPcGVuSUQgPT09IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JRFxuICAgICAgICA6IGZhbHNlO1xuICAgIH0sXG4gICAgbm90aWNlQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vdGljZSA/IHRoaXMubm90aWNlLm5vdGljZUNvbnRlbnQgOiAnJztcbiAgICB9XG4gIH07XG5cbiAgbWl4aW5zID0gW3JlZnJlc2hOb3RpY2VNaXhpbl07XG5cbiAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0aW9ucykge1xuICAgIGxldCB0aXRsZSA9ICfnvqTlhazlkYonO1xuICAgIGxldCBwYXRoID0gYC9wYWdlcy9ub3RpY2VfZGV0YWlsP29wZW5HSUQ9JHt0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuR0lEfSZub3RpY2VfaWQ9JHt0aGlzLm5vdGljZUlEfWA7XG4gICAgaWYgKHRoaXMubm90aWNlICYmIHRoaXMubm90aWNlLm5vdGljZVRpdGxlKSB7XG4gICAgICB0aXRsZSA9ICfmiJHliIbkuqvkuobkuIDkuKrnvqTlhazlkYrvvJonICsgdGhpcy5ub3RpY2Uubm90aWNlVGl0bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBpbWFnZVVybDogJy9pbWFnZXMvbG9nby5wbmcnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgLy8gY29uc29sZS5sb2coJy9wYWdlcy9ub3RpY2VfZGV0YWlsIG9uTG9hZDonKTtcbiAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICB0aGlzLm5vdGljZUlEID0gb3B0aW9ucy5ub3RpY2VfaWQ7XG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG4gICAgaWYgKFxuICAgICAgIWF3YWl0IHRoaXMuJHBhcmVudC5hdXRob3JpemVSZXF1aXJlZCgpIHx8XG4gICAgICAhYXdhaXQgdGhpcy4kcGFyZW50Lmdyb3VwUmVxdWlyZWQoKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3ZXB5LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKCF0aGlzLm5vdGljZUlEKSB7XG4gICAgICBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5pyq55+l6ZSZ6K+vJyxcbiAgICAgICAgY29udGVudDogJ+WPkemAgeacquefpemUmeivrycsXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdlcHkubmF2aWdhdGVCYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMucmVmcmVzaE5vdGljZSgpO1xuICAgIH1cbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG5cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG4gICAgdGhpcy5yZWZyZXNoTm90aWNlKCk7XG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5vdGljZUlEOiBudWxsLFxuICAgIG5vdGljZTogbnVsbFxuICB9O1xufVxuIl19