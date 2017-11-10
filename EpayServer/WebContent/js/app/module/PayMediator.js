(function (window) {
    if (!window.epay) window.epay = {};
    var notificationExt = window.epay.notificationExt;
    var Mediator = window.juggle.Mediator;
    var payProxy = window.epay.payProxy;
    var PayMediator = function () {
        this.initView = function (view) {
            $("#getPayHtml").on("click", this.onGetPayHtml);
        };
        // 关心消息数组
        this.listNotificationInterests = [notificationExt.ADD_PAY_HTML];
        // 关心的消息处理
        this.handleNotification = function (data) {
            switch (data.name) {
                case notificationExt.ADD_PAY_HTML:
                    $("#paydiv")[0].innerHTML = data.body.payHtml;
                    $("#alipaysubmit").submit();
                    break;
            }
        };
        this.onGetPayHtml = function () {
            var orderRecordId = $("#orderRecordId").val();
            payProxy.getPayHtml(orderRecordId);
        };
        Mediator.apply(this);
    };
    window.epay.PayMediator = PayMediator;
})(window);