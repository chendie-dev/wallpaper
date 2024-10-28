const BASE_UERL="https://tea.qingnian8.com/api/bizhi"
export function request(config={}){
	const {url,data,method='get'}=config
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_UERL+url,
			header:{
				"access-key":"788320"
			},
			data,
			success: (res) => {
				if(res.data.errCode===0){
					resolve(res)
				}else if(res.data.errCode===400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}else{
					uni.showToast({
						icon:'none',
						title:res.data.errMsg
					})
					reject(res.data)
				}
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}