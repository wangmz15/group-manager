'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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

/// 依赖：this.noticeID & await this.$parent.fetchOpenGID()
/// 写回：this.notice
var testMixin = function (_wepy$mixin) {
    _inherits(testMixin, _wepy$mixin);

    function testMixin() {
        _classCallCheck(this, testMixin);

        return _possibleConstructorReturn(this, (testMixin.__proto__ || Object.getPrototypeOf(testMixin)).apply(this, arguments));
    }

    _createClass(testMixin, [{
        key: 'refreshNotice',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _wepy2.default.showNavigationBarLoading();
                                _context.prev = 1;
                                _context.t0 = _api2.default;
                                _context.t1 = this.noticeID;
                                _context.next = 6;
                                return this.$parent.fetchOpenGID();

                            case 6:
                                _context.t2 = _context.sent;
                                _context.t3 = {
                                    noticeID: _context.t1,
                                    openGID: _context.t2
                                };
                                _context.t4 = {
                                    url: 'singleNotice',
                                    method: 'POST',
                                    data: _context.t3
                                };
                                _context.next = 11;
                                return _context.t0.authRequest.call(_context.t0, _context.t4, false);

                            case 11:
                                res = _context.sent;

                                if (!(res.data.success === -1)) {
                                    _context.next = 17;
                                    break;
                                }

                                _context.next = 15;
                                return _wepy2.default.showModal({
                                    title: '错误',
                                    content: '该公告已删除',
                                    showCancel: false
                                });

                            case 15:
                                _wepy2.default.navigateBack();
                                return _context.abrupt('return');

                            case 17:
                                this.notice = res.data;
                                _context.next = 20;
                                return (0, _render2.default)(this.notice.noticeContent);

                            case 20:
                                this.notice.noticeContentNodes = _context.sent;
                                _context.next = 23;
                                return _time2.default.getTime(this.notice.createdAt);

                            case 23:
                                this.notice.createdAt = _context.sent;

                                this.$apply();

                                _context.next = 27;
                                return _wepy2.default.setNavigationBarTitle({
                                    title: this.notice.noticeTitle
                                });

                            case 27:
                                _context.t5 = _api2.default;
                                _context.t6 = this.noticeID;
                                _context.next = 31;
                                return this.$parent.fetchOpenGID();

                            case 31:
                                _context.t7 = _context.sent;
                                _context.t8 = {
                                    noticeID: _context.t6,
                                    openGID: _context.t7
                                };
                                _context.t9 = {
                                    url: 'gotNotice',
                                    method: 'POST',
                                    data: _context.t8
                                };
                                _context.next = 36;
                                return _context.t5.authRequest.call(_context.t5, _context.t9, false);

                            case 36:
                                _context.next = 41;
                                break;

                            case 38:
                                _context.prev = 38;
                                _context.t10 = _context['catch'](1);

                                console.error(_context.t10);

                            case 41:
                                _wepy2.default.hideNavigationBarLoading();

                            case 42:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 38]]);
            }));

            function refreshNotice() {
                return _ref.apply(this, arguments);
            }

            return refreshNotice;
        }()
    }]);

    return testMixin;
}(_wepy2.default.mixin);

