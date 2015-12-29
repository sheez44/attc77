(function($){
    var $menu = $(".menu");
    var $header = $('header');
    var $nav = $('nav');

    $menu.on('click', function() {
        if (!$header.hasClass("menuHeight")) {
            $nav.css("display", "block");
            $header.addClass("menuHeight");
        } else {
            $header.removeClass("menuHeight");
            $nav.css("display", "none");
        }

        $(window).resize(function() {
            console.log($(window).height());
           if(!$header.hasClass('menuHeight') && $(window).height() > 768) {
               $nav.css("display", "block");
               $header.addClass("menuHeight");
           }
        });
    });
})(jQuery);
