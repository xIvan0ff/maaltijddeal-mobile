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
            "@components": './components',
            "types": './types',
            "@constants": './constants',
            "@styles": './styles',
            "@hooks": './hooks',
            "@utils": './utils',
            "@screens": "./screens",
            "@config": "./config",
            "@store": "./store"
          },
        },
      ],
    ],
  };
};

