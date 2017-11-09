(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var HttpClient = window.juggle.HttpClient;
    var httpEventType = window.juggle.httpEventType;
    var url = window.epay.url;
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
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
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.createAppSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.createAppFail, this);
        };
        this.createAppSuccess = function (event) {

        };
        this.createAppFail = function (event) {

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
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.updateAppSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.updateAppFail, this);

        };
        this.updateAppSuccess = function (event) {

        };
        this.updateAppFail = function (event) {

        };
        this.getApp = function (appId) {
            var data = {
                "hOpCode": "202",
                "appId": appId
            };

            var header = [];
            header["hOpCode"] = "202";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.getAppSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.getAppFail, this);
        };
        this.getAppSuccess = function (event) {

        };
        this.getAppFail = function (event) {

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
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.getAppListSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.getAppListFail, this);
        };
        this.getAppListSuccess = function (event) {
            var result = JSON.parse(event.mData);
            this.notifyObservers(this.getNotification(notificationExt.GET_APP_LIST_SUCCESS, result));
        };
        this.getAppListFail = function (event) {

        }
    };
    window.epay.appProxy = new AppProxy();
})(window);