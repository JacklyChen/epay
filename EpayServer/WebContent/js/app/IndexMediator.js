(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var moduleManager = window.juggle.moduleManager;
    var TopMediator = window.epay.TopMediator;
    var LeftMediator = window.epay.LeftMediator;
    var BodyMediator = window.epay.BodyMediator;
    var BottomMediator = window.epay.BottomMediator;
    var IndexMediator = function () {
        this.initView = function (view) {
            // 模块
            moduleManager.loadModule("html/top.html", document.getElementById("index_top"), null, new TopMediator());
            moduleManager.loadModule("html/left.html", document.getElementById("index_left"), null, new LeftMediator());
            moduleManager.loadModule("html/body.html", document.getElementById("index_body"), null, new BodyMediator());
            moduleManager.loadModule("html/bottom.html", document.getElementById("index_bottom"), null, new BottomMediator());
        };
        Mediator.apply(this);
    };
    window.epay.IndexMediator = IndexMediator;
})(window);