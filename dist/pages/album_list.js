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
      navigationBarTitleText: '群相册',
      usingComponents: {
        'i-avatar': '../../iview/avatar/index',
        'i-icon': '../../iview/icon/index',
        'i-tabs': '../../iview/tabs/index',
        'i-tab': '../../iview/tab/index',
        'i-action-sheet': '../../iview/action-sheet/index',
        'i-modal': '../iview/modal/index',
        'i-input': '../iview/input/index',
        'i-panel': '../iview/panel/index'
      },
      enablePullDownRefresh: true
    }, _this.components = {}, _this.data = {
      from: -1,
      albums: [],
      myAlbums: [],
      current: 'tab1',
      editVisible: false,
      currentAlbumTitle: '',
      actionsCurrentAlbumID: null,
      actionsVisible: false,
      actions: [{
        id: 'del',
        name: '删除',
        icon: 'trash',
        openType: 'trash_fill'
      }, {
        id: 'edit',
        name: '重命名',
        icon: 'createtask',
        openType: 'createtask_fill'
      }]
    }, _this.computed = {}, _this.methods = {
      handleChange: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
          var detail = _ref2.detail;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.current = detail.key;

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function handleChange(_x) {
          return _ref3.apply(this, arguments);
        }

        return handleChange;
      }(),
      handleActionClick: function handleActionClick(_ref4) {
        var detail = _ref4.detail;

        var id = this.actions[detail.index].id;
        if (id === 'del') {
          this.deleteAlbum(this.actionsCurrentAlbumID);
        } else if (id === 'edit') {
          this.editAlbum(this.actionsCurrentAlbumID);
        }
        this.actionsVisible = false;
      },
      handleActionCancel: function handleActionCancel() {
        this.actionsVisible = false;
      },
      more_op: function more_op(albumID) {
        this.actionsCurrentAlbumID = albumID;
        this.actionsVisible = true;
      },
      short_touch: function short_touch(albumID) {
        _wepy2.default.navigateTo({
          url: '/pages/album_detail?album_id=' + albumID
        });
      },
      addAlbum: function addAlbum() {
        _wepy2.default.navigateTo({
          url: '/pages/album_add'
        });
      },


      // 相册重命名
      handleAlbumTitleChange: function handleAlbumTitleChange(e) {
        this.currentAlbumTitle = e.detail.value;
      },
      handleEditClose: function handleEditClose() {
        this.editVisible = false;
      },
      handleEditSubmit: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.editVisible = false;
                  _context2.t0 = _api2.default;
                  _context2.next = 4;
                  return this.$parent.fetchOpenGID();

                case 4:
                  _context2.t1 = _context2.sent;
                  _context2.t2 = this.currentAlbumTitle;
                  _context2.t3 = this.actionsCurrentAlbumID;
                  _context2.t4 = {
                    openGID: _context2.t1,
                    albumTitle: _context2.t2,
                    albumID: _context2.t3
                  };
                  _context2.t5 = {
                    url: 'updateAlbum',
                    method: 'POST',
                    data: _context2.t4
                  };
                  _context2.next = 11;
                  return _context2.t0.authRequest.call(_context2.t0, _context2.t5, false);

                case 11:
                  this.refreshAlbumList();

                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function handleEditSubmit() {
          return _ref5.apply(this, arguments);
        }

        return handleEditSubmit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'deleteAlbum',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(albumID) {
        var album, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                album = _lodash2.default.find(this.albums, function (x) {
                  return x.albumID === albumID;
                });

                if (!(!album || album.createrOpenID !== this.$parent.globalData.openID)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 4;
                return _wepy2.default.showModal({
                  title: '错误',
                  content: '你没有删除该相册的权限',
                  showCancel: false
                });

              case 4:
                return _context3.abrupt('return');

              case 5:
                _context3.next = 7;
                return _wepy2.default.showModal({
                  title: '提醒',
                  content: '是否删除该相册'
                });

              case 7:
                res = _context3.sent;

                if (!res.confirm) {
                  _context3.next = 20;
                  break;
                }

                _context3.t0 = _api2.default;
                _context3.next = 12;
                return this.$parent.fetchOpenGID();

              case 12:
                _context3.t1 = _context3.sent;
                _context3.t2 = albumID;
                _context3.t3 = {
                  openGID: _context3.t1,
                  albumID: _context3.t2
                };
                _context3.t4 = {
                  url: 'deleteAlbum',
                  method: 'POST',
                  data: _context3.t3
                };
                _context3.next = 18;
                return _context3.t0.authRequest.call(_context3.t0, _context3.t4);

              case 18:
                this.$apply();
                this.refreshAlbumList();

              case 20:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteAlbum(_x2) {
        return _ref6.apply(this, arguments);
      }

      return deleteAlbum;
    }()
  }, {
    key: 'editAlbum',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(albumID) {
        var album;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                album = _lodash2.default.find(this.albums, function (x) {
                  return x.albumID === albumID;
                });

                if (!(!album || album.createrOpenID !== this.$parent.globalData.openID)) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 4;
                return _wepy2.default.showModal({
                  title: '错误',
                  content: '你没有修改该相册的权限',
                  showCancel: false
                });

              case 4:
                return _context4.abrupt('return');

              case 5:
                this.currentAlbumTitle = album.albumTitle;
                this.editVisible = true;
                this.$apply();

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editAlbum(_x3) {
        return _ref7.apply(this, arguments);
      }

      return editAlbum;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.stopPullDownRefresh();
      this.refreshAlbumList();
    }
  }, {
    key: 'refreshAlbumList',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var res, myAlbums, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, album;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _wepy2.default.showNavigationBarLoading();
                _context5.t0 = _api2.default;
                _context5.next = 4;
                return this.$parent.fetchOpenGID();

              case 4:
                _context5.t1 = _context5.sent;
                _context5.t2 = {
                  openGID: _context5.t1
                };
                _context5.t3 = {
                  url: 'listAlbum',
                  method: 'POST',
                  data: _context5.t2
                };
                _context5.next = 9;
                return _context5.t0.authRequest.call(_context5.t0, _context5.t3, false);

              case 9:
                res = _context5.sent;

                this.albums = res.data.albums;
                myAlbums = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context5.prev = 15;
                _iterator = this.albums[Symbol.iterator]();

              case 17:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context5.next = 30;
                  break;
                }

                album = _step.value;

                if (album.createrOpenID === this.$parent.globalData.openID) {
                  myAlbums.push(album);
                }

                if (!(album.images.length > 0)) {
                  _context5.next = 26;
                  break;
                }

                _context5.next = 23;
                return _image2.default.getUrl(album.images[0].key);

              case 23:
                album.cover = _context5.sent;
                _context5.next = 27;
                break;

              case 26:
                album.cover = 'http://221.182.165.54:8206/Content/images/暂无图片.jpg';

              case 27:
                _iteratorNormalCompletion = true;
                _context5.next = 17;
                break;

              case 30:
                _context5.next = 36;
                break;

              case 32:
                _context5.prev = 32;
                _context5.t4 = _context5['catch'](15);
                _didIteratorError = true;
                _iteratorError = _context5.t4;

              case 36:
                _context5.prev = 36;
                _context5.prev = 37;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 39:
                _context5.prev = 39;

                if (!_didIteratorError) {
                  _context5.next = 42;
                  break;
                }

                throw _iteratorError;

              case 42:
                return _context5.finish(39);

              case 43:
                return _context5.finish(36);

              case 44:
                this.myAlbums = myAlbums;
                // console.log(this.myAlbums);
                this.$apply();
                _wepy2.default.hideNavigationBarLoading();

              case 47:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[15, 32, 36, 44], [37,, 39, 43]]);
      }));

      function refreshAlbumList() {
        return _ref8.apply(this, arguments);
      }

      return refreshAlbumList;
    }()
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      return {
        title: '大家快来看群相册',
        path: '/pages/album_list',
        imageUrl: '/images/logo.png'
      };
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.$parent.authorizeRequired();

              case 2:
                _context6.t0 = !_context6.sent;

                if (_context6.t0) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 6;
                return this.$parent.groupRequired();

              case 6:
                _context6.t0 = !_context6.sent;

              case 7:
                if (!_context6.t0) {
                  _context6.next = 9;
                  break;
                }

                return _context6.abrupt('return');

              case 9:
                _wepy2.default.showShareMenu({
                  withShareTicket: true
                });
                this.refreshAlbumList();

              case 11:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onShow() {
        return _ref9.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(options) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.from = options.from;
                if (this.from === '1') {
                  // console.log(this.from);
                  this.current = 'tab2';
                }

              case 2:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onLoad(_x4) {
        return _ref10.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/album_list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtX2xpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiY29tcG9uZW50cyIsImRhdGEiLCJmcm9tIiwiYWxidW1zIiwibXlBbGJ1bXMiLCJjdXJyZW50IiwiZWRpdFZpc2libGUiLCJjdXJyZW50QWxidW1UaXRsZSIsImFjdGlvbnNDdXJyZW50QWxidW1JRCIsImFjdGlvbnNWaXNpYmxlIiwiYWN0aW9ucyIsImlkIiwibmFtZSIsImljb24iLCJvcGVuVHlwZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZSIsImRldGFpbCIsImtleSIsImhhbmRsZUFjdGlvbkNsaWNrIiwiaW5kZXgiLCJkZWxldGVBbGJ1bSIsImVkaXRBbGJ1bSIsImhhbmRsZUFjdGlvbkNhbmNlbCIsIm1vcmVfb3AiLCJhbGJ1bUlEIiwic2hvcnRfdG91Y2giLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImFkZEFsYnVtIiwiaGFuZGxlQWxidW1UaXRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsImhhbmRsZUVkaXRDbG9zZSIsImhhbmRsZUVkaXRTdWJtaXQiLCJhcGkiLCIkcGFyZW50IiwiZmV0Y2hPcGVuR0lEIiwib3BlbkdJRCIsImFsYnVtVGl0bGUiLCJtZXRob2QiLCJhdXRoUmVxdWVzdCIsInJlZnJlc2hBbGJ1bUxpc3QiLCJhbGJ1bSIsIl8iLCJmaW5kIiwieCIsImNyZWF0ZXJPcGVuSUQiLCJnbG9iYWxEYXRhIiwib3BlbklEIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInJlcyIsImNvbmZpcm0iLCIkYXBwbHkiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwicHVzaCIsImltYWdlcyIsImxlbmd0aCIsImltYWdlIiwiZ2V0VXJsIiwiY292ZXIiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJvcHRpb25zIiwicGF0aCIsImltYWdlVXJsIiwiYXV0aG9yaXplUmVxdWlyZWQiLCJncm91cFJlcXVpcmVkIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLDBCQURHO0FBRWYsa0JBQVUsd0JBRks7QUFHZixrQkFBVSx3QkFISztBQUlmLGlCQUFTLHVCQUpNO0FBS2YsMEJBQWtCLGdDQUxIO0FBTWYsbUJBQVcsc0JBTkk7QUFPZixtQkFBVyxzQkFQSTtBQVFmLG1CQUFXO0FBUkksT0FGVjtBQVlQQyw2QkFBdUI7QUFaaEIsSyxRQWNUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDLENBREY7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsZUFBUyxNQUpKO0FBS0xDLG1CQUFhLEtBTFI7QUFNTEMseUJBQW1CLEVBTmQ7QUFPTEMsNkJBQXVCLElBUGxCO0FBUUxDLHNCQUFnQixLQVJYO0FBU0xDLGVBQVMsQ0FDUDtBQUNFQyxZQUFJLEtBRE47QUFFRUMsY0FBTSxJQUZSO0FBR0VDLGNBQU0sT0FIUjtBQUlFQyxrQkFBVTtBQUpaLE9BRE8sRUFPUDtBQUNFSCxZQUFJLE1BRE47QUFFRUMsY0FBTSxLQUZSO0FBR0VDLGNBQU0sWUFIUjtBQUlFQyxrQkFBVTtBQUpaLE9BUE87QUFUSixLLFFBeUJQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDRkMsa0JBREU7QUFBQTtBQUFBLGNBQ2FDLE1BRGIsU0FDYUEsTUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU4sdUJBQUtiLE9BQUwsR0FBZWEsT0FBT0MsR0FBdEI7O0FBRk07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QUFkO0FBQ0Q7O3NCQUNHQSxNQUFNaUIsTUFBTixDQUFhQyxNQUFiLEdBQXNCLEM7Ozs7Ozt1QkFDSkMsZ0JBQU1DLE1BQU4sQ0FBYXBCLE1BQU1pQixNQUFOLENBQWEsQ0FBYixFQUFnQjNDLEdBQTdCLEM7OztBQUFwQjBCLHNCQUFNcUIsSzs7Ozs7QUFFTnJCLHNCQUFNcUIsS0FBTixHQUFjLG9EQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHSixxQkFBSzlELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0E7QUFDQSxxQkFBS3NELE1BQUw7QUFDQTlCLCtCQUFLdUMsd0JBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHZ0JDLE8sRUFBUztBQUN6QixhQUFPO0FBQ0xmLGVBQU8sVUFERjtBQUVMZ0IsY0FBTSxtQkFGRDtBQUdMQyxrQkFBVTtBQUhMLE9BQVA7QUFLRDs7Ozs7Ozs7Ozt1QkFJVSxLQUFLaEMsT0FBTCxDQUFhaUMsaUJBQWIsRTs7Ozs7Ozs7Ozs7dUJBQ0EsS0FBS2pDLE9BQUwsQ0FBYWtDLGFBQWIsRTs7Ozs7Ozs7Ozs7Ozs7QUFJVDVDLCtCQUFLNkMsYUFBTCxDQUFtQjtBQUNqQkMsbUNBQWlCO0FBREEsaUJBQW5CO0FBR0EscUJBQUs5QixnQkFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RkFFV3dCLE87Ozs7O0FBQ1gscUJBQUtsRSxJQUFMLEdBQVlrRSxRQUFRbEUsSUFBcEI7QUFDQSxvQkFBSSxLQUFLQSxJQUFMLEtBQWMsR0FBbEIsRUFBdUI7QUFDckI7QUFDQSx1QkFBS0csT0FBTCxHQUFlLE1BQWY7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpNOEJ1QixlQUFLK0MsSTs7a0JBQW5CaEYsSyIsImZpbGUiOiJhbGJ1bV9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcclxuaW1wb3J0IGltYWdlIGZyb20gJ0AvdXRpbHMvaW1hZ2UnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnvqTnm7jlhownLFxyXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICdpLWF2YXRhcic6ICcuLi8uLi9pdmlldy9hdmF0YXIvaW5kZXgnLFxyXG4gICAgICAnaS1pY29uJzogJy4uLy4uL2l2aWV3L2ljb24vaW5kZXgnLFxyXG4gICAgICAnaS10YWJzJzogJy4uLy4uL2l2aWV3L3RhYnMvaW5kZXgnLFxyXG4gICAgICAnaS10YWInOiAnLi4vLi4vaXZpZXcvdGFiL2luZGV4JyxcclxuICAgICAgJ2ktYWN0aW9uLXNoZWV0JzogJy4uLy4uL2l2aWV3L2FjdGlvbi1zaGVldC9pbmRleCcsXHJcbiAgICAgICdpLW1vZGFsJzogJy4uL2l2aWV3L21vZGFsL2luZGV4JyxcclxuICAgICAgJ2ktaW5wdXQnOiAnLi4vaXZpZXcvaW5wdXQvaW5kZXgnLFxyXG4gICAgICAnaS1wYW5lbCc6ICcuLi9pdmlldy9wYW5lbC9pbmRleCdcclxuICAgIH0sXHJcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcclxuICB9O1xyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGZyb206IC0xLFxyXG4gICAgYWxidW1zOiBbXSxcclxuICAgIG15QWxidW1zOiBbXSxcclxuICAgIGN1cnJlbnQ6ICd0YWIxJyxcclxuICAgIGVkaXRWaXNpYmxlOiBmYWxzZSxcclxuICAgIGN1cnJlbnRBbGJ1bVRpdGxlOiAnJyxcclxuICAgIGFjdGlvbnNDdXJyZW50QWxidW1JRDogbnVsbCxcclxuICAgIGFjdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgIGFjdGlvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnZGVsJyxcclxuICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcclxuICAgICAgICBpY29uOiAndHJhc2gnLFxyXG4gICAgICAgIG9wZW5UeXBlOiAndHJhc2hfZmlsbCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnZWRpdCcsXHJcbiAgICAgICAgbmFtZTogJ+mHjeWRveWQjScsXHJcbiAgICAgICAgaWNvbjogJ2NyZWF0ZXRhc2snLFxyXG4gICAgICAgIG9wZW5UeXBlOiAnY3JlYXRldGFza19maWxsJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgY29tcHV0ZWQgPSB7fTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGFzeW5jIGhhbmRsZUNoYW5nZSh7IGRldGFpbCB9KSB7XHJcbiAgICAgIHRoaXMuY3VycmVudCA9IGRldGFpbC5rZXk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUFjdGlvbkNsaWNrKHsgZGV0YWlsIH0pIHtcclxuICAgICAgY29uc3QgaWQgPSB0aGlzLmFjdGlvbnNbZGV0YWlsLmluZGV4XS5pZDtcclxuICAgICAgaWYgKGlkID09PSAnZGVsJykge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQWxidW0odGhpcy5hY3Rpb25zQ3VycmVudEFsYnVtSUQpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlkID09PSAnZWRpdCcpIHtcclxuICAgICAgICB0aGlzLmVkaXRBbGJ1bSh0aGlzLmFjdGlvbnNDdXJyZW50QWxidW1JRCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hY3Rpb25zVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUFjdGlvbkNhbmNlbCgpIHtcclxuICAgICAgdGhpcy5hY3Rpb25zVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIG1vcmVfb3AoYWxidW1JRCkge1xyXG4gICAgICB0aGlzLmFjdGlvbnNDdXJyZW50QWxidW1JRCA9IGFsYnVtSUQ7XHJcbiAgICAgIHRoaXMuYWN0aW9uc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG9ydF90b3VjaChhbGJ1bUlEKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2FsYnVtX2RldGFpbD9hbGJ1bV9pZD0nICsgYWxidW1JRFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkQWxidW0oKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2FsYnVtX2FkZCdcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOebuOWGjOmHjeWRveWQjVxyXG4gICAgaGFuZGxlQWxidW1UaXRsZUNoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEFsYnVtVGl0bGUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVFZGl0Q2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuZWRpdFZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBoYW5kbGVFZGl0U3VibWl0KCkge1xyXG4gICAgICB0aGlzLmVkaXRWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAndXBkYXRlQWxidW0nLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKSxcclxuICAgICAgICAgIGFsYnVtVGl0bGU6IHRoaXMuY3VycmVudEFsYnVtVGl0bGUsXHJcbiAgICAgICAgICBhbGJ1bUlEOiB0aGlzLmFjdGlvbnNDdXJyZW50QWxidW1JRFxyXG4gICAgICAgIH1cclxuICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hBbGJ1bUxpc3QoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGFzeW5jIGRlbGV0ZUFsYnVtKGFsYnVtSUQpIHtcclxuICAgIGxldCBhbGJ1bSA9IF8uZmluZCh0aGlzLmFsYnVtcywgeCA9PiB4LmFsYnVtSUQgPT09IGFsYnVtSUQpO1xyXG4gICAgaWYgKCFhbGJ1bSB8fCBhbGJ1bS5jcmVhdGVyT3BlbklEICE9PSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuSUQpIHtcclxuICAgICAgYXdhaXQgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcclxuICAgICAgICBjb250ZW50OiAn5L2g5rKh5pyJ5Yig6Zmk6K+l55u45YaM55qE5p2D6ZmQJyxcclxuICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgdGl0bGU6ICfmj5DphpInLFxyXG4gICAgICBjb250ZW50OiAn5piv5ZCm5Yig6Zmk6K+l55u45YaMJ1xyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgYXdhaXQgYXBpLmF1dGhSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdkZWxldGVBbGJ1bScsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxyXG4gICAgICAgICAgYWxidW1JRDogYWxidW1JRFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaEFsYnVtTGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBlZGl0QWxidW0oYWxidW1JRCkge1xyXG4gICAgbGV0IGFsYnVtID0gXy5maW5kKHRoaXMuYWxidW1zLCB4ID0+IHguYWxidW1JRCA9PT0gYWxidW1JRCk7XHJcbiAgICBpZiAoIWFsYnVtIHx8IGFsYnVtLmNyZWF0ZXJPcGVuSUQgIT09IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JRCkge1xyXG4gICAgICBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfplJnor68nLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfkvaDmsqHmnInkv67mlLnor6Xnm7jlhoznmoTmnYPpmZAnLFxyXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRBbGJ1bVRpdGxlID0gYWxidW0uYWxidW1UaXRsZTtcclxuICAgIHRoaXMuZWRpdFZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hBbGJ1bUxpc3QoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlZnJlc2hBbGJ1bUxpc3QoKSB7XHJcbiAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5hdXRoUmVxdWVzdChcclxuICAgICAge1xyXG4gICAgICAgIHVybDogJ2xpc3RBbGJ1bScsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIHRoaXMuYWxidW1zID0gcmVzLmRhdGEuYWxidW1zO1xyXG4gICAgbGV0IG15QWxidW1zID0gW107XHJcbiAgICBmb3IgKGxldCBhbGJ1bSBvZiB0aGlzLmFsYnVtcykge1xyXG4gICAgICBpZiAoYWxidW0uY3JlYXRlck9wZW5JRCA9PT0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklEKSB7XHJcbiAgICAgICAgbXlBbGJ1bXMucHVzaChhbGJ1bSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFsYnVtLmltYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgYWxidW0uY292ZXIgPSBhd2FpdCBpbWFnZS5nZXRVcmwoYWxidW0uaW1hZ2VzWzBdLmtleSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxidW0uY292ZXIgPSAnaHR0cDovLzIyMS4xODIuMTY1LjU0OjgyMDYvQ29udGVudC9pbWFnZXMv5pqC5peg5Zu+54mHLmpwZyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubXlBbGJ1bXMgPSBteUFsYnVtcztcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlBbGJ1bXMpO1xyXG4gICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7XHJcbiAgfVxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZShvcHRpb25zKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+Wkp+WutuW/q+adpeeci+e+pOebuOWGjCcsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvYWxidW1fbGlzdCcsXHJcbiAgICAgIGltYWdlVXJsOiAnL2ltYWdlcy9sb2dvLnBuZydcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBvblNob3coKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuYXV0aG9yaXplUmVxdWlyZWQoKSB8fFxyXG4gICAgICAhYXdhaXQgdGhpcy4kcGFyZW50Lmdyb3VwUmVxdWlyZWQoKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdlcHkuc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlZnJlc2hBbGJ1bUxpc3QoKTtcclxuICB9XHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuZnJvbSA9IG9wdGlvbnMuZnJvbTtcclxuICAgIGlmICh0aGlzLmZyb20gPT09ICcxJykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZyb20pO1xyXG4gICAgICB0aGlzLmN1cnJlbnQgPSAndGFiMic7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==