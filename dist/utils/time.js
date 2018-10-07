'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getTime = function (createdAt) {
    var string1 = createdAt.slice(0, 10);
    var string2 = createdAt.slice(11, 19);
    var string3 = ' ';
    var stringend = string1.concat(string3, string2);
    return stringend;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsImdldFRpbWUiLCJjcmVhdGVkQXQiLCJzdHJpbmcxIiwic2xpY2UiLCJzdHJpbmcyIiwic3RyaW5nMyIsInN0cmluZ2VuZCIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFFBQVFDLE9BQVIsR0FBa0IsVUFBVUMsU0FBVixFQUFxQjtBQUNuQyxRQUFJQyxVQUFVRCxVQUFVRSxLQUFWLENBQWdCLENBQWhCLEVBQW1CLEVBQW5CLENBQWQ7QUFDQSxRQUFJQyxVQUFVSCxVQUFVRSxLQUFWLENBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBQWQ7QUFDQSxRQUFJRSxVQUFVLEdBQWQ7QUFDQSxRQUFJQyxZQUFZSixRQUFRSyxNQUFSLENBQWVGLE9BQWYsRUFBd0JELE9BQXhCLENBQWhCO0FBQ0EsV0FBT0UsU0FBUDtBQUNILENBTkQiLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuZXhwb3J0cy5nZXRUaW1lID0gZnVuY3Rpb24gKGNyZWF0ZWRBdCkge1xyXG4gICAgdmFyIHN0cmluZzEgPSBjcmVhdGVkQXQuc2xpY2UoMCwgMTApO1xyXG4gICAgdmFyIHN0cmluZzIgPSBjcmVhdGVkQXQuc2xpY2UoMTEsIDE5KTtcclxuICAgIHZhciBzdHJpbmczID0gJyAnO1xyXG4gICAgdmFyIHN0cmluZ2VuZCA9IHN0cmluZzEuY29uY2F0KHN0cmluZzMsIHN0cmluZzIpO1xyXG4gICAgcmV0dXJuIHN0cmluZ2VuZDtcclxufVxyXG4iXX0=