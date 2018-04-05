(function() {
    "use strict";
    var $ = require('jQuery');

    var $clubblad = $('div#overlay');

    $clubblad.on('click', function(e) {
        e.preventDefault();
        window.open("downloads/clubblad/april_2018.pdf", '_blank');
    });
})();