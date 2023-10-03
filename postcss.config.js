module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


module.exports = {
  // Other webpack configurations...
  resolve: {
    fallback: {
      url: require.resolve('url/'),
    },
  },
};
