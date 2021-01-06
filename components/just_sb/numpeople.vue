<template>
	<view class="season">
		<view class="title">
			<text>人数</text>
		</view>

		<!-- 人数 -->
		<view class="content" style="box-sizing: border-box;margin-left: 120rpx;padding: 20rpx 0;line-height: 60rpx;">
			<view class="man_price" style="border-left:1px solid #ccc;padding-left:124rpx;padding-right:20rpx;">
				<text>6 成人 ></text>
			</view>
			<view class="children_price" style="border-left:1px solid #ccc;padding-left:100rpx;padding-right:20rpx;">
				<text>0 儿童 ></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

	}
</script>

<style>
	.season {
		border-bottom: 1px solid #cdcdcd;
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		padding-left: 10rpx;
	}

	.season .title {
		display: flex;
		align-items: center;
		font-size: 14px;
	}

	.title image {
		width: 32rpx;
		height: 34rpx;
		margin-right: 10rpx;
	}

	.season .content {
		flex: 1;
		font-size: 11px;
		max-width: 576rpx;
		display: flex;
	}

	.season .content text {
		flex: 1;
	}
</style>
