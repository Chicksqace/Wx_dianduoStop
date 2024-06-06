
// pages/fljg.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
    index_pailie: 0,
    curNav: 0,
    showModalStatus: false,
    topmeun: [{ menu_name: "全部针织衫", id: 0 }, { menu_name: "全部针织衫", id: 1 }, { menu_name: "美利奴羊毛衫", id: 2 }, { menu_name: "全部针织衫", id: 3 }, { menu_name: "美利奴羊毛衫", id: 4 }, { menu_name: "全部针织衫", id: 5 }, { menu_name: "全部针织衫", id: 6 }],
    suaixuanData: [{ id: 0, name: "颜色", xilie: [{ name: "黑色", choseFlag: false }, { name: "棕色/橙色", choseFlag: false }, { name: "人气单品", choseFlag: false }] }, { id: 1, name: "材质", xilie: [{ name: "美利奴羊毛", choseFlag: false }, { name: "人气单品", choseFlag: false }] }, { id: 2, name: "尺寸", xilie: [{ name: "185/140A(XL)", choseFlag: false }, { name: "185/140A(XL)", choseFlag: false }] }],
    pailie_data: ['最新匹配', '最新上架', '价格低到高', '价格高到低'],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: null,
    navTitle: "分类结果",
    baseUrl: "https://wx.yogalt.com/",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list: [],
    page: 1,
    statusBarHeight: 0,
    navigationBarHeight: 0
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
  Tosearch:function () {
    wx.navigateTo({
      url: '../search/search'

    })
  },
  clickme_saixuan: function () {
    this.showModal();
  },
  paileiback: function () {
    this.hideModal();
  },
  PickerChange_pailie: function (e) {
    this.setData({
      index_pailie: e.detail.value
    })
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 1000,//动画持续时间
      timingFunction: "linear",//动画从头到尾的速度是相同的
      delay: 0 //动画延迟时间
    })
    this.animation = animation
    animation.translateY(300).step()//在 Y 轴平移的距离
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  shaixuan_touch: function (e) {
    let temp = 'suaixuanData[' + e.currentTarget.dataset.one + '].xilie[' + e.currentTarget.dataset.index + '].choseFlag'

    this.setData({
      [temp]: this.data.suaixuanData[e.currentTarget.dataset.one].xilie[e.currentTarget.dataset.index].choseFlag ? false : true
    })
  },
  bindtop_cz: function () {
    this.setData({
      suaixuanData: [{ id: 0, name: "颜色", xilie: [{ name: "黑色", choseFlag: false }, { name: "棕色/橙色", choseFlag: false }, { name: "人气单品", choseFlag: false }] }, { id: 1, name: "材质", xilie: [{ name: "美利奴羊毛", choseFlag: false }, { name: "人气单品", choseFlag: false }] }, { id: 2, name: "尺寸", xilie: [{ name: "185/140A(XL)", choseFlag: false }, { name: "185/140A(XL)", choseFlag: false }] }]
    })
  },
  bindtop_qr: function () {

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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that = this
    let app = getApp()
    that.setData({
      statusBarHeight: app.globalData.statusBarHeight + 'px',
      navigationBarHeight: app.globalData.navHeight + 'px',
      navTitle: e.jgname
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
