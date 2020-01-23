module.exports = {
  "lintOnSave": false,
  "publicPath": "./",
  devServer: {
    proxy: "https://sapmobiledev.dom.hadassah.org.il:8001"
  },
  "transpileDependencies": [
    "vuetify"
  ]
}