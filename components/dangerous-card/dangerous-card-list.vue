<template>
	<view class="csp-card">
		<view class="csp-card-flex">
			<view class="csp-card-sign"></view>
			<view class="csp-card-title">
				<view v-if="must" class="csp-must-sing">*</view>
				{{title}}
			</view>
		</view>
		<view class="csp-card-slot">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	/**
	 * name: 工况卡片组件
	 * 属性：
	 * title String类型 标题或提示
	 * must Boolean类型 是否显示红色必填标识
	 * 事件：
	 */
	export default {
		name: "dangerous-card-list",
		props: {
			title: {
				type: String,
				default: ""
			},
			must: {
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
	.csp-card {
		background-color: #FFFFFF;
		padding: 10px;
	}

	.csp-card-flex {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.csp-card-sign {
		width: 3px;
		height: 20px;
		background: #0FAEFF;
	}

	.csp-card-title {
		width: 100%;
		line-height: 20px;
		font-size: 16px;
		margin: 0px 5px;
		word-break: break-all;
		word-wrap: break-word;
	}

	.csp-card-slot {
		line-height: 20px;
		font-size: 16px;
		margin: 0px 10px;
		word-break: break-all;
		word-wrap: break-word;
	}

	.csp-must-sing {
		height: 12px;
		line-height: 20px;
		color: red;
		font-size: 22px;
		float: left;
		margin-top: 3px;
	}
</style>
