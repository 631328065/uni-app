<template>
	<view>
		<view class="search_div_box">
			<view class="search_box">
				<i class="iconfont icon-sousuo search_btn"></i>
				<input type="text" class="input_style" placeholder="请输入您想去的国家或城市" />
			</view>
		</view>
		<view class="map_container">
			<view class="map_list">
				<template v-for="(item,index) in country_bg">
					<view class="map_div" :style="{width: item.width, height: item.height, background: item.pic, zIndex: item.zIndex, left: item.left, top: item.top, color:item.color}"
					 @click="hangdelCountry" :data-country="item.country" :data-suf="item.suf">
						<view class="country_bg">
							<text :style="{left: item.textLeft, top: item.textTop, zIndex: item.zIndex}">{{item.country}}</text>
						</view>
					</view>
				</template>
			</view>
		</view>

		<view class="hot_destination">
			<view class="hot_des_title">
				<text>{{hot_country}}热门目的地</text>
			</view>
			<view class="hot_des_list">
				<template v-for="item in hot_country_list">
					<view class="list">
						<image :src="item.country_pic_url"></image>
						<view class="introduce">
							{{item.country}}
							<text>{{item.country_en}}</text>
						</view>
					</view>
				</template>
			</view>
		</view>
		<view class="other_destination">
			<view class="other_des_title">
				<text>{{hot_country}}其它目的地</text>
				<view class="des_hint">
					<text>拼音首字母排序</text>
				</view>
			</view>
			<view class="other_des_list">
				<block v-for="item in other_country_list">
					<view class="content">
						<text>{{item.country}}</text>
						<text>{{item.country_en}}</text>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import http from "../../utils/http.js";
	export default {
		data() {
			return {
				country_bg: [{
						width: "376rpx",
						height: "206rpx",
						pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/ouzhou.png) 0 0/376rpx no-repeat",
						positon_y: "-214rpx",
						size: "376rpx",
						zIndex: 6,
						left: 0,
						top: 0,
						country: "欧洲",
						pinyin: "ouzhou",
						textLeft: "146rpx",
						textTop: "84rpx",
						suf: "Europe"
					},
					{
						width: "152rpx",
						height: "164rpx",
						pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/feizhou.png) 0 -168rpx/152rpx no-repeat",
						positon_y: "-168rpx",
						size: "152rpx",
						zIndex: 7,
						left: "-18rpx",
						top: "168rpx",
						country: "非洲",
						pinyin: "feizhou",
						color: "#445356",
						textLeft: "46rpx",
						textTop: "36rpx",
						suf: "Africa"
					},
					{
						width: "188rpx",
						height: "160rpx",
						pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/yazhou.png) 0 -160rpx/188rpx no-repeat",
						positon_y: "-160rpx",
						size: "188rpx",
						zIndex: 8,
						left: "122rpx",
						top: "122rpx",
						country: "亚洲",
						pinyin: "yazhou",
						color: "#445356",
						textLeft: "46rpx",
						textTop: "42rpx",
						suf: "Asia"
					},
					{
						width: "304rpx",
						height: "248rpx",
						pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/beimei.png) 0 -244rpx/304rpx no-repeat",
						positon_y: "-244rpx",
						size: "304rpx",
						zIndex: 9,
						left: "376rpx",
						top: "-24rpx",
						country: "北美洲",
						pinyin: "beimei",
						color: "#445356",
						textLeft: "88rpx",
						textTop: "118rpx",
						suf: "NorthAmerica"
					},
					{
						width: "164rpx",
						height: "230rpx",
						pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/nanmei.png) 0 -226rpx/164rpx no-repeat",
						positon_y: "-226rpx",
						size: "164rpx",
						zIndex: 10,
						left: "482rpx",
						top: "190rpx",
						country: "南美洲",
						pinyin: "nanmei",
						color: "#445356",
						textLeft: "88rpx",
						textTop: "76rpx",
						suf: "SouthAmerica"
					},
					{
						width: "112rpx",
						height: "94rpx",
						pic: "url(http://www.51houniao.com/wx/customer/classic/lib/images/dayangzhou.png) 0 -104rpx/112rpx no-repeat",
						positon_y: "-104rpx",
						size: "112rpx",
						zIndex: 11,
						left: "230rpx",
						top: "286rpx",
						country: "大洋洲",
						pinyin: "dayangzhou",
						color: "#445356",
						textLeft: "0",
						textTop: "18rpx",
						suf: "Oceania"
					}
				],
				hot_country_list: [],
				other_country_list: [],
				hot_country: '欧洲'
			}
		},
		methods: {
			//改变国家数据
			hangdelCountry(e) {
				let country_bg_new = this.country_bg;
				let countryName = e.currentTarget.dataset.country;
				let suf = e.currentTarget.dataset.suf;
				country_bg_new.forEach(item => {
					if (item.country == countryName) {
						item.pic =
							`url(http://www.51houniao.com/wx/customer/classic/lib/images/${item.pinyin}.png) 0px 0px/${item.size} no-repeat`;
						item.color = "#cbcaca";
					} else {
						item.pic =
							`url(http://www.51houniao.com/wx/customer/classic/lib/images/${item.pinyin}.png) 0px ${item.positon_y}/${item.size} no-repeat`;
						item.color = "#445356";
					}
				});
				this.country_bg = country_bg_new;
				this.hot_country = countryName;
				http(`product/desc/CountryList/${countryName}/${suf}`)
					.then(res => {
						this.hot_country_list = res.hot_country_list;
						this.other_country_list = res.other_country_list;
					});
			}
		},
		mounted() {
			http("product/desc/CountryList/欧洲/Europe")
				.then(res => {
					this.hot_country_list = res.hot_country_list;
					this.other_country_list = res.other_country_list;
				});
		}
	}
