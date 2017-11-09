(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var url = window.epay.url;
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
    var httpFilter = window.juggle.httpFilter;
    var AppProxy = function () {
        Proxy.apply(this);
        this.createApp = function (appName, appReturnUrl, appNotifyUrl) {
            var data = {
                "hOpCode": "200",
                "appName": appName,
                "appReturnUrl": appReturnUrl,
                "appNotifyUrl": appNotifyUrl
            };
            var header = [];
            header["hOpCode"] = "200";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            httpFilter.send(data, url.url, header, null, null, this, this.createAppSuccess, this.createAppFail);
        };
        this.createAppSuccess = function (result) {

        };
        this.createAppFail = function () {

        };
        this.updateApp = function (appId, appName, updateAppKey, appState, appReturnUrl, appNotifyUrl) {
            var data = {
                "hOpCode": "201",
                "appId": appId,
                "appName": appName,
                "updateAppKey": updateAppKey == 1 ? true : false,
                "appState": appState,
                "appReturnUrl": appReturnUrl,
                "appNotifyUrl": appNotifyUrl
            };
            var header = [];
            header["hOpCode"] = "201";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            httpFilter.send(data, url.url, header, null, null, this, this.updateAppSuccess, this.updateAppFail);
        };
        this.updateAppSuccess = function (result) {

        };
        this.updateAppFail = function () {

        };
        this.getApp = function (appId) {
            var data = {
                "hOpCode": "202",
                "appId": appId
            };
            var header = [];
            header["hOpCode"] = "202";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            httpFilter.send(data, url.url, header, null, null, this, this.getAppSuccess, this.getAppFail);
        };
        this.getAppSuccess = function (result) {

        };
        this.getAppFail = function () {

        };
        this.getAppList = function (appName, appCreateTimeGreaterThan, appCreateTimeLessThan, appState, currentPage, pageSize) {
            var data = {
                "hOpCode": "203",
                "appName": appName,
                "appCreateTimeGreaterThan": appCreateTimeGreaterThan,
                "appCreateTimeLessThan": appCreateTimeLessThan,
                "appState": appState,
                "currentPage": currentPage,
                "pageSize": pageSize
            };
            var header = [];
            header["hOpCode"] = "203";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            httpFilter.send(data, url.url, header, null, null, this, this.getAppListSuccess, this.getAppListFail);
        };
        this.getAppListSuccess = function (result) {
            this.notifyObservers(this.getNotification(notificationExt.GET_APP_LIST_SUCCESS, result));
        };
        this.getAppListFail = function () {

        }
    };
    window.epay.appProxy = new AppProxy();
})(window);