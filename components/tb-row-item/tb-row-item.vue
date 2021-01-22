<template>
	<view class="tb-row-item">
		<view class="item-title">
			<text class="iconfont iconfont-required icon-bitian" v-if="required"></text>
			<view class="item-label text-overflow">{{ label }}</view>
		</view>
		<view class="item-body">
			<slot></slot>
		</view>
		<view class="item-selection">
			<text class="iconfont iconfont-selection icon-szright" v-if="selection"></text>
		</view>
	</view>
</template>

<script>
	/**
	 * name:表单组件项
	 * 属性：
	 * label string类型，表单项的提示名称
	 * required boolean类型，此项是否必填项
	 * selection boolean类型，此项是否多选项
	 * 事件：
	 */
	export default {
		name: "tb-row-item",
		props: {
			label: {
				type: String,
				default: ""
			},
			required: {
				type: Boolean,
				default: false
			},
			selection: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
	.iconfont-required {
		font-size: 10px;
		color: red;
		margin-top: 5px;
	}

	.iconfont-selection {
		font-size: 15px;
		color: #B2BCCF;
		/* margin-top: 8upx; */
	}

	.tb-row-item {
		padding: 22upx 0upx;
		font-size: 24upx;
		position: relative;
		display: inline-flex;
		display: -webkit-inline-flex;
		width: 100%;
		line-height: 100upx;
		align-items: center;
		justify-content: center;
		/* background-color: #D5D5D5; */
	}

	.item-title {
		display: inline-flex;
		display: -webkit-inline-flex;
		width: 25%;
		justify-content: flex-end;
	}

	.item-label {
		padding-left: 2px;
		font-size: 16px;
	}

	.item-body {
		width: 60%;
		color: grey;
		margin-left: 25px;
		font-size: 16px;
		padding-right: 5px;
	}

	.item-selection {
		width: 8%;
	}
</style>
