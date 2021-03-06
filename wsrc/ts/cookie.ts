export class CookieManager {
    static Add(name:string, value:string, options?: any): void {
        options = options || {};

        var expires = options.expires;
        if (!expires)
            expires = 60*60*24*360;
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
    }
    
    static Get(name: string): string {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    
    static Delete(name: string) {
        CookieManager.Add(name, "", {
            expires: -1
        });
    }
}