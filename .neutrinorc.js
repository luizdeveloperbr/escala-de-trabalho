const vue = require('@neutrinojs/vue');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    vue({
      html: {
        title: 'escala'
      }
    }),
  ],
};
