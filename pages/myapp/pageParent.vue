<template>
	<view>
		<view class="page-parent">
			<view class="page-parent-title">父级页面的内容：</view>
			<view>父级回调子级页面事件 propA参数 => {{people.age}}</view>
			<button type="primary" @click="refClick">$refs用法</button>
		</view>
		<page-son 
			:propA="9"
			propB="string"
			propD="xy"
			:propE="{message: 'w'}"
			propF="Knn"
			propG="succ"
			ref="pageSon"
			@doCalculation="doCal"></page-son>
		
		<view class="page-solt">solt插槽</view>
		<view class="page-parent">
			<view>这里是父级页面的内容</view>
			<page-slot>
				<view>这里使用了匿名插槽</view>
				<!-- <view slot="slotName">这里使用了具名插槽</view> -->
			</page-slot>
		</view>
	</view>
</template>

<script>
	/* 父级页面
	 * 组件调用步骤（父级中引用子组件）
	 * 1.在script中导入子组件模块，语法：import 自定义名称 from '子组件路径'
	 * 2.在components中声明刚才的自定义名称，如果有多个用逗号隔开
	 * 3.在template中使用
	 * 
	 * $refs用法：父组件引用子组件时ref调用子组件的方法
	 * 1.在子组件中声明调用的方法(如：refLog)
	 * 2.父组件中调用的子组件标签中添加"ref='子组件对象名称'"(如：pageSon)
	 * 3.父组件事件方法中写"this.$refs.子组件对象名称.调用的方法"(如：this.$refs.pageSon.refLog();)
	 **/
	import pageSon from "@/components/custom-tools/pageSon.vue";
	import pageSlot from "@/components/custom-tools/pageSlot.vue";

	export default {
		data() {
			return {
				people: {
					name: '张三',
					age: 23,
					isMarry: false
				}
			}
		},
		methods: {
			doCal: function(res) {
				// console.log(res);
				this.people.age = res - 1;
			},
			refClick: function() {
				this.$refs.pageSon.refLog();
			}
		},
		components: {
			pageSon,
			pageSlot
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: 'prop, emit'
			})
		},
		onLoad() { }
	}
</script>

<style>
	.page-parent {
		height: 200upx;
		margin-bottom: 20upx;
	}

	.page-parent-title {
		font-size: 35upx;
	}

	.page-solt {
		width: 100%;
		height: 50upx;
		border-top: 2upx solid #CCCCCC;
		margin-top: 70upx;
		font-size: 37upx;
		font-weight: 700;
		line-height: 30px;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		/* background-color: #FF99FF; */
	}
</style>
