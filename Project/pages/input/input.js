// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleInput(event) {
    console.log("文字输入时触发", event)
  },

  handleFocus(event) {
    console.log("聚焦时触发", event)
  },

  hanleBlur(event) {
    console.log("失去焦点时触发", event)
  }
})