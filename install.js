const webpack = require('webpack');
const babel = require("@babel/core");
const config = require('./webpack.config.js');

webpack(config, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  else {
   babel.transformFileAsync("filename.js", options).then(result => {
     console.log(result.code);
   });
   
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
});
