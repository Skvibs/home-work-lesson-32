$(function () {

    $('.js-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 1435,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 985,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".js-carousel").owlCarousel({
        loop: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        dots: false,
        nav: true,
        navText: ['', ''],
        margin: 45,
        responsive: {
            1200: {
                items: 4,
            },
            960: {
                items: 3,
            },
            540: {
                items: 2,
            },
            0: {
                items: 1,
            },

        }
    });

});
