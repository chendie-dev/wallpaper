<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper :circular="true" :indicator-dots="true" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill" ></image>
				</swiper-item>
			</swiper>
		</view> 
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical="true" :autoplay="true" :interval="1500" :duration="300">
					<swiper-item v-for="item in noticeList" :key="item._id">
						<navigator url="/pages/notice/detail">
							{{item.title}}
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18 "></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x="true">
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview">
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator>More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item>
				<theme-item :isMore="true" ></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { apiGetBanner, apiGetClassify, apiGetDayRandom, apiGetNotice } from '@/api/api';
	const bannerList=ref([])
	const randomList=ref([])
	const noticeList=ref([])
	const classifyList=ref([])
	const getBanner=async()=>{
		const res=await apiGetBanner()
		bannerList.value=res.data.data
	}

	const getDayRandom=async()=>{
		const res=await apiGetDayRandom()
			randomList.value=res.data.data
	}
	const getNotice=async()=>{
		const res=await apiGetNotice({select:true})
			noticeList.value=res.data.data
	}
	const getClassify=async()=>{
		const res=await apiGetClassify({pageSize:3})
		classifyList.value=res.data.data
	}
	const goPreview=()=>{
		uni.navigateTo({
			url:"/pages/preview/preview"
		})
	}
	getBanner()
	getDayRandom()
	getNotice()
	getClassify()
</script>

<style lang="scss" scoped>
	.homeLayout{
		.banner{
			width: 750rpx;
			padding: 30rpx 0;
			swiper{
				width: 750rpx;
				height: 340rpx;
				&-item{
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
		.notice{
				width: 690rpx;
				height: 80rpx;
				line-height: 80rpx;
				background: #f9f9f9;
				margin: 0 auto;
				border-radius: 80rpx;
				display: flex;
				.left{
					width: 140rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					:deep(){
						.uni-icons{
							color:$brand-theme-color !important;
						}
					}			
					.text{
						color:$brand-theme-color;
						font-weight: 600;
						font-size: 28rpx;
					}
				}
				.center{
					flex:1;
					swiper{
						height: 100%;
						&-item{
							height: 100%;
							font-size: 30rpx;
							color:#666;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}
				}
				.right{
					width: 70rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			
		.select{
				padding-top:50rpx;
				.date{
					color:$brand-theme-color;
					display: flex;
					align-items: center;
					:deep(){
						.uni-icons{
							color:$brand-theme-color !important;
						}
					}	
					.text{
						margin-left:5rpx;
					}
				}
				.content{
					width: 720rpx;
					margin-left: 30rpx;
					margin-top: 30rpx;
					scroll-view{
						white-space: nowrap;
						.box{
							width: 200rpx;
							height: 430rpx;
							display: inline-block;
							margin-right: 15rpx;
							image{
								width: 100%;
								height: 100%;
								border-radius: 10rpx;
							}
						}
						.box:last-child{margin-right: 30rpx;}
					}
				}
			}
			
		.theme{
				padding:50rpx 0;
				.more{
					font-size: 32rpx;
					color:#888;
					
				}
				.content{
					margin-top:30rpx;
					padding:0 30rpx;
					display: grid;
					gap:15rpx;
					grid-template-columns: repeat(3,1fr);
				}
			}
	}
</style>
