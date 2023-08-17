import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT, 10),

  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },

  baidu: {
    udt: process.env.UDT,
    scale: process.env.SCALE,
    ak: process.env.AK,
    v: process.env.V,
    seckey_abvk: process.env.SECKEY_ABVK,
    bmap_seckey: process.env.BMAP_SECKEY,
  },
};
