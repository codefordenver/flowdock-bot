"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var works = "total";
console.log("it " + works);

exports.default = function (robot) {
  robot.hear(/swing/, function (res) {
    res.send("swung");
  });
  robot.hear(/foo/, function (res) {
    res.send("bar");
  });
};

module.exports = exports["default"];