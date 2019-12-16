$(function () {
    $(window).scroll(toggleActiveSection);
    var titlePageSectionAnchors = $('#front-page-container h1.anchor');

    function toggleActiveSection(e) {
        var w = $(window);
        var viewPos = w.scrollTop() + w.height() / 2;

        for (var i = titlePageSectionAnchors.length - 1; i >= 0; i--) {
            var anchor = $(titlePageSectionAnchors[i]);
            var currentSection = anchor.parent();
            var anchorHelper = anchor.children()[0];
            if (viewPos >= currentSection.offset().top) {
                $('.active-navigation').removeClass('active-navigation');
                $('a[href="#' + anchorHelper.id + '"]').addClass('active-navigation');
                return;
            }
        }
    }
});
