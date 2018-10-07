'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _image = require('./image.js');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('./emojis.js'),
    textToNode = _require.textToNode;

// 将文本解析为nodes数组


exports.default = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(content, images) {
        var nodes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, line, reg, i, this_node, t, pic_no;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        images = images || [];
                        nodes = [];
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 5;
                        _iterator = content.split('\n')[Symbol.iterator]();

                    case 7:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 45;
                            break;
                        }

                        line = _step.value;
                        reg = /\[pic(\d+)\]/g;
                        i = 0;
                        this_node = {
                            name: 'div',
                            children: []
                        };

                    case 12:
                        if (!true) {
                            _context.next = 41;
                            break;
                        }

                        t = reg.exec(line);

                        if (t) {
                            _context.next = 21;
                            break;
                        }

                        _context.t0 = this_node.children;
                        _context.next = 18;
                        return textToNode(line.slice(i));

                    case 18:
                        _context.t1 = _context.sent;

                        _context.t0.push.call(_context.t0, _context.t1);

                        return _context.abrupt('break', 41);

                    case 21:
                        i !== t.index && this_node.children.push({
                            type: 'text',
                            text: s.slice(i, t.index)
                        });
                        pic_no = parseInt(t[1]);

                        if (!(0 <= pic_no && pic_no < images.length)) {
                            _context.next = 33;
                            break;
                        }

                        _context.t2 = this_node.children;
                        _context.next = 27;
                        return _image2.default.getUrl(images[pic_no]);

                    case 27:
                        _context.t3 = _context.sent;
                        _context.t4 = {
                            src: _context.t3,
                            width: '100%'
                        };
                        _context.t5 = {
                            name: 'img',
                            attrs: _context.t4
                        };

                        _context.t2.push.call(_context.t2, _context.t5);

                        _context.next = 38;
                        break;

                    case 33:
                        _context.t6 = this_node.children;
                        _context.next = 36;
                        return textToNode(t[0]);

                    case 36:
                        _context.t7 = _context.sent;

                        _context.t6.push.call(_context.t6, _context.t7);

                    case 38:
                        i = t.index + t[0].length;
                        _context.next = 12;
                        break;

                    case 41:
                        nodes.push(this_node);

                    case 42:
                        _iteratorNormalCompletion = true;
                        _context.next = 7;
                        break;

                    case 45:
                        _context.next = 51;
                        break;

                    case 47:
                        _context.prev = 47;
                        _context.t8 = _context['catch'](5);
                        _didIteratorError = true;
                        _iteratorError = _context.t8;

                    case 51:
                        _context.prev = 51;
                        _context.prev = 52;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 54:
                        _context.prev = 54;

                        if (!_didIteratorError) {
                            _context.next = 57;
                            break;
                        }

                        throw _iteratorError;

                    case 57:
                        return _context.finish(54);

                    case 58:
                        return _context.finish(51);

                    case 59:
                        return _context.abrupt('return', nodes);

                    case 60:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[5, 47, 51, 59], [52,, 54, 58]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidGV4dFRvTm9kZSIsImNvbnRlbnQiLCJpbWFnZXMiLCJub2RlcyIsInNwbGl0IiwibGluZSIsInJlZyIsImkiLCJ0aGlzX25vZGUiLCJuYW1lIiwiY2hpbGRyZW4iLCJ0IiwiZXhlYyIsInNsaWNlIiwicHVzaCIsImluZGV4IiwidHlwZSIsInRleHQiLCJzIiwicGljX25vIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJpbWFnZSIsImdldFVybCIsInNyYyIsIndpZHRoIiwiYXR0cnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztlQUNxQkEsUUFBUSxVQUFSLEM7SUFBZkMsVSxZQUFBQSxVOztBQUVOOzs7O3VFQUNlLGlCQUFnQkMsT0FBaEIsRUFBeUJDLE1BQXpCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEEsaUNBQVNBLFVBQVUsRUFBbkI7QUFDSUMsNkJBRk8sR0FFQyxFQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FHTUYsUUFBUUcsS0FBUixDQUFjLElBQWQsQ0FITjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdGQyw0QkFIRTtBQUlEQywyQkFKQyxHQUlLLGVBSkw7QUFLSEMseUJBTEcsR0FLQyxDQUxEO0FBTUhDLGlDQU5HLEdBTVM7QUFDWkMsa0NBQU0sS0FETTtBQUVaQyxzQ0FBVTtBQUZFLHlCQU5UOztBQUFBO0FBQUEsNkJBVUEsSUFWQTtBQUFBO0FBQUE7QUFBQTs7QUFXQ0MseUJBWEQsR0FXS0wsSUFBSU0sSUFBSixDQUFTUCxJQUFULENBWEw7O0FBQUEsNEJBWUVNLENBWkY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsc0NBYUNILFVBQVVFLFFBYlg7QUFBQTtBQUFBLCtCQWErQlYsV0FBV0ssS0FBS1EsS0FBTCxDQUFXTixDQUFYLENBQVgsQ0FiL0I7O0FBQUE7QUFBQTs7QUFBQSxvQ0Fhb0JPLElBYnBCOztBQUFBOztBQUFBO0FBZ0JGUCw4QkFBTUksRUFBRUksS0FBVCxJQUFtQlAsVUFBVUUsUUFBVixDQUFtQkksSUFBbkIsQ0FBd0I7QUFDdkNFLGtDQUFNLE1BRGlDO0FBRXZDQyxrQ0FBTUMsRUFBRUwsS0FBRixDQUFRTixDQUFSLEVBQVdJLEVBQUVJLEtBQWI7QUFGaUMseUJBQXhCLENBQW5CO0FBSUlJLDhCQXBCRCxHQW9CVUMsU0FBU1QsRUFBRSxDQUFGLENBQVQsQ0FwQlY7O0FBQUEsOEJBcUJDLEtBQUtRLE1BQUwsSUFBZUEsU0FBU2pCLE9BQU9tQixNQXJCaEM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsc0NBc0JDYixVQUFVRSxRQXRCWDtBQUFBO0FBQUEsK0JBeUJvQlksZ0JBQU1DLE1BQU4sQ0FBYXJCLE9BQU9pQixNQUFQLENBQWIsQ0F6QnBCOztBQUFBO0FBQUE7QUFBQTtBQXlCU0ssK0JBekJUO0FBMEJTQyxpQ0ExQlQsRUEwQmdCO0FBMUJoQjtBQUFBO0FBdUJLaEIsZ0NBdkJMLEVBdUJXLEtBdkJYO0FBd0JLaUIsaUNBeEJMO0FBQUE7O0FBQUEsb0NBc0JvQlosSUF0QnBCOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxzQ0E4QkNOLFVBQVVFLFFBOUJYO0FBQUE7QUFBQSwrQkE4QitCVixXQUFXVyxFQUFFLENBQUYsQ0FBWCxDQTlCL0I7O0FBQUE7QUFBQTs7QUFBQSxvQ0E4Qm9CRyxJQTlCcEI7O0FBQUE7QUFnQ0hQLDRCQUFJSSxFQUFFSSxLQUFGLEdBQVVKLEVBQUUsQ0FBRixFQUFLVSxNQUFuQjtBQWhDRztBQUFBOztBQUFBO0FBa0NQbEIsOEJBQU1XLElBQU4sQ0FBV04sU0FBWDs7QUFsQ087QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlEQW9DSkwsS0FwQ0k7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSyIsImZpbGUiOiJyZW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5sZXQgeyB0ZXh0VG9Ob2RlIH0gPSByZXF1aXJlKCcuL2Vtb2ppcycpO1xuXG4vLyDlsIbmlofmnKzop6PmnpDkuLpub2Rlc+aVsOe7hFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKGNvbnRlbnQsIGltYWdlcykge1xuICAgIGltYWdlcyA9IGltYWdlcyB8fCBbXTtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBmb3IgKGxldCBsaW5lIG9mIGNvbnRlbnQuc3BsaXQoJ1xcbicpKSB7XG4gICAgICAgIGNvbnN0IHJlZyA9IC9cXFtwaWMoXFxkKylcXF0vZztcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgdGhpc19ub2RlID0ge1xuICAgICAgICAgICAgbmFtZTogJ2RpdicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgbGV0IHQgPSByZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgICAgIHRoaXNfbm9kZS5jaGlsZHJlbi5wdXNoKGF3YWl0IHRleHRUb05vZGUobGluZS5zbGljZShpKSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGkgIT09IHQuaW5kZXgpICYmIHRoaXNfbm9kZS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dDogcy5zbGljZShpLCB0LmluZGV4KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcGljX25vID0gcGFyc2VJbnQodFsxXSk7XG4gICAgICAgICAgICBpZiAoMCA8PSBwaWNfbm8gJiYgcGljX25vIDwgaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNfbm9kZS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGF3YWl0IGltYWdlLmdldFVybChpbWFnZXNbcGljX25vXSksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc19ub2RlLmNoaWxkcmVuLnB1c2goYXdhaXQgdGV4dFRvTm9kZSh0WzBdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gdC5pbmRleCArIHRbMF0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIG5vZGVzLnB1c2godGhpc19ub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xufVxuIl19