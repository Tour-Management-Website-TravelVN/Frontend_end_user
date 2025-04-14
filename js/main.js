(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    //Festival carousel
    // $(".festival-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 600,
    //     center: true,
    //     dots: true,
    //     loop: true,
    //     margin: 5,
    //     nav : false,
    //     // navText : [
    //     //     '<i class="bi bi-arrow-left"></i>',
    //     //     '<i class="bi bi-arrow-right"></i>'
    //     // ],
    //     responsiveClass: true,
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         768:{
    //             items:4
    //         },
    //         992:{
    //             items:5
    //         },
    //         1200:{
    //             items:6
    //         }
    //     }
    // });

    //Small img carousel
    // $(".sm-img-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 600,
    //     center: true,
    //     dots: true,
    //     loop: true,
    //     margin: 5,
    //     nav : false,
    //     autoplayTimeout: 3000,
    //     navText : [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    //     responsiveClass: false,
    //     responsive: {
    //         0:{
    //             items:2
    //         },
    //         768:{
    //             items:3
    //         },
    //         992:{
    //             items:4
    //         },
    //         1200:{
    //             items:5
    //         }
    //     }
    // });

    // International Tour carousel
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // packages carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

