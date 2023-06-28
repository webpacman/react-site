import { Configuration } from 'webpack-dev-server';

export function buildDevServer(): Configuration {
  return {
    open: true,
    static: './build',
    client: {
      overlay: true,
      progress: true,
    },
    port: 3000,
  };
}
