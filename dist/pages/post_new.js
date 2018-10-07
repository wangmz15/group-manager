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

var _image = require('./../utils/image.js');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('./../utils/emojis.js'),
    emojis = _require.emojis,
    emojiToPath = _require.emojiToPath;

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
      navigationBarTitleText: '发表帖子',
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
    }, _this.$repeat = {}, _this.$props = { "toolbar": { "left": "emoji|picture", "right": "submit", "xmlns:v-bind": "", "v-bind:submitDisable.sync": "submitdisable", "xmlns:v-on": "" } }, _this.$events = { "toolbar": { "v-on:emoji": "handleEmoji", "v-on:picture": "handlePicture", "v-on:submit": "handleSubmit" } }, _this.components = {
      toolbar: _toolbar2.default
    }, _this.data = {
      action: 'new', // new/edit,
      postID: null,
      title: '',
      content: '',
      toolarea: 'none', // emoji, picture
      emojiList: [],
      images: []
    }, _this.computed = {
      submitdisable: function submitdisable() {
        return !(this.title && this.content);
      }
    }, _this.methods = {
      // 点击表情
      clickEmoji: function clickEmoji(e) {
        var key = e.currentTarget.dataset.key;

        this.content = this.content + key;
        this.$apply();
      },
      handleTitleChange: function handleTitleChange(target) {
        this.title = target.detail.detail.value;
      },
      handleContentInput: function handleContentInput(e) {
        this.content = e.detail.value;
      },
      handleEmoji: function handleEmoji() {
        if (this.toolarea === 'emoji') this.toolarea = 'none';else this.toolarea = 'emoji';
      },
      handlePicture: function handlePicture() {
        if (this.toolarea === 'picture') this.toolarea = 'none';else this.toolarea = 'picture';
      },
      addPicture: function () {
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
                    _context.next = 70;
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

                  this.content = this.content + ('\n[pic' + (this.images.length - 1) + ']\n');

                case 67:
                  _iteratorNormalCompletion2 = true;
                  _context.next = 54;
                  break;

                case 70:
                  _context.next = 76;
                  break;

                case 72:
                  _context.prev = 72;
                  _context.t5 = _context['catch'](52);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context.t5;

                case 76:
                  _context.prev = 76;
                  _context.prev = 77;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 79:
                  _context.prev = 79;

                  if (!_didIteratorError2) {
                    _context.next = 82;
                    break;
                  }

                  throw _iteratorError2;

                case 82:
                  return _context.finish(79);

                case 83:
                  return _context.finish(76);

                case 84:
                  _wepy2.default.hideLoading();
                  this.$apply();

                case 86:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[7, 36, 40, 48], [41,, 43, 47], [52, 72, 76, 84], [77,, 79, 83]]);
        }));

        function addPicture() {
          return _ref2.apply(this, arguments);
        }

        return addPicture;
      }(),
      handleSubmit: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = _api2.default;
                  _context2.t1 = this.action === 'new' ? 'createPost' : 'updatePost';
                  _context2.next = 4;
                  return this.$parent.fetchOpenGID();

                case 4:
                  _context2.t2 = _context2.sent;
                  _context2.t3 = this.title;
                  _context2.t4 = this.content;
                  _context2.t5 = this.images.map(function (x) {
                    return x.key;
                  });
                  _context2.t6 = this.postID;
                  _context2.t7 = {
                    openGID: _context2.t2,
                    postTitle: _context2.t3,
                    postContent: _context2.t4,
                    images: _context2.t5,
                    postID: _context2.t6
                  };
                  _context2.t8 = {
                    url: _context2.t1,
                    method: 'POST',
                    data: _context2.t7
                  };
                  _context2.next = 13;
                  return _context2.t0.authRequest.call(_context2.t0, _context2.t8);

                case 13:
                  _wepy2.default.navigateBack();

                case 14:
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
    key: 'loadPost',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, key;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = _api2.default;
                _context3.next = 3;
                return this.$parent.fetchOpenGID();

              case 3:
                _context3.t1 = _context3.sent;
                _context3.t2 = this.postID;
                _context3.t3 = {
                  openGID: _context3.t1,
                  postID: _context3.t2
                };
                _context3.t4 = {
                  url: 'postDetail',
                  method: 'POST',
                  data: _context3.t3
                };
                _context3.next = 9;
                return _context3.t0.authRequest.call(_context3.t0, _context3.t4);

              case 9:
                res = _context3.sent;

                // console.log(res);
                this.title = res.data.postTitle;
                this.content = res.data.postContent;
                this.images = [];
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context3.prev = 16;
                _iterator3 = res.data.images[Symbol.iterator]();

              case 18:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context3.next = 30;
                  break;
                }

                key = _step3.value;
                _context3.t5 = this.images;
                _context3.t6 = key;
                _context3.next = 24;
                return _image2.default.getUrl(key);

              case 24:
                _context3.t7 = _context3.sent;
                _context3.t8 = {
                  key: _context3.t6,
                  url: _context3.t7
                };

                _context3.t5.push.call(_context3.t5, _context3.t8);

              case 27:
                _iteratorNormalCompletion3 = true;
                _context3.next = 18;
                break;

              case 30:
                _context3.next = 36;
                break;

              case 32:
                _context3.prev = 32;
                _context3.t9 = _context3['catch'](16);
                _didIteratorError3 = true;
                _iteratorError3 = _context3.t9;

              case 36:
                _context3.prev = 36;
                _context3.prev = 37;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 39:
                _context3.prev = 39;

                if (!_didIteratorError3) {
                  _context3.next = 42;
                  break;
                }

                throw _iteratorError3;

              case 42:
                return _context3.finish(39);

              case 43:
                return _context3.finish(36);

              case 44:
                this.$apply();

              case 45:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[16, 32, 36, 44], [37,, 39, 43]]);
      }));

      function loadPost() {
        return _ref5.apply(this, arguments);
      }

      return loadPost;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      // console.log(options);
      this.action = options.action || 'new';
      this.postID = options.post_id || null;
      if (this.action === 'edit') {
        this.loadPost();
      }
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var emojiList, key;
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
                _context4.next = 11;
                return _wepy2.default.hideShareMenu();

              case 11:
                emojiList = [];
                _context4.t1 = regeneratorRuntime.keys(emojis);

              case 13:
                if ((_context4.t2 = _context4.t1()).done) {
                  _context4.next = 24;
                  break;
                }

                key = _context4.t2.value;
                _context4.t3 = emojiList;
                _context4.t4 = key;
                _context4.next = 19;
                return emojiToPath(key);

              case 19:
                _context4.t5 = _context4.sent;
                _context4.t6 = {
                  key: _context4.t4,
                  img: _context4.t5
                };

                _context4.t3.push.call(_context4.t3, _context4.t6);

                _context4.next = 13;
                break;

              case 24:
                this.emojiList = emojiList;

              case 25:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onShow() {
        return _ref6.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/post_new'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RfbmV3LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJlbW9qaXMiLCJlbW9qaVRvUGF0aCIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRvb2xiYXIiLCJUb29sYmFyIiwiZGF0YSIsImFjdGlvbiIsInBvc3RJRCIsInRpdGxlIiwiY29udGVudCIsInRvb2xhcmVhIiwiZW1vamlMaXN0IiwiaW1hZ2VzIiwiY29tcHV0ZWQiLCJzdWJtaXRkaXNhYmxlIiwibWV0aG9kcyIsImNsaWNrRW1vamkiLCJlIiwia2V5IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkYXBwbHkiLCJoYW5kbGVUaXRsZUNoYW5nZSIsInRhcmdldCIsImRldGFpbCIsInZhbHVlIiwiaGFuZGxlQ29udGVudElucHV0IiwiaGFuZGxlRW1vamkiLCJoYW5kbGVQaWN0dXJlIiwiYWRkUGljdHVyZSIsIndlcHkiLCJjaG9vc2VJbWFnZSIsInJlcyIsInBlbmRpbmdJbWFnZXMiLCJ0ZW1wRmlsZXMiLCJmaWxlIiwic2l6ZSIsInNob3dNb2RhbCIsInNob3dDYW5jZWwiLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmtUeXBlIiwiZm9yY2VfdXBsb2FkIiwiY29uZmlybSIsInB1c2giLCJwYXRoIiwic2hvd0xvYWRpbmciLCJmaWxlcGF0aCIsImZpbGVuYW1lIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJpbWFnZSIsInVwbG9hZEltYWdlIiwiZ2V0VXJsIiwidXJsIiwibGVuZ3RoIiwiaGlkZUxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJhcGkiLCIkcGFyZW50IiwiZmV0Y2hPcGVuR0lEIiwibWFwIiwieCIsIm9wZW5HSUQiLCJwb3N0VGl0bGUiLCJwb3N0Q29udGVudCIsIm1ldGhvZCIsImF1dGhSZXF1ZXN0IiwibmF2aWdhdGVCYWNrIiwib3B0aW9ucyIsInBvc3RfaWQiLCJsb2FkUG9zdCIsImF1dGhvcml6ZVJlcXVpcmVkIiwiZ3JvdXBSZXF1aXJlZCIsImhpZGVTaGFyZU1lbnUiLCJpbWciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7ZUFDZ0NBLFFBQVEsaUJBQVIsQztJQUF4QkMsTSxZQUFBQSxNO0lBQVFDLFcsWUFBQUEsVzs7SUFFS0MsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG1CQUFXLHNCQURJO0FBRWYsb0JBQVksdUJBRkc7QUFHZixpQkFBUyxvQkFITTtBQUlmLGlCQUFTLG9CQUpNO0FBS2Ysa0JBQVUscUJBTEs7QUFNZixtQkFBVyxzQkFOSTtBQU9mLHdCQUFnQiwyQkFQRDtBQVFmLGtCQUFVLHFCQVJLO0FBU2Ysa0JBQVU7QUFUSztBQUZWLEssUUFjVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLFFBQU8sZUFBUixFQUF3QixTQUFRLFFBQWhDLEVBQXlDLGdCQUFlLEVBQXhELEVBQTJELDZCQUE0QixlQUF2RixFQUF1RyxjQUFhLEVBQXBILEVBQVgsRSxRQUNUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsY0FBYSxhQUFkLEVBQTRCLGdCQUFlLGVBQTNDLEVBQTJELGVBQWMsY0FBekUsRUFBWCxFLFFBQ1RDLFUsR0FBYTtBQUNWQyxlQUFTQztBQURDLEssUUFJWkMsSSxHQUFPO0FBQ0xDLGNBQVEsS0FESCxFQUNVO0FBQ2ZDLGNBQVEsSUFGSDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsZUFBUyxFQUpKO0FBS0xDLGdCQUFVLE1BTEwsRUFLYTtBQUNsQkMsaUJBQVcsRUFOTjtBQU9MQyxjQUFRO0FBUEgsSyxRQVVQQyxRLEdBQVc7QUFDVEMsbUJBRFMsMkJBQ087QUFDZCxlQUFPLEVBQUUsS0FBS04sS0FBTCxJQUFjLEtBQUtDLE9BQXJCLENBQVA7QUFDRDtBQUhRLEssUUFNWE0sTyxHQUFVO0FBQ1I7QUFDQUMsa0JBQVksb0JBQVNDLENBQVQsRUFBWTtBQUFBLFlBQ2RDLEdBRGMsR0FDTkQsRUFBRUUsYUFBRixDQUFnQkMsT0FEVixDQUNkRixHQURjOztBQUV0QixhQUFLVCxPQUFMLEdBQWUsS0FBS0EsT0FBTCxHQUFlUyxHQUE5QjtBQUNBLGFBQUtHLE1BQUw7QUFDRCxPQU5PO0FBT1JDLHVCQVBRLDZCQU9VQyxNQVBWLEVBT2tCO0FBQ3hCLGFBQUtmLEtBQUwsR0FBYWUsT0FBT0MsTUFBUCxDQUFjQSxNQUFkLENBQXFCQyxLQUFsQztBQUNELE9BVE87QUFVUkMsd0JBVlEsOEJBVVdULENBVlgsRUFVYztBQUNwQixhQUFLUixPQUFMLEdBQWVRLEVBQUVPLE1BQUYsQ0FBU0MsS0FBeEI7QUFDRCxPQVpPO0FBYVJFLGlCQWJRLHlCQWFNO0FBQ1osWUFBSSxLQUFLakIsUUFBTCxLQUFrQixPQUF0QixFQUErQixLQUFLQSxRQUFMLEdBQWdCLE1BQWhCLENBQS9CLEtBQ0ssS0FBS0EsUUFBTCxHQUFnQixPQUFoQjtBQUNOLE9BaEJPO0FBaUJSa0IsbUJBakJRLDJCQWlCUTtBQUNkLFlBQUksS0FBS2xCLFFBQUwsS0FBa0IsU0FBdEIsRUFBaUMsS0FBS0EsUUFBTCxHQUFnQixNQUFoQixDQUFqQyxLQUNLLEtBQUtBLFFBQUwsR0FBZ0IsU0FBaEI7QUFDTixPQXBCTztBQXFCRm1CLGdCQXJCRTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXNCVUMsZUFBS0MsV0FBTCxFQXRCVjs7QUFBQTtBQXNCRkMscUJBdEJFO0FBdUJGQywrQkF2QkUsR0F1QmMsRUF2QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQXdCV0QsSUFBSUUsU0F4QmY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3QkdDLHNCQXhCSDs7QUFBQSx3QkF5QkFBLEtBQUtDLElBQUwsR0FBWSxLQUFLLElBQUwsR0FBWSxJQXpCeEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkEwQklOLGVBQUtPLFNBQUwsQ0FBZTtBQUNuQjdCLDJCQUFPLElBRFk7QUFFbkJDLDZCQUFTLGNBRlU7QUFHbkI2QixnQ0FBWTtBQUhPLG1CQUFmLENBMUJKOztBQUFBO0FBQUE7O0FBQUE7QUFBQSx3QkFnQ09ILEtBQUtDLElBQUwsR0FBWSxJQUFJLElBQUosR0FBVyxJQWhDOUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkFpQzBCTixlQUFLUyxjQUFMLEVBakMxQjs7QUFBQTtBQUFBO0FBaUNJQyw2QkFqQ0osU0FpQ0lBLFdBakNKOztBQUFBLHdCQWtDRUEsZ0JBQWdCLElBQWhCLElBQXdCQSxnQkFBZ0IsSUFBeEMsSUFBZ0RBLGdCQUFnQixJQWxDbEU7QUFBQTtBQUFBO0FBQUE7O0FBQUEsc0JBbUNLLEtBQUtDLFlBbkNWO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBb0NrQlgsZUFBS08sU0FBTCxDQUFlO0FBQzdCN0IsMkJBQU8sSUFEc0I7QUFFN0JDLDZCQUFTO0FBRm9CLG1CQUFmLENBcENsQjs7QUFBQTtBQW9DTXVCLHNCQXBDTjs7QUF3Q0UsdUJBQUtTLFlBQUwsR0FBb0JULEtBQUlVLE9BQXhCOztBQXhDRjtBQUFBLHNCQTBDSyxLQUFLRCxZQTFDVjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQTZDSlIsZ0NBQWNVLElBQWQsQ0FBbUJSLEtBQUtTLElBQXhCOztBQTdDSTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBK0NOZCxpQ0FBS2UsV0FBTCxDQUFpQjtBQUNmckMsMkJBQU87QUFEUSxtQkFBakI7QUEvQ007QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFrRGV5QixhQWxEZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtER2EsMEJBbERIO0FBbURBQywwQkFuREEsR0FtRFdELFNBQVNFLE1BQVQsQ0FBZ0JGLFNBQVNHLFdBQVQsQ0FBcUIsR0FBckIsSUFBNEIsQ0FBNUMsQ0FuRFg7QUFBQTtBQUFBLHlCQW9ERUMsZ0JBQU1DLFdBQU4sQ0FBa0JKLFFBQWxCLEVBQTRCRCxRQUE1QixDQXBERjs7QUFBQTtBQUFBLGdDQXFESixLQUFLbEMsTUFyREQ7QUFBQSxnQ0FzREdtQyxRQXRESDtBQUFBO0FBQUEseUJBdURTRyxnQkFBTUUsTUFBTixDQUFhTCxRQUFiLENBdkRUOztBQUFBO0FBQUE7QUFBQTtBQXNERjdCLHVCQXRERTtBQXVERm1DLHVCQXZERTtBQUFBOztBQUFBLDhCQXFEUVYsSUFyRFI7O0FBeURKLHVCQUFLbEMsT0FBTCxHQUFlLEtBQUtBLE9BQUwsZ0JBQXdCLEtBQUtHLE1BQUwsQ0FBWTBDLE1BQVosR0FBcUIsQ0FBN0MsVUFBZjs7QUF6REk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQTJETnhCLGlDQUFLeUIsV0FBTDtBQUNBLHVCQUFLbEMsTUFBTDs7QUE1RE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUE4REZtQyxrQkE5REU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBK0RBQyxhQS9EQTtBQUFBLGlDQWdFQyxLQUFLbkQsTUFBTCxLQUFnQixLQUFoQixHQUF3QixZQUF4QixHQUF1QyxZQWhFeEM7QUFBQTtBQUFBLHlCQW1FYSxLQUFLb0QsT0FBTCxDQUFhQyxZQUFiLEVBbkViOztBQUFBO0FBQUE7QUFBQSxpQ0FvRVMsS0FBS25ELEtBcEVkO0FBQUEsaUNBcUVXLEtBQUtDLE9BckVoQjtBQUFBLGlDQXNFTSxLQUFLRyxNQUFMLENBQVlnRCxHQUFaLENBQWdCO0FBQUEsMkJBQUtDLEVBQUUzQyxHQUFQO0FBQUEsbUJBQWhCLENBdEVOO0FBQUEsaUNBdUVNLEtBQUtYLE1BdkVYO0FBQUE7QUFtRUZ1RCwyQkFuRUU7QUFvRUZDLDZCQXBFRTtBQXFFRkMsK0JBckVFO0FBc0VGcEQsMEJBdEVFO0FBdUVGTCwwQkF2RUU7QUFBQTtBQUFBO0FBZ0VKOEMsdUJBaEVJO0FBaUVKWSwwQkFqRUksRUFpRUksTUFqRUo7QUFrRUo1RCx3QkFsRUk7QUFBQTtBQUFBO0FBQUEsc0NBK0RJNkQsV0EvREo7O0FBQUE7QUEwRU5wQyxpQ0FBS3FDLFlBQUw7O0FBMUVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7Ozs7Ozs7OzsrQkErRVFWLGE7O3VCQUlHLEtBQUtDLE9BQUwsQ0FBYUMsWUFBYixFOzs7OytCQUNQLEtBQUtwRCxNOztBQURidUQseUI7QUFDQXZELHdCOzs7QUFKRjhDLHFCLEVBQUssWTtBQUNMWSx3QixFQUFRLE07QUFDUjVELHNCOzs7b0NBSGtCNkQsVzs7O0FBQWhCbEMsbUI7O0FBUUo7QUFDQSxxQkFBS3hCLEtBQUwsR0FBYXdCLElBQUkzQixJQUFKLENBQVMwRCxTQUF0QjtBQUNBLHFCQUFLdEQsT0FBTCxHQUFldUIsSUFBSTNCLElBQUosQ0FBUzJELFdBQXhCO0FBQ0EscUJBQUtwRCxNQUFMLEdBQWMsRUFBZDs7Ozs7NkJBQ2dCb0IsSUFBSTNCLElBQUosQ0FBU08sTTs7Ozs7Ozs7QUFBaEJNLG1COytCQUNQLEtBQUtOLE07K0JBQ0VNLEc7O3VCQUNNZ0MsZ0JBQU1FLE1BQU4sQ0FBYWxDLEdBQWIsQzs7Ozs7QUFEWEEscUI7QUFDQW1DLHFCOzs7NkJBRlVWLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtkLHFCQUFLdEIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUdLK0MsTyxFQUFTO0FBQ2Q7QUFDQSxXQUFLOUQsTUFBTCxHQUFjOEQsUUFBUTlELE1BQVIsSUFBa0IsS0FBaEM7QUFDQSxXQUFLQyxNQUFMLEdBQWM2RCxRQUFRQyxPQUFSLElBQW1CLElBQWpDO0FBQ0EsVUFBSSxLQUFLL0QsTUFBTCxLQUFnQixNQUFwQixFQUE0QjtBQUMxQixhQUFLZ0UsUUFBTDtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7O3VCQUlVLEtBQUtaLE9BQUwsQ0FBYWEsaUJBQWIsRTs7Ozs7Ozs7Ozs7dUJBQ0EsS0FBS2IsT0FBTCxDQUFhYyxhQUFiLEU7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJSDFDLGVBQUsyQyxhQUFMLEU7OztBQUNGOUQseUIsR0FBWSxFO3VEQUNBbEIsTTs7Ozs7Ozs7QUFBUHlCLG1COytCQUNQUCxTOytCQUNPTyxHOzt1QkFDTXhCLFlBQVl3QixHQUFaLEM7Ozs7O0FBRFhBLHFCO0FBQ0F3RCxxQjs7OzZCQUZRL0IsSTs7Ozs7O0FBS1oscUJBQUtoQyxTQUFMLEdBQWlCQSxTQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWxLK0JtQixlQUFLNkMsSTs7a0JBQW5CaEYsSyIsImZpbGUiOiJwb3N0X25ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAL2NvbXBvbmVudHMvdG9vbGJhcic7XG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcbmltcG9ydCBpbWFnZSBmcm9tICdAL3V0aWxzL2ltYWdlJztcbmNvbnN0IHsgZW1vamlzLCBlbW9qaVRvUGF0aCB9ID0gcmVxdWlyZSgnLi4vdXRpbHMvZW1vamlzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HooajluJblrZAnLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ2ktcGFuZWwnOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgJ2ktYnV0dG9uJzogJy4uL2l2aWV3L2J1dHRvbi9pbmRleCcsXG4gICAgICAnaS1yb3cnOiAnLi4vaXZpZXcvcm93L2luZGV4JyxcbiAgICAgICdpLWNvbCc6ICcuLi9pdmlldy9jb2wvaW5kZXgnLFxuICAgICAgJ2ktY2FyZCc6ICcuLi9pdmlldy9jYXJkL2luZGV4JyxcbiAgICAgICdpLWlucHV0JzogJy4uL2l2aWV3L2lucHV0L2luZGV4JyxcbiAgICAgICdpLWNlbGwtZ3JvdXAnOiAnLi4vaXZpZXcvY2VsbC1ncm91cC9pbmRleCcsXG4gICAgICAnaS1jZWxsJzogJy4uL2l2aWV3L2NlbGwvaW5kZXgnLFxuICAgICAgJ2ktaWNvbic6ICcuLi9pdmlldy9pY29uL2luZGV4J1xuICAgIH1cbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRvb2xiYXJcIjp7XCJsZWZ0XCI6XCJlbW9qaXxwaWN0dXJlXCIsXCJyaWdodFwiOlwic3VibWl0XCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnN1Ym1pdERpc2FibGUuc3luY1wiOlwic3VibWl0ZGlzYWJsZVwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcInRvb2xiYXJcIjp7XCJ2LW9uOmVtb2ppXCI6XCJoYW5kbGVFbW9qaVwiLFwidi1vbjpwaWN0dXJlXCI6XCJoYW5kbGVQaWN0dXJlXCIsXCJ2LW9uOnN1Ym1pdFwiOlwiaGFuZGxlU3VibWl0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgdG9vbGJhcjogVG9vbGJhclxuICB9O1xuXG4gIGRhdGEgPSB7XG4gICAgYWN0aW9uOiAnbmV3JywgLy8gbmV3L2VkaXQsXG4gICAgcG9zdElEOiBudWxsLFxuICAgIHRpdGxlOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICB0b29sYXJlYTogJ25vbmUnLCAvLyBlbW9qaSwgcGljdHVyZVxuICAgIGVtb2ppTGlzdDogW10sXG4gICAgaW1hZ2VzOiBbXVxuICB9O1xuXG4gIGNvbXB1dGVkID0ge1xuICAgIHN1Ym1pdGRpc2FibGUoKSB7XG4gICAgICByZXR1cm4gISh0aGlzLnRpdGxlICYmIHRoaXMuY29udGVudCk7XG4gICAgfVxuICB9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g54K55Ye76KGo5oOFXG4gICAgY2xpY2tFbW9qaTogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50ICsga2V5O1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9LFxuICAgIGhhbmRsZVRpdGxlQ2hhbmdlKHRhcmdldCkge1xuICAgICAgdGhpcy50aXRsZSA9IHRhcmdldC5kZXRhaWwuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgaGFuZGxlQ29udGVudElucHV0KGUpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgaGFuZGxlRW1vamkoKSB7XG4gICAgICBpZiAodGhpcy50b29sYXJlYSA9PT0gJ2Vtb2ppJykgdGhpcy50b29sYXJlYSA9ICdub25lJztcbiAgICAgIGVsc2UgdGhpcy50b29sYXJlYSA9ICdlbW9qaSc7XG4gICAgfSxcbiAgICBoYW5kbGVQaWN0dXJlKCkge1xuICAgICAgaWYgKHRoaXMudG9vbGFyZWEgPT09ICdwaWN0dXJlJykgdGhpcy50b29sYXJlYSA9ICdub25lJztcbiAgICAgIGVsc2UgdGhpcy50b29sYXJlYSA9ICdwaWN0dXJlJztcbiAgICB9LFxuICAgIGFzeW5jIGFkZFBpY3R1cmUoKSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSgpO1xuICAgICAgbGV0IHBlbmRpbmdJbWFnZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGZpbGUgb2YgcmVzLnRlbXBGaWxlcykge1xuICAgICAgICBpZiAoZmlsZS5zaXplID4gMjAgKiAxMDI0ICogMTAyNCkgeyAvLyAyME1cbiAgICAgICAgICBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+mUmeivrycsXG4gICAgICAgICAgICBjb250ZW50OiAn5peg5rOV5LiK5Lyg6LaF6L+HMjBN55qE5Zu+54mHJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuc2l6ZSA+IDMgKiAxMDI0ICogMTAyNCkgeyAvLyAzTVxuICAgICAgICAgIGxldCB7IG5ldHdvcmtUeXBlIH0gPSBhd2FpdCB3ZXB5LmdldE5ldHdvcmtUeXBlKCk7XG4gICAgICAgICAgaWYgKG5ldHdvcmtUeXBlID09PSAnMmcnIHx8IG5ldHdvcmtUeXBlID09PSAnM2cnIHx8IG5ldHdvcmtUeXBlID09PSAnNGcnKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9yY2VfdXBsb2FkKSB7XG4gICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICforablkYonLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmo4DmtYvliLDkvaDkuIrkvKDnmoTlm77niYfovoPlpKfvvIzpnIDopoHmtojogJfovoPlpJrmtYHph4/vvIzmmK/lkKbnu6fnu63vvJ8nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmZvcmNlX3VwbG9hZCA9IHJlcy5jb25maXJtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcmNlX3VwbG9hZCkgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwZW5kaW5nSW1hZ2VzLnB1c2goZmlsZS5wYXRoKTtcbiAgICAgIH1cbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+S4iuS8oOS4rSdcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgZmlsZXBhdGggb2YgcGVuZGluZ0ltYWdlcykge1xuICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlcGF0aC5zdWJzdHIoZmlsZXBhdGgubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgICBhd2FpdCBpbWFnZS51cGxvYWRJbWFnZShmaWxlbmFtZSwgZmlsZXBhdGgpO1xuICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGZpbGVuYW1lLFxuICAgICAgICAgIHVybDogYXdhaXQgaW1hZ2UuZ2V0VXJsKGZpbGVuYW1lKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50ICsgYFxcbltwaWMke3RoaXMuaW1hZ2VzLmxlbmd0aCAtIDF9XVxcbmA7XG4gICAgICB9XG4gICAgICB3ZXB5LmhpZGVMb2FkaW5nKCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlU3VibWl0KCkge1xuICAgICAgYXdhaXQgYXBpLmF1dGhSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB0aGlzLmFjdGlvbiA9PT0gJ25ldycgPyAnY3JlYXRlUG9zdCcgOiAndXBkYXRlUG9zdCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxuICAgICAgICAgIHBvc3RUaXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICBwb3N0Q29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgIGltYWdlczogdGhpcy5pbWFnZXMubWFwKHggPT4geC5rZXkpLFxuICAgICAgICAgIHBvc3RJRDogdGhpcy5wb3N0SURcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBhc3luYyBsb2FkUG9zdCgpIHtcbiAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmF1dGhSZXF1ZXN0KHtcbiAgICAgIHVybDogJ3Bvc3REZXRhaWwnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKSxcbiAgICAgICAgcG9zdElEOiB0aGlzLnBvc3RJRFxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgdGhpcy50aXRsZSA9IHJlcy5kYXRhLnBvc3RUaXRsZTtcbiAgICB0aGlzLmNvbnRlbnQgPSByZXMuZGF0YS5wb3N0Q29udGVudDtcbiAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBvZiByZXMuZGF0YS5pbWFnZXMpIHtcbiAgICAgIHRoaXMuaW1hZ2VzLnB1c2goe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdXJsOiBhd2FpdCBpbWFnZS5nZXRVcmwoa2V5KVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuJGFwcGx5KCk7XG4gIH1cblxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIHRoaXMuYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgJ25ldyc7XG4gICAgdGhpcy5wb3N0SUQgPSBvcHRpb25zLnBvc3RfaWQgfHwgbnVsbDtcbiAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdlZGl0Jykge1xuICAgICAgdGhpcy5sb2FkUG9zdCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBpZiAoXG4gICAgICAhYXdhaXQgdGhpcy4kcGFyZW50LmF1dGhvcml6ZVJlcXVpcmVkKCkgfHxcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuZ3JvdXBSZXF1aXJlZCgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHdlcHkuaGlkZVNoYXJlTWVudSgpO1xuICAgIGxldCBlbW9qaUxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gZW1vamlzKSB7XG4gICAgICBlbW9qaUxpc3QucHVzaCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBpbWc6IGF3YWl0IGVtb2ppVG9QYXRoKGtleSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmVtb2ppTGlzdCA9IGVtb2ppTGlzdDtcbiAgfVxufVxuIl19