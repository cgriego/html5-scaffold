(function() {
  if (/*@cc_on!@*/0) { // execute only in Internet Explorer
    var elements = [
      "article",
      "aside",
      "footer",
      "header",
      "hgroup",
      "nav",
      "section"//,
    ],
    i = elements.length;
    
    while (i--) {
      document.createElement(elements[i]);
    }
  }
})();
