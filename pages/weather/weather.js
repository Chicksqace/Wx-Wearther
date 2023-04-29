// pages/weather/weather.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      temp: "",
      type: "",
      city: "",
      week: "",
      weather: "",
      otherWeather: [
      ]
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var page=this
        wx.request({
          url: 'http://ajax-api.itheima.net/api/weather?city=台州',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            res=res.data.data
            console.log(res);
            page.setData({city:res.city,type:res.data[0].wea,temp:res.data[0].tem,week:res.data[0].day,weather:res.data[0].narrative})
            page.setData({otherWeather:res.data})
          }
        })
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
  
    }
  })