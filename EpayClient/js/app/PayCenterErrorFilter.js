(function (window) {
    if (!window.epay) window.epay = {};
    var PayCenterErrorFilter = function () {
        this.filter = function (result) {
            if (result.hOpCode === "199") {
                return false;
            } else {
                return true;
            }
        }
    };
    window.epay.PayCenterErrorFilter = PayCenterErrorFilter;
})(window);