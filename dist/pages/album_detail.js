'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _image = require('./../utils/image.js');

var _image2 = _interopRequireDefault(_image);

var _lodash = require('./../npm/lodash/lodash.js');

var _lodash2 = _interopRequireDefault(_lodash);

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
      navigationBarTitleText: '查看相册',
      usingComponents: {
        'i-panel': '../iview/panel/index',
        'i-button': '../iview/button/index',
        'i-row': '../iview/row/index',
        'i-col': '../iview/col/index',
        'i-cell-group': '../iview/cell-group/index',
        'i-cell': '../iview/cell/index',
        'i-grid': '../iview/grid/index',
        'i-icon': '../iview/icon/index',
        'i-checkbox': '../iview/checkbox/index',
        'i-checkbox-group': '../iview/checkbox-group/index',
        'i-modal': '../iview/modal/index',
        'i-action-sheet': '../iview/action-sheet/index',
        'i-avatar': '../iview/avatar/index'
      },
      enablePullDownRefresh: true
    }, _this.components = {}, _this.data = {
      albumID: null,
      album: null,
      isChoose: false,
      current: [],
      disabled: true,
      actionsCurrentImageKey: null,
      confirmActions: [{
        id: 'cancel',
        name: '取消'
      }, {
        id: 'confirm',
        name: '删除',
        color: '#ed3f14',
        loading: false
      }],
      confirmVisiable: false,
      actionsVisible: false,
      actions: [{
        id: 'del',
        name: '删除',
        icon: 'trash',
        openType: 'trash_fill'
      }, {
        id: 'multi',
        name: '多选',
        icon: 'other',
        openType: 'other'
      }]
    }, _this.methods = {
      // 预览图片
      previewImage: function previewImage(imageKey) {
        var current = _lodash2.default.find(this.album.images, function (x) {
          return x.key === imageKey;
        }).url;
        var imgListUrl = this.album.images.map(function (x) {
          return x.url;
        });
        _wepy2.default.previewImage({
          current: current, // 当前显示图片的http链接
          urls: imgListUrl // 需要预览的图片http链接列表
        });
      },
      handleActionClick: function handleActionClick(_ref2) {
        var detail = _ref2.detail;

        var id = this.actions[detail.index].id;
        this.actionsVisible = false;
        if (id === 'del') {
          this.confirmVisiable = true;
        } else if (id === 'multi') {
          this.isChoose = true;
        }
      },
      handleActionCancel: function handleActionCancel() {
        this.actionsVisible = false;
      },
      handleDelete: function handleDelete(_ref3) {
        var detail = _ref3.detail;

        var id = this.confirmActions[detail.index].id;
        if (id === 'confirm') {
          this.deleteImages(this.current);
        }
        this.confirmVisiable = false;
        this.isChoose = false;
      },
      more_op: function more_op(imageKey) {
        this.actionsCurrentImageKey = imageKey;
        this.current = [imageKey];
        this.actionsVisible = true;
      },
      handleChoiseChange: function handleChoiseChange(e) {
        // console.log('handleChoiseChange');
        // console.log(e.detail.value);
        if (e.detail.value.length === 0) {
          // console.log('empty');
          this.disabled = true;
        } else {
          // console.log('not empty');
          this.disabled = false;
        }
        this.current = e.detail.value;
        // console.log(this.current);
      },

      handleLongPress: function handleLongPress(event) {
        this.isChoose = true;
      },
      handleCancelMulti: function handleCancelMulti() {
        this.isChoose = false;
      },
      handleDeleteMulti: function handleDeleteMulti() {
        this.confirmVisiable = true;
      },


      // 上传图片
      addImage: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _wepy2.default.navigateTo({
                    url: '/pages/album_insert_image?album_id=' + this.albumID
                  });

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function addImage() {
          return _ref4.apply(this, arguments);
        }

        return addImage;
      }(),
      handleCancle: function handleCancle() {
        this.isChoose = false;
      },
      handleChoose: function handleChoose() {
        this.isChoose = true;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'deleteImages',


    // 批量删除图片
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(keys) {
        var _this2 = this;

        var images;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                images = this.album.images.filter(function (x) {
                  return keys.indexOf(x.key) !== -1;
                });

                if (!(images.length === 0)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 4;
                return _wepy2.default.showModal({
                  title: '错误',
                  content: '待删除的图片列表为空',
                  showCancel: false
                });

              case 4:
                return _context2.abrupt('return');

              case 5:
                if (!(this.album.createrOpenID !== this.$parent.globalData.openID && _lodash2.default.some(images, function (x) {
                  return x.uploaderOpenID !== _this2.$parent.globalData.openID;
                }))) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return _wepy2.default.showModal({
                  title: '错误',
                  content: '你不具有删除这些图片的权限',
                  showCancel: false
                });

              case 8:
                return _context2.abrupt('return');

              case 9:
                _context2.t0 = _api2.default;
                _context2.next = 12;
                return this.$parent.fetchOpenGID();

              case 12:
                _context2.t1 = _context2.sent;
                _context2.t2 = this.albumID;
                _context2.t3 = images.map(function (x) {
                  return x.key;
                });
                _context2.t4 = {
                  openGID: _context2.t1,
                  albumID: _context2.t2,
                  images: _context2.t3
                };
                _context2.t5 = {
                  url: 'deleteAlbumImages',
                  method: 'POST',
                  data: _context2.t4
                };
                _context2.next = 19;
                return _context2.t0.authRequest.call(_context2.t0, _context2.t5);

              case 19:
                this.refreshImages();

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteImages(_x) {
        return _ref5.apply(this, arguments);
      }

      return deleteImages;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.stopPullDownRefresh();
      this.refreshImages();
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.albumID = options.album_id;
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      return {
        title: '我分享了一个群相册：' + this.album.albumTitle,
        path: '/pages/album_detail?openGID=' + this.$parent.globalData.openGID + '&album_id=' + this.albumID,
        imageUrl: '/images/logo.png'
      };
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
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
                this.refreshImages();

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow(_x2) {
        return _ref6.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'refreshImages',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var ans;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _wepy2.default.showNavigationBarLoading();
                _context4.t0 = _api2.default;
                _context4.next = 4;
                return this.$parent.fetchOpenGID();

              case 4:
                _context4.t1 = _context4.sent;
                _context4.t2 = this.albumID;
                _context4.t3 = {
                  openGID: _context4.t1,
                  albumID: _context4.t2
                };
                _context4.t4 = {
                  url: 'singleAlbum',
                  method: 'POST',
                  data: _context4.t3,
                  methods: 'POST'
                };
                _context4.next = 10;
                return _context4.t0.authRequest.call(_context4.t0, _context4.t4, false);

              case 10:
                ans = _context4.sent;

                if (!(ans.data.success === -1)) {
                  _context4.next = 16;
                  break;
                }

                _context4.next = 14;
                return _wepy2.default.showModal({
                  title: '错误',
                  content: '该相册已删除',
                  showCancel: false
                });

              case 14:
                _wepy2.default.navigateBack();
                return _context4.abrupt('return');

              case 16:
                this.album = ans.data;
                _context4.next = 19;
                return _image2.default.fixImagesUrls(this.album.images);

              case 19:
                _wepy2.default.hideNavigationBarLoading();
                _wepy2.default.setNavigationBarTitle({
                  title: '群相册：' + this.album.albumTitle
                });
                this.$apply();

              case 22:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function refreshImages() {
        return _ref7.apply(this, arguments);
      }

      return refreshImages;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/album_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtX2RldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJjb21wb25lbnRzIiwiZGF0YSIsImFsYnVtSUQiLCJhbGJ1bSIsImlzQ2hvb3NlIiwiY3VycmVudCIsImRpc2FibGVkIiwiYWN0aW9uc0N1cnJlbnRJbWFnZUtleSIsImNvbmZpcm1BY3Rpb25zIiwiaWQiLCJuYW1lIiwiY29sb3IiLCJsb2FkaW5nIiwiY29uZmlybVZpc2lhYmxlIiwiYWN0aW9uc1Zpc2libGUiLCJhY3Rpb25zIiwiaWNvbiIsIm9wZW5UeXBlIiwibWV0aG9kcyIsInByZXZpZXdJbWFnZSIsImltYWdlS2V5IiwiXyIsImZpbmQiLCJpbWFnZXMiLCJ4Iiwia2V5IiwidXJsIiwiaW1nTGlzdFVybCIsIm1hcCIsIndlcHkiLCJ1cmxzIiwiaGFuZGxlQWN0aW9uQ2xpY2siLCJkZXRhaWwiLCJpbmRleCIsImhhbmRsZUFjdGlvbkNhbmNlbCIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZUltYWdlcyIsIm1vcmVfb3AiLCJoYW5kbGVDaG9pc2VDaGFuZ2UiLCJlIiwidmFsdWUiLCJsZW5ndGgiLCJoYW5kbGVMb25nUHJlc3MiLCJldmVudCIsImhhbmRsZUNhbmNlbE11bHRpIiwiaGFuZGxlRGVsZXRlTXVsdGkiLCJhZGRJbWFnZSIsIm5hdmlnYXRlVG8iLCJoYW5kbGVDYW5jbGUiLCJoYW5kbGVDaG9vc2UiLCJrZXlzIiwiZmlsdGVyIiwiaW5kZXhPZiIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjcmVhdGVyT3BlbklEIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJvcGVuSUQiLCJzb21lIiwidXBsb2FkZXJPcGVuSUQiLCJhcGkiLCJmZXRjaE9wZW5HSUQiLCJvcGVuR0lEIiwibWV0aG9kIiwiYXV0aFJlcXVlc3QiLCJyZWZyZXNoSW1hZ2VzIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIm9wdGlvbnMiLCJhbGJ1bV9pZCIsImFsYnVtVGl0bGUiLCJwYXRoIiwiaW1hZ2VVcmwiLCJhdXRob3JpemVSZXF1aXJlZCIsImdyb3VwUmVxdWlyZWQiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0Iiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwiYW5zIiwic3VjY2VzcyIsIm5hdmlnYXRlQmFjayIsImltYWdlIiwiZml4SW1hZ2VzVXJscyIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsdUJBQWlCO0FBQ2YsbUJBQVcsc0JBREk7QUFFZixvQkFBWSx1QkFGRztBQUdmLGlCQUFTLG9CQUhNO0FBSWYsaUJBQVMsb0JBSk07QUFLZix3QkFBZ0IsMkJBTEQ7QUFNZixrQkFBVSxxQkFOSztBQU9mLGtCQUFVLHFCQVBLO0FBUWYsa0JBQVUscUJBUks7QUFTZixzQkFBYyx5QkFUQztBQVVmLDRCQUFvQiwrQkFWTDtBQVdmLG1CQUFXLHNCQVhJO0FBWWYsMEJBQWtCLDZCQVpIO0FBYWYsb0JBQVk7QUFiRyxPQUZWO0FBaUJQQyw2QkFBdUI7QUFqQmhCLEssUUFvQlRDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxlQUFTLElBREo7QUFFTEMsYUFBTyxJQUZGO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsZUFBUyxFQUpKO0FBS0xDLGdCQUFVLElBTEw7QUFNTEMsOEJBQXdCLElBTm5CO0FBT0xDLHNCQUFnQixDQUNkO0FBQ0VDLFlBQUksUUFETjtBQUVFQyxjQUFNO0FBRlIsT0FEYyxFQUtkO0FBQ0VELFlBQUks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QVZFYSxtQjs7c0JBWUFBLElBQUkvRSxJQUFKLENBQVNnRixPQUFULEtBQXFCLENBQUMsQzs7Ozs7O3VCQUNsQnBELGVBQUt3QixTQUFMLENBQWU7QUFDbkJDLHlCQUFPLElBRFk7QUFFbkJDLDJCQUFTLFFBRlU7QUFHbkJDLDhCQUFZO0FBSE8saUJBQWYsQzs7O0FBS04zQiwrQkFBS3FELFlBQUw7Ozs7QUFHRixxQkFBSy9FLEtBQUwsR0FBYTZFLElBQUkvRSxJQUFqQjs7dUJBQ01rRixnQkFBTUMsYUFBTixDQUFvQixLQUFLakYsS0FBTCxDQUFXb0IsTUFBL0IsQzs7O0FBQ05NLCtCQUFLd0Qsd0JBQUw7QUFDQXhELCtCQUFLeUQscUJBQUwsQ0FBMkI7QUFDekJoQyx5QkFBTyxTQUFTLEtBQUtuRCxLQUFMLENBQVdxRTtBQURGLGlCQUEzQjtBQUdBLHFCQUFLZSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBck8rQjFELGVBQUsyRCxJOztrQkFBbkI3RixLIiwiZmlsZSI6ImFsYnVtX2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcbmltcG9ydCBpbWFnZSBmcm9tICdAL3V0aWxzL2ltYWdlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIEZJWE1FIOepuuWAvOajgOafpVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+afpeeci+ebuOWGjCcsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnaS1wYW5lbCc6ICcuLi9pdmlldy9wYW5lbC9pbmRleCcsXG4gICAgICAnaS1idXR0b24nOiAnLi4vaXZpZXcvYnV0dG9uL2luZGV4JyxcbiAgICAgICdpLXJvdyc6ICcuLi9pdmlldy9yb3cvaW5kZXgnLFxuICAgICAgJ2ktY29sJzogJy4uL2l2aWV3L2NvbC9pbmRleCcsXG4gICAgICAnaS1jZWxsLWdyb3VwJzogJy4uL2l2aWV3L2NlbGwtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ2ktY2VsbCc6ICcuLi9pdmlldy9jZWxsL2luZGV4JyxcbiAgICAgICdpLWdyaWQnOiAnLi4vaXZpZXcvZ3JpZC9pbmRleCcsXG4gICAgICAnaS1pY29uJzogJy4uL2l2aWV3L2ljb24vaW5kZXgnLFxuICAgICAgJ2ktY2hlY2tib3gnOiAnLi4vaXZpZXcvY2hlY2tib3gvaW5kZXgnLFxuICAgICAgJ2ktY2hlY2tib3gtZ3JvdXAnOiAnLi4vaXZpZXcvY2hlY2tib3gtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ2ktbW9kYWwnOiAnLi4vaXZpZXcvbW9kYWwvaW5kZXgnLFxuICAgICAgJ2ktYWN0aW9uLXNoZWV0JzogJy4uL2l2aWV3L2FjdGlvbi1zaGVldC9pbmRleCcsXG4gICAgICAnaS1hdmF0YXInOiAnLi4vaXZpZXcvYXZhdGFyL2luZGV4J1xuICAgIH0sXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH07XG5cbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGRhdGEgPSB7XG4gICAgYWxidW1JRDogbnVsbCxcbiAgICBhbGJ1bTogbnVsbCxcbiAgICBpc0Nob29zZTogZmFsc2UsXG4gICAgY3VycmVudDogW10sXG4gICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgYWN0aW9uc0N1cnJlbnRJbWFnZUtleTogbnVsbCxcbiAgICBjb25maXJtQWN0aW9uczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2NhbmNlbCcsXG4gICAgICAgIG5hbWU6ICflj5bmtognXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2NvbmZpcm0nLFxuICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcbiAgICAgICAgY29sb3I6ICcjZWQzZjE0JyxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH1cbiAgICBdLFxuICAgIGNvbmZpcm1WaXNpYWJsZTogZmFsc2UsXG4gICAgYWN0aW9uc1Zpc2libGU6IGZhbHNlLFxuICAgIGFjdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdkZWwnLFxuICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcbiAgICAgICAgaWNvbjogJ3RyYXNoJyxcbiAgICAgICAgb3BlblR5cGU6ICd0cmFzaF9maWxsJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdtdWx0aScsXG4gICAgICAgIG5hbWU6ICflpJrpgIknLFxuICAgICAgICBpY29uOiAnb3RoZXInLFxuICAgICAgICBvcGVuVHlwZTogJ290aGVyJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBtZXRob2RzID0ge1xuICAgIC8vIOmihOiniOWbvueJh1xuICAgIHByZXZpZXdJbWFnZShpbWFnZUtleSkge1xuICAgICAgbGV0IGN1cnJlbnQgPSBfLmZpbmQodGhpcy5hbGJ1bS5pbWFnZXMsIHggPT4geC5rZXkgPT09IGltYWdlS2V5KS51cmw7XG4gICAgICBsZXQgaW1nTGlzdFVybCA9IHRoaXMuYWxidW0uaW1hZ2VzLm1hcCh4ID0+IHgudXJsKTtcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgY3VycmVudDogY3VycmVudCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICB1cmxzOiBpbWdMaXN0VXJsIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVBY3Rpb25DbGljayh7IGRldGFpbCB9KSB7XG4gICAgICBsZXQgaWQgPSB0aGlzLmFjdGlvbnNbZGV0YWlsLmluZGV4XS5pZDtcbiAgICAgIHRoaXMuYWN0aW9uc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgIGlmIChpZCA9PT0gJ2RlbCcpIHtcbiAgICAgICAgdGhpcy5jb25maXJtVmlzaWFibGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChpZCA9PT0gJ211bHRpJykge1xuICAgICAgICB0aGlzLmlzQ2hvb3NlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUFjdGlvbkNhbmNlbCgpIHtcbiAgICAgIHRoaXMuYWN0aW9uc1Zpc2libGUgPSBmYWxzZTtcbiAgICB9LFxuICAgIGhhbmRsZURlbGV0ZSh7IGRldGFpbCB9KSB7XG4gICAgICBsZXQgaWQgPSB0aGlzLmNvbmZpcm1BY3Rpb25zW2RldGFpbC5pbmRleF0uaWQ7XG4gICAgICBpZiAoaWQgPT09ICdjb25maXJtJykge1xuICAgICAgICB0aGlzLmRlbGV0ZUltYWdlcyh0aGlzLmN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25maXJtVmlzaWFibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNDaG9vc2UgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgbW9yZV9vcChpbWFnZUtleSkge1xuICAgICAgdGhpcy5hY3Rpb25zQ3VycmVudEltYWdlS2V5ID0gaW1hZ2VLZXk7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBbaW1hZ2VLZXldO1xuICAgICAgdGhpcy5hY3Rpb25zVmlzaWJsZSA9IHRydWU7XG4gICAgfSxcbiAgICBoYW5kbGVDaG9pc2VDaGFuZ2UoZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2hhbmRsZUNob2lzZUNoYW5nZScpO1xuICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW1wdHknKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbm90IGVtcHR5Jyk7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyZW50KTtcbiAgICB9LFxuICAgIGhhbmRsZUxvbmdQcmVzczogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMuaXNDaG9vc2UgPSB0cnVlO1xuICAgIH0sXG4gICAgaGFuZGxlQ2FuY2VsTXVsdGkoKSB7XG4gICAgICB0aGlzLmlzQ2hvb3NlID0gZmFsc2U7XG4gICAgfSxcbiAgICBoYW5kbGVEZWxldGVNdWx0aSgpIHtcbiAgICAgIHRoaXMuY29uZmlybVZpc2lhYmxlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLy8g5LiK5Lyg5Zu+54mHXG4gICAgYXN5bmMgYWRkSW1hZ2UoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvYWxidW1faW5zZXJ0X2ltYWdlP2FsYnVtX2lkPScgKyB0aGlzLmFsYnVtSURcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVDYW5jbGUoKSB7XG4gICAgICB0aGlzLmlzQ2hvb3NlID0gZmFsc2U7XG4gICAgfSxcbiAgICBoYW5kbGVDaG9vc2UoKSB7XG4gICAgICB0aGlzLmlzQ2hvb3NlID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8g5om56YeP5Yig6Zmk5Zu+54mHXG4gIGFzeW5jIGRlbGV0ZUltYWdlcyhrZXlzKSB7XG4gICAgbGV0IGltYWdlcyA9IHRoaXMuYWxidW0uaW1hZ2VzLmZpbHRlcih4ID0+IGtleXMuaW5kZXhPZih4LmtleSkgIT09IC0xKTtcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAgIGNvbnRlbnQ6ICflvoXliKDpmaTnmoTlm77niYfliJfooajkuLrnqbonLFxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5hbGJ1bS5jcmVhdGVyT3BlbklEICE9PSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuSUQgJiZcbiAgICAgIF8uc29tZShpbWFnZXMsIHggPT4geC51cGxvYWRlck9wZW5JRCAhPT0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklEKVxuICAgICkge1xuICAgICAgYXdhaXQgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAgIGNvbnRlbnQ6ICfkvaDkuI3lhbfmnInliKDpmaTov5nkupvlm77niYfnmoTmnYPpmZAnLFxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XG4gICAgICB1cmw6ICdkZWxldGVBbGJ1bUltYWdlcycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxuICAgICAgICBhbGJ1bUlEOiB0aGlzLmFsYnVtSUQsXG4gICAgICAgIGltYWdlczogaW1hZ2VzLm1hcCh4ID0+IHgua2V5KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucmVmcmVzaEltYWdlcygpO1xuICB9XG5cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG4gICAgdGhpcy5yZWZyZXNoSW1hZ2VzKCk7XG4gIH1cblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHRoaXMuYWxidW1JRCA9IG9wdGlvbnMuYWxidW1faWQ7XG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5oiR5YiG5Lqr5LqG5LiA5Liq576k55u45YaM77yaJyArIHRoaXMuYWxidW0uYWxidW1UaXRsZSxcbiAgICAgIHBhdGg6IGAvcGFnZXMvYWxidW1fZGV0YWlsP29wZW5HSUQ9JHt0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuR0lEfSZhbGJ1bV9pZD0ke3RoaXMuYWxidW1JRH1gLFxuICAgICAgaW1hZ2VVcmw6ICcvaW1hZ2VzL2xvZ28ucG5nJ1xuICAgIH07XG4gIH1cblxuICBhc3luYyBvblNob3cob3B0aW9ucykge1xuICAgIGlmIChcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuYXV0aG9yaXplUmVxdWlyZWQoKSB8fFxuICAgICAgIWF3YWl0IHRoaXMuJHBhcmVudC5ncm91cFJlcXVpcmVkKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucmVmcmVzaEltYWdlcygpO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaEltYWdlcygpIHtcbiAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICAgIGxldCBhbnMgPSBhd2FpdCBhcGkuYXV0aFJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogJ3NpbmdsZUFsYnVtJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBvcGVuR0lEOiBhd2FpdCB0aGlzLiRwYXJlbnQuZmV0Y2hPcGVuR0lEKCksXG4gICAgICAgICAgYWxidW1JRDogdGhpcy5hbGJ1bUlEXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6ICdQT1NUJ1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBpZiAoYW5zLmRhdGEuc3VjY2VzcyA9PT0gLTEpIHtcbiAgICAgIGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICBjb250ZW50OiAn6K+l55u45YaM5bey5Yig6ZmkJyxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hbGJ1bSA9IGFucy5kYXRhO1xuICAgIGF3YWl0IGltYWdlLmZpeEltYWdlc1VybHModGhpcy5hbGJ1bS5pbWFnZXMpO1xuICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7XG4gICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgdGl0bGU6ICfnvqTnm7jlhozvvJonICsgdGhpcy5hbGJ1bS5hbGJ1bVRpdGxlXG4gICAgfSk7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxufVxuIl19