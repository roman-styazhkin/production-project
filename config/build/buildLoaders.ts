import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev ? '[path]___[local]___[hash:base64:5]' : '[hash:base64:8]',
            namedExport: false,
            exportLocalsConvention: 'as-is',
          },
        },
      },
      'sass-loader',
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpg|gif|woff|woff2)$/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    styleLoader,
    typescriptLoader,
  ];
}
