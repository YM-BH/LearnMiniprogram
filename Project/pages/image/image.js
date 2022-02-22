// pages/image/image.js
Page({

  data: {
    photoPath: ""
  },

  handleChoosePhoto() {

    // 从本地选择图片
    wx.chooseMedia({
      success: (res) => {
        const photoPath = res.tempFiles[0].tempFilePath
        this.setData({
          photoPath
        })
      },
      fail: (error) => {
        console.log(error)
      }
    })
  },

  loadPhoto() {
    console.log("图片加载完成")
  }
})