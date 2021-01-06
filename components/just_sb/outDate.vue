<template>
	<view class="season">
		<view class="title">
			<template v-if="out_title == '日期'">
				<text>日期</text>
			</template>
			<template v-else>
				<text>出发</text>
			</template>
		</view>

		<!-- 日期或者出发 -->
		<view class="content" style="text-align: right;">
			<text>{{text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["out_title", "text"]
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
