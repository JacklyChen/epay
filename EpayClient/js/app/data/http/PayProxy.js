(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var HttpClient = window.juggle.HttpClient;
    var httpEventType = window.juggle.httpEventType;
    var url = window.epay.url;
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
    var PayProxy = function () {
        Proxy.apply(this);
        this.getPayHtml = function (orderRecordId) {
            var data = {
                "hOpCode": "220",
                "orderRecordId": orderRecordId
            };

            var header = [];
            header["hOpCode"] = "220";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.getPayHtmlSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.getPayHtmlFail, this);
        };
        this.getPayHtmlSuccess = function (event) {
            var result = JSON.parse(event.mData);
            this.notifyObservers(this.getNotification(notificationExt.ADD_PAY_HTML, result));
        };
        this.getPayHtmlFail = function (event) {

        };
        this.getReturnUrl = function (orderRecordId) {
            var data = {
                "hOpCode": "221",
                "orderRecordId": orderRecordId
            };

            var header = [];
            header["hOpCode"] = "221";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.getReturnUrlSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.getReturnUrlFail, this);
        };
        this.getReturnUrlSuccess = function (event) {
            var result = JSON.parse(event.mData);
            this.notifyObservers(this.getNotification(notificationExt.GET_RETURN_URL_SUCCESS, result));
        };
        this.getReturnUrlFail = function (event) {
            this.notifyObservers(this.getNotification(notificationExt.GET_RETURN_URL_FAIL));
        }
    };
    window.epay.payProxy = new PayProxy();
})(window);