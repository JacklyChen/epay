(function (window) {
    if (!window.epay) window.epay = {};
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
    var getUrlParam = window.epay.getUrlParam;
    var loginProxy = window.epay.loginProxy;
    var Mediator = window.juggle.Mediator;
    var LoginPayCenterMediator = function () {
        this.orderRecordId = null;
        this.token = null;
        this.loginSuccess = false;
        this.nowTime = 0;
        this.initView = function (view) {
            $(window).resize(function () {
                size();
            });
            function size() {
                var $width = $(window).width();
                var $height = $(window).height();
                $(".bg_wrapper").css({
                    "width": $width,
                    "height": $height,
                    "display": "table-cell",
                    "vertical-align": "middle"
                });
            }

            size();
            this.token = getUrlParam.getUrlParam("token");
            if (this.token === null || this.token === undefined) {
                // token是空应该提示无法登陆
                $("#tips_box_wait").addClass("hide");
                $("#tips_box_fail").removeClass("hide");
                return;
            }
            this.orderRecordId = getUrlParam.getUrlParam("orderRecordId");
            if (this.orderRecordId === null || this.orderRecordId === undefined) {
                $("#tips_box_wait").addClass("hide");
                $("#tips_box_fail").removeClass("hide");
                return;
            }
            // 设置cookie
            loginProxy.login(this.token);
        };
        // 关心消息数组
        this.listNotificationInterests = [notificationExt.LOGIN_SUCCESS, notificationExt.LOGIN_FAIL];
        // 关心的消息处理
        this.handleNotification = function (data) {
            switch (data.name) {
                case notificationExt.LOGIN_SUCCESS:
                    cookieParam.setCookieParam(cookieName.TOKEN, this.token);
                    this.loginSuccess = true;
                    $("#tips_box_wait").addClass("hide");
                    $("#tips_box_success").removeClass("hide");
                    break;
                case notificationExt.LOGIN_FAIL:
                    $("#tips_box_wait").addClass("hide");
                    $("#tips_box_fail").removeClass("hide");
                    break;
            }
        };
        this.advanceTime = function (passedTime) {
            if (this.loginSuccess) {
                this.nowTime += passedTime;
                if (this.nowTime > 1) {
                    window.location.href = "index.html?orderRecordId=" + this.orderRecordId;
                    this.loginSuccess = false;
                }
            }
        };
        Mediator.apply(this);
    };
    window.epay.LoginPayCenterMediator = LoginPayCenterMediator;
})(window);