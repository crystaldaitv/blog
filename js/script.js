$(document).ready(function () {
    var nav = $('.nav');
    var toggleCollapse = $('.toggle-collapse');

    toggleCollapse.click(function () {
        nav.toggleClass('collapse');
    });

    /* ------------------------------- Owl Carousel Slider ------------------------------- */
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            1080:{
                items:3,
                nav:true
            }
        }
    });

    /* ------------------------------- AOS Animate ------------------------------- */
    AOS.init();

    /* ------------------------------- Scroll Top ------------------------------- */
    $('.move-up i.fa').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 3000);
    });

    $('.toggle-collpase i.fa-bars, #blogger-menu-container i.fa-times-circle').on('click', function () {
        // $('#blogger-menu-container').animate({width:'toggle'}, 300);
        $('#blogger-menu-container').toggle("slide:right");
    });

});