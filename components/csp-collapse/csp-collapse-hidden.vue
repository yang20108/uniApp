<template>
	<view :class="{'uni-collapse-cell--disabled': disabled,'uni-collapse-cell--notdisabled': !disabled,'uni-collapse-cell--open': isOpen}"
	 class="uni-collapse-cell">
		<view @click="onClick"></view>
		<view :class="{'uni-collapse-cell__content--hide':!isOpen}" class="uni-collapse-cell__content">
			<view :class="{ 'uni-collapse-cell--animation': showAnimation === true }" class="uni-collapse-cell__wrapper" :style="{'transform':isOpen?'translateY(0)':'translateY(-50%)','-webkit-transform':isOpen?'translateY(0)':'translateY(-50%)'}">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CspCollapseHidden',
		props: {
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
	.uni-collapse-cell {
		flex-direction: column;
	}

	.uni-collapse-cell--animation {
		transition-property: transform;
		transition-duration: 0.3s;
		transition-timing-function: ease;
	}

	.uni-collapse-cell__title {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		box-sizing: border-box;
		/* #endif */
		background: #0099FF;
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
