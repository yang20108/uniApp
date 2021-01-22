<template>
	<view>
		<search :disabled="true" :inputVal="searchValue" placeholder="请选择施工阶段" @onClick="showPicker($event)"></search>
		<search-picker ref="searchPicker" mode="two_linkage" :pickerList="leftList" :defaultIndex="[0, 0]"></search-picker>
		<view class="page-body" :style="'height:'+scrollHeight+'px;'">
			<scroll-view class="nav-left" scroll-y="true">
				<view class="nav-left-item" v-for="(listL, keyL) in leftList" :key="keyL" @click="getRightList(listL, keyL)">
					<view class="nav-left-item-active" :class="keyL == categoryActive ? 'active' : ''">{{ listL.name }}</view>
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y="true" scroll-with-animation>
				<view class="uni-list">
					<view class="uni-list-cell uni-list-cell-navigate nav-right-item" hover-class="uni-list-cell-hover" v-for="(listR, keyR) in rightList"
					 :key="keyR" @click="getRightItem(listR, keyR)">
						<view class="personnel-info-card">
							<view class="personnel-info2">
								<view class="personnel-info-title">{{ listR.name }}</view>
								<view class="personnel-info-content">{{ listR.mark }}</view>
							</view>
							<text v-if="listR.check" style="font-size: 20px;" class="iconfont icon-wancheng personnel-info-right check-color"></text>
							<text v-else-if="listR.sign" style="font-size: 20px;" class="iconfont icon-mark personnel-info-right"></text>
							<text v-else class="iconfont icon-szright personnel-info-right"></text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import search from '../../components/uni-search/uni-search-bar.vue';
	import searchPicker from '../../components/uni-search/uni-search-picker.vue';

	export default {
		data() {
			return {
				searchValue: "",
				scrollHeight: 500,
				categoryActive: 0,
				leftList: [{"name":"救援码头","items":[{"name":"岛壁基础处理","mark":"岛壁基础处理","check":true,"sign":false},{"name":"岛壁结构","mark":"岛壁结构施工","check":true,"sign":false},{"name":"陆域回镇","mark":"陆域回镇","check":false,"sign":true},{"name":"岛内附属工程","mark":"岛内附属工程","check":false,"sign":false}]},{"name":"岛内工程","items":[{"name":"陆域回镇","mark":"陆域回镇","check":false,"sign":true},{"name":"岛内附属工程","mark":"岛内附属工程","check":false,"sign":false}]},{"name":"其他","items":[]}],
				rightList: []
			}
		},
		methods: {
			showPicker: function(e) {
				this.$refs.searchPicker.showPicker();
			},
			/**
			 * @param {Object} item 左列表项
			 * @param {Object} index 集合下标
			 */
			getRightList(item, index) {
				this.categoryActive = index;
				this.rightList = item.items;
			},
			/**
			 * @param {Object} item 右列表项
			 * @param {Object} index 集合下标
			 */
			getRightItem(item, index) {
				uni.navigateTo({
					url: './conditionCreate'
				});
			}
		},
		components: {
			search,
			searchPicker
		},
		onLoad() {
			this.scrollHeight = uni.getSystemInfoSync().windowHeight - 45;
			// #ifdef H5
			this.scrollHeight = this.scrollHeight - 3;
			// #endif
			this.rightList = this.leftList[this.categoryActive].items;
		}
	}
</script>

<style>
	.personnel-info2 {
		width: 70%;
		padding: 2px 0px;
	}

	.check-color {
		color: #0099FF;
	}
</style>
