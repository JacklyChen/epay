(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var PayFailMediator = function () {
        this.initView = function (view) {
            var height = $(window).height();
            $(".bg-e8e").innerHeight(height)
        };
        Mediator.apply(this);
    };
    window.epay.PayFailMediator = PayFailMediator;
})(window);