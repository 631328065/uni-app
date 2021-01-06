<template>
	<view>
		<view class="banner">
			<image :src="pro_pic_url"></image>
			<view class="label" style="background: url(http://www.51houniao.com/wx/customer/classic/images/down_icon.png) center center no-repeat;">
				<text>定制</text>
			</view>
			<view class="title">
				<text>{{pro_title}}</text>
			</view>
		</view>
		<view class="journey">
			<view class="introduce">
				<!-- 季节 -->
				<season :content="season"></season>
				<!-- 主题 -->
				<ptype :content="pType"></ptype>
			</view>
		</view>
		<view class="journey">
			<view class="introduce">
				<!-- 单价 -->
				<manprice :man_price="man_price" :children_price="children_price"></manprice>
				<!-- 人数 -->
				<numpeople></numpeople>
				<!-- 日期 -->
				<outtime :text="out_text" :out_title="'日期'"></outtime>
				<!-- 出发 -->
				<outtime :text="out_text" :out_title="'出发'"></outtime>
			</view>
		</view>
		<view class="journey">
			<view class="introduce">
				<cycle :routing_dat="routing_dat" :routing_nigth="routing_nigth"></cycle>
				<country :country="country"></country>
			</view>
		</view>
		<view class="journey">
			<view class="introduce">
				<business :sellerUserName="sellerUserName"></business>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../utils/http.js';
	import season from "../../components/just_sb/season.vue";
	import ptype from "../../components/just_sb/ptype.vue";
	import manprice from "../../components/just_sb/man_price.vue";
	import numpeople from "../../components/just_sb/numpeople.vue";
	import outtime from "../../components/just_sb/outDate.vue";
	import cycle from "../../components/just_sb/cycle.vue";
	import country from "../../components/just_sb/country.vue";
	import business from "../../components/just_sb/business.vue";
	export default {
		data() {
			return {
				pro_pic_url: "",
				pro_title: "",
				season: [],
				pType: [],
				man_price: 0,
				children_price: 0,
				out_text: "",
				routing_dat: 0,
				routing_nigth: 0,
				country: [],
				sellerUserName: ""
			}
		},
		components: {
			season,
			ptype,
			manprice,
			numpeople,
			outtime,
			cycle,
			country,
			business
		},
		onLoad: function(options) {
			http(`product/product/getProductDetails/${options.detailsproductid}`)
				.then(res => {
					this.pro_pic_url = res.product_base_info.pro_pic_url;
					this.pro_title = res.product_base_info.pro_title;
					this.season = res.product_base_info.product_season;
					this.pType = res.product_base_info.product_type;
					this.man_price = res.product_base_info.man_price;
					this.children_price = res.product_base_info.children_price;
					this.out_text = res.product_base_info.out_time;
					this.routing_dat = res.product_base_info.routing_dat;
					this.routing_nigth = res.product_base_info.routing_nigth;
					this.country = res.product_base_info.product_country; //国家
					this.sellerUserName = options.sellerUserName; //商家
				});
		}
	}
</script>

