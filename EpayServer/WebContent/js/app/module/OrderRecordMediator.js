(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var orderRecordProxy = window.epay.orderRecordProxy;
    var OrderRecordMediator = function () {
        this.initView = function (view) {
            $("#createOrderRecord").on("click", this.onCreateOrderRecord);
        };
        this.onCreateOrderRecord = function () {
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
    window.epay.OrderRecordMediator = OrderRecordMediator;
})(window);