(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var navbar_1 = require("./navbar");
$(function () {
    navbar_1.NavBar.init();
});

},{"./navbar":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
