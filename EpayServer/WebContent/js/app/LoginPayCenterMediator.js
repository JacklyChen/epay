(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var getUrlParam = window.epay.getUrlParam;
    var loginProxy = window.epay.loginProxy;
    var notificationExt = window.epay.notificationExt;
    var cookieParam = window.epay.cookieParam;
    var cookieName = window.epay.cookieName;
    var LoginPayCenterMediator = function () {
        this.orderRecordId = null;
        this.token = null;
        this.initView = function (view) {
            this.token = getUrlParam.getUrlParam("token");
            if (this.token === null || this.token === undefined) {
                // token是空应该提示无法登陆
                return;
            }
            // 设置cookie
            loginProxy.login(this.token);
        };
        // 关心消息数组
        this.listNotificationInterests = [notificationExt.LOGIN_SUCCESS];
        // 关心的消息处理
        this.handleNotification = function (data) {
            switch (data.name) {
                case notificationExt.LOGIN_SUCCESS:
                    cookieParam.setCookieParam(cookieName.TOKEN, this.token);
                    window.location.href = "index.html";
                    break;
            }
        };
        Mediator.apply(this);
    };
    window.epay.LoginPayCenterMediator = LoginPayCenterMediator;
})(window);