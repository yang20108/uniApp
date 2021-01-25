<template>
	<view>
		<view>由setInterval实现的动态时间:{{nowTime}}</view>
		<button style="margin-bottom: 10upx;" @click="btnClick">{{btnTime ? '停止时间': '开始时间'}}</button>
		<view>this.obj.a => {{obj.a}} </view>
		<view>this.obj.b => {{obj.b}}</view>
		<button style="width: 90%;" type="primary" plain="true" @click="doSet">this.$set</button>
		<button style="width: 90%;" type="primary" plain="true" @click="doDel">this.$delete</button>
		<view>this.obj的变化：{{tips}}</view>
		<button style="width: 90%;" type="primary" plain="true" @click="checkParam">检测属性</button>
		<view>this.obj的b属性是否存在：{{checkB}}</view>
		<view class="obj-text">{{objString}}</view>

		<view class="uni-list" style="margin-top: 5px;">
			<view class="uni-list-cell">
				<view class="uni-list-navigate">
					<scroll-view class="scroll-view-body" scroll-x>
						<view class="scroll-view-item" hover-class="uni-list-cell-hover">
							<view class="scroll-view-item scroll-item-head">
								<view class="scroll-item-title">沿江高速保护</view>
								<view class="scroll-item-content">S03标</view>
							</view>
							<view class="scroll-view-item scroll-item-date">2019-03-20</view>
						</view>
						<view class="scroll-view-item scroll-item-btn uni-bg-blue">提交</view>
						<view class="scroll-view-item scroll-item-btn uni-bg-red">删除</view>
					</scroll-view>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-navigate">
					<scroll-view class="scroll-view-body" scroll-x>
						<view class="scroll-view-item" hover-class="uni-list-cell-hover">
							<view class="scroll-view-item scroll-item-head">沿江高速保护</view>
							<view class="scroll-view-item scroll-item-date">2019-03-20</view>
						</view>
						<view class="scroll-view-item scroll-item-btn uni-bg-blue">提交</view>
						<view class="scroll-view-item scroll-item-btn uni-bg-red">删除</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnTime: false,
				nowTime: Date.now(),
				timer: null,
				hello: 'HelloWorld',
				lists: [{
					value: '27',
					date: '2019-03-27'
				}, {
					value: '24',
					date: '2019-03-24'
				}, {
					value: '28',
					date: '2019-03-28'
				}, {
					value: '25',
					date: '2019-03-25'
				}],
				tips: '',
				obj: {
					a: 'fdasg'
				},
				checkB: false
			}
		},
		methods: {
			checkParam() {
				this.checkB = typeof this.obj.b != 'undefined'
			},
			btnClick: function() {
				if (this.btnTime) {
					this.stopTime();
				} else {
					this.startTimer();
				}
			},
			stopTime: function() {
				this.btnTime = false;
				clearInterval(this.timer);
			},
			startTimer: function() {
				this.btnTime = true;
				const _this = this;
				this.timer = setInterval(function() {
					var now = new Date();
					var month = now.getMonth() + 1
					if (10 > month) {
						month = "0" + month;
					}
					var day = now.getDate();
					if (10 > day) {
						day = "0" + day;
					}
					var hour = now.getHours();
					if (10 > hour) {
						hour = "0" + hour;
					}
					var minute = now.getMinutes();
					if (10 > minute) {
						minute = "0" + minute;
					}
					var second = now.getSeconds();
					if (10 > second) {
						second = "0" + second;
					}
					_this.nowTime = now.getFullYear() + "-" + month + "-" + day + ' ' + hour + ':' + minute + ':' + second;
				}, 1000);
			},
			doSet: function() {
				this.$set(this.obj, 'b', 'bbbb');
				this.tips = "新增属性'b'，并且赋值";
			},
			doDel: function() {
				this.$delete(this.obj, 'b');
				this.tips = "删除属性";
			}
		},
		computed: {
			objString: function() {
				return JSON.stringify(this.obj);
			}
		},
		components: {

		},
		onShow() {
			this.startTimer();
		},
		onLoad() {

		}
	}
</script>

<style>
	.uni-list-cell-navigate-date {
		width: 150upx;
		align-items: center;
	}

	.obj-text {
		/* width: 100%; */
		height: 300upx;
		border: 2upx solid #333333;
		background-color: #BBBBBB;
	}

	.uni-list-navigate {
		font-size: 30upx;
		padding: 0upx 30upx;
		line-height: 48upx;
		position: relative;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}

	.scroll-view-body {
		width: 100%;
		white-space: nowrap;
	}

	.scroll-view-item {
		width: 100%;
		display: inline-block;
		height: 90upx;
		line-height: 90upx;
		font-size: 33upx;
	}

	.scroll-item-head {
		vertical-align: bottom;
		width: 75%;
		padding-left: 5upx;
	}

	.scroll-item-title {
		height: 40upx;
		font-size: 35upx;
	}

	.scroll-item-content {
		font-size: 27upx;
		color: #919191;
	}

	.scroll-item-date {
		width: 25%;
		padding-right: 20upx;
	}

	.scroll-item-btn {
		width: 100upx;
		text-align: center;
	}
</style>
