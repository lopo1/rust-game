/*
 * @Author: your name
 * @Date: 2022-01-26 14:40:39
 * @LastEditTime: 2022-01-27 11:36:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \wasm_game\www\webpack.config.js
 */
const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./bootstrap.js" ,// 输入文件
    output:{
        path:path.resolve(__dirname,"public"),
        filename:"bootstrap.js"
    },
    mode:"development",
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins: [
        new CopyWebpackPlugin({
                patterns:[
                    {from:"./index.html",to:"./"}
                ]
            })
    ]
}