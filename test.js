const fs = require("fs");
var request = require("request");
fs.readFile("./a.log", "utf8", (err, data) => {
  if (err) {
    return console.log("文件读取失败，失败原因是：" + err);
  }
  const regex = /Tiles_BIGEMAP\\\\(\S*)\\\\(\S*)\\\\(\S*)\.png/;
  const matches = matchAll(data, regex);
  const arr = matches.map((m) => [m[1], m[2], m[3]]);
  console.log(arr);

  // arr.forEach((path) => {
  //   var fliename = __dirname + `/map/${path[0]}/${path[1]}`;
  //   fs.mkdir(fliename, { recursive: true }, (err) => err);
  // });
  arr.forEach((path) => {
    var fliename = __dirname + `/map/${path[0]}/${path[1]}`;
    request("https://www.baidu.com/img/flexible/logo/pc/result.png")
      .on("error", (e) => console.log(`${fliename}/${path[2]}.png`))
      .pipe(
        fs.createWriteStream(`${fliename}/${path[2]}.png`, { autoClose: true })
      )
      .on("error", (e) => console.log(`${fliename}/${path[2]}.png`));
  });
});
function matchAll(data, exp) {
  var regex = exp;
  var Regex = new RegExp(regex, "mg");
  var Matches = data.match(Regex);
  matchesArray = new Array();
  for (var i in Matches) {
    const ngRegex = new RegExp(regex);
    const ngMatches = Matches[i].match(ngRegex);
    matchesArray.push(ngMatches);
  }
  return matchesArray;
}
