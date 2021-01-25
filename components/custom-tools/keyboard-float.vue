<template>
	<view>
		<view class="_flkey-mask" @click="closeKeyBoard" catchtouchmove="true" v-show="keyShow"></view>
		<view class="_flkey-body" :class="[keyShowAni?'_floatAniIn':'_floatAniOut']" v-if='keyShow'>
			<view class="_flkey-bar">
				<view class="_flkey-bar-l" @tap="_keySwUp" hover-class="_float-hover-c">
					<view class="_flkey-bar-btn" v-show="mode == 'keyboard' && keyInputSkin">{{isUp?'小写':'大写'}}</view>
				</view>
				<view class="_flkey-bar-c">
					<view class="_flkey-bar-title">{{title}}</view>
				</view>
				<view class="_flkey-bar-r" @tap="_keyHide" hover-class="_float-hover-c">
					<view class="_flkey-bar-btn">完成</view>
				</view>
			</view>
			<view class="_flkey" v-show="mode != 'number'">
				<view class="_flkey-h" v-show="!keyInputSkin && mode == 'car'">
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!provinceCP_}" :data-ac="provinceCP_" v-for="v in province.row_1"
						 :key="v" :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!provinceCP_}" :data-ac="provinceCP_" v-for="v in province.row_2"
						 :key="v" :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!provinceCP_}" :data-ac="provinceCP_" v-for="v in province.row_3"
						 :key="v" :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!provinceCP_}" :data-ac="provinceCP_" v-for="v in province.row_4"
						 :key="v" :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
						<view class="_flkey-i" :class="{'_flkey-noac':!specialCP_}" :data-ac="specialCP_" v-for="v in province.row_5"
						 :key="v" :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
				</view>
				<view class="_flkey-h" v-show="!keyInputSkin && mode == 'keyboard'">
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!symbolCP_}" :data-ac="symbolCP_" v-for="v in symbol.row_1" :key="v"
						 :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!symbolCP_}" :data-ac="symbolCP_" v-for="v in symbol.row_2" :key="v"
						 :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!symbolCP_}" :data-ac="symbolCP_" v-for="v in symbol.row_3" :key="v"
						 :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
				</view>
				<view class="_flkey-n" v-show="keyInputSkin">
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!numCp_}" :data-ac="numCp_" v-for="v in number" :key="v" :data-v="v"
						 @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!letterCp_}" :data-ac="letterCp_" v-for="v in letter.row_1" :key="v"
						 :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!letterCp_}" :data-ac="letterCp_" v-for="v in letter.row_2" :key="v"
						 :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
					<view class="_flkey-row">
						<view class="_flkey-i" :class="{'_flkey-noac':!letterCp_}" :data-ac="letterCp_" v-for="v in letter.row_3" :key="v"
						 :data-v="v" @tap="_keyInput" hover-class="_float-hover-c">
							<view class="_flkey-i-b">
								{{v}}
							</view>
						</view>
					</view>
				</view>
				<view class="_flkey-tool">
					<view class="_flkey-tool-i tool-i-a" :class="{'_flkey-noac':!swCp_}" @tap="_keyInputSw" hover-class="_float-hover-c">
						<view class="_flkey-tool-i-b">{{keyInputSkin?swTxtCp_[0]:swTxtCp_[1]}}</view>
					</view>
					<view class="_flkey-tool-i tool-i-del" @tap="_keyInputDel" hover-class="_float-hover-c">
						<view class="_flkey-tool-i-b">删除</view>
					</view>
				</view>
			</view>
			<view class="_flkey-number" v-show="mode == 'number'">
				<view class="_flkey-number-row">
					<view class="_flkey-number-row-i" data-v="1" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">1</view>
					<view class="_flkey-number-row-i" data-v="2" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">2</view>
					<view class="_flkey-number-row-i" data-v="3" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">3</view>
				</view>
				<view class="_flkey-number-row">
					<view class="_flkey-number-row-i" data-v="4" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">4</view>
					<view class="_flkey-number-row-i" data-v="5" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">5</view>
					<view class="_flkey-number-row-i" data-v="6" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">6</view>
				</view>
				<view class="_flkey-number-row">
					<view class="_flkey-number-row-i" data-v="7" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">7</view>
					<view class="_flkey-number-row-i" data-v="8" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">8</view>
					<view class="_flkey-number-row-i" data-v="9" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">9</view>
				</view>
				<view class="_flkey-number-row">
					<view class="_flkey-number-row-i _number-tool" data-v="." :class="{'_flkey-noac':!dotCp_}" :data-ac="dotCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">.</view>
					<view class="_flkey-number-row-i" data-v="0" :class="{'_flkey-noac':!digitCp_}" :data-ac="digitCp_" @tap="_keyInput"
					 hover-class="_float-hover-c">0</view>
					<view class="_flkey-number-row-i _number-tool" hover-class="_float-hover-c" @tap="_keyInputDel">删除</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "keyboard-float",
		props: {
			'title': {
				type: [String],
				default: '',
			},
			'type': {
				type: [Number, String],
				default: 0,
			},
			'mode': {
				type: [String],
				default: 'keyboard', // keyboard 普通键盘 car 汽车键盘 number 数字键盘
			}
		},
		data() {
			return {
				isUp: false, // 是否是大写
				swTxt: true, // 键盘切换按钮是否可用
				keyShow: false,
				keyShowAni: true, // true 进入 false 隐藏
				keyInputSkin: true, // true 显示 字母和数字  false 显示汉子
				symbol: {
					row_1: ['+', '-', '*', '/', '=', '^', '<', '>', '(', ')'],
					row_2: ['?', '!', '@', '#', '$', '&', ',', '.', '[', ']'],
					row_3: [':', ';', '\'', '"', '_', '~', '…'],
				},
				province: {
					row_1: ["京", "津", "沪", "渝", "蒙", "新", "藏", "宁", "桂", "黑"],
					row_2: ["吉", "辽", "晋", "冀", "青", "鲁", "豫", "苏", "皖", "浙"],
					row_3: ["闽", "赣", "湘", "鄂", "粤", "琼", "甘", "陕", "云", "贵"],
					row_4: ["川"],
					row_5: ["港", "澳", "学", "警", "领", "使"],
				},
				number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
				letter: {
					row_1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
					row_2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
					row_3: ["Z", "X", "C", "V", "B", "N", "M"],
				},
				symbolCP_: true,
				provinceCP_: true,
				specialCP_: true,
				numCp_: true,
				letterCp_: true,
				digitCp_: true,
				dotCp_: true,
				swCp_: true,
				swTxtCp_: ['省', 'ABC'],
			}
		},
		methods: {
			_keyInit() {
				if (this.mode == 'keyboard') {
					this.isUp = true
					this._keyTypeWacth(this.keyType)
					this._keySwUp()
				}
				if (this.mode == 'car') {
					this.isUp = false
					this._carTypeWacth(this.carType)
					this._keySwUp()
				}
				if (this.mode == 'number') {
					this._numberTypeWacth(this.numberType)
				}
			},
			_keySwUp(t) {
				if (this.mode != 'number' && this.keyInputSkin) {
					// 大小写切换
					for (const key in this.letter) {
						if (this.letter.hasOwnProperty(key)) {
							for (let index = 0; index < this.letter[key].length; index++) {
								if (!this.isUp) {
									let tp = this.letter[key][index].toUpperCase()
									this.letter[key][index] = tp
								} else {
									let tp = this.letter[key][index].toLowerCase()
									this.letter[key][index] = tp
								}
							}
						}
					}
					this.isUp = !this.isUp
				}
			},
			_keyInput(e) {
				let d = e.currentTarget.dataset
				if (d.ac) {
					this.$emit('val', String(d.v))
				}
			},
			_keyInputDel() {
				this.$emit('del', true)
			},
			_keyInputSw() {
				let that = this;
				if (that.swCp_) {
					that.keyInputSkin = !that.keyInputSkin
				}
			},
			_keyShow() {
				let that = this
				uni.hideKeyboard()
				that.keyShow = true
				that.keyShowAni = true
				setTimeout(() => {
					uni.createSelectorQuery().in(that).select('._flkey-body').boundingClientRect(function(rect) {
						that.$emit('show', rect)
					}).exec()
				}, 150);
			},
			_keyHide() {
				let that = this
				that.keyShowAni = false
				setTimeout(() => {
					that.$emit('hide', true)
					that.keyShow = false
				}, 166);
			},
			_carTypeWacth(n) {
				let v = Number(n)
				// 0 全部
				// 1 字母加数字
				// 2 省
				// 3 字母加数字加特
				// 4 字母
				// 5 数字
				switch (v) {
					case 0:
						this.provinceCP_ = true
						this.specialCP_ = true
						this.numCp_ = true
						this.letterCp_ = true
						this.swCp_ = true
						this.swTxtCp_ = ['省', 'ABC']
						this.keyInputSkin = true
						break;
					case 1:
						this.provinceCP_ = false
						this.specialCP_ = false
						this.numCp_ = true
						this.letterCp_ = true
						this.swCp_ = false
						this.swTxtCp_ = ['省', 'ABC']
						this.keyInputSkin = true
						break;
					case 2:
						this.provinceCP_ = true
						this.specialCP_ = false
						this.numCp_ = false
						this.letterCp_ = false
						this.swCp_ = false
						this.swTxtCp_ = ['省', 'ABC']
						this.keyInputSkin = false
						break;
					case 3:
						this.provinceCP_ = false
						this.specialCP_ = true
						this.numCp_ = true
						this.letterCp_ = true
						this.swCp_ = true
						this.swTxtCp_ = ['特', 'ABC']
						this.keyInputSkin = true
						break;
					case 4:
						this.provinceCP_ = false
						this.specialCP_ = false
						this.numCp_ = false
						this.letterCp_ = true
						this.swCp_ = false
						this.swTxtCp_ = ['省', 'ABC']
						this.keyInputSkin = true
						break;
					case 5:
						this.provinceCP_ = false
						this.specialCP_ = false
						this.numCp_ = true
						this.letterCp_ = false
						this.swCp_ = false
						this.swTxtCp_ = ['省', 'ABC']
						this.keyInputSkin = true
						break;
					default:
						this.provinceCP_ = true
						this.specialCP_ = true
						this.numCp_ = true
						this.letterCp_ = true
						this.swCp_ = true
						this.swTxtCp_ = ['省', 'ABC']
						this.keyInputSkin = true
						break;
				}
			},
			_keyTypeWacth(n) {
				let v = Number(n)
				// 0 全部
				// 1 字母加数字
				// 2 符号
				// 3 字母
				// 4 数字
				// 5 字母加符号
				// 6 数字加符号
				switch (v) {
					case 0:
						this.symbolCP_ = true
						this.numCp_ = true
						this.letterCp_ = true
						this.swCp_ = true
						this.swTxtCp_ = ['符', 'ABC']
						this.keyInputSkin = true
						break;
					case 1:
						this.symbolCP_ = false
						this.numCp_ = true
						this.letterCp_ = true
						this.swCp_ = false
						this.swTxtCp_ = ['符', 'ABC']
						this.keyInputSkin = true
						break;
					case 2:
						this.symbolCP_ = true
						this.numCp_ = false
						this.letterCp_ = false
						this.swCp_ = false
						this.swTxtCp_ = ['符', 'ABC']
						this.keyInputSkin = false
						break;
					case 3:
						this.symbolCP_ = false
						this.numCp_ = false
						this.letterCp_ = true
						this.swCp_ = false
						this.swTxtCp_ = ['符', 'ABC']
						this.keyInputSkin = true
						break;
					case 4:
						this.symbolCP_ = false
						this.numCp_ = true
						this.letterCp_ = false
						this.swCp_ = false
						this.swTxtCp_ = ['符', 'ABC']
						this.keyInputSkin = true
						break;
					case 5:
						this.symbolCP_ = true
						this.numCp_ = false
						this.letterCp_ = true
						this.swCp_ = true
						this.swTxtCp_ = ['符', 'ABC']
						this.keyInputSkin = true
						break;
					case 6:
						this.symbolCP_ = true
						this.numCp_ = true
						this.letterCp_ = false
						this.swCp_ = true
						this.swTxtCp_ = ['符', 'ABC']
						this.keyInputSkin = true
						break;
					default:
						this.symbolCP_ = true
						this.numCp_ = true
						this.letterCp_ = true
						this.swCp_ = true
						this.swTxtCp_ = ['符', 'ABC']
						this.keyInputSkin = true
						break;
				}
			},
			_numberTypeWacth(n) {
				let v = Number(n)
				// 0 全部
				// 1 禁用.
				switch (v) {
					case 0:
						this.digitCp_ = true
						this.dotCp_ = true
						break;
					case 1:
						this.digitCp_ = true
						this.dotCp_ = false
						break;
					default:
						this.digitCp_ = true
						this.dotCp_ = true
						break;
				}
			},
			// 隐藏组件
			closeKeyBoard() {
				this._keyHide();
			}
		},
		computed: {},
		watch: {
			type(n, o) {
				if (this.mode == 'car') {
					this._carTypeWacth(n)
				}
				if (this.mode == 'keyboard') {
					this._keyTypeWacth(n)
				}
				if (this.mode == 'number') {
					this._numberTypeWacth(n)
				}
			},
			mode(n, o) {
				if (n != o) {
					this._keyInit()
				}
			}
		},
		created() {
			this._keyInit()
		},
	}
