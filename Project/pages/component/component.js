// pages/component/component.js
Page({

  data: {
    counter: 0
  },

  increment(event) {
    console.log(event)
    this.setData({
      counter: this.data.counter + 1
    })
  },

  itemClick(event) {
    // console.log(event)
    const index = event.detail.index
    const text = event.detail.text

    console.log(index, text)
  },

  changeInternalData() {
    // 获取组件对象
    const my_sel = this.selectComponent("#sel-id")
    // console.log(my_sel)

    // 调用组件的方法修改数据
    my_sel.increment(30)
  }
})