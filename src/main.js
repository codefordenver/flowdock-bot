import googleDrive from 'google-drive';

export default (robot) => {
  robot.hear(/swing/, (res) => {
    res.send("swung");
  });
  robot.hear(/foo/, (res) => {
    res.send("bar");
  });
  robot.hear(/agenda/, (res) => {
    googleDrive(token).files(id).copy(null, null, (err, response, body) => {
      console.log(err);
      console.log(response);
      console.log(body);
      res.send("got it");
    })
  })
}