</script>

<style>
	._flkey-mask {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 50;
		width: 100%;
		height: 100%;
	}

	._flkey-body {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: auto;
		z-index: 999
	}

	._flkey-bar {
		height: 90upx;
		background-color: #fff;
		box-shadow: 0 1upx 4upx 1upx rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: space-between
	}

	._flkey-bar-btn {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
		color: #1aad19;
		line-height: 1
	}

	._flkey-bar-title {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		color: #323232;
		line-height: 1
	}

	._flkey-bar-c {
		flex: 1
	}

	._flkey-bar-l {
		width: 100upx;
		/* padding-left: 26upx */
	}

	/* ._flkey-bar-l ._flkey-bar-btn {
		justify-content: flex-start
	} */

	._flkey-bar-r {
		width: 100upx;
		/* padding-right: 26upx */
	}

	/* ._flkey-bar-r ._flkey-bar-btn {
		justify-content: flex-end
	} */

	._flkey-bot {
		height: 0;
		background-color: #fff;
		box-shadow: 0 -1upx 4upx 1upx rgba(0, 0, 0, 0.5)
	}

	._flkey {
		position: relative;
		background-color: #f5f5f5;
		padding: 20upx;
		padding-bottom: 4upx;
		padding-left: 4upx
	}

	._flkey-h {
		display: flex;
		flex-direction: column
	}

	._flkey-row {
		display: flex;
		overflow: hidden;
		flex: 1;
		padding-bottom: 16upx;
		justify-content: center
	}

	._flkey-i {
		box-sizing: border-box;
		flex: 0 0 10%
	}

	._flkey-i-b {
		margin-left: 10upx;
		background-color: #fff;
		height: 70upx;
		font-size: 36upx;
		color: #323232;
		line-height: 1;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
		border-bottom-left-radius: 10upx;
		border-top-width: 1upx;
		border-left-width: 1upx;
		border-bottom-width: 1upx;
		border-right-width: 1upx;
		border-style: solid;
		border-color: #e6e6e6;
		display: flex;
		justify-content: center;
		align-items: center
	}

	._flkey-tool {
		pointer-events: none;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		left: 20upx;
		display: flex;
		justify-content: space-between
	}

	._flkey-tool-i {
		pointer-events: auto;
		box-sizing: border-box;
		flex: 0 0 15%
	}

	._flkey-tool-i-b {
		background-color: #e1e1e1;
		height: 70upx;
		font-size: 34upx;
		color: #323232;
		line-height: 1;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
		border-bottom-left-radius: 10upx;
		border-top-width: 1upx;
		border-left-width: 1upx;
		border-bottom-width: 1upx;
		border-right-width: 1upx;
		border-style: solid;
		border-color: #e1e1e1;
		display: flex;
		justify-content: center;
		align-items: center
	}

	._flkey-tool .tool-i-a {
		padding-right: 16upx
	}

	._flkey-tool .tool-i-del {
		padding-left: 16upx
	}

	._flkey-number {
		position: relative;
		background-color: #f5f5f5
	}

	._flkey-number-row {
		display: flex;
		flex-wrap: wrap
	}

	._flkey-number-row-i {
		flex: 1;
		height: 110upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 36upx;
		color: #323232;
		line-height: 1;
		background-color: #fff;
		border-top-width: 1upx;
		border-left-width: 1upx;
		border-style: solid;
		border-color: #e6e6e6;
		border-bottom-width: 0 !important;
		border-bottom-style: solid;
		border-bottom-color: #000;
		border-right-width: 0 !important;
		border-right-style: solid;
		border-right-color: #000
	}

	._flkey-number-row-i:nth-child(1) {
		border-left-width: 0 !important;
		border-left-style: solid;
		border-left-color: #000;
		border-right-width: 0 !important;
		border-right-style: solid;
		border-right-color: #000
	}

	._flkey-number-row ._number-tool {
		font-size: 17px;
		background-color: #e1e1e1
	}

	._flkey-noac {
		opacity: .4 !important
	}

	._float-hover-c {
		opacity: .5 !important
	}

	._floatAniIn {
		animation-duration: 140ms;
		animation-fill-mode: both;
		animation-name: _floatAniIn
	}

	@-webkit-keyframes _floatAniIn {
		from {
			transform: translate3d(0, 101%, 0);
			visibility: visible
		}

		to {
			transform: translate3d(0, 0, 0)
		}
	}

	._floatAniOut {
		animation-duration: 160ms;
		animation-fill-mode: both;
		animation-name: _floatAniOut
	}

	@-webkit-keyframes _floatAniOut {
		from {
			transform: translate3d(0, 0, 0);
			visibility: visible
		}

		to {
			transform: translate3d(0, 101%, 0)
		}
	}
</style>
