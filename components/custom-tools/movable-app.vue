<template>
	<view>
		<movable-area class="movable-area" ref="areaBox" id="areaBox">
			<view class="movable-list">
				<view class="app-li app-size text-blue" :id="'appLi' + index"
				 :class="(hoverClass === 'appLi' + index) ? 'app-select' : ''"
				 v-for="(appItem, index) in DataList" :key="appItem.name"
				 @touchstart="AppLi_touchstart(index, $event)"
				 @touchmove="AppLi_touchmove"
				 @touchend="AppLi_touchend(index)">
					<text :class="['iconfont', appItem.appIcon]"></text>
					<text class="app-name">{{appItem.appName}}</text>
					<text class="iconfont icon-clear"
					 :class="deleteAppID === appItem.appId && deleteShow ? '' : 'app-del'"
					 @tap="deleteAppItem(index)"></text>
				</view>
				<view class="app-li app-size text-blue" @tap="addAppItem">
					<text class="iconfont icon-icon-add"></text>
				</view>
			</view>
			<!-- 滑块 -->
			<movable-view v-if="moviewShow"
			 :x="moveX"
			 :y="moveY"
			 class="app-size movable-view text-blue"
			 :animation="false"
			 direction="all">
				<text :class="['iconfont', touchItem.appIcon]"></text>
				<text class="app-name">{{touchItem.appName}}</text>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		name: "movable-app",
		props: {
			listData: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				DataList: this.listData, //缓存props，(不建议直接修改props)
				touchIndex: 0, //被移动index
				touchItem: '', //备份被移动item数据
				deleteAppID: null, //触发删除的itemID
				deleteShow: false, //删除按钮状态
				moviewShow: false, //滑块状态
				areaBoxInfo: null, //保存滑动区域盒子dom信息
				inBoxXY: {}, //鼠标在item中的坐标
				moveX: 0, //相对滑动盒子的坐标
				moveY: 0, //相对滑动盒子的坐标
				hoverClass: '',
				hoverClassIndex: null, //最终index
			};
		},
		watch: {
			DataList(val) {
				this.$emit("listChange", val)
			}
		},
		computed: {
			moveViewSize() {
				if (this.areaBoxInfo && this.areaBoxInfo.width) {
					return this.areaBoxInfo.width / 5
				} else {
					return 0
				}
			}
		},
		methods: {
			// 添加
			addAppItem() {
				let appItem = {
					appId: this.DataList.length + 1,
					appIcon: "icon-geren",
					appName: "员工",
					appLink: ""
				};
				this.DataList.push(appItem);
				this.$nextTick(() => {
					this.resetListDom()
				});
			},
			AppLi_touchstart(index, event) {
				this.touchIndex = index;
				this.touchItem = this.DataList[index];
				// 设置可移动方块的初始位置为当前所选中图片的位置坐标
				this.moveX = this.touchItem.x;
				this.moveY = this.touchItem.y;
				// 行为判断
				if (this.deleteShow) {
					// 取消删除
					if (this.touchItem.appId != this.deleteAppID) {
						this.deleteAppID = null;
						this.deleteShow = false;
						this.moviewShow = false;
					}
				}
				// 过时触发（长按事件），touchEnd中清除此定时器
				this.Loop = setTimeout(() => {
					// 触感反馈（安卓上是150毫秒，ios无短触控反馈）
					uni.vibrateShort();
					this.deleteShow = true;
					this.deleteAppID = this.touchItem.appId;
					// 拖动逻辑
					//显示可移动方块
					this.moviewShow = true
					var x = event.changedTouches[0].clientX - this.areaBoxInfo.left;
					var y = event.changedTouches[0].clientY - this.areaBoxInfo.top;
					// 保存鼠标在图片内的坐标
					this.inBoxXY = {
						x: x - this.touchItem.x,
						y: y - this.touchItem.y,
					}
				}, 500);
			},
			AppLi_touchmove(event) {
				// 每次endTouch清除startTouch删除按钮定时器
				if (this.Loop) {
					clearTimeout(this.Loop);
					this.Loop = null;
				}
				if (this.deleteShow) {
					//重置为以拖拽盒子左上角为坐标原点
					var x = event.changedTouches[0].clientX - this.areaBoxInfo.left;
					var y = event.changedTouches[0].clientY - this.areaBoxInfo.top;
					this.moveX = x - this.inBoxXY.x;
					this.moveY = y - this.inBoxXY.y;

					let setIng = false;
					this.DataList.forEach((item, idx) => {
						if (x > item.x && x < item.x + 80 && y > item.y && y < item.y + 80) {
							this.hoverClass = 'appLi' + idx
							this.hoverClassIndex = idx;
							setIng = true
						}
					});
					// 都不存在代表脱离
					if (!setIng) {
						this.hoverClass = ""
						this.hoverClassIndex = null;
					}
				}
			},
			AppLi_touchend(index) {
				this.touchIndex = index;
				this.touchItem = this.DataList[index];
				if (!this.deleteShow) {
					this.$emit("clickItem", index);
				} else {
					// 移动结束隐藏可移动方块
					if (this.hoverClassIndex && this.touchIndex != this.hoverClassIndex) {
						this.$set(this.DataList, this.touchIndex, this.DataList[this.hoverClassIndex]);
						this.$set(this.DataList, this.hoverClassIndex, this.touchItem);
						this.resetListDom()
						this.deleteShow = false;
						this.moviewShow = false
					}
					this.touchItem = ""
					this.hoverClass = ""
					this.hoverClassIndex = null;
				}

				// 每次endTouch清除startTouch删除按钮定时器
				if (this.Loop) {
					clearTimeout(this.Loop);
					this.Loop = null;
				}
			},
			deleteAppItem(index) {
				this.DataList.splice(index, 1)
				this.deleteShow = false;
				this.resetListDom()
			},
			resetListDom() {
				let _this = this;
				this.getDomInfo('areaBox', info => {
					_this.areaBoxInfo = info;
					// 设置区域内所有图片的左上角坐标
					_this.DataList.forEach((item, idx) => {
						_this.getDomInfo('appLi' + idx, res => {
							item.x = res.left - info.left;
							item.y = res.top - info.top;
						});
					});
				});
			},
			getDomInfo(id, callBack) {
				const query = uni.createSelectorQuery().in(this);
				query.select('#' + id).boundingClientRect().exec(function(res) {
					callBack(res[0]);
				});
			}
		},
		mounted() {
			// 获取dom信息
			this.resetListDom()
		}
	}
</script>

<style lang="scss">
	.movable-area {
		width: 100%;
		height: auto;
	}

	.movable-list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.app-size {
		width: 100rpx;
		height: 160rpx;
		padding: 20rpx;
		// box-sizing: border-box;
	}

	.app-li {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: relative;
		border: 1px dashed #FFFFFF;

		.iconfont {
			font-size: 60rpx;
		}

		.app-name {
			font-size: 24rpx;
		}

		.icon-icon-add {
			font-size: 60rpx;
			color: #CCCCCC;
		}

		.icon-clear {
			width: 40rpx;
			height: 40rpx;
			line-height: 40rpx;
			position: absolute;
			top: 12rpx;
			right: 12rpx;
			font-size: 36rpx;
			z-index: 2;

			&.app-del {
				display: none;
			}
		}
	}

	.movable-view {
		opacity: 0.8;
		z-index: 999;
		box-sizing: border-box;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.iconfont {
			font-size: 60rpx;
		}

		.app-name {
			font-size: 24rpx;
		}
	}

	.app-select {
		// transform: scale(1.3);
		border-radius: 16rpx;
		border: 1px dashed #C0C0C0;
		color: #C0C0C0;
	}
</style>
