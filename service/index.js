const baseUrl='http://123.207.32.32:9001'

class HYRequest{
  request(url,method,params){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:baseUrl+url,
        method:method,
        data:params,
        success:function(res){ 
          resolve(res.data)
        },
        fail:reject
        // fail:function(err){
        //   reject(err)
        // }
      })
    })
  }

  get(url,params){
    return this.request(url,'get',params)
  }

  post(url,params){
    return this.request(url,'post',params)
  }
}

const hyRequest = new HYRequest()

export default hyRequest

