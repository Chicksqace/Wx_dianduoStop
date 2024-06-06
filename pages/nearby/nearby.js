// pages/nearby/nearby.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      shopInfo: {},
      longitude: 0,
      latitude: 0,
      markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      var that = this;
      wx.request({
          url: 'http://127.0.0.1:8088/api/shopInfo',
          method: 'GET',
          success(res) {
              const shopInfo = res.data;
              that.setData({
                  shopInfo: shopInfo,
                  longitude: shopInfo.longitude,
                  latitude: shopInfo.latitude,
                  markers: [{
                      id: 1,
                      longitude: shopInfo.longitude,
                      latitude: shopInfo.latitude,
                      title: shopInfo.title,
                      callout: {
                          content: shopInfo.title,
                          color: '#ff0000',
                          fontSize: 14,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: '#ff0000',
                          padding: 10,
                          display: 'ALWAYS'
                      }
                  }]
              });
          },
          fail(err) {
              console.error(err);
          }
      });
  },

  makePhoneCall: function () {
      wx.makePhoneCall({
          phoneNumber: this.data.shopInfo.phone || '400-0000-000', // 确保有电话号码
          success: function () {
            wx.showModal({
              title: '提示信息',
              content: '拨打电话成功！',
            })
          },
          fail: function () {
            wx.showModal({
              title: '提示信息',
              content: '拨打电话失败！',
            })
          }
      });
  }
});
