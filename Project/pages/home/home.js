// pages/home/home.js

// 获取全局对象
const app = getApp()

const name = app.globalData.name
const age = app.globalData.age

Page({

  data: {
    name: name,
    age: age
  },

  // 获取全局对象按钮点击事件
  getGlobalData() {
    // console.log(name + "-" + age)
    // this.setData({
    //   name,
    //   age
    // })
  },

  // 获取用户信息
  getUserInfoClick(event) {
    // console.log(event)
    wx.login({
      success: res => {
        console.log(res)
      }
    })
  },

  // --------------- 生命周期函数 --------------
  onLoad() {
    console.log("onLoad")
  },

  onShow() {
    console.log("onShow")
  },

  onReady() {
    console.log("onReady")
  },

  onHide() {
    console.log("onHide")
  },

  onUnload() {
    console.log("onUnload")
  }
})