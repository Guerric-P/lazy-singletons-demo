(function () {
'use strict';

var prettyPrint = (function (message) {
  console.log("prettyPrint says: " + message);
});

console.log('Main script loaded');
prettyPrint('Hello world');

}());
