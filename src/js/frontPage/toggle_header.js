$(window).scroll(function (e) {
    waitForFinalEvent(function () {
        toggleHeader(e);
    }, 30, "toggleHeader");
});

function toggleHeader(e) {
    var w = $(window);
    var header = $('#page-header-wrapper');
    if (w.scrollTop() >= w.height() - 2) {
        if (header.css('opacity') == 0) {
            header.css({'visibility': 'visible', 'opacity': 1});
        }
    } else {
        if (header.css('opacity') == 1) {
            header.css({'opacity': 0, 'visibility': 'hidden'});
        }
    }
}
