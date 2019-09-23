const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var rootDir = path.resolve(__dirname)

function DtsBundlePlugin() {}
DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    var dts = require('dts-bundle')

    dts.bundle({
      name: 'sfuikit',
      main: rootDir + '/src/declaration/index.d.ts',
      out: rootDir + '/js/output/index.d.ts',
      removeSource: false,
      outputAsModuleFolder: true
    })
  })
}

module.exports = (env, argv) => {
  var debug = argv.mode !== 'production'

  return {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : false,
    entry: debug ? './js/index.js' : './js/components/index.js',
    output: {
      path: debug ? __dirname + '/public' : __dirname + '/js/output',
      filename: 'index.js',
      libraryTarget: 'umd'
    },
    node: {
      fs: 'empty'
    },
    resolve: {
      alias: {
        components: path.resolve('js/components/')
      }
    },
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true
            }
          }
        })
      ]
    },

    plugins: debug
      ? [
          new CleanWebpackPlugin(['public']),
          new webpack.HashedModuleIdsPlugin(),
          new HtmlWebpackPlugin({
            hash: true,
            template: 'src/html/index.html'
          })

          // new BundleAnalyzerPlugin()
        ]
      : [
          new CleanWebpackPlugin(['public']),
          new webpack.HashedModuleIdsPlugin(),
          new DtsBundlePlugin()

          // new BundleAnalyzerPlugin()
        ],
    module: {
      rules: [{ test: /\.svg|.jpg|.png$/, loader: 'file-loader' }]
    }
  }
}
