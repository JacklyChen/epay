(function (window) {
    if (!window.epay) window.epay = {};
    var CookieName = function () {
        this.TOKEN = "token";
    };
    window.epay.cookieName = new CookieName();
})(window);