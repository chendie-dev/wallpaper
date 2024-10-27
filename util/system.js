const SYSTEM_INFO=uni.getSystemInfoSync()

const getStatusBarHeight=()=>SYSTEM_INFO.statusBarHeight||15
const getTitleBarHeight=()=>{
	if(uni.getMenuButtonBoundingClientRect()){
		const {top,height}=uni.getMenuButtonBoundingClientRect()
		return height+(top-getStatusBarHeight())*2
	}else return 60
}

const getNavBarHeight=()=>getStatusBarHeight()+getTitleBarHeight()
export{
	getStatusBarHeight,
	getTitleBarHeight,
	getNavBarHeight
}