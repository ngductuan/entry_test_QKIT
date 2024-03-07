const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");

module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   https: true,
  //   key: fs.readFileSync("./src/cert/key.pem"),
  //   cert: fs.readFileSync("./src/cert/cert.pem"),
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000",
  //       changeOrigin: true,
  //       pathRewrite: { "^/api": "" },
  //     },
  //   },
  // },
  // devServer: {
  //   open: process.platform === "darwin",
  //   host: "0.0.0.0",
  //   port: 8085, // CHANGE YOUR PORT HERE!
  //   https: true,
  //   hotOnly: false,
  // },
  //   devServer: {
  //     https: {
  //       key: fs.readFileSync('./src/cert/key.pem'),
  //       cert: fs.readFileSync('./src/cert/cert.pem'),
  //     },
  //     public: 'https://localhost:8080/'
  // }



  
  // devServer: {
  //   proxy: "http://localhost:3000",
  //   https: {
  //     key: fs.readFileSync("./src/cert/key.pem"),
  //     cert: fs.readFileSync("./src/cert/cert.pem"),
  //   },
  // },
});
