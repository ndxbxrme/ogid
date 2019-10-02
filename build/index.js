(function() {
  'use strict';
  module.exports = function(radix, rnd) {
    return parseInt((new Date().valueOf() - new Date(2019, 0, 1).valueOf()).toString().concat(Math.floor(Math.random() * (9999 || rnd))).split('').reverse().join('')).toString(radix || 36);
  };

}).call(this);

//# sourceMappingURL=index.js.map
