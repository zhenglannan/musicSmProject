import hyRequest from './index'
 /**
  * 请求排行mv列表
  * @param {} offset  
  * @param {} limit 一页展示多少
  */
export function getTopMV(offset,limit=10){
  return hyRequest.get('/top/mv',{
    offset,
    limit
  })  
}
/**
 * 请求mv详情数据
 * @param {number} mvid 
 */
export function getMVDetail(mvid){
  return hyRequest.get('/mv/detail',{
    mvid 
  })  
}

/**
 * 请求mv的播放地址
 * @param {number} id  MV的id
 */
export function getMVURL(id){
  return hyRequest.get('/mv/url',{
    id
  })  
}
/**
 * 请求mv相关视频
 * @param {} id 
 */
export function getRelatedVideo(id){
  return hyRequest.get('/related/allvideo',{
    id
  })  
}
