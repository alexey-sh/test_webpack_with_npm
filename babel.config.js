const presets = [
  [
    "es2015",
    {
      targets: {
        edge: "17",
        firefox: "52",
        chrome: "40",
        safari: "9",
        ie: "11"
      },
      useBuiltIns: "usage",
      modules: false
    },
  ],
];

module.exports = { presets };
