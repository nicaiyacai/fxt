module.exports = {
    devServer: {
        proxy: {
            '/api': {     //请求前缀,请求路径localhost://8080/api/?
                target: 'http://localhost:8000', //代理服务器地址
                ws: true, //支持websorcket
                changeOrigin: true,//用于修改请求头中的host的值，
                // false代表自己的真实端口而不是虚拟目标服务器的端口
                pathRewrite:{"/api":""} //发送ajax等请求在路径多加的/api会被去掉
                //由代理服务向真实服务器发送要去掉字段路径
            },
            '/api2': {     //请求前缀,请求路径localhost://8080/api/?
                target: 'http://localhost:8001', //代理服务器地址
                ws: true, //支持websorcket
                changeOrigin: true,//用于修改请求头中的host的值
                pathRewrite:{"/api":""} //发送ajax等请求在路径多加的/api会被去掉
                //由代理服务向真实服务器发送要去掉字段路径
            }
        }
    }
}