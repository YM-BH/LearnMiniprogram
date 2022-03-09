// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "这是默认标题",
      observer: (newValue, oldValue) => { // 监听属性值的改变
        console.log(newValue, oldValue)
      }
    },
    content: {
      type: String,
      value: "这是默认内容"
    }
  },

  externalClasses: ["titleclass"]
})
