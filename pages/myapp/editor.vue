<template>
	<view class="container">
		<editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady" @input="input"></editor>
		<button type="warn" @tap="undo">撤销</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				placeholder: '开始输入...',
				text: "123<a style='font-size: 16px;color: #000000;'>aaaaa<span style='color: #0081FF;'>bbb</span></a>",
				contentHtml: "",
				contentText: "",
			}
		},
		methods: {
			input(e) {
				this.contentHtml = e.detail.html;
				this.contentText = e.detail.text;
			},
			onEditorReady() {
				// #ifdef MP-BAIDU
				this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
				// #endif

				// #ifdef APP-PLUS || H5 ||MP-WEIXIN
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context;
					// 将内容写入编辑器
					let EContent = {
					    html: this.text
					}
					this.editorCtx.setContents(EContent); //设置富文本编辑器的内容
				}).exec()
				// #endif
			},
			undo() {
				console.log("contentHtml: ",this.contentHtml);
				console.log("contentText: ",this.contentText);
				return;
				this.editorCtx.undo()
			}
		}
	}
</script>

<style>
	.container {
		padding: 10px;
	}

	#editor {
		width: 100%;
		height: 300px;
		background-color: #CCCCCC;
	}

	button {
		margin-top: 10px;
	}
</style>
