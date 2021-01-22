<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab scroll-view-center" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
			 :data-current="index" @tap="tapTab">{{tab.name}}
				<view :class="[tabIndex==index ? 'menu-one-act' : 'menu-one']">
					<view class="menu-one-bottom-color"></view>
				</view>
			</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item>
				<view class="swiper-item-st">
					<view><text>暂无内容</text></view>
				</view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="swiper-one-list" scroll-y="true">
					<block v-for="(item, index) in already_done_items" :key="index">
						<view class="uni-card" hover-class="uni-list-cell-hover" @click="toFormInfo(['正文','流程'])">
							<view class="uni-card-header uni-card-media">
								<image class="uni-card-media-logo" src="../../static/logo.png"></image>
								<view class="uni-card-media-body">
									<text class="uni-card-media-text-top">{{item.title}}</text>
									<text class="uni-card-media-text-bottom">{{item.name}} {{item.date}}</text>
								</view>
							</view>
							<view class="uni-card-footer">{{item.reply}}</view>
						</view>
					</block>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadOver">
					<block v-for="(item, index) in already_issued_item" :key="index">
						<view class="uni-card" hover-class="uni-list-cell-hover" @click="toFormInfo(['表单','流程'])">
							<view class="uni-card-header uni-card-media">
								<image class="uni-card-media-logo" src="../../static/logo.png"></image>
								<view class="uni-card-media-body">
									<text class="uni-card-media-text-top">{{item.title}}</text>
									<text class="uni-card-media-text-bottom">{{item.name}} {{item.date}}</text>
								</view>
							</view>
							<view class="uni-card-footer">{{item.reply}}</view>
						</view>
					</block>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadOver">
					<block v-for="(item, index) in tobe_issued_item" :key="index">
						<view class="uni-card" hover-class="uni-list-cell-hover" @click="toFormInfo(['表单','流程'])">
							<view class="uni-card-header uni-card-media">
								<image class="uni-card-media-logo" src="../../static/logo.png"></image>
								<view class="uni-card-media-body">
									<text class="uni-card-media-text-top">{{item.title}}</text>
									<text class="uni-card-media-text-bottom">{{item.name}} {{item.date}}</text>
								</view>
							</view>
							<view class="uni-card-footer">{{item.reply}}</view>
						</view>
					</block>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import modelData from "../../common/modelData.js"
	export default {
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabBars: [
					{id: 'daiban',name: '待办工作'},
					{id: 'yiban',name: '已办工作'},
					{id: 'daifa',name: '待发工作'},
					{id: 'yifa',name: '已发工作'}
				],
				tabIndex: 0,
				already_done_items: modelData.modelAlreadyDone(),
				tobe_issued_item: modelData.modelTobeIssued(),
				already_issued_item: modelData.modelAlreadyIssued()
			}
		},
		methods: {
			async tapTab(e) { //点击tab-bar
				if (this.tabIndex === e.target.dataset.current) {
					return false;
				} else {
					this.isClickChange = true;
					this.tabIndex = e.target.dataset.current
				}
			},
			async changeTab(e) {
				let index = e.target.current;
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			loadOver: function() {

			},
			toFormInfo: function(flowArr){
				/* uni.navigateTo({
					url:'../mypages/form-flow?flow='+ flowArr
				}) */
			}
		},
		onReachBottom() {
			console.log("reach: " + reach);
		}
	}
</script>
<style>
	.scroll-view-center {
		margin-top: 20upx;
		text-align: center;
	}

	.empty-content {
		width: 55px;
		height: 55px;
	}

	.swiper-item-st {
		text-align: center;
		padding-top: 200px;
	}
	
	.uni-card-footer:before {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 0upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.menu-one-act {
		margin: 15upx 24upx 0upx 24upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #007AFF;
	}

	.menu-one {
		margin: 15upx 24upx 0upx 24upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menu-one-bottom-color {
		width: 100%;
		height: 5upx;
	}

	.swiper-one-list {
		height: 100%;
		width: 100%;
	}
	
	.uni-list-cell-hover {
		background-color: #F5F7F8;
	}
</style>
