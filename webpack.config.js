const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // エントリーポイントの指定
    entry: './src/index.js',
    output: {
      // 出力先の設定
      path: path.resolve(__dirname, 'js'),
      filename: 'bundle.js',
      clean: true, // 出力先ディレクトリをクリーン
    },
    module: {
      rules: [
        {
          // JavaScriptファイルに対するローダー設定
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                ['@babel/preset-react', { runtime: 'automatic' }]
              ],
            },
          },
        },
        {
          // CSSファイルに対するローダー設定
          test: /\.css$/,
          use: [
            'style-loader', // CSSをHTMLのstyleタグに挿入する
            'css-loader',   // CSSをJavaScriptにインポート可能にする
          ],
        },
	{
	test: /\.svg$/,
        use: ['file-loader'],
	},
      ],
    },
    plugins: [
      // DefinePluginを使用して環境変数を設定
    ],
    resolve: {
      extensions: ['.js'], // 使用する拡張子を指定
    },
    // モードの設定（環境変数で切り替え可能）
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval-source-map', // デバッグ用ソースマップ
  };
};
