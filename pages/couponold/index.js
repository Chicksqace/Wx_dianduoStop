// pages/coupon/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:1,
    list:[],
    statusBarHeight: 0,
    navigationBarHeight: 0
  },
  tabFun(e){
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
  /**
   * 生命周期函数--监听页面加载
   */
  getList:function(id){
    app.http('v1/user/couponList', {
      state: id
    }, "get")
      .then(res => {
        this.setData({
          list:res.data
        })
      })
  },
  onLoad: function (options) {
    var that = this
    let app = getApp()
    that.setData({
      statusBarHeight: app.globalData.statusBarHeight + 'px',
      navigationBarHeight: app.globalData.navHeight + 'px'
    })
    this.getList(this.data.tabIndex)
    app.http('/v1/user/getCoupon',{
      id:"5b9b235f53b9af1484cbd54f"
    },'POST').then(res=>{
      
    })
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
  
  }
})