(function (window) {
    if (!window.epay) window.epay = {};
    var Proxy = window.juggle.Proxy;
    var url = window.epay.url;
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
    var httpFilter = window.juggle.httpFilter;
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
            httpFilter.send(data, url.url, header, null, null, this, this.createOrderRecordSuccess, this.createOrderRecordFail);
        };
        this.createOrderRecordSuccess = function (result) {
            this.notifyObservers(this.getNotification(notificationExt.CREATE_RECORD_SUCCESS, result));
        };
        this.createOrderRecordFail = function () {

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
            httpFilter.send(data, url.url, header, null, null, this, this.updateOrderRecordSuccess, this.updateOrderRecordFail);
        };
        this.updateOrderRecordSuccess = function (result) {

        };
        this.updateOrderRecordFail = function () {

        };
        this.getOrderRecord = function (orderRecordId) {
            var data = {
                "hOpCode": "212",
                "orderRecordId": orderRecordId
            };
            var header = [];
            header["hOpCode"] = "212";
            header[cookieName.TOKEN] = cookieParam.getCookieParam(cookieName.TOKEN);
            httpFilter.send(data, url.url, header, null, null, this, this.getOrderRecordSuccess, this.getOrderRecordFail);
        };
        this.getOrderRecordSuccess = function (result) {
            this.notifyObservers(this.getNotification(notificationExt.GET_ORDER_RECORD_SUCCESS, result));
        };
        this.getOrderRecordFail = function () {

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
            httpFilter.send(data, url.url, header, null, null, this, this.getOrderRecordListSuccess, this.getOrderRecordListFail);
        };
        this.getOrderRecordListSuccess = function (result) {

        };
        this.getOrderRecordListFail = function () {

        }
    };
    window.epay.orderRecordProxy = new OrderRecordProxy();
})(window);