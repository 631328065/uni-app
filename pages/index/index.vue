<template>
	<view>
		<!-- 静态推荐 -->
		<view class="tuijian">
			<text>推荐</text>
			<text>∨</text>
		</view>
		<!-- 推荐组件 -->
		<tuijian></tuijian>
		<!-- 静态 -->
		<view class="sure">
			<template v-for="item in sure">
				<view class="item">
					<text>{{item}}</text>
				</view>
			</template>
		</view>
		<!-- 猜你喜欢 -->
		<view class="you_like">
			<view class="recom">
				<text>猜你喜欢</text>
			</view>
			<youlike></youlike>
		</view>
	</view>
</template>

<script>
	import tuijian from '../../components/tuijian/tuijian.vue';
	import youlike from '../../components/you_like/you_like.vue';
	console.log("tuijian");
	export default {
		data() {
			return {
				sure: ['不用懂外语', '不用懂攻略', '没有购物坑', '不用折腾自己']
			}
		},
		components: {
			tuijian,
			youlike
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.header_icon {
		width: 750rpx;
		height: 181.8rpx;
		border-bottom: 8rpx solid #f2f2f2;
	}

	.header_icon image {
		width: 100%;
		height: 100%;
	}

	.tuijian {
		width: 750rpx;
		font-size: 18px;
		text-align: center;
		line-height: 99rpx;
		color: #858585;
		border-bottom: 1px solid #b9b9b9;
	}

	.tuijian text:nth-child(2) {
		border: 1px solid #b9b9b9;
		border-radius: 50%;
	}

	.sure {
		height: 80rpx;
		margin-top: 444rpx;
		padding: 40rpx 60rpx;
		box-sizing: border-box;
		font-size: 10px;
		display: flex;
		color: #333333;
	}

	.sure .item {
		flex: 1;
	}

	.sure .icon {
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
	}

	.sure .icon>image {
		width: 100%;
		height: 100%;
	}
</style>
