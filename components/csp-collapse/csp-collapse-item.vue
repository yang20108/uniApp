<template>
	<view :class="{ 'uni-collapse-cell--disabled': disabled,'uni-collapse-cell--notdisabled': !disabled, 'uni-collapse-cell--open': isOpen,'uni-collapse-cell--hide':!isOpen }"
	 class="uni-collapse-cell">
		<view class="uni-collapse-cell__title" @click="onClick">
			<text class="uni-collapse-cell__title-text">{{ title }}
				<text style="color: black;margin-left: 5px;font-size: 14px;">{{ titleDescribe }}</text>
			</text>
			<!-- #ifdef MP-ALIPAY -->
			<view :class="{ 'uni-collapse-cell__title-arrow-active': isOpen, 'uni-collapse-cell--animation': showAnimation === true }"
			 class="uni-collapse-cell__title-arrow">
				<uni-icons color="#bbb" size="20" type="arrowdown" />
			</view>
			<!-- #endif -->
			<view v-if="checkInfo" :style="{fontSize:'16px',color:checked?'rgb(78,246,145)':''}">{{checked?"已录入":"未录入"}}</view>
			<!-- #ifndef MP-ALIPAY -->
			<uni-icons :class="{ 'uni-collapse-cell__title-arrow-active': isOpen, 'uni-collapse-cell--animation': showAnimation === true }"
			 class="uni-collapse-cell__title-arrow" color="#bbb" size="20" type="arrowdown" />
			<!-- #endif -->
		</view>
		<view :class="{'uni-collapse-cell__content--hide':!isOpen}" class="uni-collapse-cell__content">
			<view :class="{ 'uni-collapse-cell--animation': showAnimation === true }" class="uni-collapse-cell__wrapper" :style="{'transform':isOpen?'translateY(0)':'translateY(-50%)','-webkit-transform':isOpen?'translateY(0)':'translateY(-50%)'}">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default {
		name: 'CspCollapseItem',
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
			checkInfo: {
				// 是否检查
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
				this.$emit("openState", this.isOpen)
				this.collapse.onChange && this.collapse.onChange()
				this.$forceUpdate()
			}
		}
	}
</script>

<style scoped>
	.uni-collapse-cell {
		flex-direction: column;
		border-radius: 5px;
		box-shadow: 0 6upx 18upx rgba(0, 0, 0, 0.12);
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
		/* height: 48px; */
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
		line-height: 22px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
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
		font-size: 32rpx;
		/* #ifndef APP-NVUE */
		color: inherit;
		/* #endif */
		/* #ifdef APP-NVUE */
		lines: 1;
		/* #endif */
		color: rgb(105, 175, 255);
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
