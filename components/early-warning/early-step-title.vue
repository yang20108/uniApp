<template>
	<view>
		<view class="early-step">
			<view class="step-icon"></view>
			<view class="step-title">{{title}}</view>
			<view v-if="showInfo" class="step-info" @click="onClick">流程详情></view>
		</view>
		<view :style="{padding:padding?'10px 10px 10px 15px':'0px'}" class="step-slot">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	/**
	 * name:预警流程头
	 * 属性：
	 * title String类型，标题
	 * showInfo Boolean类型，是否显示详情
	 * padding Boolean类型，是否显示内边距
	 * 事件：
	 * showInfo Function类型，详情点击事件
	 */
	export default {
		name: "early-step-title",
		props: {
			title: {
				type: String,
				default: ""
			},
			showInfo: {
				type: Boolean,
				default: false
			},
			padding: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			}
		},
		methods: {
			onClick() {
				this.$emit("showStepInfo")
			}
		}
	}
</script>

<style>
	.early-step {
		display: flex;
		align-items: center;
		min-height: 37px;
		padding: 5px 0px;
		background: rgb(212, 227, 241);
	}

	.step-icon {
		width: 4px;
		height: 18px;
		border-radius: 10px;
		background-color: #6786a5;
		font-size: 18px;
		margin-left: -0.3em;
		margin-right: 10px;
		margin-left: 15px;
	}

	.step-title {
		width: 70%;
		overflow: scroll;
		white-space: nowrap;
		font-size: 17px;
	}

	.step-info {
		width: 20%;
		color: rgb(0, 122, 255);
		text-align: center;
		text-decoration: underline;
	}

	.step-slot {
		background-color: #FFFFFF;
	}
</style>
