<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
				<view class="uni-list-cell-navigate uni-navigate-right" hover-class="navigator-hover">
					<view class="uni-navigator" @tap="onClick(item)">
						<view class="page-name">{{item.name}}</view>
						<view class="page-content">{{item.content}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list: [
					{name: '充电动画',content: '',url: '../myapp/chongdian'},
					{name: '风扇',content: '',url: '../myapp/fengshan'},
					{name: 'test4',content: 'setInterval, $set, $delete',url: '../myapp/test4'},
					{name: 'test3',content: '基础组件',url: '../myapp/test3'},
					{name: 'test',content: '基础语法',url: '../myapp/test'},
					{name: 'LongPress',content: '仿微信长按',url: '../myapp/LongPress'},
					// #ifdef APP-PLUS
					{name: 'test2',content: '直播',url: '../myapp/test2'},
					{name: 'takePicture',content: '抓拍',url: '../myapp/pictureTake'},
					{name: 'SQLite',content: '本地数据库',url: '../myapp/sqlite'},
					// #endif
					{name: 'Watermark',content: '照片水印',url: '../myapp/pictureWatermark'},
					{name: 'Math',content: '数学函数大全',url: '../myapp/math'},
					{name: 'ArraySort',content: '数组排序',url: '../myapp/ArraySort'},
					{name: 'less',content: 'Less 语法',url: '../myapp/less'},
					{name: 'tools',content: '工具箱',url: '../myapp/tools'},
					{name: 'side-classification',content: '侧边分类',url: '../myapp/side-classification'},
					{name: 'keyboard',content: '浮动键盘',url: '../myapp/keyboard'},
					{name: 'gestureSliding',content: '手势监听',url: '../myapp/gestureSliding'},
					{name: 'drawingCanvas',content: '画板',url: '../myapp/drawingCanvas'},
					{name: 'list',content: '',url: '../myapp/list'},
					{name: 'mixTree',content: '树形菜单',url: '../myapp/mixTree'},
					{name: 'pageParent',content: 'prop, emit, solt',url: '../myapp/pageParent'},
					{name: 'tabel-model',content: '表单模板',url: '../myapp/tabel-model'},
					{name: 'tow-level-list',content: '两层级list',url: '../myapp/tow-level-list'},
					{name: 'chat',content: '聊天',url: '../myapp/chat'},
					{name: 'SZTD',content: '深中通道',url: '../sztd/login'}
				],
				navigationBarBGCList: ["#C0C0C0", "#A9A9A9", "#D3D3D3", "#F5F5F5", "#FA8072", "#FFA07A", "#FFDAB9", "#D2B48C",
					"#FFB6C1", "#FFF0F5", "#DA70D6", "#7B68EE", "#E6E6FA", "#6495ED", "#87CEFA", "#FDF5E6", "#F0E68C", "#BDB76B",
					"#F5F5DC", "#ADFF2F", "#98FB98", "#7FFFAA", "#E1FFFF", "#B0E0E6", "#87CEEB"
				]
			}
		},
		methods: {
			onClick: function(item) {
				if ("SZTD" === item.name) {
					uni.redirectTo({
						url: item.url
					})
				} else {
					uni.navigateTo({
						url: item.url
					});
				}
			}
		},
		onPullDownRefresh() {
			var random = Math.floor(Math.random() * this.navigationBarBGCList.length); // *25表示随机数取值范围0 ~ 25之间
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: this.navigationBarBGCList[random]
			})
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			// onReachBottomDistance的px值表示：页面滑动状态下距离页面底部多少px时触发onReachBottom函数
			console.log("onreach");
		}
	}
</script>

<style>
	.list-app {
		/* #ifdef APP-PLUS */
		margin-top: 23px;
		/* #endif */
	}

	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.uni-navigator {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.page-name {
		font-size: 34upx;
	}

	.page-content {
		margin-right: 10px;
		font-size: 34upx;
		color: #BBBBBB;
	}
</style>
