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
					// {name: 'test7',content: '',url: '../mypages/test7'},
					// {name: 'test6',content: '',url: '../mypages/test6'},
					// {name: 'test5',content: '商品分类样式模板',url: '../mypages/test5'},
					// {name: 'test4',content: 'setInterval, $set, $delete',url: '../mypages/test4'},
					// {name: 'test3',content: '基础组件',url: '../mypages/test3'},
					// {name: 'test2',content: '直播',url: '../mypages/test2'},
					// {name: 'test',content: '',url: '../mypages/test'},
					// {name: 'LongPress',content: '仿微信长按',url: '../mypages/LongPress'},
					// #ifdef APP-PLUS
					// {name: 'takePicture',content: '抓拍',url: '../mypages/pictureTake'},
					// {name: 'SQLite',content: '本地数据库',url: '../mypages/sqlite'},
					// #endif
					// {name: 'Watermark',content: '照片水印',url: '../mypages/pictureWatermark'},
					// {name: 'Math',content: '数学函数大全',url: '../mypages/math'},
					// {name: 'ArraySort',content: '数组排序',url: '../mypages/ArraySort'},
					// {name: 'Animation',content: '动画',url: '../mypages/createAnimation'},
					// {name: 'less',content: 'Less 语法',url: '../mypages/less'},
					// {name: 'myself',content: '个人中心',url: '../mypages/myself'},
					// {name: 'tools',content: '工具箱',url: '../mypages/tools'},
					// {name: 'side-classification',content: '侧边分类',url: '../mypages/side-classification'},
					// {name: 'keyboard',content: '浮动键盘',url: '../mypages/keyboard'},
					// {name: 'gestureSliding',content: '手势监听',url: '../mypages/gestureSliding'},
					// {name: 'login',content: '登录',url: '../mypages/login/login'},
					// {name: 'charts',content: '图表',url: '../mypages/charts'},
					// {name: 'drawingCanvas',content: '画板',url: '../mypages/drawingCanvas'},
					// {name: 'linkagePicker',content: '3级联动',url: '../mypages/linkagePicker'},
					// {name: 'list',content: '',url: '../mypages/list'},
					// {name: 'mixTree',content: '树形菜单',url: '../mypages/mixTree'},
					// {name: 'pageParent',content: 'prop, emit, solt',url: '../mypages/pageParent'},
					// {name: 'shoppingCart',content: '购物模板',url: '../mypages/shoppingCart'},
					// {name: 'tabel-model',content: '表单模板',url: '../mypages/tabel-model'},
					// {name: 'tow-level-list',content: '两层级list',url: '../mypages/tow-level-list'},
					// {name: 'chat',content: '聊天',url: '../mypages/chat'},
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
