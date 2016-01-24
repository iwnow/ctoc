import {CookieManager} from "./cookie";

$(() => {
    $("#btnPart").click(() => {
        var c = CookieManager.Get("mycookie");
        if (!c)
            CookieManager.Add("mycookie", "hello");
        else CookieManager.Delete("mycookie");
    });
});