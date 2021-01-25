<template>
	<view>
		<view>view</view>
		<scroll-view style="height: 80px; width: 450px; background-color: #AF9DFC;">
			scroll-view
		</scroll-view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">swiper1</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">swiper2</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">swiper2</view>
			</swiper-item>
		</swiper>
		<movable-area style="width: 300px;">
			<movable-view style="background-color: #8F8F94;height: 100px; width: 100px;" direction='all' scale="true">movable</movable-view>
		</movable-area>
		<text selectable="true">可选，不信试试</text>
		<text> 不可选，不信试试</text>
		<rich-text :nodes="nodes"></rich-text>
		<progress percent='34' show-info='true' stroke-width=8 activeColor='#AF9DFC'>progress</progress>
		<button type="primary">button</button>
		<label class="checkbox">
			checkbox:
			<checkbox value="checkbox" checked='' />
		</label>
		<input type="text" value="input" />
		<picker mode="time" start="09:00" end="10:30" @change="timeChange">
			<view>日期选择器：{{time}}</view>
		</picker>
		<radio-group @change="radioChange">
			radio
			<label class="radio" v-for="rd in radios" :key="rd.value">
				{{rd.value}}
				<radio :value="rd.name" :checked='rd.checked' />
			</label>
		</radio-group>
		slider<slider step="5" max="100" show-value="true" value="23"></slider>
		<switch checked="true">switch</switch>
		<textarea class="textarea" value="textarea" placeholder="placeholder">textarea</textarea>
		<navigator url="test" hover-class="navigator-hover">
			navigator 跳转页面
			<!-- <button type="default">页面链接</button> -->
		</navigator>
		<image style="width: 50px;height: 50px;" src="../../static/logo.png">image</image>
		<canvas style="width: 300px; height: 80px;">canvas</canvas>
		<!-- <web-view src="http://uniapp.dcloud.io">
			web-view 是一个 web 浏览器组件，可以用来承载网页的容器，会自动铺满整个页面。
		</web-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nodes: [{
					name: 'div',
					attrs: {
						class: 'div_class',
						style: 'line-height: 60px; color: red;'
					},
					children: [{
						type: 'text',
						text: 'rich-text!'
					}]
				}],
				time: '09:00',
				radios: [{
						name: 'USA',
						value: '美国'
					},
					{
						name: 'CHN',
						value: '中国',
						checked: true
					},
					{
						name: 'BRA',
						value: '巴西'
					}
				]
			}
		},
		methods: {
			timeChange: function(evt) {
				this.time = evt.detail.value;
			}
		}
	}
</script>

<style>
	.textarea {
		border: 2px;
		border-color: #8F8F90;
		height: 30px;
		margin-bottom: 4px;
	}

	.audio {
		text-align: center;
	}
</style>
