var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['vue','vuex','vue-router'],
    bundle: './src/index'
  },
  //devtool: 'source-map',
  //debug: true,
  output: {
    path: 'dist',
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[id].[chunkhash].js'
    // publicPath: 'assets'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
       compress: { warnings: false }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename:"static/js/[name].[chunkhash].js",
      minChunks: Infinity //Infinity
    }),
    // new ExtractTextPlugin('static/css/[name].[contenthash].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      favicon:path.join(__dirname,'src/favicon.ico'),
      title: "Jackblog vue版",
      template: path.join(__dirname,'src/index.html'),  //模板文件
      inject:'body',
      hash:false,    //为静态资源生成hash值
      minify:{    //压缩HTML文件
        removeComments:false,    //移除HTML中的注释
        collapseWhitespace:true    //删除空白符与换行符
      }
    }),
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.vue$/,loader: 'vue', include: path.join(__dirname,'src')},
      { test: /\.js$/, loader: 'babel', exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/},
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader' ) },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.(jpe?g|png|gif)$/i, loaders: [
        'url?limit=10000&name=static/img/[name].[hash:7].[ext]'
      ]},
      { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&name=static/fonts/[name].[hash:7].[ext]'}
    ]
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  },
  resolve: {
    root: path.resolve(__dirname, 'node_modules'),
    extensions: ['','.js','.vue','.scss']
  }
}