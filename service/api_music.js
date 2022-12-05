import hyRequest from './index'
 /**
  * 轮播图
  * @param {} type  :资源类型,对应以下类型,默认为 0 即 PC 0: pc 1: android 2: iphone 3: ipad
  */
export function getBanners(type=1){
  return hyRequest.get('/banner',{
    type,
  })  
}
