<template>
	<view class="season">
		<view class="title">
			<text>商家</text>
		</view>

		<!-- 商家 -->
		<view class="content" style="text-align: right;">
			<text>{{sellerUserName}}></text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["sellerUserName"]
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
