(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var notificationExt = window.epay.notificationExt;
    var tokenProxy = window.epay.tokenProxy;
    var LoginMediator = function () {
        this.initView = function (view) {
            $("#loginUCenter").on("click", this.onLoginChat);
        };
        // 关心消息数组
        this.listNotificationInterests = [notificationExt.LOGIN_SUCCESS];
        // 关心的消息处理
        this.handleNotification = function (data) {
            switch (data.name) {
                case notificationExt.LOGIN_SUCCESS:
                    window.location.href = "loginPayCenter.html?token=" + data.body['tokenId'];
                    break;
            }
        };
        this.onLoginChat = function () {
            var userName = $("#userName").val();
            var userPassword = $("#userPassword").val();
            tokenProxy.getToken(userName, userPassword);
        };
        Mediator.apply(this);
    };
    window.epay.LoginMediator = LoginMediator;
})(window);