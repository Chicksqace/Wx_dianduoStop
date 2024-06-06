Page({
  data: {
    name: '',
    email: '',
    message: ''
  },

  onNameInput(e) {
    this.setData({
      name: e.detail.value
    });
  },

  onEmailInput(e) {
    this.setData({
      email: e.detail.value
    });
  },

  onMessageInput(e) {
    this.setData({
      message: e.detail.value
    });
  },

  onSubmit() {
    const { name, email, message } = this.data;

    if (!name || !email || !message) {
      wx.showToast({
        title: '请填写所有字段',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    wx.request({
      url: 'http://127.0.0.1:8088/api/contact', // 替换为您的服务器地址
      method: 'POST',
      data: {
        name,
        email,
        message
      },
      success(res) {
        if (res.data.success) {
          wx.showToast({
            title: res.data.message || '提交成功',
            icon: 'success',
            duration: 2000
          });

          // 清空表单字段
          this.setData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          wx.showToast({
            title: res.data.message || '提交失败，请稍后再试',
            icon: 'none',
            duration: 2000
          });
        }
      },
      fail() {
        wx.showToast({
          title: '提交失败，请稍后再试',
          icon: 'none',
          duration: 2000
        });
      }
    });
  }
});
