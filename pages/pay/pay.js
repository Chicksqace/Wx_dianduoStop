Page({
    // 页面数据
    data: {
      user: '', // 用于存储用户微信号
      payAmount: '' // 用于存储支付金额
    },
  
    // 支付成功回调函数
    handlePaymentSuccess() {
      const that = this;
  
      wx.showToast({
        title: '支付成功跳转',
        icon:'success',
        duration: 2000,
        success(){
          setTimeout(function() {
            wx.switchTab({
              url: '/pages/index/index'
            });
  
            // 发送请求
            wx.request({
              url: 'http://192.168.31.211:8088/wxPay',
              method: 'POST',
              data: {
                user: that.data.user, // 使用页面数据中的 user 参数
                pay: that.data.payAmount // 使用页面数据中的 payAmount 参数
              },
              success(res) {
                console.log(res.data);
                // 在这里添加成功提示等后续操作
              },
              fail(err) {
                console.error(err);
                // 在这里添加失败提示等后续操作
              }
            });
          }, 2000);
        }
      });
    },
  
    // 获取用户信息（包括微信号）
    getUserInfo() {
      const that = this;
  
      wx.getUserInfo({
        success(res) {
          console.log(res.userInfo); // 打印用户信息，包括微信号
          const wxNumber = res.userInfo.nickName; // 获取微信号
  
          // 将用户微信号存储到页面数据中
          that.setData({
            user: wxNumber
          });
        },
        fail(err) {
          console.error(err);
        }
      });
    },
  
    // 获取支付金额
    getPayAmount() {
      // 在这里获取支付金额，并将其存储到页面数据中
      const payAmount = '1012.00'; 
      this.setData({
        payAmount: payAmount
      });
    },
  
    // 生命周期函数--监听页面加载
    onLoad(options) {
      // 在页面加载时获取用户微信号和支付金额
      this.getUserInfo();
      this.getPayAmount();
    },
  });
  