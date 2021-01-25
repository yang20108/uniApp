<template>
	<view style="margin-bottom: 20px;" :class="{ 'uni-collapse-cell--disabled': disabled,'uni-collapse-cell--notdisabled': !disabled, 'uni-collapse-cell--open': isOpen,'uni-collapse-cell--hide':!isOpen }"
	 class="uni-collapse-cell">
		<view class="uni-collapse-cell__title" @click="onClick">
			<view class="step-icon"></view>
			<text class="uni-collapse-cell__title-text">{{ title }}
				<text style="color: black;margin-left: 5px;font-size: 14px;">{{ titleDescribe }}</text>
			</text>
			<!-- #ifdef MP-ALIPAY -->
			<view :class="{ 'uni-collapse-cell__title-arrow-active': isOpen, 'uni-collapse-cell--animation': showAnimation === true }"
			 class="uni-collapse-cell__title-arrow">
				<uni-icons color="#bbb" size="20" type="arrowdown" />
			</view>
			<!-- #endif -->
			<!-- #ifndef MP-ALIPAY -->
			<uni-icons :class="{ 'uni-collapse-cell__title-arrow-active': isOpen, 'uni-collapse-cell--animation': showAnimation === true }"
			 class="uni-collapse-cell__title-arrow" color="#bbb" size="20" type="arrowdown" />
			<!-- #endif -->
		</view>
		<view :style="{padding:padding?'10px':'0px'}" :class="{'uni-collapse-cell__content--hide':!isOpen}" class="uni-collapse-cell__content">
			<view :class="{ 'uni-collapse-cell--animation': showAnimation === true }" class="uni-collapse-cell__wrapper" style="transform: translateY(10px);">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default {
		name: 'earlyCollapseItem',
		components: {
			uniIcons
		},
		props: {
			title: {
				// 列表标题
				type: String,
				default: ''
			},
			titleDescribe: {
				// 列表标题描述
				type: String,
				default: ''
			},
			name: {
				// 唯一标识符
				type: [Number, String],
				default: 0
			},
			disabled: {
				// 是否禁用
				type: Boolean,
				default: false
			},
			showAnimation: {
				// 是否显示动画
				type: Boolean,
				default: false
			},
			open: {
				// 是否展开
				type: Boolean,
				default: false
			},
			checked: {
				// 检查状态
				type: Boolean,
				default: false
			},
			padding: {
				// 内边距
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				isOpen: false
			}
		},
		watch: {
			open(val) {
				this.isOpen = val
			}
		},
		inject: ['collapse'],
		created() {
			this.isOpen = this.open
			this.nameSync = this.name ? this.name : this.collapse.childrens.length
			this.collapse.childrens.push(this)
			if (String(this.collapse.accordion) === 'true') {
				if (this.isOpen) {
					let lastEl = this.collapse.childrens[this.collapse.childrens.length - 2]
					if (lastEl) {
						this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = false
					}
				}
			}
		},
		methods: {
			onClick() {
				if (this.disabled) {
					return
				}
				if (String(this.collapse.accordion) === 'true') {
					this.collapse.childrens.forEach(vm => {
						if (vm === this) {
							return
						}
						vm.isOpen = false
					})
				}
				this.isOpen = !this.isOpen
				this.collapse.onChange && this.collapse.onChange()
				this.$forceUpdate()
			}
		}
	}
</script>

<style scoped>
	.step-icon {
		width: 4px;
		height: 18px;
		border-radius: 10px;
		background-color: #6786a5;
		font-size: 18px;
		margin-left: -0.3em;
		margin-right: 10px;
		margin-left: 5px;
	}

	.uni-collapse-cell {
		flex-direction: column;
	}

	.uni-collapse-cell--hover {
		/* background-color: #f1f1f1; */
	}

	.uni-collapse-cell--open {
		/* background-color: #f1f1f1; */
	}

	.uni-collapse-cell--disabled {
		/* background-color: #f1f1f1; */
		/* opacity: 0.3;
 */
	}


	.uni-collapse-cell--hide {
		height: 48px;
	}

	.uni-collapse-cell--animation {
		/* transition: transform 0.3s ease;
 */
		transition-property: transform;
		transition-duration: 0.3s;
		transition-timing-function: ease;
	}

	.uni-collapse-cell__title {
		padding: 12px 12px;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		box-sizing: border-box;
		/* #endif */
		height: 50px;
		line-height: 24px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		min-height: 37px;
		background: rgb(212, 227, 241);
	}

	.uni-collapse-cell__title:active {
		background-color: #f1f1f1;
	}

	.uni-collapse-cell__title-slot {
		height: 52rpx;
		width: 52rpx;
		margin-right: 10px;
	}

	.uni-collapse-cell__title-arrow {
		width: 20px;
		height: 20px;
		transform: rotate(270deg);
		transform-origin: center center;

	}

	.uni-collapse-cell__title-arrow-active {
		transform: rotate(0deg);
	}

	.uni-collapse-cell__title-text {
		flex: 1;
		font-size: 17px;
		/* #ifdef APP-NVUE */
		lines: 1;
		/* #endif */
		font-family: "微软雅黑";
	}

	.uni-collapse-cell__content {
		overflow: hidden;
	}

	.uni-collapse-cell__wrapper {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.uni-collapse-cell__content--hide {
		height: 0px;
		line-height: 0px;
	}
</style>
