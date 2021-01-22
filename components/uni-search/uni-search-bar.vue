<template>
	<view class="serach">
		<view class="content xtj_content" :style="{'border-radius':radius+'px'}">
			<view class="content-box" :class="{'center':mode === 2}">
				<text style="color: grey;margin: 0px 5px;" class="iconfont icon-search"></text>
				<input class="input" :disabled="disabled" @click="onClick" :placeholder="placeholder" v-model="inputVal" />
				<text v-if="isDelShow" style="color: grey;margin: 0px 5px;" class="iconfont icon-clear" @click="clear"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		/* 
		 * 属性说明
		 * mode[number]对齐方式可选值: 1文字左对齐[默认], 2文字居中对齐
		 * radius[number]自定义输入框圆角弧度
		 * inputVal[string]自定义输入框文本
		 * placeholder[string]自定义输入框提示文本
		 * disabled[boolean]输入框是否禁用
		 * isDelShow[boolean]是否显示清除按钮
		 * 事件说明
		 * foucs[function]监听是否获取焦点返回boolean
		 */
		props: {
			mode: {
				value: Number,
				default: 1
			},
			radius: {
				value: String,
				default: 60
			},
			inputVal: {
				value: String,
				default: ''
			},
			placeholder: {
				value: String,
				default: '请输入搜索内容'
			},
			disabled: {
				value: Boolean,
				default: false
			},
			isDelShow: {
				value: Boolean,
				default: false
			}
		},
		data() {
			return {
				isFocus: false
			};
		},
		methods: {
			clear() {
				this.$emit('onClear', '');
			},
			onClick() {
				this.$emit("onClick", '');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.serach {
		display: flex;
		width: 100%;
		border-bottom: 1px #f5f5f5 solid;
		box-sizing: border-box;
		padding: 15upx;
		font-size: $uni-font-size-base;
		background: #fff;

		.content {
			display: flex;
			align-items: center;
			width: 100%;
			height: 60upx;
			border: 1px #ccc solid;
			background: #fff;
			overflow: hidden;
			transition: all 0.2s linear;
			border-radius: 30px;

			.content-box {
				width: 100%;
				display: flex;
				align-items: center;

				&.center {
					justify-content: center;
				}

				.icon {
					padding: 0 15upx;

					&.icon-del {
						font-size: 38upx;
					}
				}

				.input {
					width: 100%;
					max-width: 100%;
					line-height: 60upx;
					height: 60upx;
					transition: all 0.2s linear;

					&.center {
						width: 200upx;
					}

					&.sub {
						// position: absolute;
						width: auto;
						color: grey;
					}
				}
			}

			.serachBtn {
				height: 100%;
				flex-shrink: 0;
				padding: 0 30upx;
				background: #007aff;
				line-height: 60upx;
				color: #fff;
				border-left: 1px #ccc solid;
				transition: all 0.3s;
			}
		}

		.button {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			flex-shrink: 0;
			width: 0;
			transition: all 0.2s linear;
			white-space: nowrap;
			overflow: hidden;

			&.active {
				padding-left: 15upx;
				width: 100upx;
			}
		}
	}
</style>
