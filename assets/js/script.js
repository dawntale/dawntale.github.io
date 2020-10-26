"use strict";

var data = localStorage.darkMode;
$("body").attr("dark-mode", data);

$('#dark-mode-toggle')
    .prop('checked', data == 'true')
    .change(function () {
        data = $(this).prop('checked');
        localStorage.darkMode = data;
        $("body").attr("dark-mode", data);
    });

$('#markdown-toc').appendTo('#toc');

$(document).on('click', 'a[href]', function (e) {
    var href = $(this).attr('href');

    if (!href.includes('#')) return;

    var id = '#' + href.split('#').pop();
    var $id = $(id);

    if ($id.length === 0) return;

    e.preventDefault();

    var padding = 2 * 16;

    var pos = $id.offset().top - padding;

    $('body, html').animate({ scrollTop: pos }, 600);
});

$.getJSON('/assets/datas/quotes.json', (data) => {
    var quotes = data;

    var rndQuote = quotes[Math.floor(Math.random() * quotes.length)];

    $('#footer blockquote .quote').text(rndQuote.quote);
    $('#footer blockquote .cite').text(rndQuote.author);
});
