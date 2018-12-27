module.exports={
	outputDir: process.env.outputDir,
    //  代理相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8888,
        https: false,
        hotOnly: false,
        proxy: null, // string | Object
    },
    configureWebpack: {
        devtool: 'source-map'
    }, 
    /**
     * Name : baseUrl
     * 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
     * Type: string
     * Default: '/'
     * baseUrl: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
     */
    baseUrl: './',    
    assetsDir: './static',
    indexPath: 'index.html',
}
