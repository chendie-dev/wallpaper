<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper :circular="true" :indicator-dots="true" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in 3">
					<image :src="`../../common/images/banner${item}.jpg`" mode="aspectFill" ></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	@import "../../common/styles/common-style.scss";
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
	}
</style>
