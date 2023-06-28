import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

export interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export interface WebpackEnvConfig {
  mode?: WebpackConfiguration['mode'];
}

export interface WebpackPaths {
  htmlTemlate: string;
  build: string;
  entry: string;
}

export interface BuildWebpackOptions {
  env: WebpackEnvConfig;
  paths: WebpackPaths;
}
