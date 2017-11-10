(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var orderRecordProxy = window.epay.orderRecordProxy;
    var OrderRecordListMediator = function () {
        this.initView = function (view) {
            $("#getOrderRecordList").on("click", this.onGetOrderRecordList);
        };
        this.onGetOrderRecordList = function () {
            var appId = $("#appId").val();
            var orderRecordOrderId = $("#orderRecordOrderId").val();
            var orderRecordCreateTimeGreaterThan = $("orderRecordCreateTimeGreaterThan").val();
            var orderRecordCreateTimeLessThan = $("#orderRecordCreateTimeLessThan").val();
            var orderRecordPayStatus = $("#orderRecordPayStatus").val();
            var orderRecordStatus = $("#orderRecordStatus").val();
            var orderRecordUserId = $("#orderRecordUserId").val();
            var orderRecordPayChannel = $("#orderRecordPayChannel").val();
            var orderRecordOrderDetail = $("#orderRecordOrderDetail").val();
            var orderRecordNotifyResult = $("#orderRecordNotifyResult").val();
            var currentPage = $("#currentPage").val();
            var pageSize = $("#pageSize").val();
            orderRecordProxy.getOrderRecordList(appId, orderRecordOrderId, orderRecordCreateTimeGreaterThan, orderRecordCreateTimeLessThan, orderRecordPayStatus, orderRecordStatus, orderRecordUserId, orderRecordPayChannel, orderRecordOrderDetail, orderRecordNotifyResult, currentPage, pageSize);
        };
        Mediator.apply(this);
    };
    window.epay.OrderRecordListMediator = OrderRecordListMediator;
})(window);