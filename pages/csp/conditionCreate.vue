<template>
	<view>
		<scroll-view :style="'height: '+scrollHeight+'px;width: 100%;'" scroll-y>
			<view class="uni-input-group">
				<tb-row-item label="施工状态" :required="true" :selection="true">
					<picker mode="selector" :value="radioValue" :range="radioSelectList" @change="radioChange">
						{{ radioSelectList[radioValue] }}
					</picker>
				</tb-row-item>
				<tb-row-item label="作业内容">
					<input class="tb-row-input" placeholder="请填写作业内容" />
				</tb-row-item>
				<tb-row-item label="施工部位">
					<input class="tb-row-input" placeholder="请填写施工部位" />
				</tb-row-item>
				<tb-row-item label="当前工序">
					<checkbox-group class="tb-row-group" @change="bindCheckbox">
						<view class="tb-row-group-item" v-for="(checkItem, checkKey) in HandleUser" :key="checkKey">
							<checkbox :value="checkItem.Value" :checked="checkItem.checked"></checkbox>
							<view class="tb-row-item-label">{{ checkItem.Text }}</view>
						</view>
					</checkbox-group>
				</tb-row-item>
				<tb-row-item label="现场影像">
					<view class="tb-row-image">
						<block v-for="(image, imgKey) in imageList" :key="imgKey">
							<view class="tb-row-image-item">
								<text class="iconfont icon-clear tb-row-image-item-clear" type="clear" @click="clearSelectImage(imgKey)"></text>
								<image class="tb-row-image-item-img" :src="image" :data-src="image" @tap="previewImage"></image>
							</view>
						</block>
						<view class="tb-row-image-box">
							<view class="tb-row-image-add" @tap="bindPicture"></view>
						</view>
					</view>
				</tb-row-item>
				<tb-row-item label="说明">
					<textarea class="tb-row-textarea" placeholder="请说明..."></textarea>
				</tb-row-item>
			</view>
		</scroll-view>
		<view class="btn-single">
			<button class="btn-single-next">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: 500,
				radioValue: 0,
				radioSelectList: ['施工中', '停工', '完工', '未施工'],
				HandleUser: [
					{Value:"qy","Text":"清淤","checked":true},
					{Value:"pt","Text":"抛填","checked":false},
					{Value:"gbz","Text":"钢板柱","checked":false},
					{Value:"jc","Text":"基槽处理","checked":false},
					{Value:"qt","Text":"其他","checked":false}
				],
				HandleAll: {
					"Value":"all",
					"Text":"全部",
					"checked": false
				},
				HandleIsAll: false,
				imageList: []
			}
		},
		methods: {
			radioChange(e) {
				this.radioValue = e.target.value;
			},
			bindCheckbox(e) {
				var hUsers = e.detail.value;
				// 设置选中状态
				for (var sh = 0; sh < this.HandleUser.length; sh++) {
					var shItem = this.HandleUser[sh];
					if (hUsers.includes(shItem.Value)) {
						shItem.checked = true;
					} else {
						shItem.checked = false;
					}
				}
				if (!this.HandleIsAll && hUsers.includes("all")) {
					// 设置“全选”状态
					this.HandleIsAll = true;
					hUsers = []
					for (var ch = 0; ch < this.HandleUser.length; ch++) {
						var chItem = this.HandleUser[ch];
						chItem.checked = true;
						hUsers.push(chItem.Value);
					}
				} else {
					if (this.HandleIsAll && !hUsers.includes("all")) {
						for (var hu = 0; hu < this.HandleUser.length; hu++) {
							var huItem = this.HandleUser[hu];
							huItem.checked = false;
						}
						hUsers = [];
					}
					this.HandleIsAll = false;
				}
				// 根据子选项，自动设置“全选”状态
				var allFlag = true;
				for (var ah = 0; ah < this.HandleUser.length; ah++) {
					var ahItem = this.HandleUser[ah]
					if ("all" != ahItem.Value && !ahItem.checked) {
						allFlag = false;
						break
					}
				}
				var hfItem = this.HandleUser.find(function(hf){
					return "all" === hf.Value;
				})
				if (hfItem) { hfItem.checked = allFlag; }
				if (allFlag) { this.HandleIsAll = true; }
				if (hUsers.includes("all")) { hUsers.shift(); }
				// console.log("this.HandleUser: " + JSON.stringify(this.HandleUser));
				// console.log("hUsers: " + JSON.stringify(hUsers));
			},
			clearSelectImage(index) {
				this.imageList.splice(index, 1);
			},
			previewImage(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			bindPicture() {
				if (this.imageList.length === 5) {
					uni.showModal({
						content: "已经有5张图片了,是否清空现有图片？",
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
								uni.chooseImage({
									count: 5 - this.imageList.length,
									success: (res) => {
										//console.log("imgPaths => "+ JSON.stringify(res.tempFilePaths))
										this.imageList = this.imageList.concat(res.tempFilePaths);
									}
								})
							}
						}
					})
				} else {
					uni.chooseImage({
						count: 5 - this.imageList.length,
						success: (res) => {
							//console.log("imgPaths => "+ JSON.stringify(res.tempFilePaths))
							this.imageList = this.imageList.concat(res.tempFilePaths);
						}
					})
				}
			}
		},
		onLoad() {
			this.HandleUser.unshift(this.HandleAll)
			this.scrollHeight = uni.getSystemInfoSync().windowHeight - 70;
		}
	}
</script>

<style>
</style>
