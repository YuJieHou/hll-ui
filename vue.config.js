const path = require('path')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/hll-ui/' : '/',
    pages: {
        index: {
            entry: 'examples/main.js', // js入口文件修改
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        // 重新设置目录别名
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))
        // 使 examples及packages目录下的js文件都加入编译
        config.module
            .rule('js')
            .include.add('/packages')
            .end()
            .include.add('/examples')
            .end()
            .use('babel')
            .loader('babel-loader')
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
    }
}
