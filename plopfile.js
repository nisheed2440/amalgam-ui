const helpers = require('./.plop/helpers');
const component = require('./.plop/component');

module.exports = function rootPlop(plop) {
  // Helpers
  helpers(plop);
  // Component generator
  component(plop);
};
