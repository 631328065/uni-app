<!-- 推荐组件 -->
<template>
	<view>
		<template v-for="item in recomList">
			<view class="recom" @click="toDetails" :data-productId="item.productId" :data-sellerUserName="item.sellerUserName">
				<view class="recom_imge">
					<image :src="item.proPicUrl"></image>
				</view>
				<view class="recom_content">
					<h2>{{ item.proTitle }}</h2>
					<view class="icon">
						<image src="../../static/images/n-4.png"></image>
						<text>{{ item.country }}</text>
					</view>
					<view class="m_time">
						<text>{{ item.routingDat }}天{{ item.routingNigth }}晚</text>
						<text>{{ item.amount }}元起</text>
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import http from "../../utils/http.js";
	export default {
		data() {
			return {
				recomList: []
			}
		},
		methods: {
			//跳转详情页
			// url: `../../pages/details/details?detailsproductid=${e.currentTarget.dataset.productid}&sellerUserName=${e.currentTarget.dataset.sellerusername}`
			toDetails: (e) => {
				uni.navigateTo({
					url: `../../pages/details/details?detailsproductid=${e.currentTarget.dataset.productid}&sellerUserName=${e.currentTarget.dataset.sellerusername}`
				});
			},
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		mounted: function() {
			//获取recom数据
			http("product/product/getProductRecommendUser", "POST", {
				desc: false,
				orderBy: "top",
				pageNow: 1,
				pageSize: 20,
				seller_user_id: "4bc4027c645343f09a964b5c2e9f875b",
			}).then((res) => {
					this.recomList = res;
				},
				(res) => {
					console.log("失败了");
				});
		}
	};
</script>

<style>
	/*推荐模板*/
	.recom {
		display: flex;
		height: 203.166rpx;
		margin: 10rpx;
		padding: 24rpx 0;
		font-size: 14px;
		border-bottom: 1px dashed #c0c0c0;
	}

	.recom_imge {
		width: 40%;
		height: 100%;
	}

	.recom_imge image {
		width: 100%;
		height: 100%;
	}

	.recom_content {
		width: 60%;
		height: 100%;
		padding-left: 25rpx;
		font-size: 14px;
	}

	.recom_content h2 {
		font-size: 100%;
		font-weight: normal;
	}

	.recom_content .icon {
		margin: 20rpx 0;
		padding: 2rpx 0;
		background: #e9e9e9;
		border-radius: 4px;
		color: #484848;
	}

	.recom_content .icon image {
		width: 24rpx;
		height: 28rpx;
		margin-left: 10rpx;
		margin-top: 6rpx;
	}

	.recom_content .icon text {
		margin-left: 20rpx;
		font-size: 10px;
	}

	.recom_content .m_time {
		color: #858585;
		font-size: 12px;
		display: flex;
	}

	.recom_content .m_time text {
		flex: 1;
	}

	.recom>text {
		font-size: 16px;
	}
</style>