</script>

<style>
	/* pages/position/position.wxss */
	body {
		background-color: #f2f2f2;
		font-size: 14px;
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

	.map_container {
		border-bottom: 10px solid #bdc2c3;
		margin-top: 160rpx;
	}

	.map_list {
		position: relative;
		height: 422rpx;
		margin: 24rpx 32rpx;
	}

	.map_div {
		position: absolute;
	}

	.country_bg text {
		position: absolute;
	}

	.hot_destination {
		padding: 0 24rpx;
	}

	.hot_des_title {
		padding: 24rpx 0;
	}

	.hot_des_title text {
		font-size: 18px;
		color: #445356;
	}

	.hot_des_list::before {
		display: block;
		content: '';
		clear: both;
	}

	.hot_des_list .list {
		position: relative;
		margin-right: 7px;
		float: left;
		margin-bottom: 28rpx;
		width: 48%;
		height: 202rpx;
		text-decoration: none;
		color: #445356;
	}

	.hot_des_list .list image {
		width: 100%;
		height: 100%;
		max-width: 100%;
	}

	.introduce {
		position: absolute;
		left: 6px;
		bottom: 2px;
		color: #fff;
		font-size: 16px;
	}

	.introduce text {
		font-size: 12px;
		text-transform: capitalize;
		margin-left: 6px;
	}

	.other_destination {
		padding: 0 24rpx;
	}

	.other_des_title {
		padding: 24rpx 0;
	}

	.other_des_title::before {
		display: block;
		content: '';
		clear: both;
	}

	.other_des_title>text {
		float: left;
		font-size: 18px;
		color: #445356;
	}

	.des_hint {
		float: right;
		font-size: 14px;
		margin-top: 4px;
		color: #868686;
	}

	.other_des_list {
		line-height: 36px;
		font-size: 14px;
		margin-top: 20px;
	}

	.other_des_list .content::before {
		display: block;
		content: '';
		clear: both;
	}

	.other_des_list .content {
		text-decoration: none;
		color: #445356;
		color: #868686;
		border-bottom: 1px dashed #a4a5a5;
	}

	.other_des_list .content>text:nth-child(2) {
		margin-left: 6px;
	}
</style>
