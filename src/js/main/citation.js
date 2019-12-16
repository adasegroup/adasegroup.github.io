$(document).ready(function () {
    var copyCitationButton = new ClipboardJS('.copy-citation');

    copyCitationButton.on('success', function (e) {
        var innerText = e.trigger.lastChild;
        var text = innerText.textContent;
        innerText.textContent = 'Copied!';
        putCitationButtonBack(innerText, text);
    });

    copyCitationButton.on('error', function (e) {
        var innerText = e.trigger.lastChild;
        var text = innerText.textContent;
        innerText.textContent = 'Press Ctrl+C to copy';
        putCitationButtonBack(innerText, text);
    });

    function putCitationButtonBack(innerText, text) {
        setTimeout(function () {
            innerText.textContent = text;
        }, 2e3)
    }
});
