// Code goes here

$(document).ready(function() {
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



  var $tab1 = $(".news-tabs").find("#ntab1");
  var $tab2 = $(".news-tabs").find("#ntab2");
  var $tab3 = $(".news-tabs").find("#ntab3");
  

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
    } else {
      $article.removeClass("maxHeight");
    }
  });

  $menu = $(".menu");
  $header = $('header');
  $nav = $('nav');

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
    var row = $("<tr />")
    $("#agenda").prepend(row);
    row.append($("<td>" + rowData.date + "</td>"));
    row.append($("<td>" + rowData.activity + "</td>"));
  }

});

(function() {
  $clubblad = $('div#overlay');


  $clubblad.on('click', function(e) {
    e.preventDefault();
    window.open("downloads/clubblad/november_2014.pdf", '_blank');
  });
})();