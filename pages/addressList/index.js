// pages/addressList/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    id:'',
    state:null,
    statusBarHeight: 0,
    navigationBarHeight: 0,
    navH:0,
    adress_list: [{ id: 0, select: false, name: "陈先生 17777777777", adress: "浙江省杭州浙江XXXXXX大学", }, { id: 0, select: false, name: "陈先生 17777777777", adress: "浙江省杭州浙江XXXXXX大学", }],
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
  labelFun(e) {//单选
    let temp_select = 'adress_list[' + e.currentTarget.dataset.index + '].select'
    this.setData({
      [temp_select]: this.data.adress_list[e.currentTarget.dataset.index].select ? false : true
    })
    
  },
  onLoad: function (options) {
    var that = this
    let app = getApp()
    that.setData({
      statusBarHeight: app.globalData.statusBarHeight + 'px',
      navigationBarHeight: app.globalData.navHeight + 'px',
      navH: app.globalData.navHeight
    })
    this.setData({
      id: app.globalData.userInfo.address._id,
      state: options ? options.type:null
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
    app.http('v1/user/cityList', {
      openid: app.globalData.openid
    })
      .then(res => {
        this.setData({
          list: res.data
        })
      })
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