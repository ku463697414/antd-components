const rewireLess = require('react-app-rewire-less');
const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require('react-app-rewired');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function override(config, env) {
  // 获取tsloader
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  );

  if (env === 'development') {
    // hotloader支持
    config.entry.splice(1, 0, 'react-hot-loader/patch');
    tsLoader.use = [
      'react-hot-loader/webpack',
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({ 
              libraryName: 'antd', 
              style: true, 
              libraryDirectory: 'es' 
            }) ]
          })
        }
      }
    ];
  }

  if (env === 'production') {
    tsLoader.use = [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({ 
              libraryName: 'antd', 
              style: true, 
              libraryDirectory: 'es' 
            }) ]
          })
        }
      }
    ];
  }

  delete tsLoader.loader;
  delete tsLoader.options;

  // less支持
  config = rewireLess.withLoaderOptions({
    modifyVars: {
    //   '@primary-color': '#1DA57A' ,
      '@icon-url': './src/assets/fonts/font_148784_r2qo40wrmaolayvi.woff'
    }
  })(config, env);

  // scss支持
  const sassLoader = {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          module: true,
          importLoaders: 1,
          localIdentName: '[local]--[hash:base64:5]'
        },
      },
      'sass-loader'
    ]
  };

  const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf;
  oneOf.unshift(sassLoader);

  if (process.env.ANALYZE) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
};
