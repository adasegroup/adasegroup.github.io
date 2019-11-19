$(document).ready(highlightActivePage);

function highlightActivePage(e) {
    $('nav a[href="' + location.pathname + '"]').addClass('active-navigation');
}
