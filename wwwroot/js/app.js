(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var cookie_1 = require("./cookie");
var navbar_1 = require("./navbar");
$(function () {
    $("ul.nav.nav-sidebar").children().each(function (i, e) {
        navbar_1.NavBar.addClickActive(e);
    });
    cookie_1.CookieManager.Get("dd");
});

},{"./cookie":2,"./navbar":3}],2:[function(require,module,exports){
var CookieManager = (function () {
    function CookieManager() {
    }
    CookieManager.Add = function (name, value, options) {
        options = options || {};
        var expires = options.expires;
        if (!expires)
            expires = 60 * 60 * 24 * 360;
        if (!options.path)
            options.path = "/";
        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        var updatedCookie = name + "=" + value;
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    };
    CookieManager.Get = function (name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };
    CookieManager.Delete = function (name) {
        CookieManager.Add(name, "", {
            expires: -1
        });
    };
    return CookieManager;
})();
exports.CookieManager = CookieManager;

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);
