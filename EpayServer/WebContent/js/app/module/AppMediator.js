(function (window) {
    if (!window.epay) window.epay = {};
    var Mediator = window.juggle.Mediator;
    var appProxy = window.epay.appProxy;
    var AppMediator = function () {
        this.initView = function (view) {
            $("#createApp").on("click", this.onCreateApp);
            $("#updateApp").on("click", this.onUpdateApp);
            $("#getApp").on("click", this.onGetApp);
            $("#getAppList").on("click", this.onGetAppList);
        };
        this.onCreateApp = function () {
            var appName = $("#appName").val();
            var appReturnUrl = $("#appReturnUrl").val();
            var appNotifyUrl = $("#appNotifyUrl").val();
            appProxy.createApp(appName, appReturnUrl, appNotifyUrl);
        };
        this.onUpdateApp = function () {
            var appId = $("#appId_update").val();
            var appName = $("#appName_update").val();
            var updateAppKey = $("#updateAppKey_update").val();
            var appState = $("#appState_update").val();
            var appReturnUrl = $("#appReturnUrl_update").val();
            var appNotifyUrl = $("#appNotifyUrl_update").val();
            appProxy.updateApp(appId, appName, updateAppKey, appState, appReturnUrl, appNotifyUrl);
        };
        this.onGetApp = function () {
            var appId = $("#appId_get").val();
            appProxy.getApp(appId);
        };
        this.onGetAppList = function () {
            var appName = $("#appName_getlist").val();
            var appCreateTimeGreaterThan = $("#appCreateTimeGreaterThan").val();
            var appCreateTimeLessThan = $("#appCreateTimeLessThan").val();
            var appState = $("#appState_getlist").val();
            var currentPage = $("#currentPage").val();
            var pageSize = $("#pageSize").val();
            appProxy.getAppList(appName, appCreateTimeGreaterThan, appCreateTimeLessThan, appState, currentPage, pageSize);
        };
        Mediator.apply(this);
    };
    window.epay.AppMediator = AppMediator;
})(window);