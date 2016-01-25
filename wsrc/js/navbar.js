var NavBar = (function () {
    function NavBar() {
    }
    NavBar.addClickActive = function (e) {
        e.addEventListener('click', function () {
            $.each(e.parentElement.children, function (i, el) {
                var current = el;
                current.classList.remove('active');
            });
            e.classList.add('active');
        });
    };
    return NavBar;
})();
exports.NavBar = NavBar;
