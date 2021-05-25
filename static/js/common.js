var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


$(document).ready(function() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".hero-wrapper").mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * +0.5 ;
        var newvalueY = height * pageY * +0.5;
        var carnewvalueX = width * pageX * +0.2+10;
        var carnewvalueY = height * pageY * +0.2+10;
        if ($(window).width() >= 992) {
            $('.pilot-img').css("bottom", "-"+newvalueX+"%");
            $('.pilot-img').css("left", "-"+newvalueY+"%");
            $('.car-img').css("bottom", "-"+carnewvalueX+"%");
            $('.car-img').css("left", carnewvalueY+"%");
        }else {}

    });
});