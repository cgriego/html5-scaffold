(function() {
  if (/*@cc_on!@*/0) { // execute only in Internet Explorer
    var elements = [
      "abbr", // for IE 6
      "mark",
      "meter",
      "progress",
      "time"//,
    ],
    i = elements.length;
    
    while (i--) {
      document.createElement(elements[i]);
    }
  }
})();
