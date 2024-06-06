// pages/commodity/commodity.js
var total_micro_second = 100000 * 1000;

Page({
    go() {
        wx.navigateTo({
            url: '/pages/spdetail/spdetail',
        });
    },
    /**
     * 页面的初始数据
     */
    data: {
        item: {
            title: '某某商品',
            x: "XXXXXXXXXXXX",
            price_one: "121",
            price_two: "99",
            flag: "false",
            ho: "display:none;",
            clock: ''
        }
    },
    open() {
        this.setData({
            ho: "display:block"
        });
    },
    close() {
        this.setData({
            ho: "display:none"
        });
    },
    countdown: function () {
        var that = this;
        var clock = this.dateformat(total_micro_second); // 格式化时间
        that.setData({
            clock: clock
        });

        if (total_micro_second <= 0) {
            that.setData({
                clock: "秒杀结束"
            });
            return; // timeout则跳出递归
        }

        // settimeout实现倒计时效果
        setTimeout(function () {
            total_micro_second -= 10;
            that.countdown();
        }, 10); // 注意毫秒的步长受限于系统的时间频率，于是我们精确到0.01s即10ms
    },

    // 时间格式化输出，如1天天23时时12分分12秒秒12 。每10ms都会调用一次
    dateformat: function (micro_second) {
        var second = Math.floor(micro_second / 1000); // 总秒数
        var day = Math.floor(second / 3600 / 24); // 天数
        var hr = Math.floor(second / 3600); // 总小时
        var hr2 = hr % 24; // 小时位
        var min = Math.floor((second - hr * 3600) / 60); // 分钟位
        var sec = (second - hr * 3600 - min * 60); // 秒位
        var micro_sec = Math.floor((micro_second % 1000) / 10); // 毫秒位，保留2位
        return day + "天" + hr2 + "时" + min + "分" + sec + "秒" + micro_sec;
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.countdown();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
});
