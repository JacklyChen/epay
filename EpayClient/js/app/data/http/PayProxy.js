(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var url = window.epay.url;
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
    var httpFilter = window.juggle.httpFilter;
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
            httpFilter.send(data, url.url, header, null, null, this, this.getPayHtmlSuccess, this.getPayHtmlFail);
        };
        this.getPayHtmlSuccess = function (result) {
            this.notifyObservers(this.getNotification(notificationExt.ADD_PAY_HTML, result));
        };
        this.getPayHtmlFail = function () {

        };
        this.getReturnUrl = function (orderRecordId) {
            var data = {
                "hOpCode": "221",
                "orderRecordId": orderRecordId
            };
            var header = [];
            header["hOpCode"] = "221";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            httpFilter.send(data, url.url, header, null, null, this, this.getReturnUrlSuccess, this.getReturnUrlFail);
        };
        this.getReturnUrlSuccess = function (result) {
            this.notifyObservers(this.getNotification(notificationExt.GET_RETURN_URL_SUCCESS, result));
        };
        this.getReturnUrlFail = function () {
            this.notifyObservers(this.getNotification(notificationExt.GET_RETURN_URL_FAIL));
        }
    };
    window.epay.payProxy = new PayProxy();
})(window);