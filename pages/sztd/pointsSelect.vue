<template>
	<view class="page-body" :style="'height:'+scrollHeight+'px;'">
		<scroll-view class="nav-left" scroll-y="true">
			<view class="nav-left-item" v-for="(listL, keyL) in treeData" :key="keyL" @click="getRightList(listL, keyL)">
				<view class="nav-left-item-active" :class="keyL == categoryActive ? 'active' : ''">{{ listL.Name }}</view>
			</view>
		</scroll-view>
		<scroll-view class="nav-right" scroll-y="true" scroll-with-animation>
			<view class="uni-list">
				<view class="uni-list-cell uni-list-cell-navigate nav-right-item" hover-class="uni-list-cell-hover" 
				v-for="(listR, keyR) in SiteList" :key="keyR" @click="getRightItem(listR, keyR)">
					<view class="personnel-info-card-bet">
						<view class="point-site-item">{{ listR.SiteName }}</view>
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
				treeData: [
					{"Name":"S02标","Sites":[{"SiteName":"伶仃洋大桥"},{"SiteName":"东锚碇"}]},
					{"Name":"S03标","Sites":[{"SiteName":"围堰工程"}]},{"Name":"S04标","Sites":[]}
				],
				SiteList: [],
				treeName: ""
			}
		},
		methods: {
			/**
			 * @param {Object} item 左列表项
			 * @param {Object} index 集合下标
			 */
			getRightList(item, index) {
				this.categoryActive = index;
				this.treeName = item.Name;
				this.SiteList = item.Sites;
			},
			/**
			 * @param {Object} item 右列表项
			 * @param {Object} index 集合下标
			 */
			getRightItem(item, index) {
				var pages = getCurrentPages();
				var page = pages[pages.length - 2]; // pages.length表示所有页数 -1表示当前页面 -2表示上一个页面
				let data = {
					treeName: this.treeName,
					siteItem: item.SiteName
				};
				// 触发名为"data"的事件，并且携带变量data值。
				uni.$emit("data", data);
				uni.navigateBack({ delta: 1 });
			}
		},
		onLoad() {
			this.scrollHeight = uni.getSystemInfoSync().windowHeight;
			this.getRightList(this.treeData[this.categoryActive], this.categoryActive);
		}
	}
</script>

<style>
	.personnel-info-card-bet {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.point-site-item {
		width: 70%;
		padding: 1px 0px 0px 10px;
		line-height: 18px;
		margin: auto 0px;
		font-size: 16px;
	}
</style>
