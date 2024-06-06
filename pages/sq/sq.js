Page({
    data: {
      topic: {
        icon: '/images/bt/hot.jpg',
        title: '热门话题'
      },
      post: {
        icon: '/images/bt/x.png',
        title: '最新动态'
      },
      user: {
        icon: '/images/bt/j.jpg',
        title: '精华帖子'
      },
      topics: [
        {
          id: 1,
          image: '/images/bt/dq.jpg',
          title: '保护地球从我做起，一小步，一大爱。'
        },
        {
          id: 2,
          image: '/images/bt/gr.jpg',
          title: '绿色出行，从我做起，减少碳排放，造福后代。'
        },
        {
          id: 3,
          image: '/images/bt/food.jpg',
          title: '减少浪费，分享资源，让我们共同守护蓝天白云。'
        },
        {
          id: 4,
          image: '/images/bt/w.jpg',
          title: '节约用水，减轻负担，一滴水的珍贵，需要我们每个人的珍惜。'
        },
        {
          id: 5,
          image: '/images/bt/lj.jpg',
          title: '垃圾分类，日常行动，为环保事业尽一份力。'
        }
      ],
      zhanghao:"",
      pwd:"",
      currentTab:0,
      isEncrypt:false,
      sys:"false",
      chaX: 0,// 转换值X
      chaY: 0,// 转换值Y
      touch: false, // 触摸标记
      posX:100, // 初始位置
      posY:20, // 初始位置
    },
    touchStart: function (e) {
        console.log("== touchStart ==");// 拖动开始
        // e.touches[0] 内容就是触摸点的坐标值
        var tranX = e.touches[0].pageX-this.data.posX;
        var tranY = e.touches[0].pageY-this.data.posY;
        console.log("start tranX: " + tranX);
        console.log("start tranY: " + tranY);
        // 存储chaX和chaY 并设置 touch: true
        this.setData({
            touch: true, 
            chaX:tranX,
            chaY:tranY
        });
    },
    // 触摸移动
    touchMove: function (e) {
        if (!this.data.touch) return;
        // e.touches[0] 内容就是触摸点的坐标值
        var new_posX = e.touches[0].pageX-this.data.chaX;
        var new_posY = e.touches[0].pageY-this.data.chaY;
        console.log(" move new_posX: " + new_posX);
        console.log(" move nwe_posY: " + new_posY);
        this.setData({
            posX: new_posX,
            posY: new_posY
        });
    },
    // 触摸结束
    touchEnd: function (e) {
        console.log("== touchEnd ==")
        if (!this.data.touch) return;
        this.setData({
            touch: flase,
            chaX:0,
            chaY:0
        });
    },

    handleTopicClick() {
      wx.navigateTo({
        url: '/pages/community/topic'
      })
    },
  
    handlePostClick() {
      wx.navigateTo({
        url: '/pages/community/post'
      })
    },
  
    handleUserClick() {
      wx.navigateTo({
        url: '/pages/community/user'
      })
    },
  
    handleTopicItemClick(event) {
      const { id } = event.currentTarget.dataset;
      wx.navigateTo({
        url: `/pages/community/topic-detail?id=${id}`
      });
    },
    onLoad(options) {
        sys: (options.sys == "true" ? true : false)
    },
    close:function () {
        var that = this;
        that.setData({
          sys: (!that.data.sys)
        })
      console.log(1)
    },
    pinglun(){
        wx.navigateTo({
          url: '/pages/sqs/sqs',
        })
    }
  });
  