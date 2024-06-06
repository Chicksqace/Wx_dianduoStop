Page({
  data: {
    carArray: [
      {
        carImage: '../../images/img/pig1.jpg',
        carTitle: '毛绒衣服',
        carPrice: 300.00,
        carNum: 1,
        carShow: true
      },
    ],
    totalPrice: 0
  },
  
  onLoad: function() {
    this.calculateTotalPrice();
  },

  calculateTotalPrice: function() {
    let total = 0;
    this.data.carArray.forEach(item => {
      if (item.carShow) {
        total += item.carPrice * item.carNum;
      }
    });
    this.setData({
      totalPrice: total.toFixed(2)
    });
  },

  carAdd: function(event) {
    const index = event.target.dataset.alphaBeta;
    let carNum = this.data.carArray[index].carNum + 1;
    let key = `carArray[${index}].carNum`;
    this.setData({
      [key]: carNum
    }, this.calculateTotalPrice);
  },

  carReduce: function(event) {
    const index = event.target.dataset.alphaBeta;
    let carNum = this.data.carArray[index].carNum;
    if (carNum > 1) {
      carNum--;
      let key = `carArray[${index}].carNum`;
      this.setData({
        [key]: carNum
      }, this.calculateTotalPrice);
    }
  },

  carRemove: function(event) {
    const index = event.target.dataset.alphaBeta;
    let key = `carArray[${index}].carShow`;
    this.setData({
      [key]: false
    }, this.calculateTotalPrice);
  },

  toPay: function() {
    wx.navigateTo({
      url: '/pages/pay1/pay1'
    });
  }
});
