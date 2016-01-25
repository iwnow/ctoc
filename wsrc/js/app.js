var cookie_1 = require("./cookie");
var navbar_1 = require("./navbar");
$(function () {
    $("ul.nav.nav-sidebar").children().each(function (i, e) {
        navbar_1.NavBar.addClickActive(e);
    });
    cookie_1.CookieManager.Get("dd");
});
