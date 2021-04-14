<template>
	<view>
		<!-- 可移动区域容器 -->
		<movable-area class="movarea-area" ref="areaBox" id="areaBox">
			<!-- 这块只是循环出固定内容，监听其元素touch事件获取坐标 -->
			<view class="app-list">
				<view class="app-li text-blue" :class="(hoverClass === 'appLi' + index) ? 'app-select' : ''"
				 :id="'app' + index"
				 v-for="(appItem, index) in Datas" :key="appItem.name"
				 @touchstart="AppLi_touchstart(index,$event)"
				 @touchmove="AppLi_touchmove"
				 @touchend="AppLi_touchend(index)">
					<text :class="['iconfont app-icon', appItem.appIcon]"></text>
					<text class="app-name">{{appItem.appName}}</text>
					<text class="iconfont app-icon icon-clear app-roundclosefill" :class="deleteAppID === appItem.appId && showDelete ? '' : 'app-hide'"
					 @tap="deleteAppItem(index)"></text>
				</view>
				<view class="app-li text-blue" @tap="addAppItem">
					<text class="iconfont app-icon icon-icon-add app-roundadd"></text>
				</view>
			</view>
			<!-- 滑块 -->
			<movable-view v-if="moviewShow" class="movable-view text-blue" :x="moveX" :y="moveY" :animation="false" direction="all"
			 :style="{
				width: moveViewSize + 'px',
				height: 160 + 'rpx'
			 }">
				<text :class="['iconfont app-icon', touchItem.appIcon]"></text>
				<text class="app-name">{{touchItem.appName}}</text>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		name: "app-list",
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
				Datas: this.listData, //缓存props，(不建议直接修改props)
				touchIndex: 0, //被移动index
				touchItem: '', //备份被移动item数据
				deleteAppID: null, //触发删除的itemID
				showDelete: false, //删除按钮状态
				IsDeleteAfter: false, //是否为删除后
				IsCancelDelete: false, //是否为取消后
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
			Datas(val) {
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
				// this.$refs.addAppItem.ModalStatus()
			},
			confirm() {
				let appItem = {
					appId: this.Datas.length + 1,
					appIcon: "icon-geren",
					appName: ""
				};
				this.Datas.push(appItem);
				this.$nextTick(() => {
					this.resetListDom()
				});
			},
			AppLi_touchstart(index, event) {
				this.moveX = this.Datas[index].x;
				this.moveY = this.Datas[index].y;
				this.moviewShow = true;
				this.touchItem = this.Datas[index];
				// 行为判断
				if (this.showDelete) {
					// 取消删除
					if (this.touchItem.appId != this.deleteAppID) {
						this.deleteAppID = null;
						this.showDelete = false;
						this.IsCancelDelete = true;
					}
					// 删除
					// if(this.touchItem.appId==this.deleteAppID){
					// 	this.deleteAppItem(index)
					// }
				}
				// 过时触发（touchEnd中清除此定时器）
				this.Loop = setTimeout(() => {
					// 触感反馈（安卓上是150毫秒，ios无短触控反馈）
					uni.vibrateShort();
					this.showDelete = true;
					this.deleteAppID = this.touchItem.appId;
					// 拖动逻辑
					//显示可移动方块
					this.moviewShow = true
					//保存当前所选择的索引
					this.touchIndex = index;
					// 设置可移动方块的初始位置为当前所选中图片的位置坐标
					this.moveX = this.Datas[index].x;
					this.moveY = this.Datas[index].y;
					var x = event.changedTouches[0].clientX - this.areaBoxInfo.left;
					var y = event.changedTouches[0].clientY - this.areaBoxInfo.top;
					// 保存鼠标在图片内的坐标
					this.inBoxXY = {
						x: x - this.Datas[index].x,
						y: y - this.Datas[index].y,
					}
				},
				500);
			},
			AppLi_touchmove(event) {
				// 每次endTouch清除startTouch删除按钮定时器
				if (this.Loop) {
					clearTimeout(this.Loop);
					this.Loop = null;
				}
				if (this.showDelete) {
					let areaBoxTop = this.areaBoxInfo.top;
					let areaBoxLeft = this.areaBoxInfo.left;
					//重置为以拖拽盒子左上角为坐标原点
					var x = event.changedTouches[0].clientX - areaBoxLeft;
					var y = event.changedTouches[0].clientY - areaBoxTop;
					this.moveX = x - this.inBoxXY.x;
					this.moveY = y - this.inBoxXY.y;

					let setIng = false;
					this.Datas.forEach((item, idx) => {
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
				// console.log("松手");
				if (!this.showDelete && !this.IsDeleteAfter && !this.IsCancelDelete) {
					this.$emit("onclick", this.touchIndex);
				} else {
					// 为下次getInto清除状态
					this.IsDeleteAfter = false;
					this.IsCancelDelete = false;
					// 移动结束隐藏可移动方块
					if (this.hoverClassIndex != null && this.touchIndex != this.hoverClassIndex) {
						this.$set(this.Datas, this.touchIndex, this.Datas[this.hoverClassIndex]);
						this.$set(this.Datas, this.hoverClassIndex, this.touchItem);
						this.showDelete = false;
						this.resetListDom()
					}
					this.touchItem = ""
					this.moviewShow = false
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
				this.Datas.splice(index, 1)
				this.showDelete = false;
				this.checkIndex = null;
				this.IsDeleteAfter = true;
				this.resetListDom()
			},
			getDomInfo(id, callBack) {
				const query = uni.createSelectorQuery().in(this);
				query.select('#' + id).boundingClientRect().exec(function(res) {
					callBack(res[0]);
				});
			},
			resetListDom() {
				let _this = this;
				this.getDomInfo('areaBox', info => {
					// console.log("info: " + JSON.stringify(info));
					if (info) {
						_this.areaBoxInfo = info;
						// 设置区域内所有图片的左上角坐标
						_this.Datas.forEach((item, idx) => {
							_this.getDomInfo('app' + idx, res => {
								item.x = res.left - info.left;
								item.y = res.top - info.top;
							});
						});
						// console.log("_this.Datas: " + JSON.stringify(_this.Datas));
					}
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
	.movarea-area {
		width: 100%;
		height: auto;
	}

	.app-list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.app-li {
		width: 20%;
		height: 160rpx;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 20rpx;
		position: relative;

		.app-icon {
			font-size: 60rpx;
		}

		.app-name {
			font-size: 24rpx;
		}

		.app-hide {
			display: none;
		}

		.app-roundadd {
			font-size: 60rpx;
			color: #CCCCCC;
		}

		.app-roundclosefill {
			position: absolute;
			top: 12rpx;
			right: 12rpx;
			font-size: 36rpx;
			z-index: 2;

			&.app-hide {
				display: none;
			}
		}
	}

	.movable-view {
		opacity: 0.8;
		z-index: 999;
		width: 100rpx;
		height: 160rpx;
		box-sizing: border-box;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 20rpx;

		.app-icon {
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
