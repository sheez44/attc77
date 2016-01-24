(function() {
    "use strict";
    var $ = require('jQuery');

    var $img = $('img[data-modal]');
    var $modal_window = $("#modal-window");

    $img.on('click', function(e) {
        e.preventDefault();

        var image = $(this).attr('src');

        var insert = '<img class="img-responsive" data-modal-active src="' + image + '" />';

        $modal_window.fadeIn(1000);

        $modal_window.append(insert).append('<span class="close">X Close</span>');

        $('body').append('<div id="mask"></div>');

        $('#mask').fadeIn(600);
    });

    $(document).on('click', 'span.close, #mask', function() {

        $modal_window.fadeOut(300);
        $modal_window.find('img, span.close').remove();
        $('#mask').fadeOut(300, function() {
            $('#mask, span.close, img[data-modal-active]').remove();
        });
    });

    $(document).keyup(function(e) {
        if(e.keyCode === 27) {
            $('#mask, #modal-window').fadeOut(400, function() {
                $('#mask, span.close, img[data-modal-active]').remove();
            });

        }
    });
})();