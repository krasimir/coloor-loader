var coloor = require('coloor');
var loaderUtils = require("loader-utils");

module.exports = function(code) {
  this.cacheable();

  var callback = this.async();
  var query = loaderUtils.parseQuery(this.query);

  if (!query) {
    throw new Error('Missing `query`. Check out https://github.com/krasimir/coloor-loader for more info.');
  }

  if (!query.images) {
    throw new Error('Missing `query.images` option (should be an array of directories). Check out https://github.com/krasimir/coloor-loader for more info.');
  }

  coloor(code, query.images, function (html) {
    callback(null, html);
  }, query);
};
