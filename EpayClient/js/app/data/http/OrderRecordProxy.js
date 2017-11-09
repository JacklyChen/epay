(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var HttpClient = window.juggle.HttpClient;
    var httpEventType = window.juggle.httpEventType;
    var url = window.epay.url;
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
    var OrderRecordProxy = function () {
        Proxy.apply(this);
        this.createOrderRecord = function (appId, orderRecordOrderId, orderRecordTotalPrice, orderRecordUserId, orderRecordOrderDetail, orderRecordUserName, orderRecordReturnUrl, orderRecordNotifyUrl, orderGoodsArray) {
            var data = {
                "hOpCode": "210",
                "appId": appId,
                "orderRecordOrderId": orderRecordOrderId,
                "orderRecordTotalPrice": orderRecordTotalPrice,
                "orderRecordUserId": orderRecordUserId,
                "orderRecordOrderDetail": orderRecordOrderDetail,
                "orderRecordUserName": orderRecordUserName,
                "orderRecordReturnUrl": orderRecordReturnUrl,
                "orderRecordNotifyUrl": orderRecordNotifyUrl,
                "orderGoodsArray": orderGoodsArray
            };

            var header = [];
            header["hOpCode"] = "210";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.createOrderRecordSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.createOrderRecordFail, this);
        };
        this.createOrderRecordSuccess = function (event) {
            var result = JSON.parse(event.mData);
            this.notifyObservers(this.getNotification(notificationExt.CREATE_RECORD_SUCCESS, result));
        };
        this.createOrderRecordFail = function (event) {

        };
        this.updateOrderRecord = function (orderRecordId, orderRecordPayStatus, orderRecordStatus, orderRecordPayChannel, orderRecordNotifyResult, orderRecordNotifyTime) {
            var data = {
                "hOpCode": "211",
                "orderRecordId": orderRecordId,
                "orderRecordPayStatus": orderRecordPayStatus,
                "orderRecordStatus": orderRecordStatus,
                "orderRecordPayChannel": orderRecordPayChannel,
                "orderRecordNotifyResult": orderRecordNotifyResult,
                "orderRecordNotifyTime": orderRecordNotifyTime
            };

            var header = [];
            header["hOpCode"] = "211";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.updateOrderRecordSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.updateOrderRecordFail, this);

        };
        this.updateOrderRecordSuccess = function (event) {

        };
        this.updateOrderRecordFail = function (event) {

        };
        this.getOrderRecord = function (orderRecordId) {
            var data = {
                "hOpCode": "212",
                "orderRecordId": orderRecordId
            };

            var header = [];
            header["hOpCode"] = "212";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.getOrderRecordSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.getOrderRecordFail, this);

        };
        this.getOrderRecordSuccess = function (event) {
            var result = JSON.parse(event.mData);
            this.notifyObservers(this.getNotification(notificationExt.GET_ORDER_RECORD_SUCCESS, result));
        };
        this.getOrderRecordFail = function (event) {

        };
        this.getOrderRecordList = function (appId, orderRecordOrderId, orderRecordCreateTimeGreaterThan, orderRecordCreateTimeLessThan, orderRecordPayStatus, orderRecordStatus, orderRecordUserId, orderRecordPayChannel, orderRecordOrderDetail, orderRecordNotifyResult, currentPage, pageSize) {
            var data = {
                "hOpCode": "213",
                "appId": appId,
                "orderRecordOrderId": orderRecordOrderId,
                "orderRecordCreateTimeGreaterThan": orderRecordCreateTimeGreaterThan,
                "orderRecordCreateTimeLessThan": orderRecordCreateTimeLessThan,
                "orderRecordPayStatus": orderRecordPayStatus,
                "orderRecordStatus": orderRecordStatus,
                "orderRecordUserId": orderRecordUserId,
                "orderRecordPayChannel": orderRecordPayChannel,
                "orderRecordOrderDetail": orderRecordOrderDetail,
                "orderRecordNotifyResult": orderRecordNotifyResult,
                "currentPage": currentPage,
                "pageSize": pageSize
            };

            var header = [];
            header["hOpCode"] = "213";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            var httpClient = new HttpClient();
            httpClient.send(data, url.url, header);
            httpClient.addEventListener(httpEventType.SUCCESS, this.getOrderRecordListSuccess, this);
            httpClient.addEventListener(httpEventType.ERROR, this.getOrderRecordListFail, this);
        };
        this.getOrderRecordListSuccess = function (event) {

        };
        this.getOrderRecordListFail = function (event) {

        }
    };
    window.epay.orderRecordProxy = new OrderRecordProxy();
})(window);