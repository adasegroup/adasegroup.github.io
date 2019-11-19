$(document).ready(function () {
    var sliders = $('.fancy-slider');

    sliders.each(function () {
        var $this = $(this);
        $this.slick({
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 1000,
            fade: true,
            prevArrow: '<a type="button" class="slider-scroll-left" aria-label="Previous"><i class="icon fa fa-chevron-left" aria-hidden="true"></i></a>',
            nextArrow: '<a type="button" class="slider-scroll-right" aria-label="Next"><i class="icon fa fa-chevron-right" aria-hidden="true"></i></a>',
        });
    });
});
