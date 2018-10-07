'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _render = require('./../utils/render.js');

var _render2 = _interopRequireDefault(_render);

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
      navigationBarTitleText: '社区',
      usingComponents: {
        'i-panel': '../iview/panel/index',
        'i-button': '../iview/button/index',
        'i-row': '../iview/row/index',
        'i-col': '../iview/col/index',
        'i-card': '../iview/card/index',
        'i-input': '../iview/input/index',
        'i-cell-group': '../iview/cell-group/index',
        'i-avatar': '../iview/avatar/index',
        'i-icon': '../iview/icon/index',
        'i-action-sheet': '../../iview/action-sheet/index'
      },
      enablePullDownRefresh: true
    }, _this.components = {}, _this.data = {
      postID: null,
      postTitle: '',
      postContent: '',
      postContentNodes: [],
      viewerNumber: -1,
      createdAt: '',
      authorAvatarUrl: '',
      authorNickName: '',
      authorOpenID: '',
      comments: [],
      actions: [{
        id: 'del',
        name: '删除',
        icon: 'trash',
        openType: 'trash_fill'
      }, {
        id: 'edit',
        name: '编辑',
        icon: 'createtask',
        openType: 'createtask_fill'
      }],
      actionsVisible: false
    }, _this.computed = {
      editable: function editable() {
        return this.authorOpenID === this.$parent.globalData.openID;
      }
    }, _this.methods = {
      more_op: function more_op() {
        // 操作
        this.actionsVisible = true;
      },
      handleActionClick: function handleActionClick(_ref2) {
        var detail = _ref2.detail;

        var id = this.actions[detail.index].id;
        if (id === 'del') {
          this.deletePost();
        } else if (id === 'edit') {
          this.editPost();
        }
        this.actionsVisible = false;
      },
      handleActionCancel: function handleActionCancel() {
        this.actionsVisible = false;
      },
      user: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 进入用户信息界面
                  console.log('您点击了用户头像');

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function user() {
          return _ref3.apply(this, arguments);
        }

        return user;
      }(),
      do_comment: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(type, ID, replyOpenID) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // 进行评论,type=post:评论文章,type=comment:对评论进行评论,type=subcomment:对楼中楼评论
                  console.log('开始评论');
                  console.log(type, ID, replyOpenID);
                  // 通过id表示是对谁进行评论
                  _wepy2.default.navigateTo({
                    url: '/pages/comment_new?type=' + type + '&ID=' + ID + '&replyOpenID=' + replyOpenID
                  });

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function do_comment(_x, _x2, _x3) {
          return _ref4.apply(this, arguments);
        }

        return do_comment;
      }(),
      lookCom: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(commentID) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // 打开评论列表
                  console.log('打开评论列表');
                  _wepy2.default.navigateTo({
                    url: '/pages/comment_detail?type=post&ID=' + this.postID + '&commentID=' + commentID
                  });

                case 2:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function lookCom(_x4) {
          return _ref5.apply(this, arguments);
        }

        return lookCom;
      }(),
      like: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(index) {
          var iflike, thiscommentID;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  // 点赞
                  console.log('点赞1');
                  console.log(index);
                  console.log(this.comments[index]);
                  this.comments[index].ilike = !this.comments[index].ilike;
                  iflike = this.comments[index].ilike;

                  console.log(this.comments[index].ilike);
                  thiscommentID = this.comments[index].commentID;

                  console.log(thiscommentID);

                  if (!iflike) {
                    _context4.next = 20;
                    break;
                  }

                  _context4.t0 = _api2.default;
                  _context4.next = 12;
                  return this.$parent.fetchOpenGID();

                case 12:
                  _context4.t1 = _context4.sent;
                  _context4.t2 = thiscommentID;
                  _context4.t3 = {
                    openGID: _context4.t1,
                    commentID: _context4.t2
                  };
                  _context4.t4 = {
                    url: 'commentLike',
                    method: 'POST',
                    data: _context4.t3
                  };
                  _context4.next = 18;
                  return _context4.t0.authRequest.call(_context4.t0, _context4.t4);

                case 18:
                  _context4.next = 29;
                  break;

                case 20:
                  _context4.t5 = _api2.default;
                  _context4.next = 23;
                  return this.$parent.fetchOpenGID();

                case 23:
                  _context4.t6 = _context4.sent;
                  _context4.t7 = thiscommentID;
                  _context4.t8 = {
                    openGID: _context4.t6,
                    commentID: _context4.t7
                  };
                  _context4.t9 = {
                    url: 'commentUnlike',
                    method: 'POST',
                    data: _context4.t8
                  };
                  _context4.next = 29;
                  return _context4.t5.authRequest.call(_context4.t5, _context4.t9);

                case 29:
                  this.getCommentList();
                  this.$apply();

                case 31:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function like(_x5) {
          return _ref6.apply(this, arguments);
        }

        return like;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'deletePost',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t0 = _api2.default;
                _context5.next = 3;
                return this.$parent.fetchOpenGID();

              case 3:
                _context5.t1 = _context5.sent;
                _context5.t2 = this.postID;
                _context5.t3 = {
                  openGID: _context5.t1,
                  postID: _context5.t2
                };
                _context5.t4 = {
                  url: 'deletePost',
                  method: 'POST',
                  data: _context5.t3
                };
                _context5.next = 9;
                return _context5.t0.authRequest.call(_context5.t0, _context5.t4);

              case 9:
                _context5.next = 11;
                return _wepy2.default.showModal({
                  title: '成功',
                  content: '删除帖子成功',
                  showConcel: false
                });

              case 11:
                _wepy2.default.navigateBack();

              case 12:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deletePost() {
        return _ref7.apply(this, arguments);
      }

      return deletePost;
    }()
  }, {
    key: 'editPost',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _wepy2.default.navigateTo({
                  url: '/pages/post_new?action=edit&post_id=' + this.postID
                });

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function editPost() {
        return _ref8.apply(this, arguments);
      }

      return editPost;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      console.log('/pages/post_id onLoad:');
      this.postID = options.post_id;
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.stopPullDownRefresh();
      this.refreshPost();
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      return {
        title: '我分享了一篇帖子：' + this.postTitle,
        path: '/pages/post_detail?openGID=' + this.$parent.globalData.openGID + '&post_id=' + this.postID,
        imageUrl: '/images/logo.png'
      };
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.$parent.authorizeRequired();

              case 2:
                _context7.t0 = !_context7.sent;

                if (_context7.t0) {
                  _context7.next = 7;
                  break;
                }

                _context7.next = 6;
                return this.$parent.groupRequired();

              case 6:
                _context7.t0 = !_context7.sent;

              case 7:
                if (!_context7.t0) {
                  _context7.next = 9;
                  break;
                }

                return _context7.abrupt('return');

              case 9:
                _wepy2.default.showShareMenu({
                  withShareTicket: true
                });
                this.refreshPost();

              case 11:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onShow() {
        return _ref9.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'getCommentList',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, j, len, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, comment;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _wepy2.default.showNavigationBarLoading();
                _context8.t0 = _api2.default;
                _context8.t1 = this.postID;
                _context8.next = 5;
                return this.$parent.fetchOpenGID();

              case 5:
                _context8.t2 = _context8.sent;
                _context8.t3 = {
                  fieldID: _context8.t1,
                  fieldType: 'post',
                  openGID: _context8.t2
                };
                _context8.t4 = {
                  url: 'getComments',
                  method: 'POST',
                  data: _context8.t3
                };
                _context8.next = 10;
                return _context8.t0.authRequest.call(_context8.t0, _context8.t4, false);

              case 10:
                res = _context8.sent;

                this.comments = res.data.commentList;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context8.prev = 15;
                _iterator = this.comments[Symbol.iterator]();

              case 17:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context8.next = 25;
                  break;
                }

                item = _step.value;
                _context8.next = 21;
                return (0, _render2.default)(item.commentContent);

              case 21:
                item.commentContentNodes = _context8.sent;

              case 22:
                _iteratorNormalCompletion = true;
                _context8.next = 17;
                break;

              case 25:
                _context8.next = 31;
                break;

              case 27:
                _context8.prev = 27;
                _context8.t5 = _context8['catch'](15);
                _didIteratorError = true;
                _iteratorError = _context8.t5;

              case 31:
                _context8.prev = 31;
                _context8.prev = 32;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 34:
                _context8.prev = 34;

                if (!_didIteratorError) {
                  _context8.next = 37;
                  break;
                }

                throw _iteratorError;

              case 37:
                return _context8.finish(34);

              case 38:
                return _context8.finish(31);

              case 39:
                j = 0, len = this.comments.length;

              case 40:
                if (!(j < len)) {
                  _context8.next = 47;
                  break;
                }

                _context8.next = 43;
                return _time2.default.getTime(this.comments[j].commentCreatedAt);

              case 43:
                this.comments[j].commentCreatedAt = _context8.sent;

              case 44:
                j++;
                _context8.next = 40;
                break;

              case 47:
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context8.prev = 50;

                for (_iterator2 = this.comments[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  comment = _step2.value;

                  comment.subcomments_short = comment.subcomments.slice(0, 2);
                }
                _context8.next = 58;
                break;

              case 54:
                _context8.prev = 54;
                _context8.t6 = _context8['catch'](50);
                _didIteratorError2 = true;
                _iteratorError2 = _context8.t6;

              case 58:
                _context8.prev = 58;
                _context8.prev = 59;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 61:
                _context8.prev = 61;

                if (!_didIteratorError2) {
                  _context8.next = 64;
                  break;
                }

                throw _iteratorError2;

              case 64:
                return _context8.finish(61);

              case 65:
                return _context8.finish(58);

              case 66:
                this.$apply();
                _wepy2.default.hideNavigationBarLoading();

              case 68:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[15, 27, 31, 39], [32,, 34, 38], [50, 54, 58, 66], [59,, 61, 65]]);
      }));

      function getCommentList() {
        return _ref10.apply(this, arguments);
      }

      return getCommentList;
    }()
  }, {
    key: 'refreshPost',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var ans;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _wepy2.default.showNavigationBarLoading();
                _context9.t0 = _api2.default;
                _context9.next = 4;
                return this.$parent.fetchOpenGID();

              case 4:
                _context9.t1 = _context9.sent;
                _context9.t2 = this.postID;
                _context9.t3 = {
                  openGID: _context9.t1,
                  postID: _context9.t2
                };
                _context9.t4 = {
                  url: 'postDetail',
                  method: 'POST',
                  data: _context9.t3
                };
                _context9.next = 10;
                return _context9.t0.authRequest.call(_context9.t0, _context9.t4, false);

              case 10:
                ans = _context9.sent;

                if (!(ans.data.success === -1)) {
                  _context9.next = 16;
                  break;
                }

                _context9.next = 14;
                return _wepy2.default.showModal({
                  title: '错误',
                  content: '该帖子已删除',
                  showCancel: false
                });

              case 14:
                _wepy2.default.navigateBack();
                return _context9.abrupt('return');

              case 16:
                this.postTitle = ans.data.postTitle;
                _wepy2.default.setNavigationBarTitle({
                  title: '帖子：' + this.postTitle
                });

                this.postContent = ans.data.postContent;
                _context9.next = 21;
                return (0, _render2.default)(this.postContent, ans.data.images);

              case 21:
                this.postContentNodes = _context9.sent;

                this.viewerNumber = ans.data.viewerNumber;
                this.createdAt = ans.data.createdAt;
                _context9.next = 26;
                return _time2.default.getTime(this.createdAt);

              case 26:
                this.createdAt = _context9.sent;

                this.authorAvatarUrl = ans.data.authorAvatarUrl;
                this.authorNickName = ans.data.authorNickName;
                this.authorOpenID = ans.data.authorOpenID;
                this.$apply();

                // 获取评论
                this.getCommentList();

                _wepy2.default.hideNavigationBarLoading();

              case 33:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function refreshPost() {
        return _ref11.apply(this, arguments);
      }

      return refreshPost;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/post_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RfZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImNvbXBvbmVudHMiLCJkYXRhIiwicG9zdElEIiwicG9zdFRpdGxlIiwicG9zdENvbnRlbnQiLCJwb3N0Q29udGVudE5vZGVzIiwidmlld2VyTnVtYmVyIiwiY3JlYXRlZEF0IiwiYXV0aG9yQXZhdGFyVXJsIiwiYXV0aG9yTmlja05hbWUiLCJhdXRob3JPcGVuSUQiLCJjb21tZW50cyIsImFjdGlvbnMiLCJpZCIsIm5hbWUiLCJpY29uIiwib3BlblR5cGUiLCJhY3Rpb25zVmlzaWJsZSIsImNvbXB1dGVkIiwiZWRpdGFibGUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIm9wZW5JRCIsIm1ldGhvZHMiLCJtb3JlX29wIiwiaGFuZGxlQWN0aW9uQ2xpY2siLCJkZXRhaWwiLCJpbmRleCIsImRlbGV0ZVBvc3QiLCJlZGl0UG9zdCIsImhhbmRsZUFjdGlvbkNhbmNlbCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZG9fY29tbWVudCIsInR5cGUiLCJJRCIsInJlcGx5T3BlbklEIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJsb29rQ29tIiwiY29tbWVudElEIiwibGlrZSIsImlsaWtlIiwiaWZsaWtlIiwidGhpc2NvbW1lbnRJRCIsImFwaSIsImZldGNoT3BlbkdJRCIsIm9wZW5HSUQiLCJtZXRob2QiLCJhdXRoUmVxdWVzdCIsImdldENvbW1lbnRMaXN0IiwiJGFwcGx5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NvbmNlbCIsIm5hdmlnYXRlQmFjayIsIm9wdGlvbnMiLCJwb3N0X2lkIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInJlZnJlc2hQb3N0IiwicGF0aCIsImltYWdlVXJsIiwiYXV0aG9yaXplUmVxdWlyZWQiLCJncm91cFJlcXVpcmVkIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImZpZWxkSUQiLCJmaWVsZFR5cGUiLCJyZXMiLCJjb21tZW50TGlzdCIsIml0ZW0iLCJjb21tZW50Q29udGVudCIsImNvbW1lbnRDb250ZW50Tm9kZXMiLCJqIiwibGVuIiwibGVuZ3RoIiwidGltZSIsImdldFRpbWUiLCJjb21tZW50Q3JlYXRlZEF0IiwiY29tbWVudCIsInN1YmNvbW1lbnRzX3Nob3J0Iiwic3ViY29tbWVudHMiLCJzbGljZSIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImFucyIsInN1Y2Nlc3MiLCJzaG93Q2FuY2VsIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiaW1hZ2VzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsdUJBQWlCO0FBQ2YsbUJBQVcsc0JBREk7QUFFZixvQkFBWSx1QkFGRztBQUdmLGlCQUFTLG9CQUhNO0FBSWYsaUJBQVMsb0JBSk07QUFLZixrQkFBVSxxQkFMSztBQU1mLG1CQUFXLHNCQU5JO0FBT2Ysd0JBQWdCLDJCQVBEO0FBUWYsb0JBQVksdUJBUkc7QUFTZixrQkFBVSxxQkFUSztBQVVmLDBCQUFrQjtBQVZILE9BRlY7QUFjUEMsNkJBQXVCO0FBZGhCLEssUUFpQlRDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxjQUFRLElBREg7QUFFTEMsaUJBQVcsRUFGTjtBQUdMQyxtQkFBYSxFQUhSO0FBSUxDLHdCQUFrQixFQUpiO0FBS0xDLG9CQUFjLENBQUMsQ0FMVjtBQU1MQyxpQkFBVyxFQU5OO0FBT0xDLHVCQUFpQixFQVBaO0FBUUxDLHNCQUFnQixFQVJYO0FBU0xDLG9CQUFjLEVBVFQ7QUFVTEMsZ0JBQVUsRUFWTDtBQVdM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QUw7Ozs7QUFHRixxQkFBS3ZELFNBQUwsR0FBaUJxRixJQUFJdkYsSUFBSixDQUFTRSxTQUExQjtBQUNBbUMsK0JBQUtxRCxxQkFBTCxDQUEyQjtBQUN6QnBDLHlCQUFPLFFBQVEsS0FBS3BEO0FBREssaUJBQTNCOztBQUlBLHFCQUFLQyxXQUFMLEdBQW1Cb0YsSUFBSXZGLElBQUosQ0FBU0csV0FBNUI7O3VCQUM4QixzQkFBTyxLQUFLQSxXQUFaLEVBQXlCb0YsSUFBSXZGLElBQUosQ0FBUzJGLE1BQWxDLEM7OztBQUE5QixxQkFBS3ZGLGdCOztBQUNMLHFCQUFLQyxZQUFMLEdBQW9Ca0YsSUFBSXZGLElBQUosQ0FBU0ssWUFBN0I7QUFDQSxxQkFBS0MsU0FBTCxHQUFpQmlGLElBQUl2RixJQUFKLENBQVNNLFNBQTFCOzt1QkFDdUJ5RSxlQUFLQyxPQUFMLENBQWEsS0FBSzFFLFNBQWxCLEM7OztBQUF2QixxQkFBS0EsUzs7QUFDTCxxQkFBS0MsZUFBTCxHQUF1QmdGLElBQUl2RixJQUFKLENBQVNPLGVBQWhDO0FBQ0EscUJBQUtDLGNBQUwsR0FBc0IrRSxJQUFJdkYsSUFBSixDQUFTUSxjQUEvQjtBQUNBLHFCQUFLQyxZQUFMLEdBQW9COEUsSUFBSXZGLElBQUosQ0FBU1MsWUFBN0I7QUFDQSxxQkFBSzJDLE1BQUw7O0FBRUE7QUFDQSxxQkFBS0QsY0FBTDs7QUFFQWQsK0JBQUtpRCx3QkFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5QK0JqRCxlQUFLdUQsSTs7a0JBQW5CbEcsSyIsImZpbGUiOiJwb3N0X2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcbmltcG9ydCByZW5kZXIgZnJvbSAnQC91dGlscy9yZW5kZXInO1xuaW1wb3J0IHRpbWUgZnJvbSAnQC91dGlscy90aW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ekvuWMuicsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnaS1wYW5lbCc6ICcuLi9pdmlldy9wYW5lbC9pbmRleCcsXG4gICAgICAnaS1idXR0b24nOiAnLi4vaXZpZXcvYnV0dG9uL2luZGV4JyxcbiAgICAgICdpLXJvdyc6ICcuLi9pdmlldy9yb3cvaW5kZXgnLFxuICAgICAgJ2ktY29sJzogJy4uL2l2aWV3L2NvbC9pbmRleCcsXG4gICAgICAnaS1jYXJkJzogJy4uL2l2aWV3L2NhcmQvaW5kZXgnLFxuICAgICAgJ2ktaW5wdXQnOiAnLi4vaXZpZXcvaW5wdXQvaW5kZXgnLFxuICAgICAgJ2ktY2VsbC1ncm91cCc6ICcuLi9pdmlldy9jZWxsLWdyb3VwL2luZGV4JyxcbiAgICAgICdpLWF2YXRhcic6ICcuLi9pdmlldy9hdmF0YXIvaW5kZXgnLFxuICAgICAgJ2ktaWNvbic6ICcuLi9pdmlldy9pY29uL2luZGV4JyxcbiAgICAgICdpLWFjdGlvbi1zaGVldCc6ICcuLi8uLi9pdmlldy9hY3Rpb24tc2hlZXQvaW5kZXgnXG4gICAgfSxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfTtcblxuICBjb21wb25lbnRzID0ge307XG5cbiAgZGF0YSA9IHtcbiAgICBwb3N0SUQ6IG51bGwsXG4gICAgcG9zdFRpdGxlOiAnJyxcbiAgICBwb3N0Q29udGVudDogJycsXG4gICAgcG9zdENvbnRlbnROb2RlczogW10sXG4gICAgdmlld2VyTnVtYmVyOiAtMSxcbiAgICBjcmVhdGVkQXQ6ICcnLFxuICAgIGF1dGhvckF2YXRhclVybDogJycsXG4gICAgYXV0aG9yTmlja05hbWU6ICcnLFxuICAgIGF1dGhvck9wZW5JRDogJycsXG4gICAgY29tbWVudHM6IFtdLFxuICAgIGFjdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdkZWwnLFxuICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcbiAgICAgICAgaWNvbjogJ3RyYXNoJyxcbiAgICAgICAgb3BlblR5cGU6ICd0cmFzaF9maWxsJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0JyxcbiAgICAgICAgbmFtZTogJ+e8lui+kScsXG4gICAgICAgIGljb246ICdjcmVhdGV0YXNrJyxcbiAgICAgICAgb3BlblR5cGU6ICdjcmVhdGV0YXNrX2ZpbGwnXG4gICAgICB9XG4gICAgXSxcbiAgICBhY3Rpb25zVmlzaWJsZTogZmFsc2VcbiAgfTtcblxuICBjb21wdXRlZCA9IHtcbiAgICBlZGl0YWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmF1dGhvck9wZW5JRCA9PT0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklEO1xuICAgIH1cbiAgfTtcblxuICBtZXRob2RzID0ge1xuICAgIG1vcmVfb3AoKSB7IC8vIOaTjeS9nFxuICAgICAgdGhpcy5hY3Rpb25zVmlzaWJsZSA9IHRydWU7XG4gICAgfSxcbiAgICBoYW5kbGVBY3Rpb25DbGljayh7IGRldGFpbCB9KSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWN0aW9uc1tkZXRhaWwuaW5kZXhdLmlkO1xuICAgICAgaWYgKGlkID09PSAnZGVsJykge1xuICAgICAgICB0aGlzLmRlbGV0ZVBvc3QoKTtcbiAgICAgIH0gZWxzZSBpZiAoaWQgPT09ICdlZGl0Jykge1xuICAgICAgICB0aGlzLmVkaXRQb3N0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGlvbnNWaXNpYmxlID0gZmFsc2U7XG4gICAgfSxcbiAgICBoYW5kbGVBY3Rpb25DYW5jZWwoKSB7XG4gICAgICB0aGlzLmFjdGlvbnNWaXNpYmxlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGFzeW5jIHVzZXIoKSB7XG4gICAgICAvLyDov5vlhaXnlKjmiLfkv6Hmga/nlYzpnaJcbiAgICAgIGNvbnNvbGUubG9nKCfmgqjngrnlh7vkuobnlKjmiLflpLTlg48nKTtcbiAgICB9LFxuICAgIGFzeW5jIGRvX2NvbW1lbnQodHlwZSwgSUQsIHJlcGx5T3BlbklEKSB7XG4gICAgICAvLyDov5vooYzor4TorrosdHlwZT1wb3N0OuivhOiuuuaWh+eroCx0eXBlPWNvbW1lbnQ65a+56K+E6K666L+b6KGM6K+E6K66LHR5cGU9c3ViY29tbWVudDrlr7nmpbzkuK3mpbzor4TorrpcbiAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vor4TorronKTtcbiAgICAgIGNvbnNvbGUubG9nKHR5cGUsIElELCByZXBseU9wZW5JRCk7XG4gICAgICAvLyDpgJrov4dpZOihqOekuuaYr+Wvueiwgei/m+ihjOivhOiuulxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1lbnRfbmV3P3R5cGU9JyArIHR5cGUgKyAnJklEPScgKyBJRCArICcmcmVwbHlPcGVuSUQ9JyArIHJlcGx5T3BlbklEXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFzeW5jIGxvb2tDb20oY29tbWVudElEKSB7XG4gICAgICAvLyDmiZPlvIDor4TorrrliJfooahcbiAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDor4TorrrliJfooagnKTtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tZW50X2RldGFpbD90eXBlPXBvc3QmSUQ9JyArIHRoaXMucG9zdElEICsgJyZjb21tZW50SUQ9JyArIGNvbW1lbnRJRFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhc3luYyBsaWtlKGluZGV4KSB7XG4gICAgICAvLyDngrnotZ5cbiAgICAgIGNvbnNvbGUubG9nKCfngrnotZ4xJyk7XG4gICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnRzW2luZGV4XSk7XG4gICAgICB0aGlzLmNvbW1lbnRzW2luZGV4XS5pbGlrZSA9ICF0aGlzLmNvbW1lbnRzW2luZGV4XS5pbGlrZTtcbiAgICAgIHZhciBpZmxpa2UgPSB0aGlzLmNvbW1lbnRzW2luZGV4XS5pbGlrZTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29tbWVudHNbaW5kZXhdLmlsaWtlKTtcbiAgICAgIHZhciB0aGlzY29tbWVudElEID0gdGhpcy5jb21tZW50c1tpbmRleF0uY29tbWVudElEO1xuICAgICAgY29uc29sZS5sb2codGhpc2NvbW1lbnRJRCk7XG4gICAgICBpZiAoaWZsaWtlKSB7XG4gICAgICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnY29tbWVudExpa2UnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKSxcbiAgICAgICAgICAgIGNvbW1lbnRJRDogdGhpc2NvbW1lbnRJRFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBhcGkuYXV0aFJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2NvbW1lbnRVbmxpa2UnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKSxcbiAgICAgICAgICAgIGNvbW1lbnRJRDogdGhpc2NvbW1lbnRJRFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdldENvbW1lbnRMaXN0KCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgfTtcblxuICBhc3luYyBkZWxldGVQb3N0KCkge1xuICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XG4gICAgICB1cmw6ICdkZWxldGVQb3N0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBvcGVuR0lEOiBhd2FpdCB0aGlzLiRwYXJlbnQuZmV0Y2hPcGVuR0lEKCksXG4gICAgICAgIHBvc3RJRDogdGhpcy5wb3N0SURcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICB0aXRsZTogJ+aIkOWKnycsXG4gICAgICBjb250ZW50OiAn5Yig6Zmk5biW5a2Q5oiQ5YqfJyxcbiAgICAgIHNob3dDb25jZWw6IGZhbHNlXG4gICAgfSk7XG4gICAgd2VweS5uYXZpZ2F0ZUJhY2soKTtcbiAgfVxuXG4gIGFzeW5jIGVkaXRQb3N0KCkge1xuICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcvcGFnZXMvcG9zdF9uZXc/YWN0aW9uPWVkaXQmcG9zdF9pZD0nICsgdGhpcy5wb3N0SURcbiAgICB9KTtcbiAgfVxuXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgY29uc29sZS5sb2coJy9wYWdlcy9wb3N0X2lkIG9uTG9hZDonKTtcbiAgICB0aGlzLnBvc3RJRCA9IG9wdGlvbnMucG9zdF9pZDtcbiAgfVxuXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xuICAgIHRoaXMucmVmcmVzaFBvc3QoKTtcbiAgfVxuXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfmiJHliIbkuqvkuobkuIDnr4fluJblrZDvvJonICsgdGhpcy5wb3N0VGl0bGUsXG4gICAgICBwYXRoOiBgL3BhZ2VzL3Bvc3RfZGV0YWlsP29wZW5HSUQ9JHt0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuR0lEfSZwb3N0X2lkPSR7dGhpcy5wb3N0SUR9YCxcbiAgICAgIGltYWdlVXJsOiAnL2ltYWdlcy9sb2dvLnBuZydcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIGlmIChcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuYXV0aG9yaXplUmVxdWlyZWQoKSB8fFxuICAgICAgIWF3YWl0IHRoaXMuJHBhcmVudC5ncm91cFJlcXVpcmVkKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucmVmcmVzaFBvc3QoKTtcbiAgfVxuXG4gIGFzeW5jIGdldENvbW1lbnRMaXN0KCkge1xuICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7XG4gICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XG4gICAgICB1cmw6ICdnZXRDb21tZW50cycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZmllbGRJRDogdGhpcy5wb3N0SUQsXG4gICAgICAgIGZpZWxkVHlwZTogJ3Bvc3QnLFxuICAgICAgICBvcGVuR0lEOiBhd2FpdCB0aGlzLiRwYXJlbnQuZmV0Y2hPcGVuR0lEKClcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gICAgdGhpcy5jb21tZW50cyA9IHJlcy5kYXRhLmNvbW1lbnRMaXN0O1xuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5jb21tZW50cykge1xuICAgICAgaXRlbS5jb21tZW50Q29udGVudE5vZGVzID0gYXdhaXQgcmVuZGVyKGl0ZW0uY29tbWVudENvbnRlbnQpO1xuICAgIH1cbiAgICAvLyDml7bpl7TmoLzlvI/ovazmjaJcbiAgICAvLyBjb21tZW50Q3JlYXRlZEF0IGZ1bmN0aW9uIG9uZVxuICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSB0aGlzLmNvbW1lbnRzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICB0aGlzLmNvbW1lbnRzW2pdLmNvbW1lbnRDcmVhdGVkQXQgPSBhd2FpdCB0aW1lLmdldFRpbWUodGhpcy5jb21tZW50c1tqXS5jb21tZW50Q3JlYXRlZEF0KTtcbiAgICB9XG4gICAgZm9yIChsZXQgY29tbWVudCBvZiB0aGlzLmNvbW1lbnRzKSB7XG4gICAgICBjb21tZW50LnN1YmNvbW1lbnRzX3Nob3J0ID0gY29tbWVudC5zdWJjb21tZW50cy5zbGljZSgwLCAyKTtcbiAgICB9XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaFBvc3QoKSB7XG4gICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTtcbiAgICBsZXQgYW5zID0gYXdhaXQgYXBpLmF1dGhSZXF1ZXN0KHtcbiAgICAgIHVybDogJ3Bvc3REZXRhaWwnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKSxcbiAgICAgICAgcG9zdElEOiB0aGlzLnBvc3RJRFxuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgICBpZiAoYW5zLmRhdGEuc3VjY2VzcyA9PT0gLTEpIHtcbiAgICAgIGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfplJnor68nLFxuICAgICAgICBjb250ZW50OiAn6K+l5biW5a2Q5bey5Yig6ZmkJyxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wb3N0VGl0bGUgPSBhbnMuZGF0YS5wb3N0VGl0bGU7XG4gICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgdGl0bGU6ICfluJblrZDvvJonICsgdGhpcy5wb3N0VGl0bGVcbiAgICB9KTtcblxuICAgIHRoaXMucG9zdENvbnRlbnQgPSBhbnMuZGF0YS5wb3N0Q29udGVudDtcbiAgICB0aGlzLnBvc3RDb250ZW50Tm9kZXMgPSBhd2FpdCByZW5kZXIodGhpcy5wb3N0Q29udGVudCwgYW5zLmRhdGEuaW1hZ2VzKTtcbiAgICB0aGlzLnZpZXdlck51bWJlciA9IGFucy5kYXRhLnZpZXdlck51bWJlcjtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IGFucy5kYXRhLmNyZWF0ZWRBdDtcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IGF3YWl0IHRpbWUuZ2V0VGltZSh0aGlzLmNyZWF0ZWRBdCk7XG4gICAgdGhpcy5hdXRob3JBdmF0YXJVcmwgPSBhbnMuZGF0YS5hdXRob3JBdmF0YXJVcmw7XG4gICAgdGhpcy5hdXRob3JOaWNrTmFtZSA9IGFucy5kYXRhLmF1dGhvck5pY2tOYW1lO1xuICAgIHRoaXMuYXV0aG9yT3BlbklEID0gYW5zLmRhdGEuYXV0aG9yT3BlbklEO1xuICAgIHRoaXMuJGFwcGx5KCk7XG5cbiAgICAvLyDojrflj5bor4TorrpcbiAgICB0aGlzLmdldENvbW1lbnRMaXN0KCk7XG5cbiAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICB9XG59XG4iXX0=