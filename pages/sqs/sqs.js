Page({
  data: {
    currentTab: 0,
    myPosts: [
      {
        image: '../../images/tx/j.jpg',
        username: '我',
        text: '旅游是人们放松身心的好方式，但也会对环境造成一定的影响。因此，我们应该选择低碳方式出行，比如步行、骑行等，同时也要关注旅游产业的生态状况，共同保护美丽自然。'
      }
      // 其他我的发布数据
    ],
    otherPosts: [
      {
        image: '../../images/tx/x.jpg',
        username: '用户一',
        text: '城市化进程中，如何实现低碳发展已成为当务之急。我们应该注重公共交通、开展垃圾分类、加强建筑节能等，共建低碳城市，为未来的环境和生活带来更多美好。'
      }
      // 其他用户发布数据
    ],
    posX: 250,
    posY: 60,
    sys: true,
    newPostText: ""
  },

  switchNav(e) {
    this.setData({
      currentTab: e.target.dataset.current
    });
  },

  touchStart(e) {
    this.setData({
      posX: e.touches[0].clientX - 20,
      posY: e.touches[0].clientY - 20
    });
  },

  touchMove(e) {
    this.setData({
      posX: e.touches[0].clientX - 20,
      posY: e.touches[0].clientY - 20
    });
  },

  touchEnd(e) {
    this.setData({
      posX: e.changedTouches[0].clientX - 20,
      posY: e.changedTouches[0].clientY - 20
    });
  },

  close() {
    this.setData({
      sys: !this.data.sys
    });
  },

  publishInput(e) {
    this.setData({
      newPostText: e.detail.value
    });
  },

  publishPost() {
    if (this.data.newPostText.trim() !== "") {
      const newPost = {
        image: '../../images/tx/j.jpg', // 默认图片或用户头像
        username: '我',
        text: this.data.newPostText
      };
      const updatedMyPosts = [newPost, ...this.data.myPosts];
      this.setData({
        myPosts: updatedMyPosts,
        newPostText: "" // 清空输入框
      });
      wx.showToast({
        title: '发布成功',
        icon: 'success'
      });
    } else {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      });
    }
  }
});
