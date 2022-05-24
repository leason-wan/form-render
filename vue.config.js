const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  lintOnSave: false,
  parallel: false,  // disable thread-loader, which is not compactible with this plugin
  // chainWebpack: config => {
  //   config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
  //     {
  //       // Languages are loaded on demand at runtime
  //       languages: ['json', 'javascript', 'html', 'xml']
  //     }
  //   ])
  // }
  configureWebpack: {
    resolve: {
      alias: {
        'element-ui': '@webuy/elfin-ui'
      }
    },
    plugins: [
      ScriptSetup({ /* options */ }),
      new MonacoWebpackPlugin({
        languages: ['javascript']
      })
    ],
  },
}