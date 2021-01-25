<template>
	<view style="padding: 0px;" class="uni-list-cell-navigate">
		<image class="early-user-icon" :src="imgSrc"></image>
		<view class="early-user-body">
			<view class="early-user-title">
				{{user}}
				<span v-if="unit" style="margin-left: 5px;">({{unit}})</span>
			</view>
			<view class="early-user-content">{{unitname}}</view>
			<view style="margin-top: 5px;" class="early-user-content">{{date}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * name:预警用户信息项
	 * 属性：
	 * user string类型，用户明
	 * unit string类型，岗位
	 * unitname string类型，单位名称
	 * date string类型，日期
	 * imgSrc String类型 图片路径
	 * 事件：
	 */
	export default {
		name: "early-user",
		props: {
			user: {
				type: String,
				default: ""
			},
			unit: {
				type: String,
				default: ""
			},
			unitname: {
				type: String,
				default: ""
			},
			date: {
				type: String,
				default: ""
			},
			imgSrc: {
				type: String,
				default: ""
			}
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style>
	.early-user-icon {
		width: 50px;
		height: 50px;
	}

	.early-user-body {
		width: 90%;
		margin-left: 10px;
	}

	.early-user-title {
		font-size: 16px;
		line-height: 22px;
		margin-bottom: 5px;
		word-wrap: break-word;
		word-break: break-word;
	}

	.early-user-content {
		line-height: 18px;
		color: rgb(166, 166, 170);
		word-wrap: break-word;
		word-break: break-word;
	}
</style>
