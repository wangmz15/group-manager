'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      navigationBarTitleText: '公告列表',
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
        'i-badge': '../iview/badge/index'
      },
      enablePullDownRefresh: true
    }, _this.data = {
      notices: [],
      from: -1,
      openID: null
    }, _this.components = {}, _this.methods = {
      addNotice: function addNotice() {
        _wepy2.default.navigateTo({
          url: '/pages/notice_new'
        });
      },
      bindShowDetail: function bindShowDetail(noticeID) {
        _wepy2.default.navigateTo({
          url: '/pages/notice_detail?notice_id=' + noticeID
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.stopPullDownRefresh();
      this.refreshListNotice();
    }
  }, {
    key: 'refreshListNotice',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, j, len;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _wepy2.default.showNavigationBarLoading();
                _context.prev = 1;
                _context.t0 = _api2.default;
                _context.next = 5;
                return this.$parent.fetchOpenGID();

              case 5:
                _context.t1 = _context.sent;
                _context.t2 = {
                  openGID: _context.t1
                };
                _context.t3 = {
                  url: 'listNotice',
                  method: 'POST',
                  data: _context.t2
                };
                _context.next = 10;
                return _context.t0.authRequest.call(_context.t0, _context.t3);

              case 10:
                res = _context.sent;

                // console.log(res);
                this.notices = res.data.notices;
                j = 0, len = this.notices.length;

              case 13:
                if (!(j < len)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 16;
                return _time2.default.getTime(this.notices[j].createdAt);

              case 16:
                this.notices[j].createdAt = _context.sent;

              case 17:
                j++;
                _context.next = 13;
                break;

              case 20:
                this.$apply();
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t4 = _context['catch'](1);

                console.error(_context.t4);

              case 26:
                _wepy2.default.hideNavigationBarLoading();

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 23]]);
      }));

      function refreshListNotice() {
        return _ref2.apply(this, arguments);
      }

      return refreshListNotice;
    }()
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      return {
        title: '大家快来看公告',
        path: '/pages/notice_list?openGID=' + this.$parent.globalData.openGID,
        imageUrl: '/images/logo.png'
      };
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.from = options.from;
      this.openID = this.$parent.globalData.openID;
      // console.log(this.from)
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$parent.authorizeRequired();

              case 2:
                _context2.t0 = !_context2.sent;

                if (_context2.t0) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return this.$parent.groupRequired();

              case 6:
                _context2.t0 = !_context2.sent;

              case 7:
                if (!_context2.t0) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt('return');

              case 9:
                _wepy2.default.showShareMenu({
                  withShareTicket: true
                });
                this.refreshListNotice();

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/notice_list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZV9saXN0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJub3RpY2VzIiwiZnJvbSIsIm9wZW5JRCIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiYWRkTm90aWNlIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJiaW5kU2hvd0RldGFpbCIsIm5vdGljZUlEIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInJlZnJlc2hMaXN0Tm90aWNlIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwiYXBpIiwiJHBhcmVudCIsImZldGNoT3BlbkdJRCIsIm9wZW5HSUQiLCJtZXRob2QiLCJhdXRoUmVxdWVzdCIsInJlcyIsImoiLCJsZW4iLCJsZW5ndGgiLCJ0aW1lIiwiZ2V0VGltZSIsImNyZWF0ZWRBdCIsIiRhcHBseSIsImNvbnNvbGUiLCJlcnJvciIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsIm9wdGlvbnMiLCJ0aXRsZSIsInBhdGgiLCJnbG9iYWxEYXRhIiwiaW1hZ2VVcmwiLCJhdXRob3JpemVSZXF1aXJlZCIsImdyb3VwUmVxdWlyZWQiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG1CQUFXLHNCQURJO0FBRWYsb0JBQVksdUJBRkc7QUFHZixpQkFBUyxvQkFITTtBQUlmLGlCQUFTLG9CQUpNO0FBS2Ysa0JBQVUscUJBTEs7QUFNZixtQkFBVyxzQkFOSTtBQU9mLHdCQUFnQiwyQkFQRDtBQVFmLGtCQUFVLHFCQVJLO0FBU2Ysa0JBQVUscUJBVEs7QUFVZixtQkFBVztBQVZJLE9BRlY7QUFjUEMsNkJBQXVCO0FBZGhCLEssUUFpQlRDLEksR0FBTztBQUNMQyxlQUFTLEVBREo7QUFFTEMsWUFBTSxDQUFDLENBRkY7QUFHTEMsY0FBUTtBQUhILEssUUFNUEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVkMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxvQkFOUSwwQkFNT0MsUUFOUCxFQU1pQjtBQUN2QkosdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxvQ0FBb0NFO0FBRDNCLFNBQWhCO0FBR0Q7QUFWTyxLOzs7Ozt3Q0FhVTtBQUNsQkoscUJBQUtLLG1CQUFMO0FBQ0EsV0FBS0MsaUJBQUw7QUFDRDs7Ozs7Ozs7OztBQUdDTiwrQkFBS08sd0JBQUw7OzhCQUVrQkMsYTs7dUJBSUcsS0FBS0MsT0FBTCxDQUFhQyxZQUFiLEU7Ozs7O0FBQWZDLHlCOzs7QUFIRlQscUIsRUFBSyxZO0FBQ0xVLHdCLEVBQVEsTTtBQUNSbkIsc0I7OzttQ0FIa0JvQixXOzs7QUFBaEJDLG1COztBQU9KO0FBQ0EscUJBQUtwQixPQUFMLEdBQWVvQixJQUFJckIsSUFBSixDQUFTQyxPQUF4QjtBQUNTcUIsaUIsR0FBSSxDLEVBQUdDLEcsR0FBTSxLQUFLdEIsT0FBTCxDQUFhdUIsTTs7O3NCQUFRRixJQUFJQyxHOzs7Ozs7dUJBQ1hFLGVBQUtDLE9BQUwsQ0FBYSxLQUFLekIsT0FBTCxDQUFhcUIsQ0FBYixFQUFnQkssU0FBN0IsQzs7O0FBQWxDLHFCQUFLMUIsT0FBTCxDQUFhcUIsQ0FBYixFQUFnQkssUzs7O0FBRGtDTCxtQjs7Ozs7QUFHcEQscUJBQUtNLE1BQUw7Ozs7Ozs7O0FBRUFDLHdCQUFRQyxLQUFSOzs7QUFFRnZCLCtCQUFLd0Isd0JBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHZ0JDLE8sRUFBUztBQUN6QixhQUFPO0FBQ0xDLGVBQU8sU0FERjtBQUVMQyw4Q0FBb0MsS0FBS2xCLE9BQUwsQ0FBYW1CLFVBQWIsQ0FBd0JqQixPQUZ2RDtBQUdMa0Isa0JBQVU7QUFITCxPQUFQO0FBS0Q7OzsyQkFFTUosTyxFQUFTO0FBQ2QsV0FBSzlCLElBQUwsR0FBWThCLFFBQVE5QixJQUFwQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLYSxPQUFMLENBQWFtQixVQUFiLENBQXdCaEMsTUFBdEM7QUFDQTtBQUNEOzs7Ozs7Ozs7O3VCQUlVLEtBQUthLE9BQUwsQ0FBYXFCLGlCQUFiLEU7Ozs7Ozs7Ozs7O3VCQUNBLEtBQUtyQixPQUFMLENBQWFzQixhQUFiLEU7Ozs7Ozs7Ozs7Ozs7O0FBSVQvQiwrQkFBS2dDLGFBQUwsQ0FBbUI7QUFDakJDLG1DQUFpQjtBQURBLGlCQUFuQjtBQUdBLHFCQUFLM0IsaUJBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExRitCTixlQUFLa0MsSTs7a0JBQW5COUMsSyIsImZpbGUiOiJub3RpY2VfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcbmltcG9ydCB0aW1lIGZyb20gJ0AvdXRpbHMvdGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflhazlkYrliJfooagnLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ2ktcGFuZWwnOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgJ2ktYnV0dG9uJzogJy4uL2l2aWV3L2J1dHRvbi9pbmRleCcsXG4gICAgICAnaS1yb3cnOiAnLi4vaXZpZXcvcm93L2luZGV4JyxcbiAgICAgICdpLWNvbCc6ICcuLi9pdmlldy9jb2wvaW5kZXgnLFxuICAgICAgJ2ktY2FyZCc6ICcuLi9pdmlldy9jYXJkL2luZGV4JyxcbiAgICAgICdpLWlucHV0JzogJy4uL2l2aWV3L2lucHV0L2luZGV4JyxcbiAgICAgICdpLWNlbGwtZ3JvdXAnOiAnLi4vaXZpZXcvY2VsbC1ncm91cC9pbmRleCcsXG4gICAgICAnaS1jZWxsJzogJy4uL2l2aWV3L2NlbGwvaW5kZXgnLFxuICAgICAgJ2ktaWNvbic6ICcuLi9pdmlldy9pY29uL2luZGV4JyxcbiAgICAgICdpLWJhZGdlJzogJy4uL2l2aWV3L2JhZGdlL2luZGV4J1xuICAgIH0sXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH07XG5cbiAgZGF0YSA9IHtcbiAgICBub3RpY2VzOiBbXSxcbiAgICBmcm9tOiAtMSxcbiAgICBvcGVuSUQ6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnRzID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhZGROb3RpY2UoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbm90aWNlX25ldydcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYmluZFNob3dEZXRhaWwobm90aWNlSUQpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9ub3RpY2VfZGV0YWlsP25vdGljZV9pZD0nICsgbm90aWNlSURcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKTtcbiAgICB0aGlzLnJlZnJlc2hMaXN0Tm90aWNlKCk7XG4gIH1cblxuICBhc3luYyByZWZyZXNoTGlzdE5vdGljZSgpIHtcbiAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmF1dGhSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnbGlzdE5vdGljZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgIHRoaXMubm90aWNlcyA9IHJlcy5kYXRhLm5vdGljZXM7XG4gICAgICBmb3IgKHZhciBqID0gMCwgbGVuID0gdGhpcy5ub3RpY2VzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIHRoaXMubm90aWNlc1tqXS5jcmVhdGVkQXQgPSBhd2FpdCB0aW1lLmdldFRpbWUodGhpcy5ub3RpY2VzW2pdLmNyZWF0ZWRBdCk7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7XG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5aSn5a625b+r5p2l55yL5YWs5ZGKJyxcbiAgICAgIHBhdGg6IGAvcGFnZXMvbm90aWNlX2xpc3Q/b3BlbkdJRD0ke3RoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5HSUR9YCxcbiAgICAgIGltYWdlVXJsOiAnL2ltYWdlcy9sb2dvLnBuZydcbiAgICB9O1xuICB9XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLmZyb20gPSBvcHRpb25zLmZyb207XG4gICAgdGhpcy5vcGVuSUQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuSUQ7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcm9tKVxuICB9XG5cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIGlmIChcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuYXV0aG9yaXplUmVxdWlyZWQoKSB8fFxuICAgICAgIWF3YWl0IHRoaXMuJHBhcmVudC5ncm91cFJlcXVpcmVkKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucmVmcmVzaExpc3ROb3RpY2UoKTtcbiAgfVxufVxuIl19