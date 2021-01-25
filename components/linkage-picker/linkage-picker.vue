<template>
	<view>
		<view class="picker-mask" @click="closePicker" catchtouchmove="true" v-show="pickerShow"></view>
		<view class="picker-content" :class="{'pickerShow':pickerShow}">
			<view class="picker-button">
				<text @click="closePicker">取消</text>
				<text @click="confirm">确定</text>
			</view>
			<!-- 单列选择 -->
			<picker-view class="picker-view" :indicator-style="indicatorStyleOne" :value="pickerIndex" @change="pickerViewChangeOne"
			 v-if="1===mode">
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList" :key="index">{{item.label}}</view>
				</picker-view-column>
			</picker-view>
			<!-- 双列选择-联动 -->
			<picker-view class="picker-view" :indicator-style="indicatorStyleTwo" :value="pickerIndex" @change="pickerViewChangeTwo"
			 v-if="2===mode">
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList" :key="index">{{item.label}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList[pickerIndex[0]].children" :key="index">{{item.label}}</view>
				</picker-view-column>
			</picker-view>
			<!-- 三列选择-联动 -->
			<picker-view class="picker-view" :indicator-style="indicatorStyleThree" :value="pickerIndex" @change="pickerViewChangeThree" v-if="3===mode">
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList" :key="index">{{item.label}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList[pickerIndex[0]].children" :key="index">{{item.label}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList[pickerIndex[0]].children[pickerIndex[1]].children" :key="index">{{item.label}}</view>
				</picker-view-column>
			</picker-view>
			<!-- 四列选择-联动 -->
			<picker-view class="picker-view" :indicator-style="indicatorStyleThree" :value="pickerIndex" @change="pickerViewChangeFour"
			 v-if="4===mode">
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList" :key="index">{{item.label}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList[pickerIndex[0]].children" :key="index">{{item.label}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList[pickerIndex[0]].children[pickerIndex[1]].children" :key="index">{{item.label}}</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-item" v-for="(item, index) in pickerList[pickerIndex[0]].children[pickerIndex[1]].children[pickerIndex[2]].children" :key="index">{{item.label}}</view>
				</picker-view-column>
			</picker-view>
		</view>
	</view>
</template>

<script>
	// mode所有类型，目前支持4列
	let pickerModeArray = [1, 2, 3, 4];

	export default {
		name: "linkage-picker",
		props: {
			// piker组件模式 表示数据层级数，默认单列
			mode: {
				type: Number,
				required: true,
				// 校验数据
				validator: (value) => {
					return pickerModeArray.includes(value);
				}
			},
			// picker组件数组（数据模型参考common/modelData.js/modelchildren）
			pickerList: {
				type: Array,
				required: true,
			},
			/* 默认picker选中项索引
			defaultIndex: {
				type: Array,
				required: true,
				validator: (value) => {
					if (value.length > 0 && value.length <= 3) {
						return true;
					}
					return false;
				}
			}*/
		},
		data() {
			return {
				pickerIndex: [], // picker索引值
				pickerShow: false,
				indicatorStyleOne: `height: 100upx;line-height: 100upx;border-top: 1upx solid #1AAD19;
				border-bottom: 1upx solid #1AAD19;position: relative;left: 25%;width: 50%;`,
				indicatorStyleTwo: `height: 100upx;line-height: 100upx;border-top: 1upx solid #1AAD19;
				border-bottom: 1upx solid #1AAD19;position: relative;left: 15%;width: 70%;`,
				indicatorStyleThree: `height: 100upx;line-height: 100upx;border-top: 1upx solid #1AAD19;
				border-bottom: 1upx solid #1AAD19;position: relative;left: 5%;width: 90%;`
			};
		},
		methods: {
			// 单列选项变化
			pickerViewChangeOne(e) {
				this.pickerIndex = e.detail.value;
			},
			// 双列选项变化-包含联动和不联动
			pickerViewChangeTwo(e) {
				let changeValue = e.detail.value;
				if (2 === this.mode) {
					// 超规处理
					if (this.pickerList[changeValue[0]].children.length - 1 < changeValue[1]) {
						changeValue[1] = this.pickerList[changeValue[0]].children.length - 1;
					}
				}
				this.pickerIndex = changeValue;
			},
			// 三列联动选项变化
			pickerViewChangeThree(e) {
				let changeValue = e.detail.value;
				// 超规处理
				if (this.pickerList[changeValue[0]].children.length - 1 < changeValue[1]) {
					changeValue[1] = this.pickerList[changeValue[0]].children.length - 1;
				}
				if (this.pickerList[changeValue[0]].children[changeValue[1]].children.length - 1 < changeValue[2]) {
					changeValue[2] = this.pickerList[changeValue[0]].children[changeValue[1]].children.length - 1;
				}
				this.pickerIndex = changeValue;
			},
			// 四列联动选项变化
			pickerViewChangeFour(e) {
				let changeValue = e.detail.value;
				// 超规处理
				if (this.pickerList[changeValue[0]].children.length - 1 < changeValue[1]) {
					changeValue[1] = this.pickerList[changeValue[0]].children.length - 1;
				}
				if (this.pickerList[changeValue[0]].children[changeValue[1]].children.length - 1 < changeValue[2]) {
					changeValue[2] = this.pickerList[changeValue[0]].children[changeValue[1]].children.length - 1;
				}
				if (this.pickerList[changeValue[0]].children[changeValue[1]].children[changeValue[2]].children.length - 1 < changeValue[3]) {
					changeValue[3] = this.pickerList[changeValue[0]].children[changeValue[1]].children[changeValue[2]].children.length - 1;
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
				this.$emit("onConfirm", this.pickerIndex);
			},
			// 隐藏组件
			closePicker() {
				this.pickerShow = false;
			}
		},
		watch: {
			mode: {
				handler() {
					for (var i = 0; i < this.mode; i++) {
						this.pickerIndex.push(0);
					}
				},
				immediate: true

			}
		}
	}
</script>

<style>
	page {
		background-color: #f5f5f5;
		min-height: 100%;
	}

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
	.picker-content .picker-view-selected-three,
	.picker-content .picker-view-selected-four {
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

	.picker-content .picker-view-selected-four {
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
