(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var HttpClient = window.juggle.HttpClient;
    var httpEventType = window.juggle.httpEventType;
    var url = window.epay.url;
    var notificationExt = window.epay.notificationExt;
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
            var httpClient = new HttpClient();
            httpClient.send(data, url.ucUrl, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.getTokenSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.getTokenFail, this);
        };
        this.getTokenSuccess = function (event) {
            var result = JSON.parse(event.mData);
            this.notifyObservers(this.getNotification(notificationExt.LOGIN_SUCCESS, result));
        };
        this.getTokenFail = function (event) {

        }
    };
    window.epay.tokenProxy = new TokenProxy();
})(window);