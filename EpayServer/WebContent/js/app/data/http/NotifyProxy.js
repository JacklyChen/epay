(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var url = window.epay.url;
    var httpFilter = window.juggle.httpFilter;
    var NotifyProxy = function () {
        Proxy.apply(this);
        this.verifyNotify = function (notifyId, appId) {
            var data = {
                "hOpCode": "222",
                "notifyId": notifyId,
                "appId": appId
            };
            var header = [];
            header["hOpCode"] = "222";
            httpFilter.send(data, url.url, header, null, null, this, this.verifyNotifySuccess, this.verifyNotifyFail);
        };
        this.verifyNotifySuccess = function (result) {

        };
        this.verifyNotifyFail = function () {

        }
    };
    window.epay.notifyProxy = new NotifyProxy();
})(window);