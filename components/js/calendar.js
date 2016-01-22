(function(){
    "use strict";
    var $ = require('jQuery');

    $.getJSON('js/dates.json', function(data) {
        drawTable(data);
    });

    function drawTable(data) {
        for (var i = data.length - 1; i >= 0; i--) {
            drawRow(data[i]);
        }
    }

    function drawRow(rowData) {
        var activity;
        var row; row = $("<tr />");
        var date;
        /** @namespace rowData.date */
        date = rowData.date;
        activity = rowData.activity;
        $("#agenda").prepend(row);
        row.append($("<td>" + date + "</td>"));
        row.append($("<td>" + activity + "</td>"));
    }
})();
