<template>
	<view>
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y="true">
				<view class="nav-left-item" :class="keyL == categoryActive ? 'active' : ''" v-for="(listL, keyL) in leftList" :key="keyL"
				 @click="getRightList(listL, keyL)">
					{{ listL.text }}
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y="true" scroll-with-animation>
				<view class="uni-list">
					<view class="uni-list-cell uni-list-cell-navigate nav-right-item" hover-class="uni-list-cell-hover" v-for="(listR, keyR) in rightList"
					 :key="keyR" @click="getRightItem(listR, keyR)">
						<view class="title_body">
							<view class="title_site">{{ listR.title }}</view>
							<view class="title_cond">{{ listR.mark }}</view>
						</view>
						<view v-show="listR.check ? true : false">
							<text class="iconfont icon-wancheng" style="color: #007aff;"></text>
						</view>
						<view v-show="listR.sign ? true : false">
							<text class="iconfont icon-wancheng" style="color: #808080;"></text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryActive: 0,
				leftList: [{
					"text": "电影",
					"itemList": [{
						"title": "'大'人物",
						"mark": "小刑警孙大圣挺身而出对抗为富不仁的赵泰及其背后的财团势力的故事。",
						"check": true,
						"sign": false
					}, {
						"title": "羞羞的铁拳",
						"mark": "一个搏击选手艾迪生和一个体育女记者马小，因为一场意外的电击灵魂互换的爱情故事。",
						"check": true,
						"sign": false
					}, {
						"title": "一个人的武林",
						"mark": "武术教头夏侯武遭遇武痴封于修挑战，在香港武林掀起血雨腥风的故事",
						"check": false,
						"sign": false
					}, {
						"title": "猩球崛",
						"mark": "人类疯狂的野心所产生的恶果",
						"check": false,
						"sign": false
					}, {
						"title": "变形金刚",
						"mark": "擎天柱率领的汽车人和威震天所率领的霸天虎之间的战争故事",
						"check": false,
						"sign": false
					}, {
						"title": "唐人街探案",
						"mark": "唐仁、秦风必须在躲避警察追捕、匪帮追杀、黑帮围剿的同时，在短短七天内，完成找到“失落的黄金”、查明“真凶”、为自己“洗清罪名”这些“逆天”的任务。",
						"check": false,
						"sign": false
					}, {
						"title": "噩梦工厂",
						"mark": "雇佣杀手按任务杀死了玩具公司总裁，却发现玩具在他生活中开始如影随形地跟随。回到家中的他收到一个全套玩具兵人礼盒，不料礼盒中的兵人全部复活，用各种武器在杀手家中与他展开连番恶战……",
						"check": false,
						"sign": true
					}, {
						"title": "狄仁杰之四大天王",
						"mark": "狄仁杰守护亢龙锏为主线，讲述了狄仁杰机敏过人，洞察武则天的诡计并最终战胜的故事。",
						"check": false,
						"sign": false
					}]
				}, {
					"text": "电视剧",
					"itemList": [{
						"title": "老九门",
						"mark": "南派三叔备受关注的作品",
						"check": false,
						"sign": false
					}, {
						"title": "爱情公寓",
						"mark": "各不相同的人之间发生的平常却又乐趣十足的故事",
						"check": false,
						"sign": false
					}, {
						"title": "杉杉来了",
						"mark": "都市小职员薛杉杉和大BOSS封腾之间爱情故事。",
						"check": false,
						"sign": false
					}]
				}, {
					"text": "动漫",
					"itemList": [{
						"title": "禽兽超人",
						"mark": "小镇青年否否，外表看似普通，然而一言不合就变身禽兽超人，并与恶势力做斗争的故事！",
						"check": false,
						"sign": true
					}, {
						"title": "秦时明月",
						"mark": "一个体内流淌英雄之血的少年——天明",
						"check": false,
						"sign": false
					}]
				}, {
					"text": "综艺",
					"itemList": []
				}, {
					"text": "本地",
					"itemList": []
				}, {
					"text": "社会",
					"itemList": []
				}, {
					"text": "娱乐",
					"itemList": []
				}, {
					"text": "科技",
					"itemList": []
				}, {
					"text": "汽车",
					"itemList": []
				}, {
					"text": "军事",
					"itemList": []
				}, {
					"text": "美食",
					"itemList": []
				}],
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

			}
		},
		onLoad() {
			this.rightList = this.leftList[this.categoryActive].itemList;
		}
	}
</script>

<style>
	.page-body {
		padding-top: 10px;
		height: 550px;
		display: flex;
		flex-direction: row;
		flex: 1;
	}

	.nav-left {
		height: 100%;
		width: 30%;
	}

	.nav-left-item {
		line-height: 20px;
		padding: 15px 6px;
		border-right: solid 1px #dadada;
		border-bottom: solid 1px #e0e0e0;
		font-size: 36upx;
		display: flex;
		justify-content: center;
	}

	.nav-left-item.active {
		color: #007AFF;
		padding: 15px 6px;
		border-left: 10upx solid #007aff;
		background: #fff;
		border-right: 0;
		font-weight: bold;
		/* text-overflow: ellipsis;
		white-space: nowrap;
		overflow: overlay; */
	}

	.nav-right {
		height: 100%;
		width: 70%;
		background-color: #FFFFFF;
	}

	.nav-right-item {
		padding: 18upx 28upx;
		height: auto !important;
	}

	.title_body {
		display: flex;
		flex-direction: column;
		padding: 3px 0px;
	}

	.title_site {
		width: 94%;
		line-height: 36upx;
		font-size: 36upx;
		padding: 0upx;
	}

	.title_cond {
		line-height: 30upx;
		font-size: 26upx;
		color: #919191;
	}
</style>
