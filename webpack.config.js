const minifier = require("terser-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpackPwaManifest = require("webpack-pwa-manifest"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin"),
  serviceWorkerPlugin = require("serviceworker-webpack-plugin");
const autoPrefixPlugin = require("autoprefixer");
const mode = process.env.NODE_ENV || "development";
// const mode = "production";
const devOrProd = (a, b) => {
  return "production" === mode ? a : b;
};

module.exports = {
  devServer: { contentBase: `${__dirname}/docs`, compress: !0, port: 4200 },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  corejs: "3.2.1",
                  // targets: ">0.5%,not ie 11,not op_mini all"
                },
              ],
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-syntax-dynamic-import",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
        postcssOptions: { plugins: [autoPrefixPlugin()] },
      },

          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [{ loader: "url-loader", options: { fallback: "file-loader" } }],
      },
    ],
  },
  entry: `${__dirname}/static/js/app.js`,
  output: { path: `${__dirname}/docs`, filename: "[name]-[contenthash].js" },
  mode,
  optimization: {
    minimizer: devOrProd([new minifier({ parallel: !0 })], []),
    splitChunks: {
      chunks: "all",
    },
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
          removeRedundantAttributes: !0,
        },
        !1
      ),
    }),
    /*  new webpackPwaManifest({
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
    }),*/
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
      chunkFilename: "[id]-[hash].css",
    }),
    // new StyleExtHtmlWebpackPlugin({ minify: devOrProd(!0, !1) }),
    //    new serviceWorkerPlugin({ entry: `${__dirname}/static/js/sw.js` })
  ],
};
