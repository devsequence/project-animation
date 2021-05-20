// $( function() {
//     $( ".glitch-img" ).mgGlitch({
//         // set 'true' to stop the plugin
//         destroy : false,
//         // set 'false' to stop glitching
//         glitch: true,
//         // set 'false' to stop scaling
//         scale: true,
//         // set 'false' to stop glitch blending
//         blend : true,
//         // select blend mode type
//         blendModeType : 'hue',
//         // set min time for glitch 1 elem
//         glitch1TimeMin : 200,
//         // set max time for glitch 1 elem
//         glitch1TimeMax : 400,
//         // set min time for glitch 2 elem
//         glitch2TimeMin : 10,
//         // set max time for glitch 2 elem
//         glitch2TimeMax : 100,
//     });
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    centeredSlides: true,
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