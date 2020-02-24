// const path = require('path');
// const { name } = require('./package');

// const StatsPlugin = require('stats-webpack-plugin')
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

// console.log(`${name}-[name]`);

// let output = {}

// if (process.env.NODE_ENV == 'development') {
//   output = {
//     //把子应用打包成 umd 库格式
//     //library: `${name}-[name]`,

//     library: '[name]',
//     libraryTarget: 'umd',
//     jsonpFunction: `webpackJsonp_${name}`,
//     globalObject: this
//   }
// }

// module.exports = {
//   // 不打包css
//   css: {
//     extract: false
//   },

//   publicPath: './', //process.env.NODE_ENV == 'development' ? `//localhost:8081` : './',
//   //publicPath: 'zc',
//   devServer: {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     }
//   },
//   // 增加引号
//   chainWebpack: config => {
//     config.plugin("html").tap(args => {
//       args[0].minify = false;
//       return args;
//     });
//   },
//   // 自定义webpack配置
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': resolve('src'),
//       },
//     },
//     output: output,
//     // plugins: [
//     //   new StatsPlugin('manifest.json', {
//     //     chunkModules: false,
//     //     entrypoints: true,
//     //     source: false,
//     //     chunks: false,
//     //     modules: false,
//     //     assets: false,
//     //     children: false,
//     //     exclude: [/node_modules/]
//     //   }),
//     // ],
//   },
// };











const path = require('path');
const { name } = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 3333; // dev port

module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};