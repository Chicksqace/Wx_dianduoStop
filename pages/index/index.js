var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();

Page({
    data: {
      // 轮播图
        slide_img: [
            { "img": "../../images/bj/lb5.jpg" },
            { "img": "../../images/bj/lb2.jpg" },
            { "img": "../../images/bj/lb3.jpg" },
            { "img": "../../images/bj/lb4.jpg" }
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iconArray: [
            {
                "iconUrl": '../../images/icon-qiandao.png',
                "iconText": '签到',
                "url": '/pages/signin/signin'
            },
            {
                "iconUrl": '../../images/icon-fujin.png',
                "iconText": '附近',
                "url": '/pages/nearby/nearby'
            },
            {
                "iconUrl": '../../images/icon-zhanhui.png',
                "iconText": '导购',
                "url": '/pages/guide/guide'
            },
            {
                "iconUrl": '../../images/icon-fuli.png',
                "iconText": '福利',
                "url": '/pages/welfare/welfare'
            },
            {
                "iconUrl": '../../images/icon-muma.png',
                "iconText": '玩乐',
                "url": '/pages/play/play'
            },
            {
                "iconUrl": '../../images/icon-xingxing.png',
                "iconText": '周边',
                "url": '/pages/feilei/feilei'
            },
            {
                "iconUrl": '../../images/icon-tiyu.png',
                "iconText": '优惠券',
                "url": '/pages/coupon/index'
            },
            {
                "iconUrl": '../../images/icon-qinzi.png',
                "iconText": '拼多多',
                "url": '/pages/groupBuy/groupBuy'
            }
        ],
        // 下面商品图片及文字
        itemArray: [
            // {
            //     "itemUrl": '../../images/bj/lb1.jpg',
            //     "itemText": '野生核桃？那还用说，吃就完了！'
            // },
            // {
            //     "itemUrl": '../../images/bj/lb2.jpg',
            //     "itemText": '每一颗水果，都是大自然的诗。'
            // },
            // {
            //     "itemUrl": '../../images/bj/lb3.jpg',
            //     "itemText": '健康从口入，选择我们的新鲜水果。'
            // }
        ]
    },
    cusImageLoad: function(e) {
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },
    giveList(){
      var that=this;
      wx.request({
        url: 'http://127.0.0.1:8088/list',
        method: 'GET',
        success(res) {
            that.setData({
              itemArray:res.data
            })
        },
    });
    },
    onLoad() {
        this.giveList()
    },
    handleIconClick: function(e) {
        const url = e.currentTarget.dataset.url;
        if (url) {
            wx.navigateTo({
                url: url
            });
        }
    }
})
