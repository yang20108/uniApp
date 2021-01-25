<template>
	<view>
		<scroll-view class="tab-state-scroll" scroll-x="true" :scroll-left="currentAlign">
			<view :style="{margin: 2 >= titleList.length? '15px 15px':'15px 5px'}" class="tab-state-item"
			 v-for="(tName, tIndex) in titleList" :key="tIndex" @click="onClickItem(tIndex)">
				{{tName.title}}
				<view v-if="tName.number" :style="{backgroundColor: numberColor,padding: '0px '+ numberPadding(tName) +'px'}" class="number-style">{{numberLen(tName)}}</view>
				<view class="title-index" :class="tIndex === current ? 'segmented-control-active' : ''"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	/**
	 * name: tab标签选项卡组件
	 * 属性：
	 * titleList Array类型，标题栏集合 数据模型： [{ title: 'title', number: 0 }]
	 * current Number类型，标题栏当前下标
	 * numberColor String类型，脚标背景色
	 * 事件：
	 * bindCurrent Function类型 获取当前的状态栏
	 */
	export default {
		name: "tab-state",
		props: {
			titleList: {
				type: Array,
				default: function() {
					return [];
				}
			},
			current: {
				type: Number,
				default: 0
			},
			numberColor: {
				type: String,
				default: "rgb(55,127,247)"
			}
		},
		data() {
			return {
				currentAlign: 0
			};
		},
		methods: {
			onClickItem(e) {
				// 选中的选项卡居中到屏幕中间
				this.currentAlign = (e - 1) * 60;
				this.$emit("bindCurrent", e)
			},
			numberPadding(titleItem) {
				if (0 <= titleItem.number && 9 >= titleItem.number) {
					return 5;
				} else {
					return 2;
				}
			},
			numberLen(titleItem) {
				if (3 <= titleItem.number.length) {
					return "99";
				} else {
					return titleItem.number;
				}
			}
		},
		computed: {},
		onShow() {},
		onLoad() {}
	};
</script>

<style>
	.tab-state-scroll {
		height: 70px;
		width: 100%;
		background-color: #FFFFFF;
		white-space: nowrap;
		text-align: center;
	}

	.tab-state-item {
		width: 100px;
		display: inline-block;
		font-size: 18px;
		line-height: 60upx;
		position: relative;
		box-sizing: border-box;
		/* word-wrap: break-word;
		word-break: break-all; */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.title-index {
		height: 5px;
		margin-top: 5px;
	}

	.number-style {
		height: 19px;
		line-height: 19px;
		color: #FFFFFF;
		position: absolute;
		top: 0px;
		right: 0px;
		border-radius: 50px;
	}
</style>
