<template>
	<view>
		<view class="v-body" v-if="isShow">
			<input v-model="serverInfo.serverUrl" type="idcard" placeholder="服务器地址" />
			<input v-model="serverInfo.port" type="number" placeholder="9999" />
			<input v-model="serverInfo.remarks" maxlength="15" placeholder="备注 最多15个字" />
			<view class="tips">{{ tips }}</view>
		</view>
		<view style="margin-top: 50upx;" v-else>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in serverArr" :key="index">
					<view class="uni-list-cell-navigate uni-navigate-right">
						{{item.serverUrl}}
					</view>
				</view>
			</view>
			<button type="primary" class="primary uni-common-mt" @tap="addUrl">添加新地址</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				serverInfo: {
					serverUrl: '',
					port: '',
					remarks: ''
				},
				tips: '',
				serverArr: []
			};
		},
		methods: {
			saveSerInfo: function(info) {
				this.serverArr.push(info);
				console.log(this.serverArr.length + " - " + JSON.stringify(info));
				uni.setStorage({
					key: 'service',
					data: this.serverArr,
					success: () => {
						console.log("服务信息存储成功。");
					},
					fail: () => {
						uni.showToast({
							title: '服务器地址添加失败！',
							icon: 'none'
						})
					}
				})
			},
			checkServer: function() {
				uni.getStorage({
					key: 'service',
					success: (res) => {
						// console.log(JSON.stringify(res));
						this.serverArr = res.data;
						this.isShow = false;
					},
					fail: () => {
						this.isShow = true;
					}
				});

			},
			addUrl: function() {
				this.isShow = true;
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				if (this.serverInfo.serverUrl.trim().length <= 0) {
					this.tips = "请填写服务器地址！";
					return;
				} else {
					this.tips = '';
				}
				const info = {
					serverUrl: this.serverInfo.serverUrl.trim(),
					port: this.serverInfo.port.trim(),
					remarks: this.serverInfo.remarks.trim()
				}
				this.saveSerInfo(info);
				uni.navigateBack({
					delta: 1
				});
			}
		},
		onLoad() {
			this.checkServer();
		}
	}
</script>

<style>
	.v-body {
		padding: 35px;
	}

	input {
		margin-bottom: 20px;
		font-size: 35upx;
		padding: 10px;
		border: 0.5px solid #999999;
	}

	.tips {
		font-size: 30upx;
		color: #ff3300;
	}

	.uni-common-mt {
		margin: 100upx 50upx 0upx 50upx;
	}
</style>
