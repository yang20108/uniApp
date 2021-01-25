<template>
	<view>
		<scroll-view :style="'width: 100%;height:' + scrollHeight + 'px;background-color: #FFFFFF;'" scroll-y="true">
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in lists" :key="index">
					<view class="uni-list-cell-navigate uni-navigate-right" @click="showItem(item)" hover-class="uni-list-cell-hover">
						{{item}}
						<view style="margin-right: 20px;">k</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view style="padding-top: 5px;">
			<button style="width:45%;float:left;margin-bottom:2px;" type="primary" @tap="push">添加元素</button>
			<button style="width:45%;float:left;margin-bottom:2px;" type="primary" @tap="del">删除元素</button>
			<button style="width:42%;float:left;margin-bottom:2px;font-size: 15px;" type="primary" @tap="shift">删除第一个元素</button>
			<button style="width:46%;float:left;margin-bottom:2px;font-size: 15px;" type="primary" @tap="pop">删除最后一个元素</button>
			<button style="width:46%;float:left;margin-bottom:2px;font-size: 15px;" type="primary" @tap="unshift">添加元素到第一个</button>
			<button style="width:42%;float:left;margin-bottom:2px;font-size: 15px;" type="primary" @tap="splice">替换第二个元素</button>
			<button style="width:45%;float:left;margin-bottom:2px;" type="primary" @tap="sort">升序</button>
			<button style="width:45%;float:left;margin-bottom:2px;" type="primary" @tap="reverse">降序</button>
		</view>
		<!-- <button type="primary" @tap="filter">元素过滤</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: ["我是小妖怪", "逍遥又自在", "杀人不眨眼", "吃人不放盐"],
				scrollHeight: uni.getSystemInfoSync().windowHeight - 180
			};
		},
		methods: {
			getRandom: function() {
				return Math.floor(Math.random() * 10000);
			},
			push: function() {
				this.lists.push(this.getRandom());
			},
			del: function() {
				this.lists.splice(this.lists.length - 1, 1);
			},
			shift: function() {
				this.lists.shift();
			},
			pop: function() {
				this.lists.pop();
			},
			unshift: function() {
				this.lists.unshift(this.getRandom());
			},
			splice: function() {
				/* 
				 * lists.splice(index, howmany, item1...);
				 * 参数 描述
				 * index   必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
				 * howmany 必需。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
				 * item1, ..., itemX 可选。要添加或替换到数组的新元素，不加此参数表示删除某个元素，怎么删除根据前两个参数决定
				 * */
				this.lists.splice(1, 1, this.getRandom());
			},
			sort: function() {
				this.lists.sort();
			},
			reverse: function() {
				this.lists.reverse();
			},
			showItem(item) {
				uni.showToast({
					title: item,
					icon: 'none'
				});
			}
		}
	}
</script>

<style>
	button {
		margin: 0px 20upx;
	}
</style>
