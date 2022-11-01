// pages/home-video/index.js
import {
  getTopMV
} from '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载（对象普通写法）
   */
  // async onLoad (options) {
  onLoad: function (options) {
    this.getTopMVData(0)
  },

  // 封装网络请求的方法
  async getTopMVData(offset) {
    if (!this.data.hasMore && offset !== 0) {
      return
    }
    if(offset===0){
      wx.showNavigationBarLoading()
    }
    const res = await getTopMV(offset);
    let newData = this.data.topMVs.concat(res.data);
    if (offset === 0) {
      newData = res.data;
    }
    this.setData({
      topMVs: newData,
      hasMore: res.hasMore
    })

    if(offset===0){
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }
  },
  // 封装事件处理方法
  handleVideoItemClick(event){ 
    const id=event.currentTarget.dataset.item.id;
    wx.navigateTo({
      url: '/pages/detail-video/index?id='+id,
    })

  },
  //对象增强写法
  // 上拉加载更多
   onReachBottom() {
    //10~19
    this.getTopMVData(this.data.topMVs.length)
  },

  // 下拉刷新
   onPullDownRefresh() {
    this.getTopMVData(0)
  }
})