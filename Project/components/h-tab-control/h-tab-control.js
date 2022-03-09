// components/h-tab-control/h-tab-control.js
Component({
 
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  data: {
    currentIndex: 0
  },

  methods: {
    itemClick(event) {
      // console.log(event)
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      // 将组件内的事件传递出去
      this.triggerEvent('itemClick', {index, text: this.properties.titles[index]})
    }
  }
})
