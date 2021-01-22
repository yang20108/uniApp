<template>
	<view>
		<view class="picker-mask" @click="closePicker" catchtouchmove="true" v-show="pickerShow"></view>
		<view class="picker-content" :class="{'pickerShow':pickerShow}">
			<view class="picker-button">
				<text @click="closePicker">取消</text>
				<text @click="confirm">确定</text>
			</view>
			<picker-view class="picker-view" :indicator-style="indicatorStyleTwo" :value="pickerIndex" @change="pickerViewChangeTwo"
			 v-if="mode=='two_linkage'">
				<picker-view-column>
					<view class="picker-item" v-for="(list, index) in pickerList" :key="index">{{list.name}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-item" v-for="(item, key) in pickerList[pickerIndex[0]].items" :key="key">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
		</view>
	</view>
</template>

<script>
	// mode所有类型
	let pickerModeArray = ["one", "two_linkage", "two_nolinkage", "three"];

	export default {
		name: "search-picker",
		props: {
			// piker组件模式，默认单列
			mode: {
				type: String,
				required: true,
				// 校验数据
				validator: (value) => {
					return pickerModeArray.includes(value);
				}
			},
			// picker组件数组
			pickerList: {
				type: Array,
				required: true,
				validator: (value) => {
					if (0 < value.length) {
						return true;
					}
					return false;
				}
			},
			// 默认picker选中项索引
			defaultIndex: {
				type: Array,
				required: true,
				validator: (value) => {
					if (value.length > 0 && value.length <= 3) {
						return true;
					}
					return false;
				}
			}
		},
		data() {
			return {
				pickerIndex: [0, 0], // picker索引值
				pickerShow: false,
				indicatorStyleOne: `height: 100upx;line-height: 100upx;border-top: 1upx solid #1AAD19;
				border-bottom: 1upx solid #1AAD19;position: relative;left: 25%;width: 50%;`,
				indicatorStyleTwo: `height: 100upx;line-height: 100upx;border-top: 1upx solid #1AAD19;
				border-bottom: 1upx solid #1AAD19;position: relative;left: 15%;width: 70%;`,
				indicatorStyleThree: `height: 100upx;line-height: 100upx;border-top: 1upx solid #1AAD19;
				border-bottom: 1upx solid #1AAD19;position: relative;left: 5%;width: 90%;`
			};
		},
		watch: {
			// 匹配选中索引
			mode() {
				this.pickerIndex = this.defaultIndex;
			}
		},
		methods: {
			// 双列选项变化-包含联动和不联动
			pickerViewChangeTwo(e) {
				let changeValue = e.detail.value;
				if (this.mode == "two_linkage") {
					// 超规处理
					if (this.pickerList[changeValue[0]].items.length - 1 < changeValue[1]) {
						changeValue[1] = this.pickerList[changeValue[0]].items.length - 1;
					}
				}
				this.pickerIndex = changeValue;
			},
			// 显示组件
			showPicker() {
				// 隐藏软件盘
				uni.hideKeyboard();
				this.pickerShow = true;
			},
			// 确定事件——返回选中项的数组索引（也可以自定义其他返回数据，不过返回索引通用性更强）
			confirm() {
				this.pickerShow = false;
				// this.$emit("onConfirm", this.pickerIndex);
				var list = this.pickerList[this.pickerIndex[0]];
				if (0 < list.items.length) {
					var text = list.items[this.pickerIndex[1]].name;
					this.$emit("onConfirm", text);
				} else {
					this.pickerIndex[1] = 0;
				}
			},
			// 隐藏组件
			closePicker() {
				this.pickerShow = false;
				this.$emit("closePicker");
			}
		},
		computed: {
			comPickerList() {
				// 过滤掉没有二级联动数据的一级联动数据，防止二级联动下没有数据
				var lists = []
				for (var i = 0; i < this.pickerList.length; i++) {
					var listI = this.pickerList[i];
					if (0 < listI.items.length) {
						lists.push(listI);
					}
				}
				return lists;
			}
		},
	}
</script>

<style>
	.picker-mask {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 50;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.picker-content {
		flex-direction: column;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 600upx;
		background-color: #FFFFFF;
		transform: translateY(100%);
		transition: all 200ms ease;
	}

	.pickerShow {
		transform: translateY(0) !important;
	}

	.picker-content .picker-button {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 80upx;
		line-height: 80upx;
	}

	.picker-button text {
		width: 180upx;
		font-size: 28upx;
		font-weight: 500;
		display: block;
		text-align: center;
	}

	.picker-button text:first-child {
		color: #A1A1A1;
	}

	.picker-button text:last-child {
		color: #1AAD19;
	}

	.picker-content .picker-view {
		width: 100%;
		height: 500upx;
	}

	.picker-content .picker-view-selected-one,
	.picker-content .picker-view-selected-two,
	.picker-content .picker-view-selected-three {
		height: 100upx;
		line-height: 100upx;
		border-top: #1AAD19 1upx solid;
		border-bottom: #1AAD19 1upx solid;
	}

	.picker-content .picker-view-selected-one {
		position: relative;
		left: 25%;
		width: 50%;
	}

	.picker-content .picker-view-selected-two {
		position: relative;
		left: 15%;
		width: 70%;
	}

	.picker-content .picker-view-selected-three {
		position: relative;
		left: 5%;
		width: 90%;
	}

	.picker-view .picker-item {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		font-size: 28upx;
		font-weight: 600;
		display: block;
		text-align: center;
	}
</style>
