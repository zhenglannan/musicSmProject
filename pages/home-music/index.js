// pages/home-music/index.js
import Toast from '@vant/weapp/toast/toast';
import {getBanners} from '../../service/api_music'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    banners:[],
    swiperHeight:100  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取页面数据
    this.getPageData();
  },
  
  getPageData(){
    getBanners().then(res=>{
      this.setData({
        banners:res.banners
      })
    })
  },
  handleImageload(e){
    // console.log(e.detail);//图片本来的宽高度，不能直接用
    const query = wx.createSelectorQuery()
    query.select('.image').boundingClientRect()
    // query.selectViewport().scrollOffset()
    query.exec((res)=>{
      // res[0].top       // #the-id节点的上边界坐标
      // res[1].scrollTop // 显示区域的竖直滚动位置
      console.log(res[0].height);
      this.setData({
        swiperHeight:res[0].height
      })
    })
  },

  // 事件处理
  handleSearchClick(){
    // console.log('点击了搜索框');
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // onSearch(e){
  //   Toast("search"+e.detail)
  //   // Toast.success('成功文案');
  // }



})