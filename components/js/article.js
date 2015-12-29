(function($){
        $('article').on('click', function() {
        var $article = $(".container").find("article.active");
        if (!$article.hasClass("maxHeight")) {
            $article.addClass("maxHeight");
            $('article').find('.news--warning').hide();
        } else {
            $article.removeClass("maxHeight");
            $('article').find('.news--warning').show();
        }
    });
})(jQuery);
