import { resolve as _resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const mode = 'development';
export const entry = _resolve(__dirname, 'src/index.js');
export const output = {
    path: _resolve(__dirname, 'output'),
    filename: 'bundle.js'
};
export const resolve = {
    extensions: ['.js', '.jsx']
};
export const module = {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    }
    ]
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
    })
];
    
