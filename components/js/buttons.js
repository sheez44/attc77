(function() {
    "use strict";
    var $ = require('jQuery');

    var $button = $('.btn-default');

    $button.on('click', function() {
        var $link = $(this).find('a').attr('href');

        window.open($link);
    });
})();
