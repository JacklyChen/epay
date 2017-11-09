(function (window) {
    if (!window.epay) window.epay = {};
    var Url = function () {
        this.url = "http://localhost:8081/EpayServer/s";
        this.ucUrl = "http://localhost:8080/StartpointServer/s";
        this.clientUrl = "http://localhost/EpayClient/"
    };
    window.epay.url = new Url();
})(window);