exports.default = testMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZnJlc2hfbm90aWNlLmpzIl0sIm5hbWVzIjpbInRlc3RNaXhpbiIsIndlcHkiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJhcGkiLCJub3RpY2VJRCIsIiRwYXJlbnQiLCJmZXRjaE9wZW5HSUQiLCJvcGVuR0lEIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImF1dGhSZXF1ZXN0IiwicmVzIiwic3VjY2VzcyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJuYXZpZ2F0ZUJhY2siLCJub3RpY2UiLCJub3RpY2VDb250ZW50Iiwibm90aWNlQ29udGVudE5vZGVzIiwidGltZSIsImdldFRpbWUiLCJjcmVhdGVkQXQiLCIkYXBwbHkiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJub3RpY2VUaXRsZSIsImNvbnNvbGUiLCJlcnJvciIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYkMsK0NBQUtDLHdCQUFMOzs4Q0FFb0JDLGE7OENBS00sS0FBS0MsUTs7dUNBQ0EsS0FBS0MsT0FBTCxDQUFhQyxZQUFiLEU7Ozs7O0FBRGZGLDRDO0FBQ0FHLDJDOzs7QUFKSkMsdUMsRUFBSyxjO0FBQ0xDLDBDLEVBQVEsTTtBQUNSQyx3Qzs7O21EQUpZQyxXLGdDQVNoQixLOzs7QUFUQUMsbUM7O3NDQVdBQSxJQUFJRixJQUFKLENBQVNHLE9BQVQsS0FBcUIsQ0FBQyxDOzs7Ozs7dUNBQ2hCWixlQUFLYSxTQUFMLENBQWU7QUFDbkJDLDJDQUFPLElBRFk7QUFFbkJDLDZDQUFTLFFBRlU7QUFHbkJDLGdEQUFZO0FBSE8saUNBQWYsQzs7O0FBS05oQiwrQ0FBS2lCLFlBQUw7Ozs7QUFHSixxQ0FBS0MsTUFBTCxHQUFjUCxJQUFJRixJQUFsQjs7dUNBQ3VDLHNCQUFPLEtBQUtTLE1BQUwsQ0FBWUMsYUFBbkIsQzs7O0FBQXZDLHFDQUFLRCxNQUFMLENBQVlFLGtCOzt1Q0FDa0JDLGVBQUtDLE9BQUwsQ0FBYSxLQUFLSixNQUFMLENBQVlLLFNBQXpCLEM7OztBQUE5QixxQ0FBS0wsTUFBTCxDQUFZSyxTOztBQUNaLHFDQUFLQyxNQUFMOzs7dUNBRU14QixlQUFLeUIscUJBQUwsQ0FBMkI7QUFDN0JYLDJDQUFPLEtBQUtJLE1BQUwsQ0FBWVE7QUFEVSxpQ0FBM0IsQzs7OzhDQUlBeEIsYTs4Q0FLZ0IsS0FBS0MsUTs7dUNBQ0EsS0FBS0MsT0FBTCxDQUFhQyxZQUFiLEU7Ozs7O0FBRGZGLDRDO0FBQ0FHLDJDOzs7QUFKSkMsdUMsRUFBSyxXO0FBQ0xDLDBDLEVBQVEsTTtBQUNSQyx3Qzs7O21EQUpFQyxXLGdDQVNOLEs7Ozs7Ozs7Ozs7QUFHSmlCLHdDQUFRQyxLQUFSOzs7QUFFSjVCLCtDQUFLNkIsd0JBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvQytCN0IsZUFBSzhCLEs7O2tCQUF2Qi9CLFMiLCJmaWxlIjoicmVmcmVzaF9ub3RpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC91dGlscy9hcGknO1xuaW1wb3J0IHJlbmRlciBmcm9tICdAL3V0aWxzL3JlbmRlcic7XG5pbXBvcnQgdGltZSBmcm9tICdAL3V0aWxzL3RpbWUnO1xuXG4vLy8g5L6d6LWW77yadGhpcy5ub3RpY2VJRCAmIGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKVxuLy8vIOWGmeWbnu+8mnRoaXMubm90aWNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0TWl4aW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcbiAgICBhc3luYyByZWZyZXNoTm90aWNlKCkge1xuICAgICAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5hdXRoUmVxdWVzdChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ3NpbmdsZU5vdGljZScsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpY2VJRDogdGhpcy5ub3RpY2VJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6ZSZ6K+vJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfor6XlhazlkYrlt7LliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub3RpY2UgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMubm90aWNlLm5vdGljZUNvbnRlbnROb2RlcyA9IGF3YWl0IHJlbmRlcih0aGlzLm5vdGljZS5ub3RpY2VDb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMubm90aWNlLmNyZWF0ZWRBdCA9IGF3YWl0IHRpbWUuZ2V0VGltZSh0aGlzLm5vdGljZS5jcmVhdGVkQXQpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcblxuICAgICAgICAgICAgYXdhaXQgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLm5vdGljZS5ub3RpY2VUaXRsZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IGFwaS5hdXRoUmVxdWVzdChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2dvdE5vdGljZScsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpY2VJRDogdGhpcy5ub3RpY2VJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5HSUQ6IGF3YWl0IHRoaXMuJHBhcmVudC5mZXRjaE9wZW5HSUQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xuICAgIH1cbn0iXX0=