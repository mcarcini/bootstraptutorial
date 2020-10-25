$(function(){
    $(window).on("load resize", function(){
        $(".fill-screen").css("height", window.innerHeight);
    });

    $('body').scrollspy({ 
        target: '.navbar' ,
        offset:160
    })

    //smooth scrolling
    $('nav a').bind('click', function(){
        $('html, body').stop().animate({
            scrollTop:$($(this).attr('href')).offset().top-110
        }, 1500, 'easeInOutExpo');

    });

    new WOW().init();

    $('.carousel').carousel()
});