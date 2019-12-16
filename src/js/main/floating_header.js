$(document).ready(headerResizedCallback);
$(window).resize(headerResizedCallback);

function headerResizedCallback() {
    var headerHeight = $("#page-header-wrapper").height();
    if (headerHeight > 0) {
        var root = document.documentElement;
        root.style.setProperty('--page-header-height', headerHeight + 'px');
    }
}

// fix wrong anchor landing
$(function () {
    if (window.location.hash.length > 0) {
        $(window).scrollTop($(window.location.hash).offset().top);
    }
});
