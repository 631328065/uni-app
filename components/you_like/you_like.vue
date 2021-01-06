<template>
	<view class="like_item_box">
		<template v-for="item in youLike">
			<view class="like_item">
				<view class="item">
					<view class="item_imge">
						<image :src="item.proPicUrl"></image>
						<view class="icon">
							<text>{{item.collectionNum}}</text>
						</view>
					</view>
					<text class="h2">{{item.proTitle}}</text>
					<view class="position">
						<text>{{item.country}}</text>
					</view>
					<view class="price">
						<text style="margin-right: 20rpx;">{{item.routingDat}}天{{item.routingNigth}}晚</text>
						<text>{{item.amount}}元</text>
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import http from '../../utils/http.js';
	export default {
		data() {
			return {
				youLike: []
			}
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		mounted: function() {
			//获取recom数据
			http("product/product/guessYouLike")
				.then((res) => {
					this.youLike = res;
				}, (res) => {
					console.log('失败了');
				});
		}
	}
</script>

<style>
	/* 猜你喜欢模板 */
	.you_like .recom {
		box-sizing: border-box;
		height: 120rpx;
		line-height: 120rpx;
		justify-content: center;
		align-items: center;
		margin-top: 80rpx;
		border-top: 6px solid #f2f2f2;
		border-bottom: 1px solid #b9b9b9;
		color: #858585;
	}

	.recom>text {
		font-size: 16px;
	}

	.like_item_box {
		padding: 0 20rpx;
	}

	.like_item {
		width: 47%;
		display: inline-block;
		margin-right: 20rpx;
	}

	.like_item_box .item {
		box-shadow: 10rpx 10rpx 0 #f2f2f2;
		border: 1px solid #f2f2f2;
		margin: 20rpx 0;
	}

	.item_imge {
		position: relative;
		width: 88%;
		height: 154rpx;
	}

	.item_imge>image {
		max-width: 100%;
		max-height: 100%;
	}

	.item_imge .icon>image {
		max-width: 26rpx;
		max-height: 30rpx;
	}

	.item_imge .icon {
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: 10px;
		color: #fff;
	}

	.item .h2 {
		font-size: 12px;
		padding: 10rpx 0;
	}

	.item .position {
		margin: 6rpx 0 14rpx 10rpx;
		padding: 4rpx;
		background: #e9e9e9;
		border-radius: 4px;
		color: #484848;
	}

	.position image {
		width: 22rpx;
		height: 26rpx;
	}

	.position text {
		font-size: 10px;
		margin-right: 12rpx;
	}

	.price {
		font-size: 10px;
		color: #858585;
		margin: 0 10rpx 10rpx;
	}

	.price image {
		width: 24rpx;
		height: 28rpx;
	}
</style>
