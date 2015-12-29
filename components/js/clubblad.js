(function() {
    "use strict";
    var $ = require('jQuery');

    var $clubblad = $('div#overlay');

    $clubblad.on('click', function(e) {
        e.preventDefault();
        window.open("downloads/clubblad/november_2015.pdf", '_blank');
    });
})();