(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var HttpClient = window.juggle.HttpClient;
    var httpEventType = window.juggle.httpEventType;
    var url = window.epay.url;
    var notificationExt = window.epay.notificationExt;
    var LoginProxy = function () {
        Proxy.apply(this);
        this.login = function (token) {
            var data = {
                "hOpCode": "230",
                "token": token
            };

            var header = [];
            header["hOpCode"] = "230";
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.loginSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.loginFail, this);

        };
        this.loginSuccess = function (result, sendParam) {
            this.notifyObservers(this.getNotification(notificationExt.LOGIN_SUCCESS));
        };
        this.loginFail = function (result, sendParam) {
            this.notifyObservers(this.getNotification(notificationExt.LOGIN_FAIL));
        }
    };

    window.epay.loginProxy = new LoginProxy();
})(window);