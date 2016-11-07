const works = "total";
console.log(`it ${works}`);

export default (robot) => {
  robot.hear(/swing/, (res) => {
    res.send("swung");
  });
  robot.hear(/foo/, (res) => {
    res.send("bar");
  });
}
