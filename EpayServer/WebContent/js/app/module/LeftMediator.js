(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var notificationExt = window.epay.notificationExt;
    var LeftMediator = function () {
        this.initView = function (view) {
            this.addClick(this, this.onClick);
            this.addClick1(this, this.onClick1);
            this.addClick2(this, this.onClick2);
            this.addClick3(this, this.onClick3);
            this.addClick4(this, this.onClick4);
            this.addClick5(this, this.onClick5);
        };
        this.addClick = function (mediator, call) {
            var callFunc = function (event) {
                call.call(mediator, event);
            };
            $("#left_button").on("click", callFunc);
        };
        this.addClick1 = function (mediator, call) {
            var callFunc = function (event) {
                call.call(mediator, event);
            };
            $("#left_button1").on("click", callFunc);
        };
        this.addClick2 = function (mediator, call) {
            var callFunc = function (event) {
                call.call(mediator, event);
            };
            $("#left_button2").on("click", callFunc);
        };
        this.addClick3 = function (mediator, call) {
            var callFunc = function (event) {
                call.call(mediator, event);
            };
            $("#left_button3").on("click", callFunc);
        };
        this.addClick4 = function (mediator, call) {
            var callFunc = function (event) {
                call.call(mediator, event);
            };
            $("#left_button4").on("click", callFunc);
        };
        this.addClick5 = function (mediator, call) {
            var callFunc = function (event) {
                call.call(mediator, event);
            };
            $("#left_button5").on("click", callFunc);
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