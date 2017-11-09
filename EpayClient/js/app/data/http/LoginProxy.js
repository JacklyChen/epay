(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var url = window.epay.url;
    var notificationExt = window.epay.notificationExt;
    var httpFilter = window.juggle.httpFilter;
    var LoginProxy = function () {
        Proxy.apply(this);
        this.login = function (token) {
            var data = {
                "hOpCode": "230",
                "token": token
            };
            var header = [];
            header["hOpCode"] = "230";
            httpFilter.send(data, url.url, header, null, null, this, this.loginSuccess, this.loginFail);
        };
        this.loginSuccess = function (result) {
            this.notifyObservers(this.getNotification(notificationExt.LOGIN_SUCCESS));
        };
        this.loginFail = function () {
            this.notifyObservers(this.getNotification(notificationExt.LOGIN_FAIL));
        }
    };
    window.epay.loginProxy = new LoginProxy();
})(window);