//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    statusBarHeight: 0,
    navigationBarHeight: 0,
    index: 1,
    curNav: 0,
    body_box_height:1000 + 'rpx',
    left_menus: [{
      menu_name: "所有商品",id: 0},{menu_name: "限时抢购",id: 1},{
      menu_name: "时令果蔬",id: 2},{
      menu_name: "火锅食材",id: 3},{menu_name: "肉禽蛋品",id: 4
      },{menu_name: "海鲜水产",id: 5},{menu_name: "水乳饮品",
      id: 6},{menu_name: "面点冻品",
      id: 7},{menu_name: "休闲零食",id: 8},{menu_name: "粮油干货",
      id: 9},{menu_name: "日用百货",id: 10},{menu_name: "清洁用品",id: 11}
    ],
    menuRightGoods: [{ id: 0, xilie: [{ name: "新新品新品新品品" }, { name: "新品" }, { name: "人气单品" }] }, {
      id: 1, xilei: [{ name: "针织衫" }, { name: "T恤" }, { name: "人气单品" }]
    }]
  },
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.currentTarget.dataset.id,
        index = parseInt(e.currentTarget.dataset.index),
       shopname = e.currentTarget.dataset.name;
    var rightGoods = [];
    switch (id) {
      case 0: rightGoods = [{ id: 0, xilie: [{ name: "新品新品新品新品" }, { name: "新品" }, { name: "人气单品" }]},{
        id: 1,xilei: [{ name: "针织衫" }, { name: "T恤" }, { name: "人气单品" }]}]
      
        break;
      case 1: rightGoods = [{ id: 0, xilie: [{ name: "卫衣" }, { name: "牛仔裤" }, { name: "人气单品" }] }, { id: 1, xilie: [{ name: "Polo衫" }, { name: "口罩" }] }, { id: 2,xilie: [{ name: "Polo衫" }, { name: "新品" }, { name: "人气单品" }]}]
        break;

    }
    this.setData({
      curNav: id,//设置当前点击项
      curIndex: index,//更改当前点击项下标为当前数组下标
      menuRightTitle: shopname,//设置右侧显示栏标题
      menuRightGoods: rightGoods//设置需要展示的商品
    })
  },
  switchToJg:function (e){
    let jgname = e.currentTarget.dataset.jgname
    wx.navigateTo({
      url: '../fljg/fljg?jgname=' + jgname
      
    })
  },
  Tosearch: function () {
    wx.navigateTo({
      url: '../search/search'

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
  onLoad: function () {
    var that = this
    var res = app.globalData.systemInfo
    var body_box_height_tmp = res.screenHeight - res.statusBarHeight - 144 //144为搜索和navg的高度和后期维护
    //定位qiehuan组件参数
    that.setData({
      body_box_height : body_box_height_tmp + 'px',
      statusBarHeight: app.globalData.statusBarHeight + 'px',
      navigationBarHeight: app.globalData.navHeight + 'px'
    })
  }
})
