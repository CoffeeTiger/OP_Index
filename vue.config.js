const path = require('path');
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: resolveSrc('src/assets')
      }
    },
    // plugins: [
    //   new PrerenderSPAPlugin({
    //     staticDir: path.join(__dirname, 'dist'),
    //     routes: ['/'],
    //     renderer: new Renderer({}),
    //     /* renderer: new Renderer({
    //       inject: {
    //         foo: 'bar'
    //       },
    //       headless: false,
    //       renderAfterDocumentEvent: 'render-event'
    //     }), */
    //   })
    // ]
  },
  css: {
    //sourceMap: process.env.NODE_ENV !== 'production'
    sourceMap: true
  }
};
