'use strict';

var _image = require('./image.js');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 定义表情和图片的对应关系
var emojis = {
  '[微笑]': '100',
  '[撇嘴]': '101',
  '[色]': '102',
  '[发呆]': '103',
  '[得意]': '104',
  '[流泪]': '105',
  '[害羞]': '106',
  '[闭嘴]': '107',
  '[睡]': '108',
  '[大哭]': '109',
  '[尴尬]': '110',
  '[发怒]': '111',
  '[调皮]': '112',
  '[呲牙]': '113',
  '[惊讶]': '114',
  '[难过]': '115',
  '[酷]': '116',
  '[冷汗]': '117',
  '[抓狂]': '118',
  '[吐]': '119',
  '[偷笑]': '120'

  // 将表情文字转为图片
};var emojiToPath = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(i) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _image2.default.getUrl('emojis/' + emojis[i] + '.gif');

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function emojiToPath(_x) {
    return _ref.apply(this, arguments);
  };
}();

// 返回rich-text格式的Node
var textToNode = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(s) {
    var r, a, t, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // 定义正则对象
            r = /\[[^\[\]]+?\]/g;
            a = {
              name: 'p',
              children: []
            };
            t = null; // 是否匹配到表情符号

            i = 0; // 下次匹配的序号

          case 4:
            if (!true) {
              _context2.next = 25;
              break;
            }

            // 正则实例对象的exec方法，用来返回匹配结果。
            // 如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null。
            t = r.exec(s);

            if (t) {
              _context2.next = 9;
              break;
            }

            // 如果匹配不成功，
            // 且序号i至结尾字符不为空，为空则忽略
            // 添加文字类型到数组a，并退出循环
            s.slice(i) && a.children.push({
              type: 'text',
              text: s.slice(i)
            });
            return _context2.abrupt('break', 25);

          case 9:

            // 匹配到了，
            // 且 本次匹配的起始序号 与 表情符号第一个字符序号不等
            // 如果相等，则说明表情前面是一个空字符串，需要忽略
            i !== t.index && a.children.push({
              type: 'text',
              text: s.slice(i, t.index)
            });

            // 匹配了类似[*]的表情符号
            // 还需要判断是否定义了此表情的图片

            if (!emojis[t[0]]) {
              _context2.next = 21;
              break;
            }

            _context2.t0 = a.children;
            _context2.next = 14;
            return emojiToPath(t[0]);

          case 14:
            _context2.t1 = _context2.sent;
            _context2.t2 = t[0];
            _context2.t3 = {
              src: _context2.t1,
              height: '20px',
              width: '20px',
              alt: _context2.t2
            };
            _context2.t4 = {
              name: 'img',
              attrs: _context2.t3
            };

            _context2.t0.push.call(_context2.t0, _context2.t4);

            _context2.next = 22;
            break;

          case 21:
            // 此表情没有图片与之对应，当做文字类型添加到数组a
            a.children.push({
              type: 'text',
              text: t[0]
            });

          case 22:

            i = t.index + t[0].length; // 更新下一次匹配开始的序号
            _context2.next = 4;
            break;

          case 25:
            return _context2.abrupt('return', a);

          case 26:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function textToNode(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  emojis: emojis,
  emojiToPath: emojiToPath,
  textToNode: textToNode
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtb2ppcy5qcyJdLCJuYW1lcyI6WyJlbW9qaXMiLCJlbW9qaVRvUGF0aCIsImkiLCJpbWFnZSIsImdldFVybCIsInRleHRUb05vZGUiLCJzIiwiciIsImEiLCJuYW1lIiwiY2hpbGRyZW4iLCJ0IiwiZXhlYyIsInNsaWNlIiwicHVzaCIsInR5cGUiLCJ0ZXh0IiwiaW5kZXgiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsImF0dHJzIiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLFNBQVM7QUFDYixVQUFRLEtBREs7QUFFYixVQUFRLEtBRks7QUFHYixTQUFPLEtBSE07QUFJYixVQUFRLEtBSks7QUFLYixVQUFRLEtBTEs7QUFNYixVQUFRLEtBTks7QUFPYixVQUFRLEtBUEs7QUFRYixVQUFRLEtBUks7QUFTYixTQUFPLEtBVE07QUFVYixVQUFRLEtBVks7QUFXYixVQUFRLEtBWEs7QUFZYixVQUFRLEtBWks7QUFhYixVQUFRLEtBYks7QUFjYixVQUFRLEtBZEs7QUFlYixVQUFRLEtBZks7QUFnQmIsVUFBUSxLQWhCSztBQWlCYixTQUFPLEtBakJNO0FBa0JiLFVBQVEsS0FsQks7QUFtQmIsVUFBUSxLQW5CSztBQW9CYixTQUFPLEtBcEJNO0FBcUJiLFVBQVE7O0FBR1Y7QUF4QmUsQ0FBZixDQXlCQSxJQUFNQztBQUFBLHFFQUFjLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNMQyxnQkFBTUMsTUFBTixhQUF1QkosT0FBT0UsQ0FBUCxDQUF2QixVQURLOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQUlBO0FBQ0EsSUFBTUc7QUFBQSxzRUFBYSxrQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakI7QUFDTUMsYUFGVyxHQUVQLGdCQUZPO0FBSVhDLGFBSlcsR0FJUDtBQUNSQyxvQkFBTSxHQURFO0FBRVJDLHdCQUFVO0FBRkYsYUFKTztBQVFiQyxhQVJhLEdBUVQsSUFSUyxFQVFIOztBQUNWVCxhQVRhLEdBU1QsQ0FUUyxFQVNOOztBQVRNO0FBQUEsaUJBV1YsSUFYVTtBQUFBO0FBQUE7QUFBQTs7QUFZZjtBQUNBO0FBQ0FTLGdCQUFJSixFQUFFSyxJQUFGLENBQU9OLENBQVAsQ0FBSjs7QUFkZSxnQkFnQlZLLENBaEJVO0FBQUE7QUFBQTtBQUFBOztBQWlCYjtBQUNBO0FBQ0E7QUFDQUwsY0FBRU8sS0FBRixDQUFRWCxDQUFSLEtBQWNNLEVBQUVFLFFBQUYsQ0FBV0ksSUFBWCxDQUFnQjtBQUM1QkMsb0JBQU0sTUFEc0I7QUFFNUJDLG9CQUFNVixFQUFFTyxLQUFGLENBQVFYLENBQVI7QUFGc0IsYUFBaEIsQ0FBZDtBQXBCYTs7QUFBQTs7QUEyQmY7QUFDQTtBQUNBO0FBQ0NBLGtCQUFNUyxFQUFFTSxLQUFULElBQW1CVCxFQUFFRSxRQUFGLENBQVdJLElBQVgsQ0FBZ0I7QUFDakNDLG9CQUFNLE1BRDJCO0FBRWpDQyxvQkFBTVYsRUFBRU8sS0FBRixDQUFRWCxDQUFSLEVBQVdTLEVBQUVNLEtBQWI7QUFGMkIsYUFBaEIsQ0FBbkI7O0FBS0E7QUFDQTs7QUFwQ2UsaUJBcUNYakIsT0FBT1csRUFBRSxDQUFGLENBQVAsQ0FyQ1c7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMkJBdUNiSCxFQUFFRSxRQXZDVztBQUFBO0FBQUEsbUJBMENFVCxZQUFZVSxFQUFFLENBQUYsQ0FBWixDQTFDRjs7QUFBQTtBQUFBO0FBQUEsMkJBNkNKQSxFQUFFLENBQUYsQ0E3Q0k7QUFBQTtBQTBDVE8saUJBMUNTO0FBMkNUQyxvQkEzQ1MsRUEyQ0QsTUEzQ0M7QUE0Q1RDLG1CQTVDUyxFQTRDRixNQTVDRTtBQTZDVEMsaUJBN0NTO0FBQUE7QUFBQTtBQXdDWFosa0JBeENXLEVBd0NMLEtBeENLO0FBeUNYYSxtQkF6Q1c7QUFBQTs7QUFBQSx5QkF1Q0ZSLElBdkNFOztBQUFBO0FBQUE7O0FBQUE7QUFpRGI7QUFDQU4sY0FBRUUsUUFBRixDQUFXSSxJQUFYLENBQWdCO0FBQ2RDLG9CQUFNLE1BRFE7QUFFZEMsb0JBQU1MLEVBQUUsQ0FBRjtBQUZRLGFBQWhCOztBQWxEYTs7QUF3RGZULGdCQUFJUyxFQUFFTSxLQUFGLEdBQVVOLEVBQUUsQ0FBRixFQUFLWSxNQUFuQixDQXhEZSxDQXdEWTtBQXhEWjtBQUFBOztBQUFBO0FBQUEsOENBMkRWZixDQTNEVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBOERBZ0IsT0FBT0MsT0FBUCxHQUFpQjtBQUNmekIsZ0JBRGU7QUFFZkMsMEJBRmU7QUFHZkk7QUFIZSxDQUFqQiIsImZpbGUiOiJlbW9qaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5cbi8vIOWumuS5ieihqOaDheWSjOWbvueJh+eahOWvueW6lOWFs+ezu1xuY29uc3QgZW1vamlzID0ge1xuICAnW+W+rueskV0nOiAnMTAwJyxcbiAgJ1vmkoflmLRdJzogJzEwMScsXG4gICdb6ImyXSc6ICcxMDInLFxuICAnW+WPkeWRhl0nOiAnMTAzJyxcbiAgJ1vlvpfmhI9dJzogJzEwNCcsXG4gICdb5rWB5rOqXSc6ICcxMDUnLFxuICAnW+Wus+e+nl0nOiAnMTA2JyxcbiAgJ1vpl63lmLRdJzogJzEwNycsXG4gICdb552hXSc6ICcxMDgnLFxuICAnW+Wkp+WTrV0nOiAnMTA5JyxcbiAgJ1vlsLTlsKxdJzogJzExMCcsXG4gICdb5Y+R5oCSXSc6ICcxMTEnLFxuICAnW+iwg+earl0nOiAnMTEyJyxcbiAgJ1vlkbLniZldJzogJzExMycsXG4gICdb5oOK6K62XSc6ICcxMTQnLFxuICAnW+mavui/h10nOiAnMTE1JyxcbiAgJ1vphbddJzogJzExNicsXG4gICdb5Ya35rGXXSc6ICcxMTcnLFxuICAnW+aKk+eLgl0nOiAnMTE4JyxcbiAgJ1vlkJBdJzogJzExOScsXG4gICdb5YG356yRXSc6ICcxMjAnLFxufVxuXG4vLyDlsIbooajmg4XmloflrZfovazkuLrlm77niYdcbmNvbnN0IGVtb2ppVG9QYXRoID0gYXN5bmMgKGkpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGltYWdlLmdldFVybChgZW1vamlzLyR7ZW1vamlzW2ldfS5naWZgKTtcbn1cblxuLy8g6L+U5ZuecmljaC10ZXh05qC85byP55qETm9kZVxuY29uc3QgdGV4dFRvTm9kZSA9IGFzeW5jIChzKSA9PiB7XG4gIC8vIOWumuS5ieato+WImeWvueixoVxuICBjb25zdCByID0gL1xcW1teXFxbXFxdXSs/XFxdL2c7XG5cbiAgY29uc3QgYSA9IHtcbiAgICBuYW1lOiAncCcsXG4gICAgY2hpbGRyZW46IFtdXG4gIH07XG4gIGxldCB0ID0gbnVsbDsgLy8g5piv5ZCm5Yy56YWN5Yiw6KGo5oOF56ym5Y+3XG4gIGxldCBpID0gMDsgLy8g5LiL5qyh5Yy56YWN55qE5bqP5Y+3XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICAvLyDmraPliJnlrp7kvovlr7nosaHnmoRleGVj5pa55rOV77yM55So5p2l6L+U5Zue5Yy56YWN57uT5p6c44CCXG4gICAgLy8g5aaC5p6c5Y+R546w5Yy56YWN77yM5bCx6L+U5Zue5LiA5Liq5pWw57uE77yM5oiQ5ZGY5piv5Yy56YWN5oiQ5Yqf55qE5a2Q5a2X56ym5Liy77yM5ZCm5YiZ6L+U5ZuebnVsbOOAglxuICAgIHQgPSByLmV4ZWMocyk7XG5cbiAgICBpZiAoIXQpIHtcbiAgICAgIC8vIOWmguaenOWMuemFjeS4jeaIkOWKn++8jFxuICAgICAgLy8g5LiU5bqP5Y+3aeiHs+e7k+WwvuWtl+espuS4jeS4uuepuu+8jOS4uuepuuWImeW/veeVpVxuICAgICAgLy8g5re75Yqg5paH5a2X57G75Z6L5Yiw5pWw57uEYe+8jOW5tumAgOWHuuW+queOr1xuICAgICAgcy5zbGljZShpKSAmJiBhLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6IHMuc2xpY2UoaSlcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7IC8vIOmAgOWHuuW+queOr1xuICAgIH1cblxuICAgIC8vIOWMuemFjeWIsOS6hu+8jFxuICAgIC8vIOS4lCDmnKzmrKHljLnphY3nmoTotbflp4vluo/lj7cg5LiOIOihqOaDheespuWPt+esrOS4gOS4quWtl+espuW6j+WPt+S4jeetiVxuICAgIC8vIOWmguaenOebuOetie+8jOWImeivtOaYjuihqOaDheWJjemdouaYr+S4gOS4quepuuWtl+espuS4su+8jOmcgOimgeW/veeVpVxuICAgIChpICE9PSB0LmluZGV4KSAmJiBhLmNoaWxkcmVuLnB1c2goe1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdGV4dDogcy5zbGljZShpLCB0LmluZGV4KVxuICAgIH0pO1xuXG4gICAgLy8g5Yy56YWN5LqG57G75Ly8Wypd55qE6KGo5oOF56ym5Y+3XG4gICAgLy8g6L+Y6ZyA6KaB5Yik5pat5piv5ZCm5a6a5LmJ5LqG5q2k6KGo5oOF55qE5Zu+54mHXG4gICAgaWYgKGVtb2ppc1t0WzBdXSkge1xuICAgICAgLy8g5a6a5LmJ5LqG6KGo5oOF5Zu+54mH77yM5re75Yqg6KGo5oOF57G75Z6L5Yiw5pWw57uEYVxuICAgICAgYS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2ltZycsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgc3JjOiBhd2FpdCBlbW9qaVRvUGF0aCh0WzBdKSxcbiAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICB3aWR0aDogJzIwcHgnLFxuICAgICAgICAgIGFsdDogdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5q2k6KGo5oOF5rKh5pyJ5Zu+54mH5LiO5LmL5a+55bqU77yM5b2T5YGa5paH5a2X57G75Z6L5re75Yqg5Yiw5pWw57uEYVxuICAgICAgYS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiB0WzBdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpID0gdC5pbmRleCArIHRbMF0ubGVuZ3RoOyAvLyDmm7TmlrDkuIvkuIDmrKHljLnphY3lvIDlp4vnmoTluo/lj7dcbiAgfVxuXG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW1vamlzLFxuICBlbW9qaVRvUGF0aCxcbiAgdGV4dFRvTm9kZVxufVxuXG4iXX0=