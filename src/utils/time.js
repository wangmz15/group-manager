import wepy from 'wepy';

exports.getTime = function (createdAt) {
    var string1 = createdAt.slice(0, 10);
    var string2 = createdAt.slice(11, 19);
    var string3 = ' ';
    var stringend = string1.concat(string3, string2);
    return stringend;
}
