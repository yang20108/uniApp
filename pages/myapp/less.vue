<template>
	<view>
		<view class="_jiao">用 @ 符号来声明变量</view>
		<view class="box">less变量还可以作为属性名字</view>
		<view class="inner">变量可以在外部声明，也可以在内部声明</view>
		<view class="nesting">嵌套 Nesting
			<view class="_nest">内部</view>
		</view>
		<view class="mixins">Mixins 不传值</view>
		<view class="mixins2">Mixins 传值</view>
		<view class="son">继承一 :extend</view>
		<view class="son2">继承二 :extend</view>
		<view class="son3">继承三 :extend</view>
		<view class="operations">运算 Operations</view>
	</view>
</template>

<script>

</script>

<style lang="less">
	/**
	 * 教程：https://www.cnblogs.com/didamehulayou/p/11185742.html
	 * 语法：
	 * 
	 */

	/* 变量 Variables */
	// less用 @ 符号来声明变量（注意一定要;结束）
	@color: #FF0000;

	._jiao {
		border: 1px dashed #00B26A;
		color: @color;
	}

	// less变量还可以作为属性名字:
	// 作为属性值调用时：@变量名
	// 作为属性名调用时：@{变量名}
	// 语法 @{name}
	.box {
		position: relative;
		@lf: left;
		@bgc: background-color;
		margin-@{lf}: 20px;
		@{bgc}: #6887ee;
	}

	// 变量可以在外部声明，也可以在内部声明
	@width: 200px;

	.inner {
		@bgc2: #aaffff;
		width: @width;
		color: #FFFFFF;
		background-color: @bgc2;
	}

	// 嵌套 Nesting
	// 可以在一个选择器中嵌套另一个选择器来实现继承，这样很大程度减少了代码量，使代码看起来更加的清晰。
	// & 表示选择父元素
	.nesting {
		height: 120px;
		background-color: #d6d133;
		text-align: center;

		@bf: 70%;

		._nest {
			width: @bf;
			height: @bf;
			margin: auto;
			background-color: #8ccf10;

			&:active {
				color: #5555ff;
			}

			/* &:hover {
				color: #5555ff;
			} */
		}
	}

	// 混合 Mixins
	// 混合可以将一个定义好的class A轻松的引入到另一个class B中，从而简单实现class B继承class A中的所有属性。
	// 我们还可以带参数地调用，就像使用函数一样。
	.bg(@bg: #f00) { // 也可以定义多个变量参数
		background-color: @bg;
	}
	.mixins{
		.bg; // 写法1
		// .bg(); // 写法2
	}
	.mixins2{
		.bg(#0f0); // //带参数调用
		width: 50%;
	}
	// @arguments 表示多个变量
	.shadow (@x,@y,@b,@c){
	    -webkit-box-shadow:@arguments;
	    -moz-box-shadow: @arguments;
	    -o-box-shadow:@arguments;
	    -ms-box-shadow: @arguments;
	    box-shadow: @arguments;
	}
	.box{
	    .shadow(1px,1px,2px,#f00);
	}

	// 继承 :extend()
	// 继承Extend，它允许一个选择器继承另一个选择器的样式。
	par {
		font-size: 22px;
		font-style: oblique;
	}
	par2 {
		font-weight: bold;
	}
	.son:extend(par) {
		background-color: #7dffad;
	}
	.son2 {
		&:extend(par);
		background-color: #00ff7f;
	}
	// 一个选择器还可以继承多个选择器的样式
	.son3:extend(par, par2) {
		background-color: #00B26A;
	}

	// 运算 Operations
	// less运算提供了加，减，乘，除操作；我们可以做属性值和颜色的运算，这样就可以实现属性值之间的复杂关系
	@the-border: 1px;
	@base-color: #332233;
	@red: #842210;
	.operations {
		color: @base-color * 3;
		border: @the-border solid #007AFF;
		border-bottom: @the-border * 2 solid #007AFF;
	}

	// 引入 Importing
	// 你可以在当前文件中通过下面的形势引入 .less 文件, .less 后缀可带可不带
	/* @import "lib.less"; */
	/* @import "lib"; */
	// 如果你想导入一个CSS文件而且不想LESS对它进行处理，只需要使用.css后缀就可以,这样LESS就会跳过它不去处理它
	/* @import "lib.css"; */
</style>
