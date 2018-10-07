'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../utils/api.js');

var _api2 = _interopRequireDefault(_api);

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
      navigationBarTitleText: '创建相册',
      usingComponents: {
        'i-button': '../iview/button/index',
        'i-input': '../iview/input/index',
        'i-icon': '../../iview/icon/index',
        'i-radio': '../../iview/radio/index',
        'i-radio-group': '../../iview/radio-group/index'
      }
    }, _this.components = {}, _this.data = {
      permission: [{
        id: 1,
        name: '所有人都可上传'
      }, {
        id: 2,
        name: '仅自己可以上传'
      }],
      userinfo: null,
      album_title: '',
      current: '所有人都可上传'
    }, _this.computed = {}, _this.methods = {
      handleTitleChange: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
          var detail = _ref2.detail;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // console.log(detail);
                  this.album_title = detail.detail.value;

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function handleTitleChange(_x) {
          return _ref3.apply(this, arguments);
        }

        return handleTitleChange;
      }(),
      handlePermissionChange: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref4) {
          var _ref4$detail = _ref4.detail,
              detail = _ref4$detail === undefined ? {} : _ref4$detail;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // console.log('handlePermissionChange');
                  this.current = detail.value;
                  this.$apply();

                case 2:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function handlePermissionChange(_x2) {
          return _ref5.apply(this, arguments);
        }

        return handlePermissionChange;
      }(),
      handleFinishClick: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = _api2.default;
                  _context3.next = 3;
                  return this.$parent.fetchOpenGID();

                case 3:
                  _context3.t1 = _context3.sent;
                  _context3.t2 = this.album_title;
                  _context3.t3 = {
                    openGID: _context3.t1,
                    albumTitle: _context3.t2
                  };
                  _context3.t4 = {
                    url: 'newAlbum',
                    method: 'POST',
                    data: _context3.t3
                  };
                  _context3.next = 9;
                  return _context3.t0.authRequest.call(_context3.t0, _context3.t4);

                case 9:
                  _wepy2.default.navigateBack();

                case 10:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function handleFinishClick() {
          return _ref6.apply(this, arguments);
        }

        return handleFinishClick;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$parent.authorizeRequired();

              case 2:
                _context4.t0 = !_context4.sent;

                if (_context4.t0) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 6;
                return this.$parent.groupRequired();

              case 6:
                _context4.t0 = !_context4.sent;

              case 7:
                if (!_context4.t0) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt('return');

              case 9:
                _wepy2.default.hideShareMenu();

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onShow() {
        return _ref7.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/album_add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtX2FkZC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsInBlcm1pc3Npb24iLCJpZCIsIm5hbWUiLCJ1c2VyaW5mbyIsImFsYnVtX3RpdGxlIiwiY3VycmVudCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZVRpdGxlQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJoYW5kbGVQZXJtaXNzaW9uQ2hhbmdlIiwiJGFwcGx5IiwiaGFuZGxlRmluaXNoQ2xpY2siLCJhcGkiLCIkcGFyZW50IiwiZmV0Y2hPcGVuR0lEIiwib3BlbkdJRCIsImFsYnVtVGl0bGUiLCJ1cmwiLCJtZXRob2QiLCJhdXRoUmVxdWVzdCIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJhdXRob3JpemVSZXF1aXJlZCIsImdyb3VwUmVxdWlyZWQiLCJoaWRlU2hhcmVNZW51IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyx1QkFBaUI7QUFDZixvQkFBWSx1QkFERztBQUVmLG1CQUFXLHNCQUZJO0FBR2Ysa0JBQVUsd0JBSEs7QUFJZixtQkFBVyx5QkFKSTtBQUtmLHlCQUFpQjtBQUxGO0FBRlYsSyxRQVVUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsa0JBQVksQ0FDVjtBQUNFQyxZQUFJLENBRE47QUFFRUMsY0FBTTtBQUZSLE9BRFUsRUFLVjtBQUNFRCxZQUFJLENBRE47QUFFRUMsY0FBTTtBQUZSLE9BTFUsQ0FEUDtBQVdMQyxnQkFBVSxJQVhMO0FBWUxDLG1CQUFhLEVBWlI7QUFhTEMsZUFBUztBQWJKLEssUUFnQlBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNGQyx1QkFERTtBQUFBO0FBQUEsY0FDa0JDLE1BRGxCLFNBQ2tCQSxNQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU47QUFDQSx1QkFBS0wsV0FBTCxHQUFtQkssT0FBT0EsTUFBUCxDQUFjQyxLQUFqQzs7QUFITTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUtGQyw0QkFMRTtBQUFBO0FBQUEsbUNBS3VCRixNQUx2QjtBQUFBLGNBS3VCQSxNQUx2QixnQ0FLZ0MsRUFMaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1OO0FBQ0EsdUJBQUtKLE9BQUwsR0FBZUksT0FBT0MsS0FBdEI7QUFDQSx1QkFBS0UsTUFBTDs7QUFSTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVVGQyx1QkFWRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FZQUMsYUFaQTtBQUFBO0FBQUEseUJBZ0JhLEtBQUtDLE9BQUwsQ0FBYUMsWUFBYixFQWhCYjs7QUFBQTtBQUFBO0FBQUEsaUNBaUJVLEtBQUtaLFdBakJmO0FBQUE7QUFnQkZhLDJCQWhCRTtBQWlCRkMsOEJBakJFO0FBQUE7QUFBQTtBQWFKQyx1QkFiSSxFQWFDLFVBYkQ7QUFjSkMsMEJBZEksRUFjSSxNQWRKO0FBZUpyQix3QkFmSTtBQUFBO0FBQUE7QUFBQSxzQ0FZSXNCLFdBWko7O0FBQUE7QUFvQk5DLGlDQUFLQyxZQUFMOztBQXBCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7Ozs7Ozt1QkEwQkMsS0FBS1IsT0FBTCxDQUFhUyxpQkFBYixFOzs7Ozs7Ozs7Ozt1QkFDQSxLQUFLVCxPQUFMLENBQWFVLGFBQWIsRTs7Ozs7Ozs7Ozs7Ozs7QUFJVEgsK0JBQUtJLGFBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTyxDQUFFOzs7O0VBaEVzQkosZUFBS0ssSTs7a0JBQW5CakMsSyIsImZpbGUiOiJhbGJ1bV9hZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBhcGkgZnJvbSAnQC91dGlscy9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliJvlu7rnm7jlhownLFxyXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICdpLWJ1dHRvbic6ICcuLi9pdmlldy9idXR0b24vaW5kZXgnLFxyXG4gICAgICAnaS1pbnB1dCc6ICcuLi9pdmlldy9pbnB1dC9pbmRleCcsXHJcbiAgICAgICdpLWljb24nOiAnLi4vLi4vaXZpZXcvaWNvbi9pbmRleCcsXHJcbiAgICAgICdpLXJhZGlvJzogJy4uLy4uL2l2aWV3L3JhZGlvL2luZGV4JyxcclxuICAgICAgJ2ktcmFkaW8tZ3JvdXAnOiAnLi4vLi4vaXZpZXcvcmFkaW8tZ3JvdXAvaW5kZXgnXHJcbiAgICB9XHJcbiAgfTtcclxuICBjb21wb25lbnRzID0ge307XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBwZXJtaXNzaW9uOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAn5omA5pyJ5Lq66YO95Y+v5LiK5LygJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ+S7heiHquW3seWPr+S7peS4iuS8oCdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHVzZXJpbmZvOiBudWxsLFxyXG4gICAgYWxidW1fdGl0bGU6ICcnLFxyXG4gICAgY3VycmVudDogJ+aJgOacieS6uumDveWPr+S4iuS8oCdcclxuICB9O1xyXG5cclxuICBjb21wdXRlZCA9IHt9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgYXN5bmMgaGFuZGxlVGl0bGVDaGFuZ2UoeyBkZXRhaWwgfSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkZXRhaWwpO1xyXG4gICAgICB0aGlzLmFsYnVtX3RpdGxlID0gZGV0YWlsLmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBoYW5kbGVQZXJtaXNzaW9uQ2hhbmdlKHsgZGV0YWlsID0ge30gfSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnaGFuZGxlUGVybWlzc2lvbkNoYW5nZScpO1xyXG4gICAgICB0aGlzLmN1cnJlbnQgPSBkZXRhaWwudmFsdWU7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgaGFuZGxlRmluaXNoQ2xpY2soKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdoYW5kbGVGaW5pc2hDbGljaycpO1xyXG4gICAgICBhd2FpdCBhcGkuYXV0aFJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ25ld0FsYnVtJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBvcGVuR0lEOiBhd2FpdCB0aGlzLiRwYXJlbnQuZmV0Y2hPcGVuR0lEKCksXHJcbiAgICAgICAgICBhbGJ1bVRpdGxlOiB0aGlzLmFsYnVtX3RpdGxlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhc3luYyBvblNob3coKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuYXV0aG9yaXplUmVxdWlyZWQoKSB8fFxyXG4gICAgICAhYXdhaXQgdGhpcy4kcGFyZW50Lmdyb3VwUmVxdWlyZWQoKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdlcHkuaGlkZVNoYXJlTWVudSgpO1xyXG4gIH1cclxuICBvbkxvYWQoKSB7fVxyXG59XHJcbiJdfQ==