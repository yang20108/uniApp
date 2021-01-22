<template>
	<view class="page-body" :style="'height:'+scrollHeight+'px;'">
		<scroll-view class="nav-left" scroll-y="true">
			<view class="nav-left-item" v-for="(listL, keyL) in leftList" :key="keyL" @click="getRightList(listL, keyL)">
				<view class="nav-left-item-active" :class="keyL == categoryActive ? 'active' : ''">{{ listL.text }}</view>
			</view>
		</scroll-view>
		<scroll-view class="nav-right" scroll-y="true" scroll-with-animation>
			<view class="uni-list">
				<view class="uni-list-cell uni-list-cell-navigate nav-right-item" hover-class="uni-list-cell-hover" v-for="(listR, keyR) in rightList"
				 :key="keyR" @click="getRightItem(listR, keyR)">
					<view class="personnel-info-card">
						<text class="iconfont icon-lianxiren personnel-info-icon"></text>
						<view class="personnel-info">
							<view class="personnel-info-title">{{ listR.title }}</view>
							<view class="personnel-info-content">{{ listR.mark }}</view>
						</view>
						<text class="iconfont icon-szright personnel-info-right"></text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: 500,
				categoryActive: 0,
				leftList: [
					{"text":"GK01标","itemList":[
						{"title":"全伟雄","mark":"项目经理"},
						{"title":"邢长利","mark":"总监"},
						{"title":"赵自强","mark":"技术负责人"},
						{"title":"翁远林","mark":"现场负责人"}
					]},
					{"text":"GK02标","itemList":[
						{"title":"全伟雄","mark":"项目经理"},
						{"title":"邢长利","mark":"总监"}
					]},
					{"text":"S02标","itemList":[]}
				],
				rightList: []
			}
		},
		methods: {
			/**
			 * @param {Object} item 左列表项
			 * @param {Object} index 集合下标
			 */
			getRightList(item, index) {
				this.categoryActive = index;
				this.rightList = item.itemList;
			},
			/**
			 * @param {Object} item 右列表项
			 * @param {Object} index 集合下标
			 */
			getRightItem(item, index) {
				uni.navigateTo({
					url: './personnelInfo'
				});
			}
		},
		onLoad() {
			this.scrollHeight = uni.getSystemInfoSync().windowHeight;
			this.rightList = this.leftList[this.categoryActive].itemList;
		}
	}
</script>

<style>
</style>
