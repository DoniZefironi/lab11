module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
      '^axios$': 'axios/dist/node/axios.cjs',
      '^react-router-dom$': require.resolve('react-router-dom'),
    },
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      '/node_modules/(?!axios)',
    ],
  };
  