// app.js
App({
  // 生命周期函数

  onLaunch() {
   console.log("生命周期回调——监听小程序初始化。 - onLaunch")

   // 抛出一个错误，目的是调用 onError 函数
  //  setTimeout(() => {
  //    const error = new Error
  //    throw error
  //  }, 3000);
  },

  onShow() {
    console.log("生命周期回调——监听小程序启动或切前台。 - onShow")
  },

  onHide() {
    console.log("生命周期回调——监听小程序切后台。- onHide")
  },

  onError() {
    console.log("错误监听函数。- onError")
  },

  globalData: {
    userInfo: null
  }
})
