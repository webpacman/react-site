import { Configuration } from 'webpack';

export function buildResolve(srcPath: string): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      '@': srcPath,
    },
  };
}
