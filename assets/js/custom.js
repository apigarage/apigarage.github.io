/* Write here your custom javascript codes */
$( "#home-menu" ).click(function() {
    $('html, body').animate({
        scrollTop: $("#home-section").offset().top
    }, 1500);
});

$( "#services-menu" ).click(function() {
    $('html, body').animate({
        scrollTop: $("#service-section").offset().top
    }, 1500);
});

$( "#team-menu" ).click(function() {
    $('html, body').animate({
        scrollTop: $("#team-section").offset().top
    }, 1500);
});

$( "#philosophy-menu" ).click(function() {
    $('html, body').animate({
        scrollTop: $("#philosophy-section").offset().top
    }, 1500);
});
