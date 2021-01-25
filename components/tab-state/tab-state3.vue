<template>
	<view>
		<view class="tab-state-scroll">
			<view class="tab-state-item" :class="[tIndex === current ? 'segmented-control-act' : '',0===tIndex?'border-left':'',
			titleList.length - 1 === tIndex ? 'border-right' : '', 1===titleList.length?'border-all':'']"
			v-for="(tName, tIndex) in titleList" :key="tIndex" @click="onClickItem(tIndex)">
				{{tName.title}}
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * name: tab标签选项卡组件
	 * 属性：
	 * titleList Array类型，标题栏集合 数据模型： [{ title: 'title', number: 0 }]
	 * current Number类型，标题栏当前下标
	 * 事件：
	 * bindCurrent Function类型 获取当前的状态栏
	 */
	export default {
		name: "tab-state2",
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
		width: 100%;
		white-space: nowrap;
		text-align: center;
	}

	.tab-state-item {
		width: 80px;
		display: inline-block;
		font-size: 17px;
		position: relative;
		box-sizing: border-box;
		background-color: #FFFFFF;
		color: #000000;
		border: 1px solid #d9d9d9;
	}

	.segmented-control-act {
		color: #FFFFFF;
		background-color: rgb(133, 212, 248);
	}

	.border-left {
		border-radius: 5px 0px 0px 5px;
	}

	.border-right {
		border-radius: 0px 5px 5px 0px;
	}

	.border-all {
		border-radius: 5px 5px 5px 5px;
	}
</style>
