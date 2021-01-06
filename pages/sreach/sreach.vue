<template>
	<view>
		<view class="search_div_box">
			<view class="search_box">
				<input class="input_style" placeholder="请输入您想去的国家或城市" v-model="sreachInpValue" />
			</view>
			<text>搜索</text>
			<!-- 洲||季节 -->
			<view class="content">
				<view class="search_tab">
					<view class="clearfix">
						<view :class="[tab_active]" @click="hangdelZhou">
							<text>洲</text>
						</view>
						<view :class="[click_season]" @click="hangdelJijie">
							<text>季节</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 各大洲 -->
		<template v-if="continents.length > 0">
			<view class="search_title">
				<view class="continent_ul">
					<template v-for="(item,index) in continents">
						<view :class="[c_ul_tab_active[index]]" @click="hangdelContinents" :data-continentsId="index" :data-continents="item">
							<text>{{item}}</text>
						</view>
					</template>
				</view>
			</view>
			<!-- 各国家 -->
			<view class="search_cont">
				<view class="clearfix continent_content">
					<block v-for="item in continentsCountry">
						<view class="continent_content_list">
							<text>{{item.country}}</text>
						</view>
					</block>
				</view>
			</view>
		</template>
		<template v-else>
			<!-- 各季节 -->
			<view class="search_title">
				<view class="continent_ul">
					<block v-for="(item,index) in season">
						<view :class="[s_ul_tab_active[index]]" @click="hangdelSeason" :data-seasonId="index" :data-season="item">
							<text>{{item}}</text>
						</view>
					</block>
				</view>
			</view>
			<!-- 季节 -->
			<view class="custom_product_list">
				<view class="season_spring">
					<template v-for="item in matchedProducts">
						<view class="season_list">
							<view class="product_img">
								<image :src="item.pro_pic_url"></image>
							</view>
							<view class="product_img">
								<text>{{item.pro_title}}</text>
							</view>
							<view class="pro_news_list">
								<text class="icon" style="background-position: -112rpx -264rpx;"></text>
								<text class="span">{{item.country}}</text>
								<em>|</em>
								<text class="icon" style="background-position: -112rpx -290rpx;"></text>
								<text class="span">{{item.routing_data}}天{{item.routing_nigth}}晚</text>
								<em>|</em>
								<text class="icon" style="font-size: 12px;background-position: -108rpx -12rpx;"></text>
								<em>{{item.collection_num}}</em>
							</view>
						</view>
					</template>
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
				sreachInpValue: "",
				tab_active: "tab_active",
				click_season: "click_season",
				continents: ["欧洲", "亚洲", "大洋洲", "非洲", "北美洲", "南美洲"],
				c_ul_tab_active: ["ul_tab_active", "", "", "", "", ""],
				s_ul_tab_active: ["ul_tab_active", "", "", "", "", ""],
				continentsCountry: [],
				season: ["春意阑珊", "盛夏果实", "秋来秋去", "冬之恋曲"],
				matchedProducts: []
			}
		},
		methods: {
			//洲
			hangdelZhou() {
				this.tab_active = "tab_active";
				this.click_season = "click_season";
				this.continents = ["欧洲", "亚洲", "大洋洲", "非洲", "北美洲", "南美洲"];
			},
			//季节
			hangdelJijie() {
				this.tab_active = "click_season";
				this.click_season = "tab_active";
				this.continents = [];
			},
			//各大洲
			hangdelContinents(e) {
				let continentsid = e.currentTarget.dataset.continentsid;
				let continents = e.currentTarget.dataset.continents;
				let new_c_ul_tab_active = ["", "", "", "", "", ""];
				new_c_ul_tab_active[continentsid] = "ul_tab_active";
				this.c_ul_tab_active = new_c_ul_tab_active;
				http(`requirement/destination/countries/${continents}`)
					.then(res => {
						this.continentsCountry = res;
					});
			},
			//各季节
			hangdelSeason(e) {
				let seasonid = e.currentTarget.dataset.seasonid;
				let season = e.currentTarget.dataset.season;
				let new_s_ul_tab_active = ["", "", "", "", "", ""];
				new_s_ul_tab_active[seasonid] = "ul_tab_active";
				this.s_ul_tab_active = new_s_ul_tab_active

				http("requirement/request/getMatchedProducts", "post", {
						product_type: 1,
						request_season: [season]
					})
					.then(res => {
						this.matchedProducts = res.matchedProducts;
					});
			}
		},
		mounted(options) {
			//首次获取欧洲国家数据
			http("requirement/destination/countries/欧洲")
				.then(res => {
					this.continentsCountry = res;
				});

			//首次获取季节数据
			http("requirement/request/getMatchedProducts", "post", {
					product_type: 1,
					request_season: ["春意阑珊"]
				})
				.then(res => {
					this.matchedProducts = res.matchedProducts;
				});
		}
	}
