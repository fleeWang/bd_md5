import config from "@/config";
var md5 = require("md5-node");
import styleJsonStr from "@/config/styles";

const x: any = { version: "1.3.4" };
x.ba = "$BAIDU$";
x.object = x.object || {};
x.extend = x.object.extend = function (a: any, b: any) {
  for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  return a;
};
function f0(a: any) {
  for (
    var b = {
        featureType: "t",
        elementType: "e",
        visibility: "v",
        color: "c",
        lightness: "l",
        saturation: "s",
        weight: "w",
        zoom: "z",
        hue: "h",
      },
      c = {
        all: "all",
        geometry: "g",
        "geometry.fill": "g.f",
        "geometry.stroke": "g.s",
        labels: "l",
        "labels.text.fill": "l.t.f",
        "labels.text.stroke": "l.t.s",
        "lables.text": "l.t",
        "labels.icon": "l.i",
      },
      d = [],
      e = 0,
      f;
    (f = a[e]);
    e++
  ) {
    var g = f.stylers;
    delete f.stylers;
    x.extend(f, g);
    var g: any = [],
      i;
    for (i in b)
      if (f[i])
        if ("elementType" === i) g.push(b[i] + ":" + c[f[i]]);
        else {
          switch (f[i]) {
            case "poilabel":
              f[i] = "poi";
              break;
            case "districtlabel":
              f[i] = "label";
          }
          g.push(b[i] + ":" + f[i]);
        }
    2 < g.length && d.push(g.join("|"));
  }
  return d.join(",");
}

function Gc(a: string) {
  var b = decodeURIComponent(a.substring(a.indexOf("?") + 1)),
    c = new Date().getTime(),
    d = config.baidu.seckey_abvk,
    e = config.baidu.bmap_seckey,
    f = encodeURIComponent(d + "," + e);
  -1 === a.indexOf("v=") && ((a += "&v=2.1"), (b += "&v=2.1"));
  return (a =
    a +
    ("&seckey=" + f + "&timeStamp=" + c) +
    Ic()(b + ("&seckey=" + d + "," + e + "&timeStamp=" + c)));
}

function Ic() {
  function a(a: any) {
    return b[a - 0];
  }
  var b = (function (a, b) {
    function e(a: any) {
      var b = {
        icxax: function (a: any, b: any) {
          return i.ailxm(a, b);
        },
      };
      return g(a, function (a: any) {
        return b.icxax(f, a);
      });
    }
    function f(a) {
      return i.xhaxa(a, "")[i.aiaea][i.xhaxa(i.cdxai("from", "Char"), l)](a);
    }
    function g(a, b) {
      for (var c = "cxe"; "hxdh" !== c; )
        switch (c) {
          case "lxc":
            return f;
          case i.almmx:
            var d = a.length,
              c = i.laxhh;
            break;
          case i.aadee:
            for (let c = 0; i.axehm(c, d); c++) {
              var e = b(a[c]);
              f.push(e);
            }
            c = "lxc";
            break;
          case i.laxhh:
            var f = [],
              c = i.aadee;
        }
    }
    var i = {
        almmx: "cxe",
        laxhh: "eda",
        aadee: "dah",
        axehm: function (a, b) {
          return a < b;
        },
        xhaxa: function (a, b) {
          return a + b;
        },
        aiaea: "constructor",
        cdxai: function (a, b) {
          return a + b;
        },
        ailxm: function (a, b) {
          return a(b);
        },
        ilaxc: function (a, b) {
          return a(b);
        },
        aedia: "1.1.2",
        ddmic: function (a, b, c) {
          return a(b, c);
        },
        iadma: function (a, b) {
          return a(b);
        },
      },
      j,
      l,
      m = decodeURIComponent;
    l = "Code";
    var n = e.call(
      f,
      [
        39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102,
        70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      ]
    );
    j = i.ddmic(g, [28782, 27702, 26416, 25167, 24183], function (a) {
      return m(a);
    });
    var s = e.call(
        j,
        [
          22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547,
          22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368,
          29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673,
          26925, 25249, 24430,
        ]
      ),
      u = {};
    j = i.iadma(e, j);
    var w = RegExp(j.join("|"));
    for (j = 0; i.axehm(j, n.length); j++) u[s[j]] = n[j];
    b = g(b.split(""), function (a) {
      return u[a] || a;
    }).join("");
    return g(b.split(w), function (a) {
      return i.ilaxc(m, a);
    });
  })(
    this,
    "H\u5e52\u6256\u5f6eP\u62a1P\u692dY\u6c19\u6256\u63cbQO\u5e52\u706e\u58a0\u5ef2\u545a\u58a0\u56c4\u624fl\u5ef2\u545a\u6730\u545a\u545a\u5ef2\u58a0\u706ehh\u5ef2\u624f\u5ef2h\u5ef2\u5e77i\u545a\u545a\u58a0\u545a\u5e77il\u59c8\u5ef2\u5ef2\u6730\u7209\u72baL\u66f0O\u6c19R\u6c19\u6256\u6b9b\u62a1\u5f6e\u5f6e\u5e52O\u6c36\u545a\u545a\u735c\u5ef2\u545a\u5e77\u5ef2\u735cl\u6c36\u5ef2l\u59c8\u5ef2\u5ef2\u5e77l\u545a\u72b8\u577ath"
  );
  (function (a, b) {
    for (var e = ++b; --e; ) a.push(a.shift());
  })(b, 236);
  return function (b) {
    for (
      var d = {
          ieexe: a("0x0"),
          ilcaa: a("0x1"),
          eemae: a("0x2"),
          alcaa: function (a, b) {
            return a - b;
          },
          xaexd: a("0x3"),
          laeci: function (a, b) {
            return a + b;
          },
        },
        e = d[a("0x4")];
      e !== d[a("0x5")];

    )
      switch (e) {
        case "lae":
          var f = a("0x6"),
            e = d[a("0x7")];
          break;
        case a("0x8"):
          return "&sign=" + i.substring(d[a("0x9")](i[a("0xa")], 12));
        case a("0x2"):
          var g = a("0xb"),
            e = d[a("0xc")];
          break;
        case "aha":
          var i = md5(md5(d.laeci(b, f)) + g),
            e = a("0x8");
      }
  };
}

export default function generateSign(stylesJson: any, url: string) {
  const seed = new Date().getTime() % 2;
  let stylesStr;
  if (stylesJson) {
    stylesStr = encodeURIComponent(f0(stylesJson));
  } else {
    stylesStr = encodeURIComponent(f0(styleJsonStr()));
  }

  const signUrl = Gc(
    `http://mapapip${seed}.bdimg.com/${url}&udt=${config.baidu.udt}&scale=${config.baidu.scale}&ak=${config.baidu.ak}&styles=${stylesStr}&v=${config.baidu.v}`
  );
  return signUrl;
}
