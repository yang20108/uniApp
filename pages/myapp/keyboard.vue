<template>
	<view>
		<view class="pr">
			输入的内容
		</view>
		<view class="pr-s">
			{{val}}
		</view>
		<button @tap="key1">数字键盘</button>
		<button @tap="key2">浮动键盘</button>
		<button @tap="key3">汽车键盘</button>
		<keyboard-float ref="keyb" :mode="keyMode" :type="keyType" :title="keyTitle" @del="keyDel" @val="keyVal" @show="keyShow"
		 @hide="keyHide"></keyboard-float>
	</view>
</template>

<script>
	import keyboardFloat from "@/components/custom-tools/keyboard-float.vue";
	export default {
		data() {
			return {
				val: '',
				keyMode: 'keyboard',
				keyType: 0,
				keyTitle: "浮动键盘",
			}
		},
		onLoad() {

		},
		methods: {
			// 显示键盘
			showKey() {
				this.$refs.keyb._keyShow()
			},
			// 隐藏键盘
			hideKey() {
				this.$refs.keyb._keyHide()
			},
			// 键盘退格
			keyDel() {
				let d = this.val
				this.val = d.substring(0, d.length - 1)
			},
			// 键盘输入值
			keyVal(v) {
				this.val = this.val + v
			},
			// 显示键盘后的回调
			keyShow(h) {
				console.log(h)
			},
			// 隐藏键盘后的回调
			keyHide() {

			},
			// 数字键盘
			key1() {
				this.keyMode = "number"
				this.keyTitle = "数字键盘"
				this.showKey()
			},
			// 浮动键盘
			key2() {
				this.keyMode = "keyboard"
				this.keyTitle = "浮动键盘"
				this.showKey()
			},
			// 汽车键盘
			key3() {
				this.keyMode = "car"
				this.keyTitle = "汽车键盘"
				this.showKey()
			},
		},
		components: {
			keyboardFloat
		}
	}
</script>

<style>
	.pr {
		height: 30px;
		font-size: 16px;
		text-align: center
	}
	
	.pr-s {
		height: 80px;
		font-size: 16px;
		margin: 20px;
		overflow-x: scroll;
		border: 1px solid #0099FF;
		word-wrap: break-word;
		word-break: break-all;
	}
</style>
