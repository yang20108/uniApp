<template>
	<view>
		<view style="font-size: 35upx;">子级页面的内容：</view>
		<view>propA参数 => {{propA}}</view>
		<view>propB参数 => {{pB}}</view>
		<view>propC参数(我有默认值) => {{propC}}</view>
		<view>propD参数(我是必填项) => {{propD}}</view>
		<view>propE参数(我是对象) => {{propE.message}}</view>
		<view>propF参数(我是计算属性) => {{pF}}</view>
		<view>propG参数(自定义验证函数) => {{propG}}</view>
		<button type="primary" @click="eventName">子级页面事件</button>
	</view>
</template>

<script>
	/* 子级页面
	 * prop的用法，可以理解为父级向子级传递参数（数据）
	 * 1.在script中定义和data同级，语法props: {} (props有数组形式，有对象形式)
	 * 2.定义参数名称，类型，是否必填，默认值
	 * 3.类型type可以是：String、Number、Boolean、Array、Object、Date、Function、Symbol，type还可以是一个自定义的构造函数，并且通过instanceof来进行检查确认
	 * 注意：prop是父级页面单向下行绑定，prop的更新会向下流动到子组件中，但是反过来则不行。
	 * 		那些prop会在一个组件实例创建之前进行验证，所以实例的属性(如data、computed等)在default或validator函数中是不可用的。
	 *
	 * $emit的用法，可以理解为触发子级页面上的事件附加参数，都会传给父级页面监听器回调
	 * 1.子级页面上的事件函数中用this调用，语法this.$emit("回调事件名称", [参数]); []表示可略
	 * 2.父级页面中在子级节点上声明回调语法：@回调事件名称=自定义函数名称
	 **/
	export default {
		name: 'page-son',
		props: {
			// 基础的类型检查 (null和undefined会通过任何类型验证)
			propA: Number,
			// 多个可能的类型
			propB: [String, Number],
			propC: {
				type: Number,
				default: 100 // 带有默认值的数字
			},
			propD: {
				type: String,
				required: true, // 必填的字符串
				default: "Hello" // 带有默认值的数字
			},
			propE: {
				type: Object,
				required: true, // 必填的字符串
				default: function() { // 带有默认值的对象，对象或数组默认值必须从一个工厂函数获取
					return {
						message: 'chtwxcn'
					}
				}
			},
			propF: {
				type: String,
				default: "Tbb"
			},
			// 自定义验证函数
			propG: {
				type: String,
				default: 'fun',
				validator: function(value) {
					// value表示是传的值（不管什么类型），这个值必须匹配下列字符串中的一个
					return ['succ', 'fail', 'complete'].indexOf(value) !== -1
				}
			}
		},
		data() {
			return {
				pB: this.propB // 定义一个本地的data属性并将这个prop用作其初始值：
			}
		},
		methods: {
			eventName: function() {
				this.$emit("doCalculation", parseInt(this.propA) + 1);
			},
			refLog: function() {
				uni.showToast({
					title: '这里是子组件方法。',
					icon: 'none'
				});
				console.log("这里是子组件方法。");
			}
		},
		computed: {
			// 定义一个计算属性来操作参数，比如转换或计算
			pF() {
				// 进行大小写转换toUpperCase/toLowerCase
				return this.propF.trim().toUpperCase();
			}
		},
		onLoad() {

		}
	}
</script>

<style>
</style>
