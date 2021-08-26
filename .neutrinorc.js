const vue = require("@neutrinojs/vue");
const jest = require("@neutrinojs/jest");

module.exports = { 
  options:{
  root: __dirname,
}
};

module.exports = {
 use:[
  vue({
    html: {
      title: "escala",
    }
  }),
  jest(),
]
}
