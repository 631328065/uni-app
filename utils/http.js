//导入开发域名
const baseUrl = require('./config').dev.baseUrl;

export default function(url, method = 'get', params = {}) {
	let fullUrl = baseUrl + url;
	return new Promise(function(resolve, reject) {
		uni.showLoading({
			title: '加载中',
		});
		uni.request({
			url: fullUrl,
			method: method,
			data: params,
			success: function(res) {
				resolve(res.data);
				uni.hideLoading();
			},
			fail: function(res) {
				reject(res);
				uni.hideLoading();
			}
		})
	});
}
