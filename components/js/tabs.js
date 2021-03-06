(function() {
    "use strict";
    var $ = require('jQuery');

    var $tab = $(".bottom--container").find(".tabs li");

    $tab.on('click', function () {
        var $activeTab = $(".tabs").find("li.active");

        $activeTab.removeClass('active');
        $(this).addClass('active');
        var panelToShow = $(this).attr('rel');

        $(".tab-panels .panel.active").slideUp(300, function () {
            $(this).removeClass("active");
            $("#" + panelToShow).slideDown(300, function () {
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
})();