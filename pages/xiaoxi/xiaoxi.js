Page({
  data: {
    carArray: [
      {
        carImage: '../../images/sp/R-C.jpg',
        carTitle: '蓝莓酥（小份）',
        carPrice: '¥42.00',
        carNum: 1,
        carShow: true
      },
      {
        carImage: '../../images/sp/R-C.jpg',
        carTitle: '蓝莓酥（中份）',
        carPrice: '¥72.00',
        carNum: 1,
        carShow: true
      },
      {
        carImage: '../../images/sp/R-C.jpg',
        carTitle: '蓝莓酥（大份）',
        carPrice: '¥92.00',
        carNum: 1,
        carShow: true
      }
    ],
    totalPrice: 0 // Initialize total price
  },
  onLoad: function () {
    this.calculateTotalPrice(); // Calculate total price on load
  },
  carAdd: function (event) {
    var that = this;
    var index = event.target.dataset.alphaBeta;
    var con = that.data.carArray[index].carNum + 1;
    var key = 'carArray[' + index + '].carNum';
    var obj = {};
    obj[key] = con;
    this.setData(obj, () => {
      that.calculateTotalPrice(); // Recalculate total price after adding
    });
  },
  carReduce: function (event) {
    var that = this;
    var index = event.target.dataset.alphaBeta;
    var con = that.data.carArray[index].carNum;
    var key = 'carArray[' + index + '].carNum';
    var obj = {};
    if (con <= 1) {
      obj[key] = 1;
      that.setData(obj, () => {
        that.calculateTotalPrice(); // Recalculate total price after reducing
      });
    } else {
      con--;
      obj[key] = con;
      that.setData(obj, () => {
        that.calculateTotalPrice(); // Recalculate total price after reducing
      });
    }
  },
  carRemove: function (event) {
    var that = this;
    var index = event.target.dataset.alphaBeta;
    var key = 'carArray[' + index + '].carShow';
    var obj = {};
    obj[key] = false;
    this.setData(obj, () => {
      that.calculateTotalPrice(); // Recalculate total price after removing
    });
  },
  toPay: function () {
    wx.navigateTo({
      url: '/pages/pay/pay'
    })
  },
  calculateTotalPrice: function () {
    var totalPrice = 0;
    this.data.carArray.forEach(item => {
      if (item.carShow) {
        totalPrice += parseFloat(item.carPrice.slice(1)) * item.carNum; // Calculate total price
      }
    });
    this.setData({
      totalPrice: totalPrice.toFixed(2) // Set total price with 2 decimal places
    });
  }
})
