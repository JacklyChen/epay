(function (window) {
    if (!window.epay) window.epay = {};
    var payCenterErrorMsg = window.epay.payCenterErrorMsg;
    var PayCenterErrorFilter = function () {
        this.filter = function (result) {
            if (result.hOpCode === "199") {
                alert(payCenterErrorMsg.errorMap[result.errorCode]);
                return false;
            } else {
                return true;
            }
        }
    };
    window.epay.PayCenterErrorFilter = PayCenterErrorFilter;
})(window);