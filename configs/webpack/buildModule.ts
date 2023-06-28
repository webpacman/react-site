import { ModuleOptions, RuleSetRule } from 'webpack';

export function buildModule(): ModuleOptions {
  const tsRules: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssModuleRules: RuleSetRule = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
        },
      },
      'sass-loader',
    ],
  };

  const cssDefaultRules: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module.(s(a|c)ss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  return {
    rules: [
      tsRules,
      cssModuleRules,
      cssDefaultRules,
    ],
  };
}
