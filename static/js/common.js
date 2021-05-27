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
        var carnewvalueX = width * pageX * +0.2 - 10;
        var carnewvalueY = height * pageY * +0.2 - 10;
        var bgnewvalueX = width * pageX * +0.2 + 50;
        var bgnewvalueY = height * pageY * +0.2 + 50;
        if ($(window).width() >= 992) {
            $('.pilot-img').css("bottom", "-"+newvalueX+"%");
            $('.pilot-img').css("left", "-"+newvalueY+"%");
            $('.car-img').css("bottom", "-"+carnewvalueX+"%");
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

// $(document).ready(function() {
//     $('.item.active').next().addClass('next');
//     $('.vss-nav').on('click', '.next', function() {
//         var $this = $(this);
//         var active = $('.item.active');
//         var next = $('.item.next');
//         var first = $('.item').first();
//         var last = $('.item').last();
//         // if click at next arrow
//
//         $('.item').removeClass('active next');
//         $(active).next().addClass('active');
//         $(next).next().addClass('next');
//         if(active.next().next().length === 0) {
//             console.log('lastttt');
//             $this.addClass('disabled');
//             last.addClass('active');
//         }
//         // if ( $(this).hasClass('next') ) {
//         //     // check if next element is the last, then take the first element and set it to the last element
//         //     if(active.next().next().length === 0) {
//         //         last.after(first);
//         //     }
//         //     // apply active class to make transition
//         //     active.next().addClass('active');
//         // } else {
//         //     // check if prev element is the first, then take last element and set it before the first element
//         //     if(active.prev().length === 0 || active.prev().prev().length === 0) {
//         //         first.before(last);
//         //     }
//         //     // then appy active class to apply transition
//         //     active.prev().addClass('active');
//         // }
//         // active.removeClass('active');
//     });
//     $('.vss-nav').on('click', '.prev', function() {
//         var $this = $(this);
//         var active = $('.item.active');
//         var prev = $('.item.prev');
//         var first = $('.item').first();
//         var last = $('.item').last();
//         // if click at next arrow
//
//         $('.item').removeClass('active prev');
//         $(active).prev().addClass('active');
//         $(prev).prev().addClass('prev');
//         if(active.prev().prev().length === 0) {
//             console.log('first');
//             $this.addClass('disabled');
//             first.addClass('active');
//         }
//         // if ( $(this).hasClass('next') ) {
//         //     // check if next element is the last, then take the first element and set it to the last element
//         //     if(active.next().next().length === 0) {
//         //         last.after(first);
//         //     }
//         //     // apply active class to make transition
//         //     active.next().addClass('active');
//         // } else {
//         //     // check if prev element is the first, then take last element and set it before the first element
//         //     if(active.prev().length === 0 || active.prev().prev().length === 0) {
//         //         first.before(last);
//         //     }
//         //     // then appy active class to apply transition
//         //     active.prev().addClass('active');
//         // }
//         // active.removeClass('active');
//     });
//
// });