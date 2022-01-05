import hyRequest from './index'
 
export function getTopMV(offset,limit=50){
  return hyRequest.get('/top/mv',{
    offset,
    limit
  })
}