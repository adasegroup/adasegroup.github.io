$(document).ready(function () {
    var sliders = $('.slider');

    sliders.on('init', function (event, slick) {
        slick.$list.wrap('<div class="slick-list-wrapper"></div>');
    });

    sliders.each(function () {
        var $this = $(this);
        $this.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            prevArrow: '<a type="button" class="slider-scroll-left" aria-label="Previous"><i class="icon fa fa-chevron-left" aria-hidden="true"></i></a>',
            nextArrow: '<a type="button" class="slider-scroll-right" aria-label="Next"><i class="icon fa fa-chevron-right" aria-hidden="true"></i></a>',
            dots: $this.children().length > 1,
        });
    });
});