(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var moduleManager = window.juggle.moduleManager;
    var notificationExt = window.epay.notificationExt;
    var AppMediator = window.epay.AppMediator;
    var OrderRecordMediator = window.epay.OrderRecordMediator;
    var UpdateOrderRecordMediator = window.epay.UpdateOrderRecordMediator;
    var OrderRecordListMediator = window.epay.OrderRecordListMediator;
    var PayMediator = window.epay.PayMediator;
    var NotifyMediator = window.epay.NotifyMediator;
    var BodyMediator = function () {
        this.initView = function (view) {
            moduleManager.loadModule("html/app.html", document.getElementById("body"), "body", new AppMediator());
        };
        // 关心消息数组
        this.listNotificationInterests = [notificationExt.CHANGE_BODY];
        // 关心的消息处理
        this.handleNotification = function (data) {
            switch (data.name) {
                case notificationExt.CHANGE_BODY:
                    if (data.body === "app") {
                        moduleManager.loadModule("html/app.html", document.getElementById("body"), "body", new AppMediator());
                    } else if (data.body === "order_record") {
                        moduleManager.loadModule("html/order_record.html", document.getElementById("body"), "body", new OrderRecordMediator());
                    } else if (data.body === "update_order_record") {
                        moduleManager.loadModule("html/update_order_record.html", document.getElementById("body"), "body", new UpdateOrderRecordMediator());
                    } else if (data.body === "order_record_list") {
                        moduleManager.loadModule("html/order_record_list.html", document.getElementById("body"), "body", new OrderRecordListMediator());
                    } else if (data.body === "pay") {
                        moduleManager.loadModule("html/pay.html", document.getElementById("body"), "body", new PayMediator());
                    } else if (data.body === "notify") {
                        moduleManager.loadModule("html/notify.html", document.getElementById("body"), "body", new NotifyMediator());
                    }
                    break;
            }
        };
        Mediator.apply(this);
    };
    window.epay.BodyMediator = BodyMediator;
})(window);