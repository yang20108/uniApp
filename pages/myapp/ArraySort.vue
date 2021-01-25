<template>
	<view>
		<view style="float: left;">这是默认排序：</view>
		<view class="_num" v-for="(num, keyN) in Arrays" :key="keyN+''">{{num}}</view>
		<view style="clear: left;"></view>
		<view style="float: left;">这是过滤重复：</view>
		<view class="_num" v-for="(g, keyG) in GuoLv()" :key="(keyG + 30)+''">{{g}}</view>
		<view style="clear: left;"></view>
		<view style="float: left;">这是冒泡排序：</view>
		<view class="_num" v-for="(m, keyM) in MaoPao()" :key="(keyM + 10)+''">{{m}}</view>
		<view style="clear: left;"></view>
		<view style="float: left;">这是插入排序：</view>
		<view class="_num" v-for="(c, keyC) in ChaRu()" :key="(keyC + 20)+''">{{c}}</view>
		<view style="clear: left;"></view>
		<view style="margin: 5px;border: 1px solid #0081FF;">{{ArrayLen}}</view>
		<button type="primary" @click="fenLen">长度分割</button>
		<view style="margin: 5px;border: 1px solid #0081FF;">{{ArrayType}}</view>
		<button type="primary" @click="fenType">对象字段分割</button>
		<view style="margin: 5px;border: 1px solid #0081FF;">{{ArrayFan}}</view>
		<button type="primary" @click="fanFor">反向遍历</button>
	</view>
</template>

<script>
	import tools from "../../common/tools.js"
	export default {
		data() {
			return {
				Arrays: [6, 2, 9, 1, 0, 6, 7],
				ArrayLen: "",
				Arrays2: [
					{"name": "陈", "sex": "女"},
					{"name": "鲍", "sex": "男"},
					{"name": "文", "sex": "女"},
					{"name": "沈", "sex": "男"}
				],
				ArrayType: "",
				ArrayFan: ""
			}
		},
		methods: {
			fanFor() {
				var fStr = "";
				for (var i = this.Arrays.length - 1; i >= 0; i--) {
					fStr += "," + this.Arrays[i]
				}
				this.ArrayFan = fStr.substring(1)
			},
			fenType() {
				var par = tools.GroupArrayParam(this.Arrays2, "sex")
				this.ArrayType = JSON.stringify(par)
			},
			fenLen() {
				var groupedArray = tools.GroupArrayLen(this.Arrays, 5);
				this.ArrayLen = JSON.stringify(groupedArray)
			},
			MaoPao() {
				var maopao = uni.getStorageSync("ArraySort")
				for (var i = 0; i < maopao.length - 1; i++) {
					// console.log("i: " + i + " => " + maopao[i]);
					for (var j = 0; j < maopao.length - 1 - i; j++) {
						// console.log("j: " + j + " => " + maopao[j]);
						// 两两比较，交换位置
						if (maopao[j] > maopao[j + 1]) {
							var temp = maopao[j]
							maopao[j] = maopao[j + 1]
							maopao[j + 1] = temp;
						}
					}
				}
				return maopao;
			},
			ChaRu() {
				var charu = uni.getStorageSync("ArraySort")
				for (var i = 1; i < charu.length; i++) {
					for (var j = i; j > 0; j--) {
						if (charu[j] < charu[j - 1]) {
							var temp = charu[j]
							charu[j] = charu[j - 1]
							charu[j - 1] = temp
						}
					}
				}
				return charu
			},
			GuoLv() {
				var guo = uni.getStorageSync("ArraySort")
				for (var i = 0; i < guo.length; i++) {
					for (var j = i + 1; j < guo.length; j++) {
						// 过滤掉重复元素
						if (guo[i] === guo[j]) {
							guo.splice(j, 1)
							j--;
						}
					}
				}
				return guo;
			}
		},
		onLoad() {
			uni.setStorageSync("ArraySort", this.Arrays)
			this.ArrayLen = JSON.stringify(this.Arrays)
			this.ArrayType = JSON.stringify(this.Arrays2)
		}
	}
</script>

<style>
	._num {
		width: 8%;
		/* margin: 10px; */
		text-align: center;
		/* color: #0000ff; */
		float: left;
		/* background-color: #AAFFFF; */
	}
</style>
