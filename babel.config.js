const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "52",
        chrome: "40",
        safari: "9",
        ie: "11"
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
