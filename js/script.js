$(document).ready(function() {
    "use strict";

    var $tab = $(".bottom--container").find(".tabs li");

    $tab.on('click', function() {
        var $activeTab = $(".tabs").find("li.active");

        $activeTab.removeClass('active');
        $(this).addClass('active');
        var panelToShow = $(this).attr('rel');

        $(".tab-panels .panel.active").slideUp(300, function() {
            $(this).removeClass("active");
            $("#" + panelToShow).slideDown(300, function() {
                $(this).addClass("active");
            });
        });
    });

    var $news_tabs = $(".news-tabs");

    var $tab1 = $news_tabs.find("#ntab1");
    var $tab2 = $news_tabs.find("#ntab2");
    var $tab3 = $news_tabs.find("#ntab3");


    var tabClick = function () {
        var $activenTab = $(".news-tabs").find(".news-active");
        $activenTab.removeClass('news-active');
        $(this).addClass('news-active');

        var newsToShow = $(this).attr('rel');

        $(".news.active").removeClass('active').hide();
        $('#' + newsToShow).addClass('active').show();
    };

    $tab1.on('click', tabClick);
    $tab2.on('click', tabClick);
    $tab3.on('click', tabClick);


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
    });

    $.getJSON('dates.json', function(data) {
        drawTable(data);
    });

    function drawTable(data) {
        for (var i = 0; i < 5; i++) {
            drawRow(data[i]);
        }
    }

    function drawRow(rowData) {
        var row = $("<tr />");
        var date = rowData.date;
        var activity = rowData.activity;
        $("#agenda").prepend(row);
        row.append($("<td>" + date + "</td>"));
        row.append($("<td>" + activity + "</td>"));
    }

});

(function() {
    "use strict";

    var $clubblad = $('div#overlay');

    $clubblad.on('click', function(e) {
        e.preventDefault();
        window.open("downloads/clubblad/juni_2015.pdf", '_blank');
    });
})();


(function() {
    "use strict";

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

(function() {
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
//
})();
