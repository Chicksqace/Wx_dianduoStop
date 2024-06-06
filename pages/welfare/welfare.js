// pages/welfare/welfare.js
Page({
  data: {
      welfareList: []
  },

  onLoad() {
      this.fetchWelfareList();
  },

  // 获取福利列表数据
  fetchWelfareList() {
      wx.request({
          url: 'http://127.0.0.1:8088/api/welfare', // 后端接口地址
          success: (res) => {
            console.log(res);
              if (res.statusCode === 200) {
                  this.setData({
                      welfareList: res.data
                  });
              } else {
                  console.error('Failed to fetch welfare list');
              }
          },
          fail: (err) => {
              console.error('Failed to fetch welfare list:', err);
          }
      });
  },

  // 其他函数和事件处理函数...
});
