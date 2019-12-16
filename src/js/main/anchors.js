$(document).ready(transformAnchors);

function transformAnchors() {
    $('.anchor').each(function (i, element) {
        // move anchors to account for fixed header
        var jqElement = $(element);
        jqElement.prepend('<div class="anchor-helper"></div>');
        var helper = jqElement.children()[0];
        var id = element.id;
        helper.id = id;
        jqElement.removeAttr('id');

        // add anchor icons
        jqElement.append('<a href="#' + id + '" class="anchor-icon"><i class="fas fa-link"></i></a>')
    })
}
