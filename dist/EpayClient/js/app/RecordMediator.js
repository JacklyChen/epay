(function (window) {
    if (!window.epay) window.epay = {};
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
    var getUrlParam = window.epay.getUrlParam;
    var url = window.epay.url;
    var appProxy = window.epay.appProxy;
    var orderRecordProxy = window.epay.orderRecordProxy;
    var Mediator = window.juggle.Mediator;
    var RecordMediator = function () {
        this.token = null;
        this.userId = null;
        this.initView = function (view) {
            this.token = getUrlParam.getUrlParam("token");
            this.userId = getUrlParam.getUrlParam('userId');
            if (this.token === null || this.token === undefined || this.userId === null || this.userId === undefined) {
                window.location.href = 'login.html';
            }
            cookieParam.setCookieParam(cookieName.TOKEN, this.token);
            $("#orderRecordUserId").val(this.userId);
            $("#orderRecordOrderId").val(Math.uuid());
            $("#orderRecordReturnUrl").val(url.clientUrl + 'success.html');
            $("#orderRecordNotifyUrl").val(url.clientUrl + 'success.html');
            $("#orderGoodsGoodsId").val(Math.uuid());
            appProxy.getAppList(null, null, null, 1)
        };
        // 关心消息数组
        this.listNotificationInterests = [notificationExt.GET_APP_LIST_SUCCESS, notificationExt.CREATE_RECORD_SUCCESS];
        // 关心的消息处理
        this.handleNotification = function (data) {
            switch (data.name) {
                case notificationExt.GET_APP_LIST_SUCCESS:
                    $("#appId").val(data.body['appList'][0].appId);
                    $("#createRecord").on("click", this.onCreateRecord);
                    break;
                case notificationExt.CREATE_RECORD_SUCCESS:
                    window.location.href = "loginPayCenter.html?token=" + this.token + "&orderRecordId=" + data.body['orderRecordData']['orderRecordId'];
                    break;
            }
        };
        this.onCreateRecord = function () {
            var appId = $("#appId").val();
            var orderRecordOrderId = $("#orderRecordOrderId").val();
            var orderRecordTotalPrice = $("#orderRecordTotalPrice").val();
            var orderRecordUserId = $("#orderRecordUserId").val();
            var orderRecordOrderDetail = $("#orderRecordOrderDetail").val();
            var orderRecordUserName = $("#orderRecordUserName").val();
            var orderRecordReturnUrl = $("#orderRecordReturnUrl").val();
            var orderRecordNotifyUrl = $("#orderRecordNotifyUrl").val();

            var orderGoodsGoodsId = $("#orderGoodsGoodsId").val();
            var orderGoodsName = $("#orderGoodsName").val();
            var orderGoodsPrice = $("#orderGoodsPrice").val();
            var orderGoodsNumber = $("#orderGoodsNumber").val();
            var orderGoodsDetail = $("#orderGoodsDetail").val();
            var orderGoodsUrl = $("#orderGoodsUrl").val();

            var orderGoodsArray = [];
            var orderGoodsNum = $("#orderGoodsNum").val();
            for (var i = 0; i < orderGoodsNum; i++) {
                var data = {
                    "orderGoodsGoodsId": orderGoodsGoodsId + "_" + i,
                    "orderGoodsName": orderGoodsName,
                    "orderGoodsPrice": orderGoodsPrice,
                    "orderGoodsNumber": orderGoodsNumber,
                    "orderGoodsDetail": orderGoodsDetail,
                    "orderGoodsUrl": orderGoodsUrl
                };
                orderGoodsArray.push(data);
            }

            orderRecordProxy.createOrderRecord(appId, orderRecordOrderId, orderRecordTotalPrice, orderRecordUserId, orderRecordOrderDetail, orderRecordUserName, orderRecordReturnUrl, orderRecordNotifyUrl, orderGoodsArray);
        };
        Mediator.apply(this);
    };
    window.epay.RecordMediator = RecordMediator;
})(window);