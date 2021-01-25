<template>
	<view>
		<view class="sta-item" v-for="(dI, dK) in datas" :key="dK">
			{{dI.name}}:
			<view v-if="typeof dI.red != 'undefined'" class="sta-item-number">红色
				<text style="margin-left:2px;" class="iconfont icon-baojing text-red">{{dI.red}}</text>
			</view>
			<view v-if="typeof dI.orange != 'undefined'" class="sta-item-number">橙色
				<text style="margin-left:2px;" class="iconfont icon-baojing text-orange">{{dI.orange}}</text>
			</view>
			<view v-if="typeof dI.yello != 'undefined'" class="sta-item-number">黄色
				<text style="margin-left:2px;" class="iconfont icon-baojing text-yellow">{{dI.yello}}</text>
			</view>
			<view v-if="typeof dI.purple != 'undefined'" class="sta-item-number">紫色
				<text style="margin-left:2px;" class="iconfont icon-baojing text-purple">{{dI.purple}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * name: 预警类型统计
	 * 属性：
	 * datas Array类型，数据源 [{"name":"","red":"0","orange":"0","yello":"0"}]
	 */
	export default {
		name: "early-statistics",
		props: {
			datas: {
				type: Array,
				default: function() {
					return [];
				}
			}
		},
		data() {
			return {}
		},
	}
</script>

<style>
	.sta-item {
		font-size: 15px;
		margin: 5px 0px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.sta-item-number {
		font-size: 15px;
		margin: 0px 5px;
	}
</style>
