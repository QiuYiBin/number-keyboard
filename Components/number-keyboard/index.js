// Components/number-keyboard/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    value: {
      type: String
    },
    maxlength: {
      type: Number,
      value: 6
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击数字触发
     * @param {*} event 
     */
    onInput(event) {
      const index = event.target.dataset.index;
      let value = this.data.value;
      if (value.length >= this.data.maxlength) return false;
      let inputValue = index + 1;
      if (index === 9) inputValue = 0;
      if (index === 10) {
        if (value.indexOf('.') == -1 && value.length > 0) {
          inputValue = '.';
        } else {
          return false;
        }
      } 
      this.setData({
        value: value + inputValue
      })
      // 使手机发生较短时间的振动（15 ms）
      wx.vibrateShort()
    },

    /**
     * 点击数字键盘删除时触发
     */
    onDelete() {
      let value = this.data.value;
      value = value.substring(0, value.length - 1);
      this.setData({
        value: value
      })
      wx.vibrateShort()
    },

    /**
     * 点击数字键盘右下角完成
     */
    onClose() {
      // 隐藏数字键盘
      this.setData({
        show: false
      })
      // 触发事件
      this.triggerEvent('confirm')
      wx.vibrateShort()
    },
  }
})