<style>
	body {
		background-color: #f2f2f2;
		font-size: 14px;
	}

	@import url("../../static/font/iconfont.css");

	body {
		background-color: #f2f2f2;
		font-size: 14px;
	}

	.header_nav {
		width: 100%;
		height: 98rpx;
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		z-index: 999;
		border-bottom: 1px solid #445356;
	}

	.clearfix .list {
		width: 33.3%;
		float: left;
		text-align: center;
		padding-top: 0.15625rem;
		color: #cbcaca;
	}

	.clearfix .list text {
		padding: 14rpx;
		display: inline-block;
	}

	.active {
		border-bottom: 4px solid #445356;
		color: #364244;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		font-weight: bold;
	}

	.banner {
		position: relative;
	}

	.banner image {
		min-width: 100%;
	}

	.label {
		position: absolute;
		top: 0;
		left: 35rpx;
		width: 51rpx;
		height: 136rpx;
	}

	.label text {
		position: absolute;
		left: 14rpx;
		top: 70rpx;
		font-size: 21rpx;
		width: 28rpx;
		color: #445356;
	}

	.banner .title {
		background: #dddddd;
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		margin-top: -4rpx;
		font-size: 18px;
		color: #434343;
		text-align: center;
		font-weight: bold;
	}

	.journey {
		border-top: 20rpx solid #f2f2f2;
	}

	.introduce {
		padding: 0 10rpx;
		margin: 0 10rpx;
		color: #7e7e7e;
	}

	.what-custom-container {
		padding: 32rpx 16rpx;
	}

	.custom-box {
		background: #cfd2d3;
		color: #fff;
		text-align: center;
		padding: 24rpx 0;
		position: relative;
	}

	.custom-box text:nth-child(2) {
		position: absolute;
		top: 20rpx;
		right: 40rpx;
	}

	.lightSpot_box {
		padding: 0 12rpx;
		font-size: 14px;
		height: 500rpx;
		background: #f2f2f2;
	}

	.lightTitle {
		background: url("http://www.51houniao.com/wx/customer/classic/images/title_bg_03.png") center center no-repeat #f2f2f2;
		background-size: 310rpx;
		width: 100%;
		height: 94rpx;
		line-height: 94rpx;
		text-align: center;
		color: #000;
	}

	.lightTitle::after {
		display: block;
		content: '';
		clear: both;
	}

	.lightSpot {
		height: 75rpx;
		line-height: 75rpx;
		color: #445356;
		width: 100%;
		float: left;
		border-top: 20rpx solid #f2f2f2;
		background: #fff;
		overflow: hidden;
		border-top-left-radius: 54rpx;
		border-bottom-left-radius: 54rpx;
	}

	.lightSpot::after {
		display: block;
		content: '';
		clear: both;
	}

	.lImges {
		width: 75rpx;
		height: 75rpx;
		float: left;
		margin-right: 24rpx;
		border-radius: 54rpx;
		background: #758082;
	}

	.lImges .icon {
		display: inline-block;
		margin-left: 20rpx;
		margin-top: -6rpx;
		background: url(http://www.51houniao.com/wx/customer/classic/images/small_icon_list_x.png) no-repeat 0 -320rpx/160rpx auto;
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.line {
		height: 24rpx;
		background: #d8dadb;
		margin: 24rpx 0;
	}

	.trip_box {
		position: relative;
		margin-bottom: 40rpx;
	}

	.trip_title {
		width: 100%;
		height: 94rpx;
		line-height: 94rpx;
		text-align: center;
		color: #000;
		background: url("http://www.51houniao.com/wx/customer/classic/images/title_bg_03.png") center center no-repeat;
		background-size: 310rpx;
		margin-top: 24rpx;
	}

	.summary {
		padding: 0 24rpx;
		border-bottom: 1px dashed #a8a8a8;
	}

	.date_wrap {
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		padding: 14rpx;
		color: #666666;
	}

	.date_icon {
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		width: 94rpx;
		height: 94rpx;
		border-radius: 50%;
		color: #fafafa;
		background-color: #758082;
	}

	.date_content {
		display: table-cell;
		vertical-align: middle;
		padding-left: 32rpx;
	}

	.city_list {
		text-align: left;
	}

	.stay_land {
		font-size: 12px;
		color: #848484;
		margin-top: 8rpx;
		text-align: left;
	}

	/* 详情行程 */
	.trip_detailed {
		position: relative;
		overflow: hidden;
		margin-bottom: 46rpx;
	}

	.detailed_day {
		padding-top: 24rpx;
	}

	.detailed_title {
		width: 50%;
		margin: 0 auto;
		border-bottom: 2px solid #dddcdc;
		text-align: center;
		position: relative;
	}

	.day_text {
		width: 188rpx;
		display: inline-block;
		line-height: 84rpx;
		font-size: 28px;
		color: #445356;
		text-transform: capitalize;
	}

	.detailed_type {
		text-align: center;
		width: 100%;
		color: #666666;
		margin: 24rpx 0;
	}

	.detailed_type text {
		display: inline-block;
		height: 66rpx;
		line-height: 66rpx;
		margin: 14rpx 4rpx;
	}

	.detailed_type i {
		font-size: 24px;
	}

	.flight_info_box {
		background: #e4e4e4;
		padding: 32rpx 46rpx 0;
		color: #7f7f7f;
	}

	.flight_info {
		padding-top: 0;
		border-top: none;
		padding: 36rpx 0;
	}

	.flight_title_box {
		color: #898989;
		width: 506rpx;
		border-bottom: 1px solid #898989;
		margin: 0 auto;
		position: relative;
		padding-top: 18rpx;
		margin-bottom: 46rpx;
	}

	.flight_title {
		width: 254rpx;
		position: absolute;
		text-align: center;
		background-color: #e4e4e4;
		left: calc(254rpx - 126rpx);
		top: -4rpx;
		padding: 0 14rpx;
	}

	.flight_title text {
		margin: 0 14rpx;
	}

	.flight_cont {
		text-align: center;
		font-size: 12px;
	}

	.flight {
		position: relative;
	}

	.flight_item {
		color: #10b2c1;
		display: inline-block;
		vertical-align: middle;
		padding: 0 24rpx;
		width: 30%;
	}

	.detailed_article {
		padding: 24rpx 14rpx;
		color: #445356;
	}

	.detailed_article .p {
		line-height: 56rpx;
		word-break: break-all;
		text-indent: 48rpx;
	}

	.detailed_arrange {
		padding: 0 36rpx;
		color: #666666;
		margin-bottom: 14rpx;
		border-top: 1px dashed #cecece;
	}

	.arrange_list {
		border-bottom: 1px dashed #cecece;
		padding: 18rpx 0;
	}

	.arrange_icon_box {
		display: table-cell;
	}

	.arrange_icon {
		display: inline-block;
		background: url(http://www.51houniao.com/wx/customer/classic/images/small_icon_28.png) no-repeat;
		background-position: -4rpx -230rpx;
		width: 66rpx;
		height: 66rpx;
		background-size: 300rpx auto;
		vertical-align: middle;
	}

	.arrange_content {
		display: table-cell;
	}

	.arrange_content text {
		display: inline-block;
		padding: 10rpx 14rpx;
		border-radius: 16rpx;
		font-size: 24rpx;
		background-color: #dedede;
		margin: 4rpx 10rpx;
	}

	.arrange_type {
		display: table-cell;
		border-bottom: 1px dashed #cecece;
		padding: 18rpx 0;
		width: 20%;
		vertical-align: middle;
	}

	.icon_type {
		display: table-cell;
		vertical-align: middle;
	}

	.icon_type text {
		display: inline-block;
		background: url(http://www.51houniao.com/wx/customer/classic/images/small_icon_28.png) no-repeat;
		background-position: 0 -454rpx;
		width: 66rpx;
		height: 66rpx;
		background-size: 300rpx auto;
		vertical-align: middle;
	}

	.arrange_type>text {
		padding: 0 8rpx;
		display: table-cell;
		vertical-align: middle;
		font-size: 24rpx;
	}

	.showmore {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
	}

	.showmore text {
		display: block;
		text-align: center;
		color: #696969;
		background-color: #fff;
		padding: 20rpx 0;
	}

	.choose_person_box {
		padding: 0 36rpx;
		margin-top: 40rpx;
	}

	.table {
		border: 0px solid darkgray;
	}

	.tr {
		display: flex;
		width: 100%;
		justify-content: center;
		height: 3rem;
		align-items: center;
	}

	.td {
		width: 40%;
		justify-content: center;
		text-align: center;
		border: 1px solid #ccc;
		height: 100%;
		line-height: 100rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;
	}

	.bg-w {
		background-color: #fff;
	}

	.th {
		width: 40%;
		justify-content: center;
		background: #ccc;
		color: #fff;
		display: flex;
		height: 3rem;
		align-items: center;
		border: 1px solid #ccc;
	}

	.td_icon_edd {
		display: inline-block;
		background: url(http://www.51houniao.com/wx/customer/classic/images/small_icon_list_x.png) no-repeat;
		background-position: -120rpx -42rpx;
		width: 40rpx;
		height: 40rpx;
		background-size: 160rpx auto;
		vertical-align: middle;
	}

	.td_icon_add {
		display: inline-block;
		background: url(http://www.51houniao.com/wx/customer/classic/images/small_icon_list_x.png) no-repeat;
		background-position: -120rpx 0;
		width: 40rpx;
		height: 40rpx;
		background-size: 160rpx auto;
		vertical-align: middle;
	}
</style>
