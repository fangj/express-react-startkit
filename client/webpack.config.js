var webpack = require("webpack");
var path=require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
  entry:{
    app:'./src/app/index.js',
    "ant.web":'./src/app/ant.web.js',
    "ant.mobile":'./src/app/ant.mobile.js',
    "weui":'./src/app/weui.js',
    "todo":'./src/app/todo.js',
    vendor:[]
  },
  output:{
    path: path.join(__dirname,"..","server","dist","public","build"),
    filename:'[name].js'
  },
  externals: {
        // require("react") is external and available
        //  on the global var React
        "react": "React",
        "react-dom": "ReactDOM",
        "pubsub-js":"PubSub",
        "lodash":"_",
        "moment":"moment",
        "react-router":"ReactRouter",
        "react-bootstrap":"ReactBootstrap",
        "classnames":"classNames",
        "antd":"antd",
        "antd-mobile":"antdMobile",
        "react-weui":"reactWeui",
        "mobx":"mobx",
        "mobx-react":"mobxReact",
        "trianglify":"Trianglify",
        "geopattern":"GeoPattern"
  },
  module:{
    loaders:[
      {
        test:/\.js/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      // Extract css files
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      { test: /\.(png|jpg)$/, 
        loader: 'file-loader?name=[sha512:hash:base64:7].[ext]&publicPath=img/&outputPath=../img/'} //输出位置针对于build
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^(buffertools)$/), // unwanted "deeper" dependency,
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new ExtractTextPlugin("[name].css")
  ]
}