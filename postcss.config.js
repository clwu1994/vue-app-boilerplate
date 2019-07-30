module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-pxtorem": {
      rootValue: 75,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [".van-", ".nopost-"],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
};