</script>

<style>
	body {
		background-color: #f2f2f2;
	}

	.search_div_box {
		height: 112rpx;
		border-top: 1px solid #dddcdc;
		border-bottom: 1px solid #dddcdc;
		width: 100%;
		text-align: center;
		line-height: 112rpx;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		background-color: #f2f2f2;
	}

	.search_box {
		width: 76%;
		height: 70rpx;
		line-height: 80rpx;
		background: #fff;
		border-radius: 20px;
		text-align: left;
		padding: 0 2%;
		display: inline-block;
		vertical-align: middle;
		position: relative;
	}

	.search_btn {
		display: inline-block;
		margin-left: 10px;
	}

	.input_style {
		display: inline-block;
		width: 70%;
		border: none;
		background-color: transparent;
		padding-left: 18rpx;
		font-family: "微软雅黑";
	}

	.content {
		position: relative;
		padding-top: 112rpx;
	}

	.search_tab {
		width: 100%;
		position: fixed;
		top: 116rpx;
		left: 0;
		text-align: center;
		background: #f2f2f2;
		z-index: 99;
	}

	.tab_active {
		width: 30%;
		display: inline-block;
		height: 80rpx;
		line-height: 80rpx;
		color: #445356;
		text-align: center;
	}

	.tab_active text {
		border-bottom: 3px solid #445356;
		padding: 0 10rpx;
	}

	.click_season {
		width: 30%;
		display: inline-block;
		height: 80rpx;
		line-height: 80rpx;
		color: #445356;
		text-align: center;
	}

	.search_title {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-bottom: 24rpx;
		position: fixed;
		top: 228rpx;
		left: 0;
		z-index: 99;
	}

	.continent_ul {
		background: #cbcaca;
		font-size: 14px;
		color: #fff;

	}

	.continent_ul view {
		display: inline-block;
		padding: 4rpx 14rpx;
	}

	.ul_tab_active text {
		background: #878e90;
		border-radius: 4px;
		padding: 6rpx 14rpx;
	}

	.search_cont {
		text-align: center;
		padding: 0 24rpx;
		margin-top: 300rpx;
	}

	.continent_content_list {
		display: inline-block;
		padding: 10rpx 28rpx;
		border: 1px solid #cdcdcd;
		border-radius: 20px;
		margin: 28rpx 10rpx;
		color: #9b9b9b;
	}

	.season_spring {
		display: inline-block;
		text-align: center;
		padding: 0 24rpx 24rpx;
		margin: 340rpx 0 24rpx;
		cursor: pointer;
	}

	.product_img {
		width: 702rpx;
	}

	.product_img image {
		display: block;
		max-width: 100%;
		margin: 0 auto;
	}

	.product_img {
		width: 702rpx;
	}

	.product_img text {
		color: #919292;
		line-height: 66rpx;
	}

	.pro_news_list .span {
		padding-right: 6px;
	}

	.pro_news_list .icon {
		display: inline-block;
		width: 26rpx;
		height: 26rpx;
		background: url(http://www.51houniao.com/wx/customer/classic/images/small_icon_28.png) no-repeat;
		background-size: 196rpx auto;
		vertical-align: middle;
		margin-left: 2px;
	}

	.season_list {
		margin-bottom: 20px;
	}
</style>
