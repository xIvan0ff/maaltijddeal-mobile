module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@assets": './assets',
            "@components": './src/components',
            "@types": './src/types',
            "@constants": './src/constants',
            "@styles": './src/constants',
            "@hooks": './src/hooks',
          },
        },
      ],
    ],
  };
};

