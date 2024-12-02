$(document).ready(function () {
    $('.bottom-nav li a').click(function(){
        var position = $(this).position();
        var margin = 37;
        $('.slider').css({"left":+position.left+margin ,  "transform": "translateX(-50%)"});
        $('.bottom-nav li a').removeClass('active-icon');
        $(this).addClass('active-icon');
    });
});