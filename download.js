const fs = require("fs");
var request = require("request");
fs.readFile("./a.log", "utf8", (err, data) => {
  if (err) {
    return console.log("文件读取失败，失败原因是：" + err);
  }
  const regex = /Tiles_BIGEMAP\\\\(\S*)\\\\(\S*)\\\\(\S*)\.png/;
  const matches = matchAll(data, regex);
  const arr = matches.map((m) => [m[1], m[2], m[3]]);
  download(0, arr);
});

function download(index, arr) {
  if (index == arr.length) {
    return;
  }
  const path = arr[index];
  var fliename = __dirname + `/map/${path[0]}/${path[1]}`;
  request(
    `http://localhost:8888/customimage/tile?qt=customimage&x=${path[1]}&y=${path[2]}&z=${path[0]}`
  )
    .pipe(
      fs.createWriteStream(`${fliename}/${path[2]}.png`, { autoClose: true })
    )
    .on("close", () => {
      console.log(`download：${fliename}/${path[2]}.png`);
      download(index + 1, arr);
    });
}

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
