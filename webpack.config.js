var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry:{ bundle:"./src/js/root.js",
  vendor: ['react', 'react-dom', 'react-router']},
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs',["import", { "libraryName": "antd" }]] //添加组件的插件配置
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    path:  path.resolve(__dirname, './dist/js'),
    filename: debug
    ?
     "[name].js"
    :
     "[name].min.js",
    publicPath:''
  },
  plugins: debug ? [] : [
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',  'vendor.js'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
  };
