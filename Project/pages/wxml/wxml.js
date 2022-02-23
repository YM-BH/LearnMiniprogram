// pages/wxml/wxml.js
Page({

  data: {
    message: "这是一个消息",
    firstname: "Lebron",
    lastname: "James",
    age: 5,
    date: new Date().toLocaleString(),
    isActive: false,
    isShow:true,
    score: 40,
    players: ["LBJ", "KG", "Curry"]
  },

  onLoad() {
    setInterval(() => {
      this.setData({
        date: new Date().toLocaleString()
      })
    }, 1000);
  },

  changeColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },

  switchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  increment() {
    this.setData({
      score: this.data.score + 6
    })
  }
})