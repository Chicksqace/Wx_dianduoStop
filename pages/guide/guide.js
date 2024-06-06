Page({
  data: {
    inputValue: '', // 用户输入的问题
    chatMessages: [] // 聊天消息列表
  },

  // 用户输入框内容变化
  inputChange(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  // 发送消息
  sendMessage() {
    const inputValue = this.data.inputValue;
    if (!inputValue) {
      return;
    }

    // 发送用户输入的问题
    this.addUserMessage(inputValue);

    // 清空输入框
    this.setData({
      inputValue: ''
    });

    // 调用聊天机器人API，获取回答
    this.getBotResponse(inputValue);
  },

  // 向聊天消息列表中添加用户消息
  addUserMessage(message) {
    const chatMessages = this.data.chatMessages;
    chatMessages.push({
      type: 'user',
      content: message
    });
    this.setData({
      chatMessages: chatMessages
    });
    this.scrollToBottom();
  },

  // 向聊天消息列表中添加机器人消息
  addBotMessage(message) {
    const chatMessages = this.data.chatMessages;
    chatMessages.push({
      type: 'bot',
      content: message
    });
    this.setData({
      chatMessages: chatMessages
    });
    this.scrollToBottom();
  },

  // 调用聊天机器人API获取回答
  getBotResponse(question) {
    const apiUrl = "自己申请GPTid";
    wx.request({
      url: apiUrl,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        question: question
      },
      success: (res) => {
        const answer = res.data.answer || "抱歉，暂时无法回答您的问题。";
        this.addBotMessage(answer);
      },
      fail: (err) => {
        console.error(err);
        this.addBotMessage("抱歉，暂时无法连接到服务器。");
      }
    });
  },

  // 滚动到聊天消息底部
  scrollToBottom() {
    wx.createSelectorQuery().select('.chat-area').boundingClientRect(rect => {
      wx.pageScrollTo({
        scrollTop: rect.bottom
      });
    }).exec();
  }
});
