import google from 'googleapis';

const drive = google.drive('v3');

const folderId = '0B3jBXk-K_MnuU3pNTDhCVVhUUlU';

var fileMetadata = {
  name: 'foo copy'
  // parents: [ folderId ]
};

export default (robot) => {
  robot.hear(/swing/, (res) => {
    res.send("swung");
  });
  robot.hear(/foo/, (res) => {
    res.send("bar");
  });
  robot.hear(/agenda/, (res) => {
    const auth = 'REPLACE WITH API KEY';
    // Make an authorized request to list Drive files.
    drive.files.copy({
      fileId: '1hfLR-ZdrYo0A0aTQ5rFL22ETSAYroEwCZmE8S9lZlTY',
      auth
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
}
