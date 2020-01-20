// pages/home/home.js
let pageNum;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    pageNum = 1;
    this.getImagesData();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    pageNum = 1;
    this.getImagesData();

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    pageNum++;
    this.getImagesData();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  /**
   * 获取图片列表
   */
  getImagesData: function () {
    let that = this;
    console.log("执行方法");

    wx.request({
      url: 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/' + pageNum,
      success: function (res) {
        let list = res.data.results;
        let listData = that.data.images;
        list.forEach((values) => listData.push(values));
        console.log(listData);
        that.setData({
          images: listData
        })
      },
      fail: function () {
        console.log(错误);
      }
    })
  },

  itemClick: function(e){
    let position = e.currentTarget.dataset.pos;
    wx.showToast({
      title: "点击了"+position
    });

    let item = e.currentTarget.dataset.item;
    console.log("点击的图片信息"+item.url);
    wx.navigateTo({
      url: '../detail/detail?pos='+position+'&item='+JSON.stringify(item),
    })
  }
})