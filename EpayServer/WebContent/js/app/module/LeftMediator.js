(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var notificationExt = window.epay.notificationExt;
    var LeftMediator = function () {
        this.initView = function (view) {
            $("#left_button").on("click", this.onClick);
            $("#left_button1").on("click", this.onClick1);
            $("#left_button2").on("click", this.onClick2);
            $("#left_button3").on("click", this.onClick3);
            $("#left_button4").on("click", this.onClick4);
            $("#left_button5").on("click", this.onClick5);
        };
        this.onClick = function (event) {
            this.notifyObservers(this.getNotification(notificationExt.CHANGE_BODY, "app"));
        };
        this.onClick1 = function (event) {
            this.notifyObservers(this.getNotification(notificationExt.CHANGE_BODY, "order_record"));
        };
        this.onClick2 = function (event) {
            this.notifyObservers(this.getNotification(notificationExt.CHANGE_BODY, "update_order_record"));
        };
        this.onClick3 = function (event) {
            this.notifyObservers(this.getNotification(notificationExt.CHANGE_BODY, "order_record_list"));
        };
        this.onClick4 = function (event) {
            this.notifyObservers(this.getNotification(notificationExt.CHANGE_BODY, "pay"));
        };
        this.onClick5 = function (event) {
            this.notifyObservers(this.getNotification(notificationExt.CHANGE_BODY, "notify"));
        };
        Mediator.apply(this);
    };
    window.epay.LeftMediator = LeftMediator;
})(window);