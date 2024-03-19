
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require('copy-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


// module.exports = {
//     entry: { 
//       filename: path.resolve(__dirname, "src/index.tsx") 
//     },
//     output: {
//         // publicPath: './',
//         path: path.resolve(__dirname, "dist"),
//         filename: '[name][contenthash].js',
//         clean: true,
//         // assetModuleFilename: 'assets/images/[name][ext]'
//     },
//     module: {
//         rules: [
//             {
//               test: /\.html$/,
//               use: 'html-loader'
//             },
//             {
//               test: /\.(js|jsx)$/,    
//               exclude: /node_modules/,
//               use: ["babel-loader"],
//             },
//             {
//               test: /\.tsx?$/,
//               use: 'ts-loader',
//               exclude: '/node_modules/'
//             },
//             {
//               test: /\.(module.scss|scss)|(.css)$/,
//               use: [
//                 { 
//                   loader: "style-loader",
//                 },
//                 { 
//                   loader: "css-loader",
//                   options: {
//                     modules: true, 
//                     url : false
//                   },
//                 },
//                 { 
//                   loader: "sass-loader",
//                 },
//               ],
//             },
//             {
//               test: /\.(png|jpe?g|gif|webp)$/i,
//               use: [
//                 {
//                   loader: 'file-loader',
//                   options:{
//                     name: '[name].[ext]',
//                     outputPath: 'images'
//                   }
//                 },
//               ],
//             },
//         ],
//     },
//     resolve: {
//       extensions: [".*", ".js", ".jsx", '.ts', '.tsx',],
//     },
    
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: "Мир дверей",
//             filename: 'index.html',
//             template: "./src/index.html",
//         }),
//         new CopyPlugin({
//           patterns: [
//             {
//               from: path.resolve(__dirname, 'src/imgs'),
//               to:   path.resolve(__dirname, 'dist/images')
//             }
//           ]
//         }),
//         new FaviconsWebpackPlugin('./src/imgs/icons/favicon.png'),
        
//     ],
//     devServer: {
//         historyApiFallback: true,
//         port: 3002,
//         hot: true,
//         static:{
//           directory: path.join(__dirname, 'dist')
//         }
//     },
//     mode: 'development'
// };