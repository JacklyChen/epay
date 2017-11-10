(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var url = window.epay.url;
    var notificationExt = window.epay.notificationExt;
    var httpFilter = window.juggle.httpFilter;
    var TokenProxy = function () {
        Proxy.apply(this);
        this.getToken = function (userName, userPassword) {
            var data = {
                "hOpCode": "20",
                "userName": userName,
                "userPassword": userPassword
            };
            var header = [];
            header["hOpCode"] = "20";
            httpFilter.send(data, url.ucUrl, header, null, null, this, this.getTokenSuccess, this.getTokenFail);
        };
        this.getTokenSuccess = function (result) {
            this.notifyObservers(this.getNotification(notificationExt.LOGIN_SUCCESS, result));
        };
        this.getTokenFail = function () {

        }
    };
    window.epay.tokenProxy = new TokenProxy();
})(window);