// pages/applyTuihuo/applyTuihuo.js
// pages/tuihuoDetails/tuihuoDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empflag: 0,
    total: false, //是否全选
    totalPrice: 0, //总价
    list: [],
   
    cart_list: [{ id: 0, select: false, src: "/images/img/tx.jpg", title: "黑色t许经典白", color: "黑色", size: "170/55A", price: "560", num: "2", bnum: "2" }, { id: 1, select: false, src: "/images/img/tx.jpg", title: "黑色2许经典白", color: "白色", size: "170/55A", price: "560", num: "2", bnum: "2" }, { id: 2, select: false, src: "/images/img/tx.jpg", title: "黑色2许经典白", color: "白色", size: "170/55A", price: "560", num: "1", bnum: "1" }],
    statusBarHeight: 0,
    navigationBarHeight: 0,
    bodyHeight: 0,
    index_list_yuanyin: 0,
    index_list_status:0,
    list_status_data: ['已收到货', '未收到货', '已经拒收', '已寄回','未发货'],
    list_yuanyin_data:['不喜欢/不想要','拍错了','买重了'],
    bodyHeight: 0
  },
  PickerChange_list_kd: function (e) {
    this.setData({
      index_pailie: e.detail.value
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
  PickerChange: function (e) {
    this.setData({
      index_list_status: e.detail.value
    })
  },
  PickerChange1: function (e) {
    this.setData({
      index_list_yuanyin: e.detail.value
    })
  },
  upload_pingzheng: function () {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {

      }
    })
  },

  totalPrice() {//计算总价
    let that = this
    let price = 0
    let flag = true
    for (let i = 0; i < that.data.cart_list.length; i++) {
      if (that.data.cart_list[i].select) {
        price = price + that.data.cart_list[i].price * that.data.cart_list[i].num
      } else {
        flag = false
      }
    }
    this.setData({
      totalPrice: price.toFixed(2),
      total: flag
    })

  },
  totalFun() { //全选
    this.data.total = !this.data.total
    this.data.cart_list.map((v, k) => {
      if (this.data.total) {
        v.select = true
      } else {
        v.select = false
      }
    })
    this.setData({
      cart_list: this.data.cart_list,
      total: this.data.total
    })
    this.totalPrice()
  },
  labelFun(e) {//单选
    let temp_select = 'cart_list[' + e.currentTarget.dataset.index + '].select'
    this.setData({
      [temp_select]: this.data.cart_list[e.currentTarget.dataset.index].select ? false : true
    })
    this.totalPrice()
  },
  plusFun(e) { //增加商品数量
    let temp_num = 'cart_list[' + e.currentTarget.dataset.index + '].num'
    let temp_num1 = this.data.cart_list[e.currentTarget.dataset.index].num
    if (temp_num1 < 1) {
      console.log('====++++=====')
    } else {
      temp_num1++
    }
    this.setData({
      [temp_num]: temp_num1
    })
    this.setData({
      [temp_num]: temp_num1
    })
    this.totalPrice()
  },
  reduceFun(e) { //减少商品数量
    let temp_num = 'cart_list[' + e.currentTarget.dataset.index + '].num'
    let temp_num1 = this.data.cart_list[e.currentTarget.dataset.index].num
    if (temp_num1 < 2) {
      console.log('====++++=====')
    } else {
      temp_num1--
    }
    this.setData({
      [temp_num]: temp_num1
    })
    this.totalPrice()
  },
  //测试空页面
  tesEmpty: function () {
    //模拟非空页面
    console.log('模拟非空页面')
    this.setData({
      empflag: 1
    })
  },
  toshjd: function () {

    wx.navigateTo({
      url: '../shjd/shjd'

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    let app = getApp()
    console.log(app.globalData)
    that.setData({
      statusBarHeight: app.globalData.statusBarHeight + 'px',
      navigationBarHeight: app.globalData.navHeight + 'px',
      bodyHeight: (app.globalData.screenHeight - app.globalData.navHeight) + 'px'
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