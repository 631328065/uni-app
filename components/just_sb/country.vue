<template>
	<view class="season">
		<view class="title">
			<text>国家</text>
		</view>

		<!-- 国家 -->
		<view class="country" style="flex:1;text-align: right;font-size:11px">
			<template v-for="(item,index) in country">
				<template v-if="index == country.length-1">
					<text>{{item.country}}</text>
				</template>
				<template v-else>
					<text>{{item.country}},</text>
				</template>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["country"]
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
