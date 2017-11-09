(function (window) {
    if (!window.epay) window.epay = {};
    var NotificationExt = function () {
        this.PAYCENTER_ERROR = "payCenterError";
        this.CHANGE_BODY = "changeBody";
        this.ADD_PAY_HTML = "addPayHTML";
        this.LOGIN_SUCCESS = "loginSuccess";
        this.LOGIN_FAIL = "loginFail";
        this.GET_ORDER_RECORD_SUCCESS = "getOrderRecordSuccess";

        this.GET_RETURN_URL_SUCCESS = "getReturnUrlSuccess";
        this.GET_RETURN_URL_FAIL = "getReturnUrlFail";

        this.GET_APP_LIST_SUCCESS = "getAppListSuccess";
        this.CREATE_RECORD_SUCCESS = "createRecordSuccess";
    };
    window.epay.notificationExt = new NotificationExt();
})(window);