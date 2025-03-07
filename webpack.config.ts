import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    outputPath: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = env.mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    port: env.port,
    paths,
    isDev,
  });

  return config;
};
