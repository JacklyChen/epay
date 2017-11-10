(function (window) {
    if (!window.epay) window.epay = {};
    var CookieParam = function () {
        this.getCookieParam = function (name) {
            return $.cookie(name);
        };
        this.setCookieParam = function (name, value) {
            $.cookie(name, value);
        };
        this.deleteCookieParam = function (name) {
            $.cookie(name, null);
        }
    };
    window.epay.cookieParam = new CookieParam();
})(window);