(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var notifyProxy = window.epay.notifyProxy;
    var NotifyMediator = function () {
        this.initView = function (view) {
            $("#verifyNotify").on("click", this.onVerifyNotify);
        };
        this.onVerifyNotify = function () {
            var notifyId = $("#notifyId").val();
            var appId = $("#appId").val();
            notifyProxy.verifyNotify(notifyId, appId);
        };
        Mediator.apply(this);
    };
    window.epay.NotifyMediator = NotifyMediator;
})(window);