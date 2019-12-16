$.extend($.expr[':'], {
    'containsi': function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase()
            .indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});

function filterProjects(selector, childSelector, listSelector, query) {
    var queries = $.map(query.split(/\s*&\s*/), $.trim);
    var projects = $(selector);
    projects.addClass('filtered-out');
    projects.has(childSelector + ':containsi(' + queries.join('):containsi(') + ')').removeClass('filtered-out');

    var lists = $(listSelector);
    lists.addClass('filtered-out');
    lists.has(selector + ':not(.filtered-out)').removeClass('filtered-out');
}