const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const babel = require("@babel/core");
const webpackConfig = require('./webpack.config.js');
const babelConfig = require('./babel.config.js');

webpack(webpackConfig, (err, stats) => {
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
    const file = path.join(webpackConfig.output.path, webpackConfig.output.filename);
    babel.transformFileAsync(file, babelConfig).then(result => {
      fs.writeFileSync(file, result.code);
    });
   
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
});
