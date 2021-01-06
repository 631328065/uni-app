<template>
	<view class="season">
		<view class="title">
			<text>主题</text>
		</view>

		<!-- 主题 -->
		<view class="content" style="margin-left:32rpx;">
			<template v-for="(item,index) in content">
				<template v-if="index == content.length-1">
					<text>{{item.type}}</text>
				</template>
				<template v-else>
					<text>{{item.type}}、</text>
				</template>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["title", "titleImg", "content"]
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
