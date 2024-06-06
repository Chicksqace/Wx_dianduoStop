// pages/coupon/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 1,
    list: [],
    statusBarHeight: 0,
    navigationBarHeight: 0,
    topmeun: [{ menu_name: "全部订单", id: 0 }, { menu_name: "待付款", id: 1 }, { menu_name: "待收货", id: 2 }, { menu_name: "售后", id: 3 }, { menu_name: "已退款", id: 4 }, { menu_name: "也收货", id: 5 }, { menu_name: "已经发货", id: 6 }],
  },
  tabFun(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
    this.getList()
  },
  getList(){
    app.http('/v1/order/list', { state: this.data.tabIndex }).then(res => {
      this.setData({list:res.data})
    })
  },
  backHome: function () {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  toshjd: function () {
    wx.navigateTo({
      url: '../shjd/shjd',
    })
  },

  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tabIndex: options.type
    })
    var that = this
    let app = getApp()
    that.setData({
      statusBarHeight: app.globalData.statusBarHeight + 'px',
      navigationBarHeight: app.globalData.navHeight + 'px'
    })
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switchbuttonTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index),
      fenleiname_tmp = e.currentTarget.dataset.name;
    var buttomGoods = [];
    switch (id) {
      case 0: buttomGoods = [{ id: 0, xilie: [{ name: "新品" }, { name: "新品" }, { name: "人气单品" }] }, {
        id: 1, xilei: [{ name: "针织衫" }, { name: "T恤" }, { name: "人气单品" }]
      }]

        break;
      case 1: buttomGoods = [{ id: 0, xilie: [{ name: "卫衣" }, { name: "牛仔裤" }, { name: "人气单品" }] }, { id: 1, xilie: [{ name: "Polo衫" }, { name: "口罩" }] }, { id: 2, xilie: [{ name: "Polo衫" }, { name: "新品" }, { name: "人气单品" }] }]
        break;

    }
    this.setData({
      curNav: id,
      curIndex: index,
      fenleiname: fenleiname_tmp,
      menuButtomtGoods: buttomGoods
    })
  },

})