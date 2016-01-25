import {CookieManager} from "./cookie";
import {NavBar} from "./navbar";

$(() => {
    $("ul.nav.nav-sidebar").children().each((i, e) => {
       NavBar.addClickActive(e);
    });
    CookieManager.Get("dd");
});

