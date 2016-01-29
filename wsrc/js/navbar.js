var NavBar = (function () {
    function NavBar() {
    }
    NavBar.init = function () {
        $("#collapseMenu").children().each(function (i, e) {
            NavBar.addClickActive(e);
        });
        var activePage = NavBar.getActiveText();
        NavBar.setMenuHeaderText(activePage);
        NavBar.loadView(activePage);
        NavBar.useOnDisplayChanged();
        $(window).trigger('resize');
    };
    NavBar.addClickActive = function (e) {
        e.addEventListener('click', function (ev) {
            ev.preventDefault();
            $.each(e.parentElement.children, function (i, el) {
                var current = el;
                current.classList.remove('active');
            });
            e.classList.add('active');
            NavBar.setMenuHeaderText(e.textContent);
            if ($('#collapseMenyHead').css('display') == 'block')
                e.parentElement.classList.remove('in');
            NavBar.loadView(e.textContent);
        });
    };
    NavBar.getActiveText = function () {
        return $('#collapseMenu .active a').text();
    };
    NavBar.setMenuHeaderText = function (txtActive) {
        $('#collapseMenyHead a').text(txtActive);
    };
    NavBar.useOnDisplayChanged = function () {
        $(window).on('resize', function () {
            if ($(window).width() < 768) {
                if ($('#collapseMenu').hasClass('in')) {
                    $('#collapseMenyHead a').trigger('click');
                }
            }
            else if (!$('#collapseMenu').hasClass('in'))
                $('#collapseMenyHead a').trigger('click');
        });
    };
    NavBar.loadView = function (name) {
        $('#dataContainer').load('view/' + name + '.html');
    };
    return NavBar;
})();
exports.NavBar = NavBar;
