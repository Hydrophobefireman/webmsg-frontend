const minifier = require("terser-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpackPwaManifest = require("webpack-pwa-manifest"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");
const mode = "development";
// const mode = "production";
const devOrProd = (a, b) => {
  return "production" === mode ? a : b;
};

module.exports = {
  devServer: { contentBase: `${__dirname}/dist`, compress: !0, port: 4200 },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [{ loader: "file-loader", options: {} }]
      }
    ]
  },
  entry: `${__dirname}/static/js/app.js`,
  output: { path: `${__dirname}/dist`, filename: "[name].[hash].js" },
  mode,
  optimization: {
    minimizer: devOrProd([new minifier({ parallel: !0 })], [])
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.temp.html`,
      xhtml: !0,
      favicon: "./favicon.ico",
      minify: devOrProd(
        {
          collapseBooleanAttributes: !0,
          collapseWhitespace: !0,
          html5: !0,
          minifyCSS: !0,
          removeEmptyAttributes: !0,
          removeRedundantAttributes: !0
        },
        !1
      )
    }),
    new webpackPwaManifest({
      background_color: "#e3e3e3",
      description: "Web Message using WebRTC",
      display: "standalone",
      fingerprints: !0,
      icons: [
        {
          src: `${__dirname}/assets/icons/icon-512x512.png`,
          sizes: [72, 96, 128, 144, 152, 192, 256, 384, 512]
        }
      ],
      inject: !0,
      lang: "en",
      name: "WebMsg",
      start_url: "/",
      short_name: "WebMsg",
      "theme-color": "#1976d2"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    new StyleExtHtmlWebpackPlugin({ minify: devOrProd(!0, !1) })
  ]
};
