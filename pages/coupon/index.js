const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 1,
    list: [{
      discount:"2000",
      description:"折扣劵",
      min_spend:"3000",
      title:"水果可用"
    },{
      discount:"300",
      description:"折扣劵",
      min_spend:"1000",
      title:"熟食可用"
    },{
      discount:"1000",
      description:"折扣劵",
      min_spend:"2000",
      title:"肉类可用"
    }],
    statusBarHeight: 0,
    navigationBarHeight: 0,
    couponCode: ''  // 添加一个字段来保存优惠券码
  },
  tabFun(e) {
    this.getList(e.currentTarget.dataset.index)
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },
  backHome: function () {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  // 获取优惠券列表
  // getList: function (id) {
  //   wx.request({
  //     url: 'http://127.0.0.1:8088/api/user-coupons/' + id + '&user_id=1',
  //     method: 'GET',
  //     data: { state: id },
  //     success: res => {
  //       this.setData({
  //         list: res.data
  //       });
  //     },
  //     fail: err => {
  //       console.error('获取优惠券列表失败', err);
  //     }
  //   });
  // },
  // 绑定输入框输入事件
  onCouponCodeInput: function (e) {
    this.setData({
      couponCode: e.detail.value
    });
  },
  // 兑换优惠券
  redeemCoupon: function () {
    const { couponCode } = this.data;
    if (!couponCode) {
      wx.showToast({
        title: '请输入优惠券码',
        icon: 'none'
      });
      return;
    }

    wx.request({
      url: 'http://127.0.0.1:8088/api/redeem-coupon',
      method: 'POST',
      data: {
        userId: app.globalData.userId, // 假设你有用户ID存储在全局数据中
        couponCode: couponCode
      },
      success: res => {
        if (res.data.message === '优惠券兑换成功') {
          wx.showToast({
            title: '兑换成功',
            icon: 'success'
          });
          this.getList(this.data.tabIndex); // 重新获取优惠券列表
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          });
        }
      },
      fail: err => {
        wx.showToast({
          title: '兑换失败，请重试',
          icon: 'none'
        });
        console.error('兑换优惠券失败', err);
      }
    });
  },
  onLoad: function (options) {
    var that = this
    let app = getApp()
    that.setData({
      statusBarHeight: app.globalData.statusBarHeight + 'px',
      navigationBarHeight: app.globalData.navHeight + 'px'
    })
    this.getList(this.data.tabIndex)
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
})
