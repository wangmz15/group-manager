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
      navigationBarTitleText: '上传图片',
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
        'i-avatar': '../iview/avatar/index',
        'i-input': '../iview/input/index'
      },
      enablePullDownRefresh: false
    }, _this.components = {}, _this.data = {
      albumID: null,
      force_upload: false,
      description: null,
      images: []
    }, _this.methods = {
      addImages: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res, pendingImages, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, _ref3, networkType, _res, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, filepath, filename;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage();

                case 2:
                  res = _context.sent;
                  pendingImages = [];
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 7;
                  _iterator = res.tempFiles[Symbol.iterator]();

                case 9:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 34;
                    break;
                  }

                  file = _step.value;

                  if (!(file.size > 20 * 1024 * 1024)) {
                    _context.next = 17;
                    break;
                  }

                  _context.next = 14;
                  return _wepy2.default.showModal({
                    title: '错误',
                    content: '无法上传超过20M的图片',
                    showCancel: false
                  });

                case 14:
                  return _context.abrupt('return');

                case 17:
                  if (!(file.size > 3 * 1024 * 1024)) {
                    _context.next = 30;
                    break;
                  }

                  _context.next = 20;
                  return _wepy2.default.getNetworkType();

                case 20:
                  _ref3 = _context.sent;
                  networkType = _ref3.networkType;

                  if (!(networkType === '2g' || networkType === '3g' || networkType === '4g')) {
                    _context.next = 30;
                    break;
                  }

                  if (this.force_upload) {
                    _context.next = 28;
                    break;
                  }

                  _context.next = 26;
                  return _wepy2.default.showModal({
                    title: '警告',
                    content: '检测到你上传的图片较大，需要消耗较多流量，是否继续？'
                  });

                case 26:
                  _res = _context.sent;

                  this.force_upload = _res.confirm;

                case 28:
                  if (this.force_upload) {
                    _context.next = 30;
                    break;
                  }

                  return _context.abrupt('return');

                case 30:
                  pendingImages.push(file.path);

                case 31:
                  _iteratorNormalCompletion = true;
                  _context.next = 9;
                  break;

                case 34:
                  _context.next = 40;
                  break;

                case 36:
                  _context.prev = 36;
                  _context.t0 = _context['catch'](7);
                  _didIteratorError = true;
                  _iteratorError = _context.t0;

                case 40:
                  _context.prev = 40;
                  _context.prev = 41;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 43:
                  _context.prev = 43;

                  if (!_didIteratorError) {
                    _context.next = 46;
                    break;
                  }

                  throw _iteratorError;

                case 46:
                  return _context.finish(43);

                case 47:
                  return _context.finish(40);

                case 48:
                  // console.log(pendingImages);
                  _wepy2.default.showLoading({
                    title: '上传中'
                  });
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context.prev = 52;
                  _iterator2 = pendingImages[Symbol.iterator]();

                case 54:
                  if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                    _context.next = 69;
                    break;
                  }

                  filepath = _step2.value;
                  filename = filepath.substr(filepath.lastIndexOf('/') + 1);
                  _context.next = 59;
                  return _image2.default.uploadImage(filename, filepath);

                case 59:
                  _context.t1 = this.images;
                  _context.t2 = filename;
                  _context.next = 63;
                  return _image2.default.getUrl(filename);

                case 63:
                  _context.t3 = _context.sent;
                  _context.t4 = {
                    key: _context.t2,
                    url: _context.t3
                  };

                  _context.t1.push.call(_context.t1, _context.t4);

                case 66:
                  _iteratorNormalCompletion2 = true;
                  _context.next = 54;
                  break;

                case 69:
                  _context.next = 75;
                  break;

                case 71:
                  _context.prev = 71;
                  _context.t5 = _context['catch'](52);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context.t5;

                case 75:
                  _context.prev = 75;
                  _context.prev = 76;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 78:
                  _context.prev = 78;

                  if (!_didIteratorError2) {
                    _context.next = 81;
                    break;
                  }

                  throw _iteratorError2;

                case 81:
                  return _context.finish(78);

                case 82:
                  return _context.finish(75);

                case 83:
                  _wepy2.default.hideLoading();
                  this.$apply();

                case 85:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[7, 36, 40, 48], [41,, 43, 47], [52, 71, 75, 83], [76,, 78, 82]]);
        }));

        function addImages() {
          return _ref2.apply(this, arguments);
        }

        return addImages;
      }(),
      handleDelete: function handleDelete(key) {
        this.images = this.images.filter(function (x) {
          return x.key !== key;
        });
      },
      handleDescChange: function handleDescChange(e) {
        this.description = e.detail.value;
      },
      handleSubmit: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _this2 = this;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (this.description) {
                    _context2.next = 3;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '错误',
                    content: '请给这组照片取一个名字',
                    showCancel: false
                  });
                  return _context2.abrupt('return');

                case 3:
                  if (!(this.images.length === 0)) {
                    _context2.next = 6;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '错误',
                    content: '请选择图片',
                    showCancel: false
                  });
                  return _context2.abrupt('return');

                case 6:
                  _context2.t0 = _api2.default;
                  _context2.next = 9;
                  return this.$parent.fetchOpenGID();

                case 9:
                  _context2.t1 = _context2.sent;
                  _context2.t2 = this.albumID;
                  _context2.t3 = this.images.map(function (x) {
                    return {
                      key: x.key,
                      description: _this2.description
                    };
                  });
                  _context2.t4 = {
                    openGID: _context2.t1,
                    albumID: _context2.t2,
                    images: _context2.t3
                  };
                  _context2.t5 = {
                    url: 'albumInsertImages',
                    method: 'POST',
                    data: _context2.t4
                  };
                  _context2.next = 16;
                  return _context2.t0.authRequest.call(_context2.t0, _context2.t5);

                case 16:
                  _wepy2.default.navigateBack();

                case 17:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function handleSubmit() {
          return _ref4.apply(this, arguments);
        }

        return handleSubmit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.albumID = options.album_id;
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
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
                _wepy2.default.hideShareMenu();

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow(_x) {
        return _ref5.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/album_insert_image'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtX2luc2VydF9pbWFnZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJjb21wb25lbnRzIiwiZGF0YSIsImFsYnVtSUQiLCJmb3JjZV91cGxvYWQiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsIm1ldGhvZHMiLCJhZGRJbWFnZXMiLCJ3ZXB5IiwiY2hvb3NlSW1hZ2UiLCJyZXMiLCJwZW5kaW5nSW1hZ2VzIiwidGVtcEZpbGVzIiwiZmlsZSIsInNpemUiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiZ2V0TmV0d29ya1R5cGUiLCJuZXR3b3JrVHlwZSIsImNvbmZpcm0iLCJwdXNoIiwicGF0aCIsInNob3dMb2FkaW5nIiwiZmlsZXBhdGgiLCJmaWxlbmFtZSIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwiaW1hZ2UiLCJ1cGxvYWRJbWFnZSIsImdldFVybCIsImtleSIsInVybCIsImhpZGVMb2FkaW5nIiwiJGFwcGx5IiwiaGFuZGxlRGVsZXRlIiwiZmlsdGVyIiwieCIsImhhbmRsZURlc2NDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJsZW5ndGgiLCJhcGkiLCIkcGFyZW50IiwiZmV0Y2hPcGVuR0lEIiwibWFwIiwib3BlbkdJRCIsIm1ldGhvZCIsImF1dGhSZXF1ZXN0IiwibmF2aWdhdGVCYWNrIiwib3B0aW9ucyIsImFsYnVtX2lkIiwiYXV0aG9yaXplUmVxdWlyZWQiLCJncm91cFJlcXVpcmVkIiwiaGlkZVNoYXJlTWVudSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyx1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OztBQUFBO0FBQUEsaUNBa0VBMkIsYUFsRUE7QUFBQTtBQUFBLHlCQXVFZSxLQUFLQyxPQUFMLENBQWFDLFlBQWIsRUF2RWY7O0FBQUE7QUFBQTtBQUFBLGlDQXdFUyxLQUFLN0MsT0F4RWQ7QUFBQSxpQ0F5RVEsS0FBS0csTUFBTCxDQUFZMkMsR0FBWixDQUFnQixhQUFLO0FBQzNCLDJCQUFPO0FBQ0xoQiwyQkFBS00sRUFBRU4sR0FERjtBQUVMNUIsbUNBQWEsT0FBS0E7QUFGYixxQkFBUDtBQUlELG1CQUxPLENBekVSO0FBQUE7QUF1RUE2QywyQkF2RUE7QUF3RUEvQywyQkF4RUE7QUF5RUFHLDBCQXpFQTtBQUFBO0FBQUE7QUFvRUY0Qix1QkFwRUUsRUFvRUcsbUJBcEVIO0FBcUVGaUIsMEJBckVFLEVBcUVNLE1BckVOO0FBc0VGakQsd0JBdEVFO0FBQUE7QUFBQTtBQUFBLHNDQWtFSWtELFdBbEVKOztBQUFBO0FBaUZOM0MsaUNBQUs0QyxZQUFMOztBQWpGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7OzJCQXFGSEMsTyxFQUFTO0FBQ2QsV0FBS25ELE9BQUwsR0FBZW1ELFFBQVFDLFFBQXZCO0FBQ0Q7Ozs7NEZBRVlELE87Ozs7Ozt1QkFFRixLQUFLUCxPQUFMLENBQWFTLGlCQUFiLEU7Ozs7Ozs7Ozs7O3VCQUNBLEtBQUtULE9BQUwsQ0FBYVUsYUFBYixFOzs7Ozs7Ozs7Ozs7OztBQUlUaEQsK0JBQUtpRCxhQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0grQmpELGVBQUtrRCxJOztrQkFBbkIvRCxLIiwiZmlsZSI6ImFsYnVtX2luc2VydF9pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcbmltcG9ydCBpbWFnZSBmcm9tICdAL3V0aWxzL2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4iuS8oOWbvueJhycsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnaS1wYW5lbCc6ICcuLi9pdmlldy9wYW5lbC9pbmRleCcsXG4gICAgICAnaS1idXR0b24nOiAnLi4vaXZpZXcvYnV0dG9uL2luZGV4JyxcbiAgICAgICdpLXJvdyc6ICcuLi9pdmlldy9yb3cvaW5kZXgnLFxuICAgICAgJ2ktY29sJzogJy4uL2l2aWV3L2NvbC9pbmRleCcsXG4gICAgICAnaS1jZWxsLWdyb3VwJzogJy4uL2l2aWV3L2NlbGwtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ2ktY2VsbCc6ICcuLi9pdmlldy9jZWxsL2luZGV4JyxcbiAgICAgICdpLWdyaWQnOiAnLi4vaXZpZXcvZ3JpZC9pbmRleCcsXG4gICAgICAnaS1pY29uJzogJy4uL2l2aWV3L2ljb24vaW5kZXgnLFxuICAgICAgJ2ktY2hlY2tib3gnOiAnLi4vaXZpZXcvY2hlY2tib3gvaW5kZXgnLFxuICAgICAgJ2ktY2hlY2tib3gtZ3JvdXAnOiAnLi4vaXZpZXcvY2hlY2tib3gtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ2ktbW9kYWwnOiAnLi4vaXZpZXcvbW9kYWwvaW5kZXgnLFxuICAgICAgJ2ktYWN0aW9uLXNoZWV0JzogJy4uL2l2aWV3L2FjdGlvbi1zaGVldC9pbmRleCcsXG4gICAgICAnaS1hdmF0YXInOiAnLi4vaXZpZXcvYXZhdGFyL2luZGV4JyxcbiAgICAgICdpLWlucHV0JzogJy4uL2l2aWV3L2lucHV0L2luZGV4J1xuICAgIH0sXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZVxuICB9O1xuXG4gIGNvbXBvbmVudHMgPSB7fTtcblxuICBkYXRhID0ge1xuICAgIGFsYnVtSUQ6IG51bGwsXG4gICAgZm9yY2VfdXBsb2FkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICBpbWFnZXM6IFtdXG4gIH07XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBhZGRJbWFnZXMoKSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSgpO1xuICAgICAgbGV0IHBlbmRpbmdJbWFnZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGZpbGUgb2YgcmVzLnRlbXBGaWxlcykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IDIwICogMTAyNCAqIDEwMjQpIHsgLy8gMjBNXG4gICAgICAgICAgYXdhaXQgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICAgICAgY29udGVudDogJ+aXoOazleS4iuS8oOi2hei/hzIwTeeahOWbvueJhycsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLnNpemUgPiAzICogMTAyNCAqIDEwMjQpIHsgLy8gM01cbiAgICAgICAgICBsZXQgeyBuZXR3b3JrVHlwZSB9ID0gYXdhaXQgd2VweS5nZXROZXR3b3JrVHlwZSgpO1xuICAgICAgICAgIGlmIChuZXR3b3JrVHlwZSA9PT0gJzJnJyB8fCBuZXR3b3JrVHlwZSA9PT0gJzNnJyB8fCBuZXR3b3JrVHlwZSA9PT0gJzRnJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcmNlX3VwbG9hZCkge1xuICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K2m5ZGKJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5qOA5rWL5Yiw5L2g5LiK5Lyg55qE5Zu+54mH6L6D5aSn77yM6ZyA6KaB5raI6ICX6L6D5aSa5rWB6YeP77yM5piv5ZCm57un57ut77yfJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5mb3JjZV91cGxvYWQgPSByZXMuY29uZmlybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JjZV91cGxvYWQpIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGVuZGluZ0ltYWdlcy5wdXNoKGZpbGUucGF0aCk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhwZW5kaW5nSW1hZ2VzKTtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+S4iuS8oOS4rSdcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgZmlsZXBhdGggb2YgcGVuZGluZ0ltYWdlcykge1xuICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlcGF0aC5zdWJzdHIoZmlsZXBhdGgubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgICBhd2FpdCBpbWFnZS51cGxvYWRJbWFnZShmaWxlbmFtZSwgZmlsZXBhdGgpO1xuICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGZpbGVuYW1lLFxuICAgICAgICAgIHVybDogYXdhaXQgaW1hZ2UuZ2V0VXJsKGZpbGVuYW1lKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICBoYW5kbGVEZWxldGUoa2V5KSB7XG4gICAgICB0aGlzLmltYWdlcyA9IHRoaXMuaW1hZ2VzLmZpbHRlcih4ID0+IHgua2V5ICE9PSBrZXkpO1xuICAgIH0sXG4gICAgaGFuZGxlRGVzY0NoYW5nZShlKSB7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZS5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICBhc3luYyBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICBpZiAoIXRoaXMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgICBjb250ZW50OiAn6K+357uZ6L+Z57uE54Wn54mH5Y+W5LiA5Liq5ZCN5a2XJyxcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICAgIGNvbnRlbnQ6ICfor7fpgInmi6nlm77niYcnLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhd2FpdCBhcGkuYXV0aFJlcXVlc3QoXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6ICdhbGJ1bUluc2VydEltYWdlcycsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxuICAgICAgICAgICAgYWxidW1JRDogdGhpcy5hbGJ1bUlELFxuICAgICAgICAgICAgaW1hZ2VzOiB0aGlzLmltYWdlcy5tYXAoeCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5OiB4LmtleSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLmFsYnVtSUQgPSBvcHRpb25zLmFsYnVtX2lkO1xuICB9XG5cbiAgYXN5bmMgb25TaG93KG9wdGlvbnMpIHtcbiAgICBpZiAoXG4gICAgICAhYXdhaXQgdGhpcy4kcGFyZW50LmF1dGhvcml6ZVJlcXVpcmVkKCkgfHxcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuZ3JvdXBSZXF1aXJlZCgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdlcHkuaGlkZVNoYXJlTWVudSgpO1xuICB9XG59XG4iXX0=