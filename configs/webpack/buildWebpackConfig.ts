import { BuildWebpackOptions, Configuration } from '../../types/webpackConfigTypes';
import { buildDevServer } from './buildDevServer';
import { buildModule } from './buildModule';
import { buildOther } from './buildOther';
import { buildOutput } from './buildOutput';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';

export function buildWebpackConfig({ env, paths }: BuildWebpackOptions): Configuration {
  const isDev = env.mode !== 'production';

  const config: Configuration = {
    plugins: buildPlugins(paths.htmlTemlate),
    output: buildOutput(paths.build),
    module: buildModule(),
    resolve: buildResolve(),
    ...buildOther({ env, paths }),
  };

  if (isDev) {
    config.devServer = buildDevServer();
  }

  return config;
}
