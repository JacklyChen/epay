(function (window) {
    if (!window.epay) window.epay = {};
    var Url = function Url() {
        this.url = "http://localhost:8081/EpayServer/s";
        this.ucUrl = "http://localhost:8080/StartpointServer/s";
    };
    window.epay.url = new Url();
})(window);