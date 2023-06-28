import { Configuration } from 'webpack';

export function buildOutput(buildPath: string): Configuration['output'] {
  return {
    filename: '[name].[contenthash].bundle.js',
    path: buildPath,
    clean: true,
  };
}
