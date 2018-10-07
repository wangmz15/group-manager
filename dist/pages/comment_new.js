'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _toolbar = require('./../components/toolbar.js');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _api = require('./../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _emojis = require('./../utils/emojis.js');

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
      navigationBarTitleText: '回复',
      usingComponents: {
        'i-panel': '../iview/panel/index',
        'i-button': '../iview/button/index',
        'i-row': '../iview/row/index',
        'i-col': '../iview/col/index',
        'i-card': '../iview/card/index',
        'i-input': '../iview/input/index',
        'i-cell-group': '../iview/cell-group/index',
        'i-cell': '../iview/cell/index',
        'i-icon': '../iview/icon/index'
      }
    }, _this.$repeat = {}, _this.$props = { "toolbar": { "xmlns:v-bind": "", "v-bind:left.sync": "emojiable", "right": "submit", "v-bind:submitDisable.sync": "submitdisable", "xmlns:v-on": "" } }, _this.$events = { "toolbar": { "v-on:emoji": "handleEmoji", "v-on:submit": "handleSubmit" } }, _this.components = {
      toolbar: _toolbar2.default
    }, _this.data = {
      content: '',
      type: null, // post, comment, subcomment
      ID: null,
      replyOpenID: null,
      emojiable: '',
      showEmojis: false,
      emojiList: []
    }, _this.computed = {
      submitdisable: function submitdisable() {
        return !this.content;
      }
    }, _this.methods = {
      // 点击表情
      clickEmoji: function clickEmoji(e) {
        var key = e.currentTarget.dataset.key;
        // this.setData({ msg: msg + key });

        this.content = this.content + key;
        // console.log(this.content);
        this.$apply();
      },
      handleContentInput: function handleContentInput(e) {
        this.content = e.detail.value;
      },
      handleEmoji: function handleEmoji() {
        this.showEmojis = !this.showEmojis;
        // console.log('handleEmoji');
      },
      handleSubmit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.type === 'post')) {
                    _context.next = 13;
                    break;
                  }

                  _context.t0 = _api2.default;
                  _context.t1 = this.ID;
                  _context.next = 5;
                  return this.$parent.fetchOpenGID();

                case 5:
                  _context.t2 = _context.sent;
                  _context.t3 = this.content;
                  _context.t4 = {
                    fieldID: _context.t1,
                    fieldType: 'post',
                    openGID: _context.t2,
                    commentContent: _context.t3
                  };
                  _context.t5 = {
                    url: 'updateComment',
                    method: 'POST',
                    data: _context.t4
                  };
                  _context.next = 11;
                  return _context.t0.authRequest.call(_context.t0, _context.t5);

                case 11:
                  _context.next = 38;
                  break;

                case 13:
                  if (!(this.type === 'comment')) {
                    _context.next = 26;
                    break;
                  }

                  _context.t6 = _api2.default;
                  _context.t7 = this.ID;
                  _context.next = 18;
                  return this.$parent.fetchOpenGID();

                case 18:
                  _context.t8 = _context.sent;
                  _context.t9 = this.content;
                  _context.t10 = {
                    commentID: _context.t7,
                    openGID: _context.t8,
                    commentContent: _context.t9
                  };
                  _context.t11 = {
                    url: 'updateSubcomment',
                    method: 'POST',
                    data: _context.t10
                  };
                  _context.next = 24;
                  return _context.t6.authRequest.call(_context.t6, _context.t11);

                case 24:
                  _context.next = 38;
                  break;

                case 26:
                  if (!(this.type === 'subcomment')) {
                    _context.next = 38;
                    break;
                  }

                  _context.t12 = _api2.default;
                  _context.t13 = this.ID;
                  _context.next = 31;
                  return this.$parent.fetchOpenGID();

                case 31:
                  _context.t14 = _context.sent;
                  _context.t15 = this.content;
                  _context.t16 = this.replyOpenID;
                  _context.t17 = {
                    commentID: _context.t13,
                    openGID: _context.t14,
                    commentContent: _context.t15,
                    replyOpenID: _context.t16
                  };
                  _context.t18 = {
                    url: 'updateSubcomment',
                    method: 'POST',
                    data: _context.t17
                  };
                  _context.next = 38;
                  return _context.t12.authRequest.call(_context.t12, _context.t18);

                case 38:
                  _context.next = 40;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '提交评论成功',
                    showCancel: false
                  });

                case 40:
                  _wepy2.default.navigateBack();

                case 41:
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
    key: 'onLoad',
    value: function onLoad(options) {
      this.ID = options.ID;
      this.type = options.type;
      this.replyOpenID = options.replyOpenID;
      if (this.type === 'post') {
        this.emojiable = 'emoji';
        _wepy2.default.setNavigationBarTitle({
          title: '评论'
        });
      }
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var emojiList, key;
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
                emojiList = [];
                _context2.t1 = regeneratorRuntime.keys(_emojis.emojis);

              case 13:
                if ((_context2.t2 = _context2.t1()).done) {
                  _context2.next = 24;
                  break;
                }

                key = _context2.t2.value;
                _context2.t3 = emojiList;
                _context2.t4 = key;
                _context2.next = 19;
                return (0, _emojis.emojiToPath)(key);

              case 19:
                _context2.t5 = _context2.sent;
                _context2.t6 = {
                  key: _context2.t4,
                  img: _context2.t5
                };

                _context2.t3.push.call(_context2.t3, _context2.t6);

                _context2.next = 13;
                break;

              case 24:
                this.emojiList = emojiList;

              case 25:
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/comment_new'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRfbmV3LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRvb2xiYXIiLCJUb29sYmFyIiwiZGF0YSIsImNvbnRlbnQiLCJ0eXBlIiwiSUQiLCJyZXBseU9wZW5JRCIsImVtb2ppYWJsZSIsInNob3dFbW9qaXMiLCJlbW9qaUxpc3QiLCJjb21wdXRlZCIsInN1Ym1pdGRpc2FibGUiLCJtZXRob2RzIiwiY2xpY2tFbW9qaSIsImUiLCJrZXkiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIiRhcHBseSIsImhhbmRsZUNvbnRlbnRJbnB1dCIsImRldGFpbCIsInZhbHVlIiwiaGFuZGxlRW1vamkiLCJoYW5kbGVTdWJtaXQiLCJhcGkiLCIkcGFyZW50IiwiZmV0Y2hPcGVuR0lEIiwiZmllbGRJRCIsImZpZWxkVHlwZSIsIm9wZW5HSUQiLCJjb21tZW50Q29udGVudCIsInVybCIsIm1ldGhvZCIsImF1dGhSZXF1ZXN0IiwiY29tbWVudElEIiwid2VweSIsInNob3dNb2RhbCIsInRpdGxlIiwic2hvd0NhbmNlbCIsIm5hdmlnYXRlQmFjayIsIm9wdGlvbnMiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJhdXRob3JpemVSZXF1aXJlZCIsImdyb3VwUmVxdWlyZWQiLCJoaWRlU2hhcmVNZW51IiwiZW1vamlzIiwiaW1nIiwicHVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyx1QkFBaUI7QUFDZixtQkFBVyxzQkFESTtBQUVmLG9CQUFZLHVCQUZHO0FBR2YsaUJBQVMsb0JBSE07QUFJZixpQkFBUyxv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O0FBRFhBLHFCO0FBQ0ErQixxQjs7OzZCQUZRQyxJOzs7Ozs7QUFLWixxQkFBS3RDLFNBQUwsR0FBaUJBLFNBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0grQjBCLGVBQUthLEk7O2tCQUFuQnhELEsiLCJmaWxlIjoiY29tbWVudF9uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQC9jb21wb25lbnRzL3Rvb2xiYXInO1xuaW1wb3J0IGFwaSBmcm9tICdAL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyBlbW9qaXMsIGVtb2ppVG9QYXRoIH0gZnJvbSAnQC91dGlscy9lbW9qaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zue5aSNJyxcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICdpLXBhbmVsJzogJy4uL2l2aWV3L3BhbmVsL2luZGV4JyxcbiAgICAgICdpLWJ1dHRvbic6ICcuLi9pdmlldy9idXR0b24vaW5kZXgnLFxuICAgICAgJ2ktcm93JzogJy4uL2l2aWV3L3Jvdy9pbmRleCcsXG4gICAgICAnaS1jb2wnOiAnLi4vaXZpZXcvY29sL2luZGV4JyxcbiAgICAgICdpLWNhcmQnOiAnLi4vaXZpZXcvY2FyZC9pbmRleCcsXG4gICAgICAnaS1pbnB1dCc6ICcuLi9pdmlldy9pbnB1dC9pbmRleCcsXG4gICAgICAnaS1jZWxsLWdyb3VwJzogJy4uL2l2aWV3L2NlbGwtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ2ktY2VsbCc6ICcuLi9pdmlldy9jZWxsL2luZGV4JyxcbiAgICAgICdpLWljb24nOiAnLi4vaXZpZXcvaWNvbi9pbmRleCdcbiAgICB9XG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0b29sYmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsZWZ0LnN5bmNcIjpcImVtb2ppYWJsZVwiLFwicmlnaHRcIjpcInN1Ym1pdFwiLFwidi1iaW5kOnN1Ym1pdERpc2FibGUuc3luY1wiOlwic3VibWl0ZGlzYWJsZVwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcInRvb2xiYXJcIjp7XCJ2LW9uOmVtb2ppXCI6XCJoYW5kbGVFbW9qaVwiLFwidi1vbjpzdWJtaXRcIjpcImhhbmRsZVN1Ym1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHRvb2xiYXI6IFRvb2xiYXJcbiAgfTtcblxuICBkYXRhID0ge1xuICAgIGNvbnRlbnQ6ICcnLFxuICAgIHR5cGU6IG51bGwsIC8vIHBvc3QsIGNvbW1lbnQsIHN1YmNvbW1lbnRcbiAgICBJRDogbnVsbCxcbiAgICByZXBseU9wZW5JRDogbnVsbCxcbiAgICBlbW9qaWFibGU6ICcnLFxuICAgIHNob3dFbW9qaXM6IGZhbHNlLFxuICAgIGVtb2ppTGlzdDogW11cbiAgfTtcblxuICBjb21wdXRlZCA9IHtcbiAgICBzdWJtaXRkaXNhYmxlKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmNvbnRlbnQ7XG4gICAgfVxuICB9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g54K55Ye76KGo5oOFXG4gICAgY2xpY2tFbW9qaTogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgLy8gdGhpcy5zZXREYXRhKHsgbXNnOiBtc2cgKyBrZXkgfSk7XG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgKyBrZXk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9LFxuICAgIGhhbmRsZUNvbnRlbnRJbnB1dChlKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGhhbmRsZUVtb2ppKCkge1xuICAgICAgdGhpcy5zaG93RW1vamlzID0gIXRoaXMuc2hvd0Vtb2ppcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdoYW5kbGVFbW9qaScpO1xuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2hhbmRsZVN1Ym1pdCcpO1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Bvc3QnKSB7XG4gICAgICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAndXBkYXRlQ29tbWVudCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZmllbGRJRDogdGhpcy5JRCxcbiAgICAgICAgICAgIGZpZWxkVHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxuICAgICAgICAgICAgY29tbWVudENvbnRlbnQ6IHRoaXMuY29udGVudFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAndXBkYXRlU3ViY29tbWVudCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29tbWVudElEOiB0aGlzLklELFxuICAgICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxuICAgICAgICAgICAgY29tbWVudENvbnRlbnQ6IHRoaXMuY29udGVudFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3N1YmNvbW1lbnQnKSB7XG4gICAgICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAndXBkYXRlU3ViY29tbWVudCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29tbWVudElEOiB0aGlzLklELFxuICAgICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxuICAgICAgICAgICAgY29tbWVudENvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHJlcGx5T3BlbklEOiB0aGlzLnJlcGx5T3BlbklEXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICBjb250ZW50OiAn5o+Q5Lqk6K+E6K665oiQ5YqfJyxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLklEID0gb3B0aW9ucy5JRDtcbiAgICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgdGhpcy5yZXBseU9wZW5JRCA9IG9wdGlvbnMucmVwbHlPcGVuSUQ7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Bvc3QnKSB7XG4gICAgICB0aGlzLmVtb2ppYWJsZSA9ICdlbW9qaSc7XG4gICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgIHRpdGxlOiAn6K+E6K66J1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIGlmIChcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuYXV0aG9yaXplUmVxdWlyZWQoKSB8fFxuICAgICAgIWF3YWl0IHRoaXMuJHBhcmVudC5ncm91cFJlcXVpcmVkKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgd2VweS5oaWRlU2hhcmVNZW51KCk7XG4gICAgbGV0IGVtb2ppTGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBlbW9qaXMpIHtcbiAgICAgIGVtb2ppTGlzdC5wdXNoKHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGltZzogYXdhaXQgZW1vamlUb1BhdGgoa2V5KVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuZW1vamlMaXN0ID0gZW1vamlMaXN0O1xuICB9XG59XG4iXX0=