<template>
	<view class="uni-combox">
		<view v-if="label" class="uni-combox__label" :style="labelStyle">
			<text>{{label}}</text>
		</view>
		<view class="uni-combox__input-box">
			<input class="uni-combox__input" type="text" :placeholder="placeholder" v-model="inputVal" @input="onInput" @focus="onFocus"
			 @blur="onBlur" />
			<uni-icons class="uni-combox__input-arrow" type="arrowdown" size="22" @click="toggleSelector"></uni-icons>
			<view class="uni-combox__selector" v-if="showSelector">
				<scroll-view scroll-y="true" class="uni-combox__selector-scroll">
					<view class="uni-combox__selector-empty" v-if="filterCandidatesLength === 0">
						<text>{{emptyTips}}</text>
					</view>
					<view class="uni-combox__selector-item" v-for="(item,index) in filterCandidates" :key="index" @click="onSelectorClick(index)">
						<text>{{item}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * name: Combox 组合框
	 * 属性：
	 * label String类型 标签文字
	 * value String类型 combox的值
	 * labelWidth String类型 标签宽度，有单位字符串，如:'100px'
	 * placeholder String类型 输入框占位符
	 * candidates Array类型 候选字段["",""]
	 * emptyTips String类型 无匹配项时的提示语
	 * 事件:
	 * input Function类型 combox输入事件，返回combox值
	 */
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default {
		name: 'customCombox',
		components: {
			uniIcons
		},
		props: {
			label: {
				type: String,
				default: ''
			},
			labelWidth: {
				type: String,
				default: 'auto'
			},
			placeholder: {
				type: String,
				default: ''
			},
			candidates: {
				type: Array,
				default () {
					return []
				}
			},
			emptyTips: {
				type: String,
				default: '无匹配项'
			},
			value: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				showSelector: false,
				inputVal: ''
			}
		},
		computed: {
			labelStyle() {
				if (this.labelWidth === 'auto') {
					return {}
				}
				return {
					width: this.labelWidth
				}
			},
			filterCandidates() {
				return this.candidates.filter((item) => {
					return item.indexOf(this.inputVal) > -1
				})
			},
			filterCandidatesLength() {
				return this.filterCandidates.length
			}
		},
		watch: {
			value: {
				handler(newVal) {
					this.inputVal = newVal
				},
				immediate: true
			}
		},
		methods: {
			toggleSelector() {
				this.showSelector = !this.showSelector
			},
			onFocus() {
				this.showSelector = true
			},
			onBlur() {
				setTimeout(() => {
					this.showSelector = false
				}, 50)
			},
			onSelectorClick(index) {
				this.inputVal = this.filterCandidates[index]
				this.showSelector = false
				this.$emit('input', this.inputVal)
			},
			onInput() {
				setTimeout(() => {
					this.$emit('input', this.inputVal)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-combox {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		height: 40px;
		flex-direction: row;
		align-items: center;
		padding: 5px 0px;
		// border-bottom: solid 1px #DDDDDD;
	}

	.uni-combox__label {
		width: 25%;
		justify-content: flex-end;
		text-align: end;
		font-size: 16px;
		line-height: 22px;
		// color: #999999;
	}

	.uni-combox__input-box {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		align-items: center;
		margin-left: 25px;
	}

	.uni-combox__input {
		flex: 1;
		font-size: 16px;
		height: 22px;
		line-height: 22px;
		color: grey;
	}

	.uni-combox__input-arrow {
		width: 40px;
		// padding: 10px;
	}

	.uni-combox__selector {
		box-sizing: border-box;
		position: absolute;
		top: 42px;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 6px;
		box-shadow: #DDDDDD 4px 4px 8px, #DDDDDD -4px -4px 8px;
		z-index: 15;
	}

	.uni-combox__selector-scroll {
		max-height: 200px;
		box-sizing: border-box;
	}

	.uni-combox__selector::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-bottom: solid 6px #FFFFFF;
		border-right: solid 6px transparent;
		border-left: solid 6px transparent;
		left: 50%;
		top: -6px;
		margin-left: -6px;
	}

	.uni-combox__selector-empty,
	.uni-combox__selector-item {
		/* #ifdef APP-NVUE */
		display: flex;
		/* #endif */
		line-height: 36px;
		font-size: 14px;
		text-align: center;
		border-bottom: solid 1px #DDDDDD;
		margin: 0px 10px;
	}

	.uni-combox__selector-empty:last-child,
	.uni-combox__selector-item:last-child {
		border-bottom: none;
	}
</style>
