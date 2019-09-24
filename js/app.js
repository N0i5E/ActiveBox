$(function () {

    // Fixed header
    let header = $("#header"),
        intro = $("#intro"),
        scrollPos = $(window).scrollTop(),
        introH = intro.innerHeight(),
        nav = $("#nav"),
        navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll"),
            elementOffset = $(elementId).offset().top;

        nav.removeClass('show');

        $("html, body").animate({
            scrollTop: elementOffset - 57
        }, 700);
    });

    // Nav toggle 

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Slider
    // https://kenwheeler.github.io/slick/

    let slider = $('#reviewsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});