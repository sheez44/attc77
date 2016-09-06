(function() {
    "use strict";
    var $ = require('jQuery');

    var $clubblad = $('div#overlay');

    $clubblad.on('click', function(e) {
        e.preventDefault();
        window.open("downloads/clubblad/mei_2016.pdf", '_blank');
    });
})();