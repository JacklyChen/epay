(function (window) {
    if (!window.epay) window.epay = {};
    var cookieName = window.epay.cookieName;
    var cookieParam = window.epay.cookieParam;
    var notificationExt = window.epay.notificationExt;
    var getUrlParam = window.epay.getUrlParam;
    var orderRecordProxy = window.epay.orderRecordProxy;
    var payProxy = window.epay.payProxy;
    var Mediator = window.juggle.Mediator;
    var IndexMediator = function () {
        this.isCanPay = false;
        this.orderRecord = null;
        this.initView = function (view) {
            if (cookieParam.getCookieParam(cookieName.TOKEN) === null || cookieParam.getCookieParam(cookieName.TOKEN) === undefined) {
                window.location.href = 'login.html';
                return;
            }
            var orderRecordId = getUrlParam.getUrlParam("orderRecordId");
            if (orderRecordId === null || orderRecordId === undefined) {
                alert("订单记录为空");
                window.location.href = 'login.html';
                return;
            }
            orderRecordProxy.getOrderRecord(orderRecordId);
            function reH() {
                var h = $(window).height();
                $("body").css("min-height", h)
            }

            reH();
            $(window).resize(function () {
                reH();
            });
            $(".orderbtn").click(function () {
                $(this).toggleClass("up");
                $(this).parent().next().toggle();

            });
            this.addClick(this, this.onPayClick);
        };
        this.addClick = function (mediator, call) {
            var callFunc = function (event) {
                call.call(mediator, event);
            };
            $("#index_pay").on("click", callFunc);
        };
        // 关心消息数组
        this.listNotificationInterests = [notificationExt.GET_ORDER_RECORD_SUCCESS, notificationExt.ADD_PAY_HTML];
        // 关心的消息处理
        this.handleNotification = function (data) {
            switch (data.name) {
                case notificationExt.GET_ORDER_RECORD_SUCCESS:
                    this.initData(data.body.orderRecordData);
                    this.isCanPay = true;
                    break;
                case notificationExt.ADD_PAY_HTML:
                    $("#index_payhtml").append(data.body.payHtml);
                    $("#alipaysubmit").submit();
                    break;
            }
        };
        this.initData = function (data) {
            this.orderRecord = data;
            $("#index_total_price").html(data.orderRecordTotalPrice);
            $("#index_order_record_order_id").html(data.orderRecordOrderId);
            $("#index_order_goods_list").empty();
            for (var i = 0; i < data.orderGoodsArray.length; i++) {
                var orderGoods = data.orderGoodsArray[i];
                var view = this.createGoodsView(orderGoods);
                $("#index_order_goods_list").append(view);
            }
        };
        this.createGoodsView = function (orderGoods) {
            var view = document.createElement("li");
            var body =
                '<div class="orderLT mb20">' +
                '<p class="fl">' + orderGoods.orderGoodsName + '</p>' +
                '<div class="fr">' +
                '<p class="fl">数量：<span>' + orderGoods.orderGoodsNumber + '</span></p>' +
                '<p class="fl">单价：<span>' + orderGoods.orderGoodsPrice + '</span></p>' +
                '<div class="clear"></div>' +
                '</div>' +
                '<div class="clear"></div>' +
                '</div>' +
                '<p class="proDetail">产品详情：<span>' + orderGoods.orderGoodsDetail + '</span></p>';
            view.innerHTML = body;
            return $(view);
        };
        this.onPayClick = function () {
            if (!this.isCanPay) {
                alert("不能支付");
            }
            payProxy.getPayHtml(this.orderRecord.orderRecordId)
        };
        Mediator.apply(this);
    };
    window.epay.IndexMediator = IndexMediator;
})(window);