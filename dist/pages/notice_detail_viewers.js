'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
    }, _this.components = {}, _this.methods = {}, _this.mixins = [_refresh_notice2.default], _this.data = {
      noticeID: null,
      notice: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      // console.log('/pages/notice_detail_viewers onLoad:');
      // console.log(options);
      this.noticeID = options.notice_id;
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$parent.authorizeRequired();

              case 2:
                _context.t0 = !_context.sent;

                if (_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return this.$parent.groupRequired();

              case 6:
                _context.t0 = !_context.sent;

              case 7:
                if (!_context.t0) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return');

              case 9:
                _context.next = 11;
                return _wepy2.default.hideShareMenu();

              case 11:
                if (this.noticeID) {
                  _context.next = 17;
                  break;
                }

                _context.next = 14;
                return _wepy2.default.showModal({
                  title: '未知错误',
                  content: '发送未知错误',
                  showCancel: false
                });

              case 14:
                _wepy2.default.navigateBack();
                _context.next = 21;
                break;

              case 17:
                _context.next = 19;
                return this.refreshNotice();

              case 19:
                _context.next = 21;
                return _wepy2.default.setNavigationBarTitle({
                  title: this.notice.noticeTitle + ':查看过的人'
                });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/notice_detail_viewers'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZV9kZXRhaWxfdmlld2Vycy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJjb21wb25lbnRzIiwibWV0aG9kcyIsIm1peGlucyIsInJlZnJlc2hOb3RpY2VNaXhpbiIsImRhdGEiLCJub3RpY2VJRCIsIm5vdGljZSIsIm9wdGlvbnMiLCJub3RpY2VfaWQiLCIkcGFyZW50IiwiYXV0aG9yaXplUmVxdWlyZWQiLCJncm91cFJlcXVpcmVkIiwid2VweSIsImhpZGVTaGFyZU1lbnUiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwibmF2aWdhdGVCYWNrIiwicmVmcmVzaE5vdGljZSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIm5vdGljZVRpdGxlIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsUUFEakI7QUFFUEMsdUJBQWlCO0FBQ2YsbUJBQVcsc0JBREk7QUFFZixvQkFBWSx1QkFGRztBQUdmLGlCQUFTLG9CQUhNO0FBSWYsaUJBQVMsb0JBSk07QUFLZixrQkFBVSxxQkFMSztBQU1mLG1CQUFXLHNCQU5JO0FBT2Ysd0JBQWdCLDJCQVBEO0FBUWYsa0JBQVUscUJBUks7QUFTZixvQkFBWTtBQVRHLE9BRlY7QUFhUEMsNkJBQXVCO0FBYmhCLEssUUFlVEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLENBQUNDLHdCQUFELEMsUUFvQ1RDLEksR0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLGNBQVE7QUFGSCxLOzs7OzsyQkFsQ0FDLE8sRUFBUztBQUNkO0FBQ0E7QUFDQSxXQUFLRixRQUFMLEdBQWdCRSxRQUFRQyxTQUF4QjtBQUNEOzs7Ozs7Ozs7O3VCQUlVLEtBQUtDLE9BQUwsQ0FBYUMsaUJBQWIsRTs7Ozs7Ozs7Ozs7dUJBQ0EsS0FBS0QsT0FBTCxDQUFhRSxhQUFiLEU7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJSEMsZUFBS0MsYUFBTCxFOzs7b0JBQ0QsS0FBS1IsUTs7Ozs7O3VCQUNGTyxlQUFLRSxTQUFMLENBQWU7QUFDbkJDLHlCQUFPLE1BRFk7QUFFbkJDLDJCQUFTLFFBRlU7QUFHbkJDLDhCQUFZO0FBSE8saUJBQWYsQzs7O0FBS05MLCtCQUFLTSxZQUFMOzs7Ozs7dUJBRU0sS0FBS0MsYUFBTCxFOzs7O3VCQUNBUCxlQUFLUSxxQkFBTCxDQUEyQjtBQUMvQkwseUJBQU8sS0FBS1QsTUFBTCxDQUFZZSxXQUFaLEdBQTBCO0FBREYsaUJBQTNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FNVTtBQUNsQlQscUJBQUtVLG1CQUFMO0FBQ0EsV0FBS0gsYUFBTDtBQUNEOzs7O0VBdERnQ1AsZUFBS1csSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJub3RpY2VfZGV0YWlsX3ZpZXdlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJlZnJlc2hOb3RpY2VNaXhpbiBmcm9tICdAL21peGlucy9yZWZyZXNoX25vdGljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliqDovb3kuK0uLi4nLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ2ktcGFuZWwnOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgJ2ktYnV0dG9uJzogJy4uL2l2aWV3L2J1dHRvbi9pbmRleCcsXG4gICAgICAnaS1yb3cnOiAnLi4vaXZpZXcvcm93L2luZGV4JyxcbiAgICAgICdpLWNvbCc6ICcuLi9pdmlldy9jb2wvaW5kZXgnLFxuICAgICAgJ2ktY2FyZCc6ICcuLi9pdmlldy9jYXJkL2luZGV4JyxcbiAgICAgICdpLWlucHV0JzogJy4uL2l2aWV3L2lucHV0L2luZGV4JyxcbiAgICAgICdpLWNlbGwtZ3JvdXAnOiAnLi4vaXZpZXcvY2VsbC1ncm91cC9pbmRleCcsXG4gICAgICAnaS1jZWxsJzogJy4uL2l2aWV3L2NlbGwvaW5kZXgnLFxuICAgICAgJ2ktYXZhdGFyJzogJy4uL2l2aWV3L2F2YXRhci9pbmRleCdcbiAgICB9LFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9O1xuICBjb21wb25lbnRzID0ge307XG5cbiAgbWV0aG9kcyA9IHt9O1xuXG4gIG1peGlucyA9IFtyZWZyZXNoTm90aWNlTWl4aW5dO1xuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgLy8gY29uc29sZS5sb2coJy9wYWdlcy9ub3RpY2VfZGV0YWlsX3ZpZXdlcnMgb25Mb2FkOicpO1xuICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIHRoaXMubm90aWNlSUQgPSBvcHRpb25zLm5vdGljZV9pZDtcbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBpZiAoXG4gICAgICAhYXdhaXQgdGhpcy4kcGFyZW50LmF1dGhvcml6ZVJlcXVpcmVkKCkgfHxcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuZ3JvdXBSZXF1aXJlZCgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHdlcHkuaGlkZVNoYXJlTWVudSgpO1xuICAgIGlmICghdGhpcy5ub3RpY2VJRCkge1xuICAgICAgYXdhaXQgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+acquefpemUmeivrycsXG4gICAgICAgIGNvbnRlbnQ6ICflj5HpgIHmnKrnn6XplJnor68nLFxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLnJlZnJlc2hOb3RpY2UoKTtcbiAgICAgIGF3YWl0IHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgdGl0bGU6IHRoaXMubm90aWNlLm5vdGljZVRpdGxlICsgJzrmn6XnnIvov4fnmoTkuronXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKTtcbiAgICB0aGlzLnJlZnJlc2hOb3RpY2UoKTtcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbm90aWNlSUQ6IG51bGwsXG4gICAgbm90aWNlOiBudWxsXG4gIH07XG59XG4iXX0=