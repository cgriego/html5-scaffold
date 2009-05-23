(function() {
  if (/*@cc_on!@*/0) { // prevent execution outside Internet Explorer
    var blockElements = [
      article,
      aside,
      footer,
      header,
      hgroup,
      nav,
      section//,
    ],
    i = blockElements.length;
    
    while (i--) {
      document.createElement(blockElements[i]);
    }
  }
})();
