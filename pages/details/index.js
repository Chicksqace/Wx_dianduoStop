// pages/details/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/img/pig1.jpg',
      '/images/img/pig2.jpg',
      '/images/img/pig3.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    currentTab: 0,
    tabIs1:true,
    tabIs2: false,
    tabIs3: false,
    specIs:false,
    data:null,
    statusBarHeight: 0,
    navigationBarHeight: 0,
    index: 0,
    index1: 0,
    array: ['黑色', '蓝色', '绿色', '白色'],
    arraycolor: ['#000000', '#0000FF', '#00FF00', '#FFFFFF'],
    array1: ['170/55A', '160/122', '485/233', '587/231'],
    objectArray: [
      {
        id: 0,
        name: '黑色'
      },
      {
        id: 1,
        name: '白色'
      },
      {
        id: 2,
        name: '绿色'
      },
      {
        id: 3,
        name: '白色'
      }
    ],
  },
  // article4: function () {
  //   wx.navigateTo({
  //     // url: '../article/index?type=4',
  //   })
  // },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  tabFun(e){
    console.log(e)
    if (e.currentTarget.dataset.state == 1){
      this.setData({
        tabIs1:true,
        tabIs2:false,
        tabIs3:false,
      })
    }
     if (e.currentTarget.dataset.state == 2) {
        this.setData({
          tabIs2: true,
          tabIs1:false,
          tabIs3:false,
        })
    } if (e.currentTarget.dataset.state == 3){
      this.setData({
        tabIs3: true,
        tabIs1:false,
        tabIs2:false,
      })
    }
  },
  goShopCar: function () {
    wx.navigateTo({
      url: "/pages/cart/index"
    })
  },
  specFun(){
    this.setData({
      specIs: !this.data.specIs
    })
  },
  addCart(){
    wx.navigateTo({
      url: '/pages/goshop/goshop',
    })
    // app.http('v1/order/addCart', {
    //       id: this.data.data._id,
    //       num: 1,
    //       spec:['asdasasd'],
    //       title: this.data.data.title,
    //       img: this.data.data.img,
    //       price: this.data.data.price
    //      },"POST",)
    // .then(res=>{
    //   console.log(res)
    //   if(res.code == 200){
    //     wx.showToast({
    //       title: '已加入购物车',
    //       icon: 'success',
    //       duration: 2000
    //     })
    //   }
    //  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this
    let app = getApp()
    that.setData({
      statusBarHeight: app.globalData.statusBarHeight + 'px',
      navigationBarHeight: app.globalData.navHeight + 'px'
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