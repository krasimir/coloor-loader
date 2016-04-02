var coloor = require('coloor');

module.exports = function(code) {
  var callback = this.async();
  var options = this.query;

  console.log(options);

  if (!options) {
    callback('Missing `query`. Check out https://github.com/krasimir/coloor-loader for more info.');
  }

  if (!options.images) {
    callback('Missing `query.images` option (should be an array of directories). Check out https://github.com/krasimir/coloor-loader for more info.');
  }

  coloor(code, options.images, function (html) {
    callback(null, html);
  }, options);
};
