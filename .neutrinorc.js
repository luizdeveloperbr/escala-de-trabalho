
const vue = require('@neutrinojs/vue');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    vue({
      hot:true,
      html: {
        title: 'escala',
        
      }
    }),
    jest(),
  ],
};
