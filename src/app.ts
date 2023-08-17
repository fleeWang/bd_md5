import config from "./config";

import express from "express";
var proxy = require("express-http-proxy");
import Logger from "./loaders/logger";
import generateSign from "./services/baidu_sign";

async function startServer() {
  const app = express();
  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
  app.use(
    "/customimage",
    proxy("http://mapapip0.bdimg.com", {
      proxyReqPathResolver: function (req: any, res: any) {
        return generateSign(
          req.query.styles ? JSON.parse(req.query.styles) : req.query.styles,
          `customimage${req.url.split("&styles=")[0]}`
        );
      },
      userResDecorator: function (
        proxyRes: any,
        proxyResData: any,
        req: any,
        res: any
      ) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
        );
        res.header(
          "Access-Control-Allow-Methods",
          "PUT,POST,GET,DELETE,OPTIONS"
        );
        if (req.method == "OPTIONS") {
          res.send(200);
        }
        return proxyResData;
      },
    })
  );
}

startServer();
