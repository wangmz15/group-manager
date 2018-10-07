'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <toolbar
//    left="emoji|picture" right="preview|submit"
// v-bind:previewDisable.sync="" v-bind:submitDisable.once="" v-on:emoji="" v-on:picture="" v-on:preview="" v-on:submit="" ></toolbar>
var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      left: String,
      right: String,
      previewDisable: {
        type: Boolean,
        default: false
      },
      submitDisable: {
        type: Boolean,
        default: false
      }
    }, _this.computed = {
      showEmoji: function showEmoji() {
        return (this.left || '').toLowerCase().split('|').indexOf('emoji') !== -1;
      },
      showPicture: function showPicture() {
        return (this.left || '').toLowerCase().split('|').indexOf('picture') !== -1;
      },
      showPreview: function showPreview() {
        return (this.right || '').toLowerCase().split('|').indexOf('preview') !== -1;
      },
      showSubmit: function showSubmit() {
        return (this.right || '').toLowerCase().split('|').indexOf('submit') !== -1;
      }
    }, _this.methods = {
      handleEmoji: function handleEmoji() {
        this.$emit('emoji');
      },
      handlePicture: function handlePicture() {
        this.$emit('picture');
      },
      handlePreview: function handlePreview() {
        if (!this.previewDisable) this.$emit('preview');
      },
      handleSubmit: function handleSubmit() {
        if (!this.submitDisable) this.$emit('submit');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImxlZnQiLCJTdHJpbmciLCJyaWdodCIsInByZXZpZXdEaXNhYmxlIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwic3VibWl0RGlzYWJsZSIsImNvbXB1dGVkIiwic2hvd0Vtb2ppIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImluZGV4T2YiLCJzaG93UGljdHVyZSIsInNob3dQcmV2aWV3Iiwic2hvd1N1Ym1pdCIsIm1ldGhvZHMiLCJoYW5kbGVFbW9qaSIsIiRlbWl0IiwiaGFuZGxlUGljdHVyZSIsImhhbmRsZVByZXZpZXciLCJoYW5kbGVTdWJtaXQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTUMsTUFEQTtBQUVOQyxhQUFPRCxNQUZEO0FBR05FLHNCQUFnQjtBQUNkQyxjQUFNQyxPQURRO0FBRWRDLGlCQUFTO0FBRkssT0FIVjtBQU9OQyxxQkFBZTtBQUNiSCxjQUFNQyxPQURPO0FBRWJDLGlCQUFTO0FBRkk7QUFQVCxLLFFBYVJFLFEsR0FBVztBQUNUQyxlQURTLHVCQUNHO0FBQ1YsZUFBTyxDQUFDLEtBQUtULElBQUwsSUFBYSxFQUFkLEVBQWtCVSxXQUFsQixHQUFnQ0MsS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkNDLE9BQTNDLENBQW1ELE9BQW5ELE1BQWdFLENBQUMsQ0FBeEU7QUFDRCxPQUhRO0FBSVRDLGlCQUpTLHlCQUlLO0FBQ1osZUFBTyxDQUFDLEtBQUtiLElBQUwsSUFBYSxFQUFkLEVBQWtCVSxXQUFsQixHQUFnQ0MsS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkNDLE9BQTNDLENBQW1ELFNBQW5ELE1BQWtFLENBQUMsQ0FBMUU7QUFDRCxPQU5RO0FBT1RFLGlCQVBTLHlCQU9LO0FBQ1osZUFBTyxDQUFDLEtBQUtaLEtBQUwsSUFBYyxFQUFmLEVBQW1CUSxXQUFuQixHQUFpQ0MsS0FBakMsQ0FBdUMsR0FBdkMsRUFBNENDLE9BQTVDLENBQW9ELFNBQXBELE1BQW1FLENBQUMsQ0FBM0U7QUFDRCxPQVRRO0FBVVRHLGdCQVZTLHdCQVVJO0FBQ1gsZUFBTyxDQUFDLEtBQUtiLEtBQUwsSUFBYyxFQUFmLEVBQW1CUSxXQUFuQixHQUFpQ0MsS0FBakMsQ0FBdUMsR0FBdkMsRUFBNENDLE9BQTVDLENBQW9ELFFBQXBELE1BQWtFLENBQUMsQ0FBMUU7QUFDRDtBQVpRLEssUUFlWEksTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNNO0FBQ1osYUFBS0MsS0FBTCxDQUFXLE9BQVg7QUFDRCxPQUhPO0FBSVJDLG1CQUpRLDJCQUlRO0FBQ2QsYUFBS0QsS0FBTCxDQUFXLFNBQVg7QUFDRCxPQU5PO0FBT1JFLG1CQVBRLDJCQU9RO0FBQ2QsWUFBSSxDQUFDLEtBQUtqQixjQUFWLEVBQTBCLEtBQUtlLEtBQUwsQ0FBVyxTQUFYO0FBQzNCLE9BVE87QUFVUkcsa0JBVlEsMEJBVU87QUFDYixZQUFJLENBQUMsS0FBS2QsYUFBVixFQUF5QixLQUFLVyxLQUFMLENBQVcsUUFBWDtBQUMxQjtBQVpPLEs7Ozs7RUE3QnVCSSxlQUFLQyxTOztrQkFBbkJ6QixLIiwiZmlsZSI6InRvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4vLyA8dG9vbGJhclxuLy8gICAgbGVmdD1cImVtb2ppfHBpY3R1cmVcIiByaWdodD1cInByZXZpZXd8c3VibWl0XCJcbi8vIHYtYmluZDpwcmV2aWV3RGlzYWJsZS5zeW5jPVwiXCIgdi1iaW5kOnN1Ym1pdERpc2FibGUub25jZT1cIlwiIHYtb246ZW1vamk9XCJcIiB2LW9uOnBpY3R1cmU9XCJcIiB2LW9uOnByZXZpZXc9XCJcIiB2LW9uOnN1Ym1pdD1cIlwiID48L3Rvb2xiYXI+XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbGVmdDogU3RyaW5nLFxuICAgIHJpZ2h0OiBTdHJpbmcsXG4gICAgcHJldmlld0Rpc2FibGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgc3VibWl0RGlzYWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIGNvbXB1dGVkID0ge1xuICAgIHNob3dFbW9qaSgpIHtcbiAgICAgIHJldHVybiAodGhpcy5sZWZ0IHx8ICcnKS50b0xvd2VyQ2FzZSgpLnNwbGl0KCd8JykuaW5kZXhPZignZW1vamknKSAhPT0gLTE7XG4gICAgfSxcbiAgICBzaG93UGljdHVyZSgpIHtcbiAgICAgIHJldHVybiAodGhpcy5sZWZ0IHx8ICcnKS50b0xvd2VyQ2FzZSgpLnNwbGl0KCd8JykuaW5kZXhPZigncGljdHVyZScpICE9PSAtMTtcbiAgICB9LFxuICAgIHNob3dQcmV2aWV3KCkge1xuICAgICAgcmV0dXJuICh0aGlzLnJpZ2h0IHx8ICcnKS50b0xvd2VyQ2FzZSgpLnNwbGl0KCd8JykuaW5kZXhPZigncHJldmlldycpICE9PSAtMTtcbiAgICB9LFxuICAgIHNob3dTdWJtaXQoKSB7XG4gICAgICByZXR1cm4gKHRoaXMucmlnaHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJ3wnKS5pbmRleE9mKCdzdWJtaXQnKSAhPT0gLTE7XG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5kbGVFbW9qaSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2Vtb2ppJyk7XG4gICAgfSxcbiAgICBoYW5kbGVQaWN0dXJlKCkge1xuICAgICAgdGhpcy4kZW1pdCgncGljdHVyZScpO1xuICAgIH0sXG4gICAgaGFuZGxlUHJldmlldygpIHtcbiAgICAgIGlmICghdGhpcy5wcmV2aWV3RGlzYWJsZSkgdGhpcy4kZW1pdCgncHJldmlldycpO1xuICAgIH0sXG4gICAgaGFuZGxlU3VibWl0KCkge1xuICAgICAgaWYgKCF0aGlzLnN1Ym1pdERpc2FibGUpIHRoaXMuJGVtaXQoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==