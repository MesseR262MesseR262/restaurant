$(".burger").click(function() {
	$("nav").toggle("slide", {direction: 'left'}, 500)
    $(".burger").css("display", "none")
    $(".cross").css("display", "block")
})

$(".cross").click(function() {
    $("nav").toggle("slide", {direction: 'left'}, 500)
    $(".burger").css("display", "block")
    $(".cross").css("display", "none")
})

$(window).scroll(function() {
    var s = $(window).scrollTop();
    var x = $('.start').height();

    if (s < x) {
    	$('header').css('background-color', 'transparent');
    }
    else $('header').css('background-color', 'black');
});