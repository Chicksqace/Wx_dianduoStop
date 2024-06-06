// pages/signin/signin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: 1, // 假设用户ID是1，实际应用中会动态获取
    lastSignInDate: '', // 最后一次签到的日期
    signInReward: 10, // 每次签到奖励的积分
    signInHistory: [] // 签到历史
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchSignInHistory();
  },

  fetchSignInHistory() {
    let that = this;
    wx.request({
      url: 'http://127.0.0.1:8088/api/signin/history',
      data: { userId: this.data.userId },
      success(res) {
        console.log(res);
        if (res.statusCode === 200) {
          const lastSignInDate = res.data.length > 0 ? that.formatDateToChinese(res.data[0].signInDate) : '';
          that.setData({
            signInHistory: res.data.map(item => item.signInDate),
            lastSignInDate: lastSignInDate
          });
        } else {
          // 处理失败情况
          wx.showToast({
            title: '获取签到记录失败',
            icon: 'none'
          });
        }
      },
      fail() {
        // 处理失败情况
        wx.showToast({
          title: '获取签到记录失败',
          icon: 'none'
        });
      }
    });
  },

  formatDateToChinese(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  },

  handleSignIn() {
    let that = this;
    const currentDate = new Date().toISOString().split('T')[0];
    wx.request({
      url: 'http://127.0.0.1:8088/api/signin',
      method: 'POST',
      data: {
        userId: this.data.userId,
        signInDate: currentDate,
        points: this.data.signInReward
      },
      success(res) {
        console.log(res);
        if (res.statusCode === 200) {
          wx.showToast({
            title: '签到成功',
            icon: 'success'
          });
          that.fetchSignInHistory(); // 更新签到历史
        } else {
          // 处理失败情况
          wx.showToast({
            title: '签到失败',
            icon: 'none'
          });
        }
      },
      fail() {
        // 处理失败情况
        wx.showToast({
          title: '签到失败',
          icon: 'none'
        });
      }
    });
  },

  // 其他生命周期函数和事件处理函数...
});
