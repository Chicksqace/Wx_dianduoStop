// pages/searchEmpty/searchEmpty.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputtext:null,
    empflag: 1,
    statusBarHeight: 0,
    navigationBarHeight: 0,
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
  searchAction:function () {
    //模拟非空页面
    this.setData({
      empflag: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e)
    var that = this
    let app = getApp()
    var tmpText=null;
    if (typeof (e.inputText) != "undefined"){
      tmpText = e.inputText
    }
    if (e.inputText== "undefined") {
      tmpText = null
    }
    that.setData({
      statusBarHeight: app.globalData.statusBarHeight + 'px',
      navigationBarHeight: app.globalData.navHeight + 'px',
      inputtext: tmpText
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