'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _toolbar = require('./../components/toolbar.js');

var _toolbar2 = _interopRequireDefault(_toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// FIXME 空值检查
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
      navigationBarTitleText: '新建公告',
      usingComponents: {
        'i-panel': '../iview/panel/index',
        'i-button': '../iview/button/index',
        'i-row': '../iview/row/index',
        'i-col': '../iview/col/index',
        'i-card': '../iview/card/index',
        'i-input': '../iview/input/index',
        'i-cell-group': '../iview/cell-group/index',
        'i-cell': '../iview/cell/index'
      }
    }, _this.$repeat = {}, _this.$props = { "toolbar": { "left": "emoji", "right": "submit", "xmlns:v-bind": "", "v-bind:submitDisable.sync": "submitdisable", "xmlns:v-on": "" } }, _this.$events = { "toolbar": { "v-on:submit": "handleSubmit" } }, _this.components = {
      toolbar: _toolbar2.default
    }, _this.data = {
      noticeTitle: '',
      noticeContent: ''
    }, _this.computed = {
      submitdisable: function submitdisable() {
        return !(this.noticeTitle && this.noticeContent);
      }
    }, _this.methods = {
      handleTitle: function handleTitle(e) {
        this.noticeTitle = e.detail.detail.value;
      },
      handleContent: function handleContent(e) {
        this.noticeContent = e.detail.value;
      },
      handleSubmit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = _api2.default;
                  _context.next = 3;
                  return this.$parent.fetchOpenGID();

                case 3:
                  _context.t1 = _context.sent;
                  _context.t2 = this.noticeTitle;
                  _context.t3 = this.noticeContent;
                  _context.t4 = {
                    openGID: _context.t1,
                    noticeTitle: _context.t2,
                    noticeContent: _context.t3
                  };
                  _context.t5 = {
                    url: 'newNotice',
                    data: _context.t4,
                    method: 'POST'
                  };
                  _context.next = 10;
                  return _context.t0.authRequest.call(_context.t0, _context.t5, true);

                case 10:
                  _context.next = 12;
                  return _wepy2.default.showModal({
                    title: '成功',
                    content: '公告发布成功',
                    showConcel: false
                  });

                case 12:
                  _wepy2.default.navigateBack();

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function handleSubmit() {
          return _ref2.apply(this, arguments);
        }

        return handleSubmit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
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
                _context2.next = 11;
                return _wepy2.default.hideShareMenu();

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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/notice_new'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZV9uZXcuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidG9vbGJhciIsIlRvb2xiYXIiLCJkYXRhIiwibm90aWNlVGl0bGUiLCJub3RpY2VDb250ZW50IiwiY29tcHV0ZWQiLCJzdWJtaXRkaXNhYmxlIiwibWV0aG9kcyIsImhhbmRsZVRpdGxlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiaGFuZGxlQ29udGVudCIsImhhbmRsZVN1Ym1pdCIsImFwaSIsIiRwYXJlbnQiLCJmZXRjaE9wZW5HSUQiLCJvcGVuR0lEIiwidXJsIiwibWV0aG9kIiwiYXV0aFJlcXVlc3QiLCJ3ZXB5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NvbmNlbCIsIm5hdmlnYXRlQmFjayIsImF1dGhvcml6ZVJlcXVpcmVkIiwiZ3JvdXBSZXF1aXJlZCIsImhpZGVTaGFyZU1lbnUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyx1QkFBaUI7QUFDZixtQkFBVyxzQkFESTtBQUVmLG9CQUFZLHVCQUZHO0FBR2YsaUJBQVMsb0JBSE07QUFJZixpQkFBUyxvQkFKTTtBQUtmLGtCQUFVLHFCQUxLO0FBTWYsbUJBQVcsc0JBTkk7QUFPZix3QkFBZ0IsMkJBUEQ7QUFRZixrQkFBVTtBQVJLO0FBRlYsSyxRQWFWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsUUFBTyxPQUFSLEVBQWdCLFNBQVEsUUFBeEIsRUFBaUMsZ0JBQWUsRUFBaEQsRUFBbUQsNkJBQTRCLGVBQS9FLEVBQStGLGNBQWEsRUFBNUcsRUFBWCxFLFFBQ1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxlQUFjLGNBQWYsRUFBWCxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxlQUFTQztBQURDLEssUUFJWkMsSSxHQUFPO0FBQ0xDLG1CQUFhLEVBRFI7QUFFTEMscUJBQWU7QUFGVixLLFFBSVBDLFEsR0FBVztBQUNUQyxtQkFEUywyQkFDTztBQUNkLGVBQU8sRUFBRSxLQUFLSCxXQUFMLElBQW9CLEtBQUtDLGFBQTNCLENBQVA7QUFDRDtBQUhRLEssUUFNWEcsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxDQURKLEVBQ087QUFDYixhQUFLTixXQUFMLEdBQW1CTSxFQUFFQyxNQUFGLENBQVNBLE1BQVQsQ0FBZ0JDLEtBQW5DO0FBQ0QsT0FITztBQUlSQyxtQkFKUSx5QkFJTUgsQ0FKTixFQUlTO0FBQ2YsYUFBS0wsYUFBTCxHQUFxQkssRUFBRUMsTUFBRixDQUFTQyxLQUE5QjtBQUNELE9BTk87QUFPRkUsa0JBUEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBUUFDLGFBUkE7QUFBQTtBQUFBLHlCQVllLEtBQUtDLE9BQUwsQ0FBYUMsWUFBYixFQVpmOztBQUFBO0FBQUE7QUFBQSxnQ0FhYSxLQUFLYixXQWJsQjtBQUFBLGdDQWNlLEtBQUtDLGFBZHBCO0FBQUE7QUFZQWEsMkJBWkE7QUFhQWQsK0JBYkE7QUFjQUMsaUNBZEE7QUFBQTtBQUFBO0FBVUZjLHVCQVZFLEVBVUcsV0FWSDtBQVdGaEIsd0JBWEU7QUFnQkZpQiwwQkFoQkUsRUFnQk07QUFoQk47QUFBQTtBQUFBLHFDQVFJQyxXQVJKLGdDQWtCSixJQWxCSTs7QUFBQTtBQUFBO0FBQUEseUJBcUJBQyxlQUFLQyxTQUFMLENBQWU7QUFDbkJDLDJCQUFPLElBRFk7QUFFbkJDLDZCQUFTLFFBRlU7QUFHbkJDLGdDQUFZO0FBSE8sbUJBQWYsQ0FyQkE7O0FBQUE7QUEwQk5KLGlDQUFLSyxZQUFMOztBQTFCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7Ozs7Ozt1QkErQkcsS0FBS1gsT0FBTCxDQUFhWSxpQkFBYixFOzs7Ozs7Ozs7Ozt1QkFBMkMsS0FBS1osT0FBTCxDQUFhYSxhQUFiLEU7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHaERQLGVBQUtRLGFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpFeUJSLGVBQUtTLEk7O2tCQUFuQnRDLEsiLCJmaWxlIjoibm90aWNlX25ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0AvY29tcG9uZW50cy90b29sYmFyJztcblxuLy8gRklYTUUg56m65YC85qOA5p+lXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paw5bu65YWs5ZGKJyxcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICdpLXBhbmVsJzogJy4uL2l2aWV3L3BhbmVsL2luZGV4JyxcbiAgICAgICdpLWJ1dHRvbic6ICcuLi9pdmlldy9idXR0b24vaW5kZXgnLFxuICAgICAgJ2ktcm93JzogJy4uL2l2aWV3L3Jvdy9pbmRleCcsXG4gICAgICAnaS1jb2wnOiAnLi4vaXZpZXcvY29sL2luZGV4JyxcbiAgICAgICdpLWNhcmQnOiAnLi4vaXZpZXcvY2FyZC9pbmRleCcsXG4gICAgICAnaS1pbnB1dCc6ICcuLi9pdmlldy9pbnB1dC9pbmRleCcsXG4gICAgICAnaS1jZWxsLWdyb3VwJzogJy4uL2l2aWV3L2NlbGwtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ2ktY2VsbCc6ICcuLi9pdmlldy9jZWxsL2luZGV4J1xuICAgIH1cbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRvb2xiYXJcIjp7XCJsZWZ0XCI6XCJlbW9qaVwiLFwicmlnaHRcIjpcInN1Ym1pdFwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdWJtaXREaXNhYmxlLnN5bmNcIjpcInN1Ym1pdGRpc2FibGVcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJ0b29sYmFyXCI6e1widi1vbjpzdWJtaXRcIjpcImhhbmRsZVN1Ym1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHRvb2xiYXI6IFRvb2xiYXJcbiAgfTtcblxuICBkYXRhID0ge1xuICAgIG5vdGljZVRpdGxlOiAnJyxcbiAgICBub3RpY2VDb250ZW50OiAnJ1xuICB9O1xuICBjb21wdXRlZCA9IHtcbiAgICBzdWJtaXRkaXNhYmxlKCkge1xuICAgICAgcmV0dXJuICEodGhpcy5ub3RpY2VUaXRsZSAmJiB0aGlzLm5vdGljZUNvbnRlbnQpO1xuICAgIH1cbiAgfTtcblxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZVRpdGxlKGUpIHtcbiAgICAgIHRoaXMubm90aWNlVGl0bGUgPSBlLmRldGFpbC5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBoYW5kbGVDb250ZW50KGUpIHtcbiAgICAgIHRoaXMubm90aWNlQ29udGVudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KCkge1xuICAgICAgYXdhaXQgYXBpLmF1dGhSZXF1ZXN0KFxuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnbmV3Tm90aWNlJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBvcGVuR0lEOiBhd2FpdCB0aGlzLiRwYXJlbnQuZmV0Y2hPcGVuR0lEKCksXG4gICAgICAgICAgICBub3RpY2VUaXRsZTogdGhpcy5ub3RpY2VUaXRsZSxcbiAgICAgICAgICAgIG5vdGljZUNvbnRlbnQ6IHRoaXMubm90aWNlQ29udGVudFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5oiQ5YqfJyxcbiAgICAgICAgY29udGVudDogJ+WFrOWRiuWPkeW4g+aIkOWKnycsXG4gICAgICAgIHNob3dDb25jZWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHdlcHkubmF2aWdhdGVCYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBpZiAoIWF3YWl0IHRoaXMuJHBhcmVudC5hdXRob3JpemVSZXF1aXJlZCgpIHx8ICFhd2FpdCB0aGlzLiRwYXJlbnQuZ3JvdXBSZXF1aXJlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHdlcHkuaGlkZVNoYXJlTWVudSgpO1xuICB9XG59XG4iXX0=