(function() {
    "use strict";
    var $ = require('jQuery');

    $.getJSON('downloads.json', function(data) {
        var html = '<ul>';

        $.each($(data).slice(0,9), function(key, val) {
            html += '<li>';
            html += '<a target="_blank" href="' + val.link +'">';
            html += val.name + '</a>';
            html += '</li>';
        });

        html += '</ul>';

        $("div.bottom__section--downloads").append(html);

    });

})();
