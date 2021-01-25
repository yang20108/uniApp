<template>
	<view style="padding: 5px;">
		<view>Math.abs({{d1}}) 绝对值{{Math.abs(d1)}}</view>
		<view>Math.ceil({{d2}}) 大于等于x的最小整数{{Math.ceil(d2)}}</view>
		<view>Math.floor({{d2}}) 小于等于x的最大整数{{Math.floor(d2)}}</view>
		<view>Math.round({{d2}}) 四舍五入取整{{Math.round(d2)}}</view>
		<view>Math.sin({{d1}}) 正弦函数{{Math.sin(d1)}}</view>
		<view>Math.cos(Math.PI/{{d3}}) 余弦函数{{Math.cos(Math.PI/d3)}}</view>
		<view>Math.exp({{d3}}) 返回以自然数为底，x幂的数{{Math.exp(d3)}}</view>
		<view>Math.log({{d4}}) 获得任意数字的对数{{Math.log(d4)}}</view>
		<view>Math.sqrt({{d4}}) 求平方根{{Math.sqrt(d4)}}</view>
		<view>Math.max({{d5}}) 求一组数中的最大的数{{Math.max(4,12,8,6,23,54)}}</view>
		<view>Math.min({{d5}}) 求一组数中的最小的数{{Math.min(4,12,8,6,23,54)}}</view>
		<view>Math.pow({{d4}},{{d3}}) 获得x的y次方{{Math.pow(d4,d3)}}</view>
		<view>{{d4}}%{{d3}} 求余数{{d4%d3}}</view>
		<view>{{d6}}.toPrecision({{d3}}) 设置数字固定长度{{d6.toPrecision(d3)}}</view>
		<view>{{d6}}.toFixed({{d3}}) 数字格式化成指定小数位长度的数{{d6.toFixed(d3)}}</view>
		<view>Math.random() 生成随机数{{Math.random()}}</view>
		<view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				d0: 0,
				d1: -15,
				d2: 13.74,
				d3: 2,
				d4: 4,
				d5: [4,12,8,6,23,54],
				d6: 11.257
			}
		},
		methods: {}
	}
</script>

<style>
</style>
