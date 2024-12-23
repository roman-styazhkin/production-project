import path from 'path';
import { buildConfig } from './config/build/buildConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default ({ mode, port }: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  return buildConfig({
    mode,
    paths,
    isDev: mode === 'development',
    port,
  });
};
