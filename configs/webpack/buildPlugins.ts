import { WebpackPluginInstance } from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
// todo MiniCssExtractPlugin

export function buildPlugins(htmlPath: string): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      title: 'Шевчук Виталий Геннадьевич | Разработчик web приложений',
      template: htmlPath,
    }),
  ];
}
