(function (window) {
    if (!window.epay) window.epay = {};
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
    var getUrlParam = window.epay.getUrlParam;
    var payProxy = window.epay.payProxy;
    var payCenterErrorMsg = window.epay.payCenterErrorMsg;
    var Mediator = window.juggle.Mediator;
    var PaySuccessMediator = function () {
        this.loginSuccess = false;
        this.nowTime = 0;
        this.locationUrl = null;
        this.initView = function (view) {
            var height = $(window).height();
            $(".bg-e8e").innerHeight(height)
            if (cookieParam.getCookieParam(cookieName.TOKEN) === null || cookieParam.getCookieParam(cookieName.TOKEN) === undefined) {
                alert("未登录");
                return;
            }
            var orderRecordId = getUrlParam.getUrlParam("orderRecordId");
            if (orderRecordId === null || orderRecordId === undefined) {
                alert("订单记录为空");
                return;
            }
            payProxy.getReturnUrl(orderRecordId);
        };
        // 关心消息数组
        this.listNotificationInterests = [notificationExt.GET_RETURN_URL_SUCCESS, notificationExt.GET_RETURN_URL_FAIL, notificationExt.PAYCENTER_ERROR];
        // 关心的消息处理
        this.handleNotification = function (data) {
            switch (data.name) {
                case notificationExt.GET_RETURN_URL_SUCCESS:
                    this.loginSuccess = true;
                    this.locationUrl = data.body.returnUrl;
                    break;
                case notificationExt.GET_RETURN_URL_FAIL:

                    break;
                case notificationExt.PAYCENTER_ERROR:
                    alert(payCenterErrorMsg.errorMap[data.body]);
                    break;
            }
        };
        this.advanceTime = function (passedTime) {
            if (this.loginSuccess) {
                this.nowTime += passedTime;
                $("#return_time").html(5 - parseInt(this.nowTime));
                if (this.nowTime > 5) {
                    window.location.href = this.locationUrl;
                    this.loginSuccess = false;
                }
            }
        };
        Mediator.apply(this);
    };
    window.epay.PaySuccessMediator = PaySuccessMediator;
})(window);