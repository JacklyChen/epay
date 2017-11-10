(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var orderRecordProxy = window.epay.orderRecordProxy;
    var UpdateOrderRecordMediator = function () {
        this.initView = function (view) {
            $("#updateOrderRecord").on("click", this.onUpdateOrderRecord);
            $("#getOrderRecord").on("click", this.onGetOrderRecord);
        };
        this.onUpdateOrderRecord = function () {
            var orderRecordId = $("#orderRecordId").val();
            var orderRecordPayStatus = $("#orderRecordPayStatus").val();
            var orderRecordStatus = $("#orderRecordStatus").val();
            var orderRecordPayChannel = $("#orderRecordPayChannel").val();
            var orderRecordNotifyResult = $("#orderRecordNotifyResult").val();
            var orderRecordNotifyTime = $("#orderRecordNotifyTime").val();
            orderRecordProxy.updateOrderRecord(orderRecordId, orderRecordPayStatus, orderRecordStatus, orderRecordPayChannel, orderRecordNotifyResult, orderRecordNotifyTime);
        };
        this.onGetOrderRecord = function () {
            var orderRecordId = $("#orderRecordId_get").val();
            orderRecordProxy.getOrderRecord(orderRecordId);
        };
        Mediator.apply(this);
    };
    window.epay.UpdateOrderRecordMediator = UpdateOrderRecordMediator;
})(window);