var cookie_1 = require("./cookie");
$(function () {
    $("#btnPart").click(function () {
        var c = cookie_1.CookieManager.Get("mycookie");
        if (!c)
            cookie_1.CookieManager.Add("mycookie", "hello");
        else
            cookie_1.CookieManager.Delete("mycookie");
    });
});
