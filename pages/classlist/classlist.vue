<template>
	<view class="classlist">
		<view class="content">
			<navigator :url="`/pages/preview/preview?id=${item._id}`" class="item" v-for="item in classList" :key="item._id">
				<image  :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="loadingLayout">
			<uni-load-more :status="status"></uni-load-more>
		</view>
	</view>
</template>

<script setup>
import {onLoad,onReachBottom} from'@dcloudio/uni-app'
import { ref } from 'vue';
import { apiGetClass } from '../../api/api';

const classList=ref([])
const noData=ref(false)
const status=ref('more')
const paramQuery={
	pageSize:12,
	pageNum:1
}
onLoad((e)=>{
	const {id,name}=e;
	paramQuery.classid=id
	getClass()
	uni.setNavigationBarTitle({
		title:name
	})
})

onReachBottom(()=>{
	if(noData.value)return
	paramQuery.pageNum++
	getClass()
})

const getClass=async()=>{
	status.value='loading'
	const res=await apiGetClass(paramQuery)
	if(res.data.data.length<paramQuery.pageSize){
		noData.value=true
		status.value='noMore'
	}else status.value='more'
	classList.value=[...classList.value,...res.data.data]
	uni.setStorageSync("classList",classList.value)
}

</script>
 
<style lang="scss" scoped>
.classlist{
	.content{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap:5rpx;
		padding:5rpx;
		.item{
			height: 440rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
}
</style>