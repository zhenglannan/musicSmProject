import hyRequest from './index'
 
export function getTopMV(offset,limit=10){
  return hyRequest.get('/top/mv',{
    offset,
    limit
  })  
}

export function getMVDetail(id){
  return hyRequest.get('/mv/detail',{
    id
  })  
}

export function getMVUrl(id){
  return hyRequest.get('/mv/url',{
    id
  })  
}

export function getRelatedAllviedo(id){
  return hyRequest.get('/related/allvideo',{
    id
  })  
}
