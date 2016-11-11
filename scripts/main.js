'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _googleapis = require('googleapis');

var _googleapis2 = _interopRequireDefault(_googleapis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drive = _googleapis2.default.drive('v3');

var folderId = '0B3jBXk-K_MnuU3pNTDhCVVhUUlU';

var fileMetadata = {
  name: 'foo copy'
  // parents: [ folderId ]
};

exports.default = function (robot) {
  robot.hear(/swing/, function (res) {
    res.send("swung");
  });
  robot.hear(/foo/, function (res) {
    res.send("bar");
  });
  robot.hear(/agenda/, function (res) {
    var auth = 'REPLACE WITH API KEY';
    // Make an authorized request to list Drive files.
    drive.files.copy({
      fileId: '1hfLR-ZdrYo0A0aTQ5rFL22ETSAYroEwCZmE8S9lZlTY',
      auth: auth
      // resource: fileMetadata
    }, function (err, resp) {
      // handle err and response
      if (err) {
        console.log(err);
      }
      console.log('got here');
      console.log(resp);
    });
  });
};

module.exports = exports['default'];