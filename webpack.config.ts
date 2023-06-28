import path from 'path';
import { buildWebpackConfig } from './configs/webpack/buildWebpackConfig';
import { Configuration, WebpackEnvConfig, WebpackPaths } from './types/webpackConfigTypes';

module.exports = (env: WebpackEnvConfig): Configuration => {
  const paths: WebpackPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    htmlTemlate: path.resolve(__dirname, 'public', 'index.html'),
  };

  return buildWebpackConfig({ paths, env });
};
