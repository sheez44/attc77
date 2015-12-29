(function($) {
    "use strict";

    var $img = $('img.team_photo');
    var $modal_window = $("#modal-window");

    $img.on('click', function(e) {
        e.preventDefault();

        var $targetPicture = $(this).attr('rel') + ".jpg";
        var path = "../img/informatie/";

        var image = path + $targetPicture;

        var insert = '<img class="img-responsive" src="' + image + '" />';


        $modal_window.fadeIn(1000);

        $modal_window.append(insert).append('<span class="close">X Close</span>');

        $('body').append('<div id="mask"></div>');

        $('#mask').fadeIn(600);
    });

    $(document).on('click', 'span.close, #mask', function() {

        $modal_window.fadeOut(300);
        $modal_window.find('img, span.close').remove();
        $('#mask').fadeOut(300, function() {
            $('#mask').remove();
        });
    });

    $(document).keyup(function(e) {
        if(e.keyCode === 27) {
            $('#mask, #modal-window').fadeOut(400, function() {
                $('#mask').remove();
            });

        }
    });
})(jQuery);