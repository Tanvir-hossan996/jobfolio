$(document).ready(function () {

    "use strict";

    //smooth scroll and active menu button code
    var html_body = $('html, body');
    $('.navbar .navbar-nav .nav-item .nav-link').on('click', function () {
        //for active menu button
        $('.navbar .navbar-nav .nav-item .nav-link').removeClass("active");
        $(this).addClass("active");
        //smooth scroll on menu click
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });


    //    active nav-bar

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 400) {

            $(".navbar").addClass("active-nav")
        } else {

            $(".navbar").removeClass("active-nav")
        }

        if (scrolling > 400) {

            $(".scroll-btn").fadeIn(1000)

        } else {

            $(".scroll-btn").fadeOut(1000);
        }

    });

    //    scroll-btn

    $(".scroll-btn").on("click", function () {

        $("html,body").animate({

            scrollTop: "0px"
        }, 1800)

    });


    //    menu icon toggler

    $(".navbar .navbar-toggler").on("click", function () {

        $(".navbar .navbar-toggler span").toggleClass("fas fa-times");

    });


    //    Categories-counter up

    $(".counter").counterUp({

        time: 2000,
    });


    //    wow js

    new WOW().init();



});
