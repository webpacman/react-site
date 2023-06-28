import { BuildWebpackOptions, Configuration } from '../../types/webpackConfigTypes';

export function buildOther({ env, paths }: BuildWebpackOptions): Pick<Configuration, 'optimization' | 'mode' | 'devtool' | 'entry'> {
  return {
    mode: env.mode || 'development',
    devtool: env.mode === 'development' ? 'inline-source-map' : false,
    entry: paths.entry,
    optimization: {
      runtimeChunk: 'single',
    },
  };
}
