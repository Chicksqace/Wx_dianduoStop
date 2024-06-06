Page({
  data: {
    deliveryOptions: [
      { id: 1, name: '标准配送', cost: '¥5.00', time: '2-3天', checked: true },
      { id: 2, name: '加急配送', cost: '¥15.00', time: '1-2天', checked: false },
      { id: 3, name: '次日达', cost: '¥25.00', time: '1天', checked: false }
    ],
    selectedOptionId: 1
  },

  onOptionChange(e) {
    const selectedId = e.detail.value;
    this.setData({
      selectedOptionId: selectedId,
      deliveryOptions: this.data.deliveryOptions.map(option => ({
        ...option,
        checked: option.id === parseInt(selectedId)
      }))
    });
  },

  onConfirm() {
    const selectedOption = this.data.deliveryOptions.find(option => option.id === parseInt(this.data.selectedOptionId));
    wx.showToast({
      title: `选择了: ${selectedOption.name}`,
      icon: 'success',
      duration: 2000
    });
  }
});
