'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../utils/api.js');

var _api2 = _interopRequireDefault(_api);

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
        'i-icon': '../iview/icon/index',
        'i-avatar': '../iview/avatar/index'
      },
      enablePullDownRefresh: true
    }, _this.data = {
      postList: [],
      myPostList: [],
      from: '0',
      contentList: []
    }, _this.methods = {
      addPost: function addPost() {
        _wepy2.default.navigateTo({
          url: '/pages/post_new'
        });
      },
      bindShowDetail: function bindShowDetail(postID) {
        _wepy2.default.navigateTo({
          url: '/pages/post_detail?post_id=' + postID
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.from = options.from;
      // console.log(this.from);
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.stopPullDownRefresh();
      this.refreshPostList();
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      return {
        title: '大家快来社区一起讨论吧',
        path: '/pages/community?openGID=' + this.$parent.globalData.openGID,
        imageUrl: '/images/logo.png'
      };
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
                _wepy2.default.showShareMenu({
                  withShareTicket: true
                });
                this.refreshPostList();

              case 11:
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
    key: 'refreshPostList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this2 = this;

        var ans, myPostList;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _wepy2.default.showNavigationBarLoading();
                _context3.t0 = _api2.default;
                _context3.next = 4;
                return this.$parent.fetchOpenGID();

              case 4:
                _context3.t1 = _context3.sent;
                _context3.t2 = {
                  openGID: _context3.t1
                };
                _context3.t3 = {
                  url: 'fetchPostList',
                  method: 'POST',
                  data: _context3.t2
                };
                _context3.next = 9;
                return _context3.t0.authRequest.call(_context3.t0, _context3.t3, false);

              case 9:
                ans = _context3.sent;


                this.postList = ans.data.postList;
                this.postList.forEach(function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(element) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            element.postContent = element.postContent.slice(0, 100);
                            _context2.next = 3;
                            return _time2.default.getTime(element.createdAt);

                          case 3:
                            element.createdAt = _context2.sent;

                            _this2.$apply();

                          case 5:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this2);
                  }));

                  return function (_x) {
                    return _ref4.apply(this, arguments);
                  };
                }());
                myPostList = ans.data.postList.filter(function (post) {
                  return post.authorOpenID === _this2.$parent.globalData.openID;
                });

                this.myPostList = myPostList;
                this.$apply();
                _wepy2.default.hideNavigationBarLoading();

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function refreshPostList() {
        return _ref3.apply(this, arguments);
      }

      return refreshPostList;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/community'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwicG9zdExpc3QiLCJteVBvc3RMaXN0IiwiZnJvbSIsImNvbnRlbnRMaXN0IiwibWV0aG9kcyIsImFkZFBvc3QiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImJpbmRTaG93RGV0YWlsIiwicG9zdElEIiwib3B0aW9ucyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJyZWZyZXNoUG9zdExpc3QiLCJ0aXRsZSIsInBhdGgiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIm9wZW5HSUQiLCJpbWFnZVVybCIsImF1dGhvcml6ZVJlcXVpcmVkIiwiZ3JvdXBSZXF1aXJlZCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJhcGkiLCJmZXRjaE9wZW5HSUQiLCJtZXRob2QiLCJhdXRoUmVxdWVzdCIsImFucyIsImZvckVhY2giLCJlbGVtZW50IiwicG9zdENvbnRlbnQiLCJzbGljZSIsInRpbWUiLCJnZXRUaW1lIiwiY3JlYXRlZEF0IiwiJGFwcGx5IiwiZmlsdGVyIiwicG9zdCIsImF1dGhvck9wZW5JRCIsIm9wZW5JRCIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyx1QkFBaUI7QUFDZixtQkFBVyxzQkFESTtBQUVmLG9CQUFZLHVCQUZHO0FBR2YsaUJBQVMsb0JBSE07QUFJZixpQkFBUyxvQkFKTTtBQUtmLGtCQUFVLHFCQUxLO0FBTWYsbUJBQVcsc0JBTkk7QUFPZix3QkFBZ0IsMkJBUEQ7QUFRZixrQkFBVSxxQkFSSztBQVNmLG9CQUFZO0FBVEcsT0FGVjtBQWFQQyw2QkFBdUI7QUFiaEIsSyxRQWdCVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsa0JBQVksRUFGUDtBQUdMQyxZQUFNLEdBSEQ7QUFJTEMsbUJBQWE7QUFKUixLLFFBT1BDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1JDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsb0JBTlEsMEJBTU9DLE1BTlAsRUFNZTtBQUNyQkosdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxnQ0FBZ0NFO0FBRHZCLFNBQWhCO0FBR0Q7QUFWTyxLOzs7OzsyQkFhSEMsTyxFQUFTO0FBQ2QsV0FBS1QsSUFBTCxHQUFZUyxRQUFRVCxJQUFwQjtBQUNBO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEJJLHFCQUFLTSxtQkFBTDtBQUNBLFdBQUtDLGVBQUw7QUFDRDs7O3NDQUVpQkYsTyxFQUFTO0FBQ3pCLGFBQU87QUFDTEcsZUFBTyxhQURGO0FBRUxDLDRDQUFrQyxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLE9BRnJEO0FBR0xDLGtCQUFVO0FBSEwsT0FBUDtBQUtEOzs7Ozs7Ozs7O3VCQUlVLEtBQUtILE9BQUwsQ0FBYUksaUJBQWIsRTs7Ozs7Ozs7Ozs7dUJBQ0EsS0FBS0osT0FBTCxDQUFhSyxhQUFiLEU7Ozs7Ozs7Ozs7Ozs7O0FBSVRmLCtCQUFLZ0IsYUFBTCxDQUFtQjtBQUNqQkMsbUNBQWlCO0FBREEsaUJBQW5CO0FBR0EscUJBQUtWLGVBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBUCwrQkFBS2tCLHdCQUFMOytCQUNnQkMsYTs7dUJBS0ssS0FBS1QsT0FBTCxDQUFhVSxZQUFiLEU7Ozs7O0FBQWZSLHlCOzs7QUFIRlYscUIsRUFBSyxlO0FBQ0xtQix3QixFQUFRLE07QUFDUjVCLHNCOzs7b0NBSmdCNkIsVyxrQ0FRbEIsSzs7O0FBUkVDLG1COzs7QUFXSixxQkFBSzdCLFFBQUwsR0FBZ0I2QixJQUFJOUIsSUFBSixDQUFTQyxRQUF6QjtBQUNBLHFCQUFLQSxRQUFMLENBQWM4QixPQUFkO0FBQUEsc0ZBQXNCLGtCQUFNQyxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJBLG9DQUFRQyxXQUFSLEdBQXNCRCxRQUFRQyxXQUFSLENBQW9CQyxLQUFwQixDQUEwQixDQUExQixFQUE2QixHQUE3QixDQUF0QjtBQURvQjtBQUFBLG1DQUVNQyxlQUFLQyxPQUFMLENBQWFKLFFBQVFLLFNBQXJCLENBRk47O0FBQUE7QUFFcEJMLG9DQUFRSyxTQUZZOztBQUdwQixtQ0FBS0MsTUFBTDs7QUFIb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0lwQywwQixHQUFhNEIsSUFBSTlCLElBQUosQ0FBU0MsUUFBVCxDQUFrQnNDLE1BQWxCLENBQXlCO0FBQUEseUJBQVFDLEtBQUtDLFlBQUwsS0FBc0IsT0FBS3hCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QndCLE1BQXREO0FBQUEsaUJBQXpCLEM7O0FBQ2pCLHFCQUFLeEMsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxxQkFBS29DLE1BQUw7QUFDQS9CLCtCQUFLb0Msd0JBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExRitCcEMsZUFBS3FDLEk7O2tCQUFuQmpELEsiLCJmaWxlIjoiY29tbXVuaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC91dGlscy9hcGknO1xuaW1wb3J0IHRpbWUgZnJvbSAnQC91dGlscy90aW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ekvuWMuicsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnaS1wYW5lbCc6ICcuLi9pdmlldy9wYW5lbC9pbmRleCcsXG4gICAgICAnaS1idXR0b24nOiAnLi4vaXZpZXcvYnV0dG9uL2luZGV4JyxcbiAgICAgICdpLXJvdyc6ICcuLi9pdmlldy9yb3cvaW5kZXgnLFxuICAgICAgJ2ktY29sJzogJy4uL2l2aWV3L2NvbC9pbmRleCcsXG4gICAgICAnaS1jYXJkJzogJy4uL2l2aWV3L2NhcmQvaW5kZXgnLFxuICAgICAgJ2ktaW5wdXQnOiAnLi4vaXZpZXcvaW5wdXQvaW5kZXgnLFxuICAgICAgJ2ktY2VsbC1ncm91cCc6ICcuLi9pdmlldy9jZWxsLWdyb3VwL2luZGV4JyxcbiAgICAgICdpLWljb24nOiAnLi4vaXZpZXcvaWNvbi9pbmRleCcsXG4gICAgICAnaS1hdmF0YXInOiAnLi4vaXZpZXcvYXZhdGFyL2luZGV4J1xuICAgIH0sXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH07XG5cbiAgZGF0YSA9IHtcbiAgICBwb3N0TGlzdDogW10sXG4gICAgbXlQb3N0TGlzdDogW10sXG4gICAgZnJvbTogJzAnLFxuICAgIGNvbnRlbnRMaXN0OiBbXVxuICB9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgYWRkUG9zdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9wb3N0X25ldydcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYmluZFNob3dEZXRhaWwocG9zdElEKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvcG9zdF9kZXRhaWw/cG9zdF9pZD0nICsgcG9zdElEXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLmZyb20gPSBvcHRpb25zLmZyb207XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mcm9tKTtcbiAgfVxuXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xuICAgIHRoaXMucmVmcmVzaFBvc3RMaXN0KCk7XG4gIH1cblxuICBvblNoYXJlQXBwTWVzc2FnZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5aSn5a625b+r5p2l56S+5Yy65LiA6LW36K6o6K665ZCnJyxcbiAgICAgIHBhdGg6IGAvcGFnZXMvY29tbXVuaXR5P29wZW5HSUQ9JHt0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuR0lEfWAsXG4gICAgICBpbWFnZVVybDogJy9pbWFnZXMvbG9nby5wbmcnXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBpZiAoXG4gICAgICAhYXdhaXQgdGhpcy4kcGFyZW50LmF1dGhvcml6ZVJlcXVpcmVkKCkgfHxcbiAgICAgICFhd2FpdCB0aGlzLiRwYXJlbnQuZ3JvdXBSZXF1aXJlZCgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdlcHkuc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnJlZnJlc2hQb3N0TGlzdCgpO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaFBvc3RMaXN0KCkge1xuICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKCk7XG4gICAgbGV0IGFucyA9IGF3YWl0IGFwaS5hdXRoUmVxdWVzdChcbiAgICAgIHtcbiAgICAgICAgdXJsOiAnZmV0Y2hQb3N0TGlzdCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3BlbkdJRDogYXdhaXQgdGhpcy4kcGFyZW50LmZldGNoT3BlbkdJRCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICB0aGlzLnBvc3RMaXN0ID0gYW5zLmRhdGEucG9zdExpc3Q7XG4gICAgdGhpcy5wb3N0TGlzdC5mb3JFYWNoKGFzeW5jIGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5wb3N0Q29udGVudCA9IGVsZW1lbnQucG9zdENvbnRlbnQuc2xpY2UoMCwgMTAwKTtcbiAgICAgIGVsZW1lbnQuY3JlYXRlZEF0ID0gYXdhaXQgdGltZS5nZXRUaW1lKGVsZW1lbnQuY3JlYXRlZEF0KTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSk7XG4gICAgbGV0IG15UG9zdExpc3QgPSBhbnMuZGF0YS5wb3N0TGlzdC5maWx0ZXIocG9zdCA9PiBwb3N0LmF1dGhvck9wZW5JRCA9PT0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklEKTtcbiAgICB0aGlzLm15UG9zdExpc3QgPSBteVBvc3RMaXN0O1xuICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgd2VweS5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTtcbiAgfVxufVxuIl19