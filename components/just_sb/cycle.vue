<template>
	<view class="season">
		<view class="title">
			<text>周期</text>
		</view>

		<!-- 周期 -->
		<view class="content" style="text-align: right;">
			<text>{{routing_dat}}天{{routing_nigth}}晚</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["routing_dat", "routing_nigth"]
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
