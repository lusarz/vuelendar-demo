module.exports = {
  "presets": [
    ["@babel/preset-env", { "modules": false }]
  ],
  "env": {
    "test": {
      "presets": [
        ["@babel/preset-env", { "modules":  false }]
      ],
      "plugins": ["@babel/plugin-syntax-dynamic-import", "@babel/plugin-transform-modules-commonjs"]
    }
  }
};
