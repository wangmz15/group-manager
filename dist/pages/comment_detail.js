'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _lodash = require('./../npm/lodash/lodash.js');

var _lodash2 = _interopRequireDefault(_lodash);

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
      navigationBarTitleText: '评论',
      usingComponents: {
        'i-avatar': '../../iview/avatar/index',
        'i-icon': '../../iview/icon/index',
        'i-tabs': '../../iview/tabs/index',
        'i-tab': '../../iview/tab/index',
        'i-input': '../../iview/input/index'
      },
      enablePullDownRefresh: true
    }, _this.components = {}, _this.data = {
      type: null,
      ID: null,
      commentID: null,
      comment: null,
      commentCreatedAt: ''
    }, _this.computed = {}, _this.methods = {
      user: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function user() {
          return _ref2.apply(this, arguments);
        }

        return user;
      }(),
      do_comment: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(type, ID, replyOpenID) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // 进行评论,type=post:评论文章,type=comment:对评论进行评论,type=subcomment:对楼中楼评论
                  // console.log('开始评论');
                  // console.log(type, ID, replyOpenID);
                  // 通过id表示是对谁进行评论
                  _wepy2.default.navigateTo({
                    url: '/pages/comment_new?type=' + type + '&ID=' + ID + '&replyOpenID=' + replyOpenID
                  });

                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function do_comment(_x, _x2, _x3) {
          return _ref3.apply(this, arguments);
        }

        return do_comment;
      }(),
      like1: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var iflike, thiscommentID;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // 点赞
                  // console.log('点赞1');
                  this.comment.ilike = !this.comment.ilike;
                  iflike = this.comment.ilike;
                  thiscommentID = this.comment.commentID;
                  // console.log(thiscommentID);

                  if (!iflike) {
                    _context3.next = 15;
                    break;
                  }

                  _context3.t0 = _api2.default;
                  _context3.next = 7;
                  return this.$parent.fetchOpenGID();

                case 7:
                  _context3.t1 = _context3.sent;
                  _context3.t2 = thiscommentID;
                  _context3.t3 = {
                    openGID: _context3.t1,
                    commentID: _context3.t2
                  };
                  _context3.t4 = {
                    url: 'commentLike',
                    method: 'POST',
                    data: _context3.t3
                  };
                  _context3.next = 13;
                  return _context3.t0.authRequest.call(_context3.t0, _context3.t4);

                case 13:
                  _context3.next = 24;
                  break;

                case 15:
                  _context3.t5 = _api2.default;
                  _context3.next = 18;
                  return this.$parent.fetchOpenGID();

                case 18:
                  _context3.t6 = _context3.sent;
                  _context3.t7 = thiscommentID;
                  _context3.t8 = {
                    openGID: _context3.t6,
                    commentID: _context3.t7
                  };
                  _context3.t9 = {
                    url: 'commentUnlike',
                    method: 'POST',
                    data: _context3.t8
                  };
                  _context3.next = 24;
                  return _context3.t5.authRequest.call(_context3.t5, _context3.t9);

                case 24:
                  this.refreshComment();

                case 25:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function like1() {
          return _ref4.apply(this, arguments);
        }

        return like1;
      }(),
      like: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(index) {
          var iflike, thiscommentID;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  // 点赞
                  // console.log('点赞2');
                  // console.log(index);
                  this.comment.subcomments[index].ilike = !this.comment.subcomments[index].ilike;
                  iflike = this.comment.subcomments[index].ilike;
                  thiscommentID = this.comment.subcomments[index].commentID;
                  // console.log(thiscommentID);

                  if (!iflike) {
                    _context4.next = 15;
                    break;
                  }

                  _context4.t0 = _api2.default;
                  _context4.next = 7;
                  return this.$parent.fetchOpenGID();

                case 7:
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
                  _context4.next = 13;
                  return _context4.t0.authRequest.call(_context4.t0, _context4.t4);

                case 13:
                  _context4.next = 24;
                  break;

                case 15:
                  _context4.t5 = _api2.default;
                  _context4.next = 18;
                  return this.$parent.fetchOpenGID();

                case 18:
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
                  _context4.next = 24;
                  return _context4.t5.authRequest.call(_context4.t5, _context4.t9);

                case 24:
                  this.refreshComment();

                case 25:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function like(_x4) {
          return _ref5.apply(this, arguments);
        }

        return like;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.type = options.type;
      this.ID = options.ID;
      this.commentID = options.commentID;
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.$parent.authorizeRequired();

              case 2:
                _context5.t0 = !_context5.sent;

                if (_context5.t0) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 6;
                return this.$parent.groupRequired();

              case 6:
                _context5.t0 = !_context5.sent;

              case 7:
                if (!_context5.t0) {
                  _context5.next = 9;
                  break;
                }

                return _context5.abrupt('return');

              case 9:
                _wepy2.default.hideShareMenu();
                this.refreshComment();

              case 11:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onShow() {
        return _ref6.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.stopPullDownRefresh();
      this.refreshComment();
    }
  }, {
    key: 'refreshComment',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this2 = this;

        var res, j, len;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _wepy2.default.showNavigationBarLoading();
                _context6.t0 = _api2.default;
                _context6.t1 = this.ID;
                _context6.t2 = this.type;
                _context6.next = 6;
                return this.$parent.fetchOpenGID();

              case 6:
                _context6.t3 = _context6.sent;
                _context6.t4 = {
                  fieldID: _context6.t1,
                  fieldType: _context6.t2,
                  openGID: _context6.t3
                };
                _context6.t5 = {
                  url: 'getComments',
                  method: 'POST',
                  data: _context6.t4
                };
                _context6.next = 11;
                return _context6.t0.authRequest.call(_context6.t0, _context6.t5, false);

              case 11:
                res = _context6.sent;

                this.comment = _lodash2.default.find(res.data.commentList, function (x) {
                  return parseInt(x.commentID) === parseInt(_this2.commentID);
                });
                _context6.next = 15;
                return (0, _render2.default)(this.comment.commentContent);

              case 15:
                this.comment.commentContentNodes = _context6.sent;
                _context6.next = 18;
                return _time2.default.getTime(this.comment.commentCreatedAt);

              case 18:
                this.commentCreatedAt = _context6.sent;
                j = 0, len = this.comment.subcomments.length;

              case 20:
                if (!(j < len)) {
                  _context6.next = 27;
                  break;
                }

                _context6.next = 23;
                return _time2.default.getTime(this.comment.subcomments[j].updatedAt);

              case 23:
                this.comment.subcomments[j].updatedAt = _context6.sent;

              case 24:
                j++;
                _context6.next = 20;
                break;

              case 27:
                this.$apply();
                _wepy2.default.hideNavigationBarLoading();

              case 29:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function refreshComment() {
        return _ref7.apply(this, arguments);
      }

      return refreshComment;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/comment_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRfZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImNvbXBvbmVudHMiLCJkYXRhIiwidHlwZSIsIklEIiwiY29tbWVudElEIiwiY29tbWVudCIsImNvbW1lbnRDcmVhdGVkQXQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ1c2VyIiwiZG9fY29tbWVudCIsInJlcGx5T3BlbklEIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJsaWtlMSIsImlsaWtlIiwiaWZsaWtlIiwidGhpc2NvbW1lbnRJRCIsImFwaSIsIiRwYXJlbnQiLCJmZXRjaE9wZW5HSUQiLCJvcGVuR0lEIiwibWV0aG9kIiwiYXV0aFJlcXVlc3QiLCJyZWZyZXNoQ29tbWVudCIsImxpa2UiLCJpbmRleCIsInN1YmNvbW1lbnRzIiwib3B0aW9ucyIsImF1dGhvcml6ZVJlcXVpcmVkIiwiZ3JvdXBSZXF1aXJlZCIsImhpZGVTaGFyZU1lbnUiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwiZmllbGRJRCIsImZpZWxkVHlwZSIsInJlcyIsIl8iLCJmaW5kIiwiY29tbWVudExpc3QiLCJwYXJzZUludCIsIngiLCJjb21tZW50Q29udGVudCIsImNvbW1lbnRDb250ZW50Tm9kZXMiLCJ0aW1lIiwiZ2V0VGltZSIsImoiLCJsZW4iLCJsZW5ndGgiLCJ1cGRhdGVkQXQiLCIkYXBwbHkiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9C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b20gJ3dlcHknO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgYXBpIGZyb20gJ0AvdXRpbHMvYXBpJztcclxuaW1wb3J0IHJlbmRlciBmcm9tICdAL3V0aWxzL3JlbmRlcic7XHJcbmltcG9ydCB0aW1lIGZyb20gJ0AvdXRpbHMvdGltZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ivhOiuuicsXHJcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgJ2ktYXZhdGFyJzogJy4uLy4uL2l2aWV3L2F2YXRhci9pbmRleCcsXHJcbiAgICAgICdpLWljb24nOiAnLi4vLi4vaXZpZXcvaWNvbi9pbmRleCcsXHJcbiAgICAgICdpLXRhYnMnOiAnLi4vLi4vaXZpZXcvdGFicy9pbmRleCcsXHJcbiAgICAgICdpLXRhYic6ICcuLi8uLi9pdmlldy90YWIvaW5kZXgnLFxyXG4gICAgICAnaS1pbnB1dCc6ICcuLi8uLi9pdmlldy9pbnB1dC9pbmRleCdcclxuICAgIH0sXHJcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcclxuICB9O1xyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHR5cGU6IG51bGwsXHJcbiAgICBJRDogbnVsbCxcclxuICAgIGNvbW1lbnRJRDogbnVsbCxcclxuICAgIGNvbW1lbnQ6IG51bGwsXHJcbiAgICBjb21tZW50Q3JlYXRlZEF0OiAnJ1xyXG4gIH07XHJcblxyXG4gIGNvbXB1dGVkID0ge307XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBhc3luYyB1c2VyKCkge1xyXG4gICAgICAvLyDov5vlhaXnlKjmiLfkv6Hmga/nlYzpnaJcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+aCqOeCueWHu+S6hueUqOaIt+WktOWDjycpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGRvX2NvbW1lbnQodHlwZSwgSUQsIHJlcGx5T3BlbklEKSB7XHJcbiAgICAgIC8vIOi/m+ihjOivhOiuuix0eXBlPXBvc3Q66K+E6K665paH56ugLHR5cGU9Y29tbWVudDrlr7nor4Torrrov5vooYzor4TorrosdHlwZT1zdWJjb21tZW50OuWvuealvOS4realvOivhOiuulxyXG4gICAgICAvLyBjb25zb2xlLmxvZygn5byA5aeL6K+E6K66Jyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGUsIElELCByZXBseU9wZW5JRCk7XHJcbiAgICAgIC8vIOmAmui/h2lk6KGo56S65piv5a+56LCB6L+b6KGM6K+E6K66XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1lbnRfbmV3P3R5cGU9JyArIHR5cGUgKyAnJklEPScgKyBJRCArICcmcmVwbHlPcGVuSUQ9JyArIHJlcGx5T3BlbklEXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGxpa2UxKCkge1xyXG4gICAgICAvLyDngrnotZ5cclxuICAgICAgLy8gY29uc29sZS5sb2coJ+eCuei1njEnKTtcclxuICAgICAgdGhpcy5jb21tZW50LmlsaWtlID0gIXRoaXMuY29tbWVudC5pbGlrZTtcclxuICAgICAgdmFyIGlmbGlrZSA9IHRoaXMuY29tbWVudC5pbGlrZTtcclxuICAgICAgdmFyIHRoaXNjb21tZW50SUQgPSB0aGlzLmNvbW1lbnQuY29tbWVudElEO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzY29tbWVudElEKTtcclxuICAgICAgaWYgKGlmbGlrZSkge1xyXG4gICAgICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdjb21tZW50TGlrZScsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxyXG4gICAgICAgICAgICBjb21tZW50SUQ6IHRoaXNjb21tZW50SURcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBhcGkuYXV0aFJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnY29tbWVudFVubGlrZScsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxyXG4gICAgICAgICAgICBjb21tZW50SUQ6IHRoaXNjb21tZW50SURcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnJlc2hDb21tZW50KCk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbGlrZShpbmRleCkge1xyXG4gICAgICAvLyDngrnotZ5cclxuICAgICAgLy8gY29uc29sZS5sb2coJ+eCuei1njInKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICB0aGlzLmNvbW1lbnQuc3ViY29tbWVudHNbaW5kZXhdLmlsaWtlID0gIXRoaXMuY29tbWVudC5zdWJjb21tZW50c1tpbmRleF0uaWxpa2U7XHJcbiAgICAgIHZhciBpZmxpa2UgPSB0aGlzLmNvbW1lbnQuc3ViY29tbWVudHNbaW5kZXhdLmlsaWtlO1xyXG4gICAgICB2YXIgdGhpc2NvbW1lbnRJRCA9IHRoaXMuY29tbWVudC5zdWJjb21tZW50c1tpbmRleF0uY29tbWVudElEO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzY29tbWVudElEKTtcclxuICAgICAgaWYgKGlmbGlrZSkge1xyXG4gICAgICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdjb21tZW50TGlrZScsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxyXG4gICAgICAgICAgICBjb21tZW50SUQ6IHRoaXNjb21tZW50SURcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBhcGkuYXV0aFJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnY29tbWVudFVubGlrZScsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpLFxyXG4gICAgICAgICAgICBjb21tZW50SUQ6IHRoaXNjb21tZW50SURcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlZnJlc2hDb21tZW50KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZTtcclxuICAgIHRoaXMuSUQgPSBvcHRpb25zLklEO1xyXG4gICAgdGhpcy5jb21tZW50SUQgPSBvcHRpb25zLmNvbW1lbnRJRDtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uU2hvdygpIHtcclxuICAgIGlmIChcclxuICAgICAgIWF3YWl0IHRoaXMuJHBhcmVudC5hdXRob3JpemVSZXF1aXJlZCgpIHx8XHJcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuZ3JvdXBSZXF1aXJlZCgpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2VweS5oaWRlU2hhcmVNZW51KCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDb21tZW50KCk7XHJcbiAgfVxyXG5cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ29tbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVmcmVzaENvbW1lbnQoKSB7XHJcbiAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5hdXRoUmVxdWVzdChcclxuICAgICAge1xyXG4gICAgICAgIHVybDogJ2dldENvbW1lbnRzJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBmaWVsZElEOiB0aGlzLklELFxyXG4gICAgICAgICAgZmllbGRUeXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgICBvcGVuR0lEOiBhd2FpdCB0aGlzLiRwYXJlbnQuZmV0Y2hPcGVuR0lEKClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgdGhpcy5jb21tZW50ID0gXy5maW5kKFxyXG4gICAgICByZXMuZGF0YS5jb21tZW50TGlzdCxcclxuICAgICAgeCA9PiBwYXJzZUludCh4LmNvbW1lbnRJRCkgPT09IHBhcnNlSW50KHRoaXMuY29tbWVudElEKVxyXG4gICAgKTtcclxuICAgIHRoaXMuY29tbWVudC5jb21tZW50Q29udGVudE5vZGVzID0gYXdhaXQgcmVuZGVyKHRoaXMuY29tbWVudC5jb21tZW50Q29udGVudCk7XHJcbiAgICB0aGlzLmNvbW1lbnRDcmVhdGVkQXQgPSBhd2FpdCB0aW1lLmdldFRpbWUodGhpcy5jb21tZW50LmNvbW1lbnRDcmVhdGVkQXQpO1xyXG4gICAgZm9yICh2YXIgaiA9IDAsIGxlbiA9IHRoaXMuY29tbWVudC5zdWJjb21tZW50cy5sZW5ndGg7IGogPCBsZW47IGorKykge1xyXG4gICAgICB0aGlzLmNvbW1lbnQuc3ViY29tbWVudHNbal0udXBkYXRlZEF0ID0gYXdhaXQgdGltZS5nZXRUaW1lKHRoaXMuY29tbWVudC5zdWJjb21tZW50c1tqXS51cGRhdGVkQXQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==