import { request } from "./request.js";

function apiGetBanner(){
	return request({url:"/homeBanner"})
}

function apiGetDayRandom(){
	return request({url:"/randomWall"})
}

	
function apiGetNotice(data={}){
	return request({url:"/wallNewsList",data})
}

function apiGetClassify(data={}){
	return request({url:'/classify',data})
}

function apiGetClass(data={}){
	return request({url:'/wallList',data})
}
function apiSetupScore(data={}){
	return request({url:'/setupScore',data})
}

export {
	apiGetBanner,
	apiGetDayRandom,
	apiGetNotice,
	apiGetClassify,
	apiGetClass,
	apiSetupScore
}