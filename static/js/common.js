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
        var newvalueX = width * pageX * +0.5 + 5;
        var newvalueY = height * pageY * +0.5;
        var carnewvalueX = width * pageX * +0.2 - 10;
        var carnewvalueY = height * pageY * +0.2 - 10;
        var bgnewvalueX = width * pageX * +0.2 + 50;
        var bgnewvalueY = height * pageY * +0.2 + 50;
        if ($(window).width() >= 992) {
            $('.pilot-img').css("bottom", "-"+newvalueX+"%");
            $('.pilot-img').css("left", "-"+newvalueY+"%");
            $('.car-img').css("bottom", +carnewvalueX+"%");
            $('.car-img').css("left",  carnewvalueY+"% ");
            $('.hero-wrapper-bg img').css("top", "-"+bgnewvalueX+"%");
            $('.hero-wrapper-bg img').css("left", "-"+bgnewvalueY+"%");


        }else {}

    });
});
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


function popupOpen() {
    const $popupButton = $('.popup-btn');
    $popupButton.on('click', function (e) {
        const $this = $(this);
        const popupButtonData = $this.data('popup');
        const videoLink = $this.next().text();
        $('.popup').removeClass('active');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        $('.popup-overlay').addClass('active');
        $('.popup-wrap iframe').attr('src', 'http://www.youtube.com/embed/'+videoLink);

    });
}
popupOpen();
$('.popup-overlay').on('click', function () {
    $('.popup').removeClass('active');
    $('.popup-wrap iframe').attr('src', '');
});
$('.popup-close').on('click', function () {
    $('.popup, .popup-overlay').removeClass('active');
    $('.popup-wrap iframe').attr('src', '');
});