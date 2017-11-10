(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var TopMediator = function () {
        this.initView = function (view) {

        };
        Mediator.apply(this);
    };
    window.epay.TopMediator = TopMediator;
})(window);