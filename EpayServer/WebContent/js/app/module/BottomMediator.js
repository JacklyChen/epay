(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var BottomMediator = function () {
        this.initView = function (view) {

        };
        Mediator.apply(this);
    };
    window.epay.BottomMediator = BottomMediator;
})(window);