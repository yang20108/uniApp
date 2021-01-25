<template>
	<view style="height: 100%;display: flex;flex-direction: column;justify-content: space-between;">
		<view style="height: 50px;line-height: 50px;text-align: center;background-color: #BDF0FD;">本页面使用自适应填充高度，不是计算高度</view>
		<scroll-view style="height: 100%;overflow-y: scroll;" scroll-y>
			<view class="uni-input-group">
				<tb-row-item label="名称" :required="true">
					<view :style="disabled?'':'background: #f8f8f8;'">
						<input type="text" :disabled="disabled" :value="nameValue" :placeholder="disabled?'':'请说明...'" />
					</view>
				</tb-row-item>
				<tb-row-item label="类型" :required="true" :selection="true">
					<picker mode="selector" @change="selectorChange" :value="selectorValue" :range="selectorList">
						{{ selectorList[selectorValue] }}
					</picker>
				</tb-row-item>
				<tb-row-item label="日期" :selection="true">
					<picker mode="date" :start="startDate" :end="endDate" :value="todayDate" @change="dateChange">
						<view>{{todayDate}}</view>
					</picker>
				</tb-row-item>
				<tb-row-item label="渠道">
					<radio-group class="tb-row-group" @change="radioChange">
						<view class="tb-row-group-item" v-for="(rd, rIndex) in radioList" :key="rIndex">
							<radio :value="rIndex+''" :checked="rd.checked"></radio>
							<view class="tb-row-item-label">{{ rd.label }}</view>
						</view>
					</radio-group>
				</tb-row-item>
				<tb-row-item label="偶像">
					<checkbox-group class="tb-row-group" @change="checkboxChange">
						<view class="tb-row-group-item" v-for="(cb, cIndex) in checkboxList" :key="cIndex">
							<checkbox :value="cIndex+''" :checked="cb.checked"></checkbox>
							<view class="tb-row-item-label" @click="onLabel(cb.img)">{{ cb.label }}</view>
						</view>
					</checkbox-group>
				</tb-row-item>
				<tb-row-item label="影像">
					<view class="tb-row-image">
						<block v-for="(image, imgKey) in imageList" :key="imgKey">
							<view class="tb-row-image-item">
								<text class="tmicon tm-clear tb-row-image-item-clear" type="clear" @click="clearSelectImage(imgKey)"></text>
								<image class="tb-row-image-item-img" :src="image" :data-src="image" @tap="previewImage"></image>
							</view>
						</block>
						<view class="tb-row-image-box">
							<view class="tb-row-image-add" @tap="bindPicture"></view>
						</view>
					</view>
				</tb-row-item>
				<tb-row-item label="备注">
					<textarea class="tb-row-textarea" maxlength="1000" placeholder="请说明..." v-model="Mark"></textarea>
				</tb-row-item>
			</view>
		</scroll-view>
		<button class="btn-tabel" type="primary" @click="tabelConfirm">确认</button>
	</view>
</template>

<script>
	import tbRowItem from "@/components/tb-row-item/tb-row-item.vue";
	import tools from '../../common/tools.js'
	export default {
		components: {
			tbRowItem
		},
		data() {
			return {
				disabled: true,
				nameValue: "禽兽超人",
				selectorList: ['动漫', '搞笑', '青年', '共鸣'],
				selectorValue: 0,
				startDate: '2019-05-20',
				todayDate: tools.date(),
				radioList: [{
					label: '官网',
					checked: false
				}, {
					label: '腾讯视频',
					checked: false
				}, {
					label: '小视频',
					checked: false
				}, {
					label: '其他',
					checked: false
				}],
				radioSelect: 0,
				checkboxList: [{
					id: '1',
					label: "否否",
					img: '../../static/img/animalsCat.jpg',
					checked: false
				}, {
					id: '2',
					label: "李镇长",
					img: '../../static/img/animalsCat2.jpg',
					checked: false
				}, {
					id: '3',
					label: "贾巨发",
					img: '../../static/img/animalsDog2.jpg',
					checked: false
				}, {
					id: '4',
					label: "柳秘书",
					img: '../../static/img/animalsRabbit.jpg',
					checked: false
				}],
				checkboxSelectList: [],
				imageList: [],
				Mark: ''
			};
		},
		methods: {
			selectorChange: function(e) {
				//console.log("e.value => "+ e.target.value);
				this.selectorValue = e.target.value;
			},
			dateChange: function(e) {
				this.todayDate = e.target.value;
			},
			radioChange: function(e) {
				for (let i = 0; i < this.radioList.length; i++) {
					if (this.radioList[i].value === e.target.value) {
						this.radioSelect = i;
						break;
					}
				}
			},
			checkboxChange: function(e) {
				var values = e.target.value,
					items = this.checkboxList;
				this.checkboxSelectList = [];
				for (var i = 0; i < items.length; i++) {
					items[i].checked = false;
					for (var j = 0; j < values.length; j++) {
						if (items.indexOf(items[i]) == values[j]) {
							items[i].checked = true;
							this.checkboxSelectList.push(items[i])
							break
						}
					}
				}
				// console.log("this.checkboxSelectList: " + JSON.stringify(this.checkboxSelectList));
			},
			onLabel: function(url) {
				var imgLists = [];
				for (var i = 0; i < this.checkboxList.length; i++) {
					imgLists.push(this.checkboxList[i].img);
				}
				uni.previewImage({
					current: url,
					urls: imgLists
				});
			},
			clearSelectImage: function(index) {
				this.imageList.splice(index, 1);
			},
			previewImage: function(e) {
				var current = e.target.dataset.src;
				uni.previewImage({
					current: current,
					urls: this.imageList
				});
			},
			bindPicture: function() {
				if (this.imageList.length === 5) {
					uni.showModal({
						content: '已经有5张图片了,是否清空现有图片？',
						success: e => {
							if (e.confirm) {
								this.imageList = [];
								uni.chooseImage({
									count: 5 - this.imageList.length,
									success: res => {
										//console.log("imgPaths => "+ JSON.stringify(res.tempFilePaths))
										this.imageList = this.imageList.concat(res.tempFilePaths);
									}
								});
							}
						}
					});
				} else {
					uni.chooseImage({
						count: 5 - this.imageList.length,
						success: res => {
							//console.log("imgPaths => "+ JSON.stringify(res.tempFilePaths))
							this.imageList = this.imageList.concat(res.tempFilePaths);
						}
					});
				}
			},
			tabelConfirm: function() {
				var tabelInfo = {
					name: this.nameValue,
					type: this.selectorList[this.selectorValue],
					date: this.todayDate,
					find: this.radioList[this.radioSelect],
					like: this.checkboxSelectList,
					image: this.imageList,
					mark: this.Mark
				}
				uni.showModal({
					title: '信息',
					content: JSON.stringify(tabelInfo),
					showCancel: false,
					confirmText: '确定',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		computed: {
			endDate: function() {
				let now = new Date();
				var month = now.getMonth() + 1
				if (1 === month.toString().length) {
					month = "0" + month;
				}
				var day = now.getDate();
				day += 5;
				if (1 === day.toString().length) {
					day = "0" + day;
				}
				return now.getFullYear() + "-" + month + "-" + day;
			}
		},
		onLoad() {
			//this.addProperty()
		}
	}
</script>

<style>
	.btn-tabel {
		margin: 10px 5px 5px 5px;
		border-radius: 50px;
		background: linear-gradient(to left, #19EFEF, #59E8E2);
	}
</style>
