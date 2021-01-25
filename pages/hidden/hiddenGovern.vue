<template>
	<view class="wrap">
		<time-line>
			<time-line-item nodeTop="2" bgColor="#f4f5f6">
				<template v-slot:node>
					<view class="han-line-icon han-line-bgc">检查</view>
				</template>
				<template v-slot:content>
					<view class="han-info">
						<early-info-item rowTitle="检查时间" rowValue="2020-05-27 10:11:32"></early-info-item>
						<early-info-item rowTitle="检查人" rowValue="李明"></early-info-item>
						<early-info-item rowTitle="检查单位" rowValue="某某施工公司"></early-info-item>
						<early-info-item rowTitle="隐患等级" rowValue="Ⅱ级"></early-info-item>
						<early-info-item rowTitle="施工部位" rowValue="附属1号出入口旁排污方涵围护桩施工"></early-info-item>
						<early-info-item rowTitle="隐患内容" rowValue="附属1号风亭及1号出入口，附属结构内侧墙渗漏水未及时处理"></early-info-item>
						<early-imgs :imgs="ImageList"></early-imgs>
					</view>
				</template>
			</time-line-item>
			<time-line-item v-if="false">
				<template v-slot:content>
					<view>中间某过程流程</view>
				</template>
			</time-line-item>
			<time-line-item v-if="'LJFH'===typeId||'LJBH'===typeId" nodeTop="2" bgColor="#f4f5f6">
				<template v-slot:node>
					<view class="han-line-icon han-line-bgc">处理</view>
				</template>
				<template v-slot:content>
					<view class="han-info" style="border-radius: 5px 5px 0px 0px;">
						<early-info-item rowTitle="处理时间" rowValue="2020-05-27 13:11:43"></early-info-item>
						<early-info-item rowTitle="处理人" rowValue="王明"></early-info-item>
						<early-info-item rowTitle="处理单位" rowValue="某某施工公司"></early-info-item>
						<early-info-item rowTitle="处理措施" rowValue="已经处理完成"></early-info-item>
						<early-imgs :imgs="ImageList"></early-imgs>
					</view>
					<view class="han-info-bom">
						<view class="han-guo-text" @click="toHandleProcess">处理过程</view>
					</view>
				</template>
			</time-line-item>
			<time-line-item v-if="'LJBH'===typeId" nodeTop="2" bgColor="#f4f5f6">
				<template v-slot:node>
					<view class="han-line-icon han-line-bgc">复核</view>
				</template>
				<template v-slot:content>
					<view class="han-info" style="border-radius: 5px 5px 0px 0px;">
						<early-info-item rowTitle="复核时间" rowValue="2020-05-27 13:11:43"></early-info-item>
						<early-info-item rowTitle="复核人" rowValue="王明"></early-info-item>
						<early-info-item rowTitle="复核单位" rowValue="某某施工公司"></early-info-item>
						<early-info-item rowTitle="复核内容" rowValue="复核通过"></early-info-item>
						<early-imgs :imgs="ImageList"></early-imgs>
					</view>
					<view class="han-info-bom">
						<view class="han-guo-text" @click="toHandleProcess">复核过程</view>
					</view>
				</template>
			</time-line-item>
			<time-line-item bgColor="#f4f5f6">
				<template v-slot:node>
					<view v-if="'LJZL'===typeId" class="han-line-icon han-line-bgc2">处理</view>
					<view v-if="'LJFH'===typeId" class="han-line-icon han-line-bgc2">复核</view>
					<view v-if="'LJBH'===typeId" class="han-line-icon han-line-bgc2">闭合</view>
				</template>
				<template v-slot:content>
					<view v-if="typeId" class="han-info uni-input-group">
						<!-- #ifdef APP-PLUS -->
						<tb-row-textarea class="tb-row-item_after" :label="'LJZL'===typeId?'处理措施':'复核信息'" @bindRecognize="startRecognize">
						<textarea class="tb-row-textarea" v-model="CheckContentHandleModel.Content" maxlength="300" placeholder="请输入..."></textarea>
						</tb-row-textarea>
						<!-- #endif -->
						<!-- #ifdef H5 -->
						<tb-row-item class="tb-row-item_after" :label="'LJZL'===typeId?'处理措施':'复核信息'">
						<textarea class="tb-row-textarea" v-model="CheckContentHandleModel.Content" maxlength="300" placeholder="请输入..."></textarea>
						</tb-row-item>
						<!-- #endif -->
						<tb-row-item label="图片" :required="true">
							<view class="tb-row-image">
								<block v-for="(item, index) in CheckContentHandleModel.HandleFiles" :key="index"
								 :data-url="CheckContentHandleModel.HandleFiles[index]">
									<view class="tb-row-image-item" style="width: 44% !important;">
										<text style="font-size: 22px;" class="tmicon tm-clear1 tb-row-image-item-clear" type="clear" @click="clearImage(index)"></text>
										<image class="tb-row-image-item-img" :src="CheckContentHandleModel.HandleFiles[index]"></image>
									</view>
								</block>
								<view class="tb-row-image-box" @tap="bindPicture">
									<view class="cuIcon-cameraadd tb-row-image-box-add"></view>
								</view>
							</view>
						</tb-row-item>
					</view>
				</template>
			</time-line-item>
		</time-line>
		<button v-if="'LJZL'===typeId" class="btn-single-next" @click="bindSubmit">提交复核</button>
		<view v-if="'LJFH'===typeId" class="btn-double">
			<button class="btn-double-pro btn-cancel-bgc" @click="bindSubmit">不通过</button>
			<button class="btn-double-pro btn-confirm-bgc" @click="bindSubmit">提交闭合</button>
		</view>
		<view v-if="'LJBH'===typeId" class="btn-double">
			<button class="btn-double-pro btn-cancel-bgc" @click="bindSubmit">不通过</button>
			<button class="btn-double-pro btn-confirm-bgc" @click="bindSubmit">闭合</button>
		</view>
	</view>
</template>

<script>
	import timeLine from "../../components/time-line/time-line.vue"
	import timeLineItem from "../../components/time-line/time-line-item.vue"
	import earlyInfoItem from "../../components/early-warning/early-info-item.vue"
	import earlyImgs from "../../components/early-warning/early-imgs.vue"
	export default {
		data() {
			return {
				ImageList: [
					"../../static/img/sztd_grid_1.jpg",
					"../../static/img/sztd_grid_2.jpg",
					"../../static/img/sztd_grid_3.jpg"
				],
				CheckContentHandleModel: {
					Content: "",
					HandleFiles: []
				},
				typeId: ""
			}
		},
		methods: {
			bindSubmit: function() {
				let that = this;
				uni.getNetworkType({
					success(succ) {
						// 提交无网络时，数据保存本地
						if ("none" === succ.networkType) {
							uni.showToast({ icon:"none",title:"数据已保存" });
						} else {
							// 隐患治理保存
						}
						setTimeout(function() {
							uni.navigateBack({ delta: 1 })
						}, 1200);
					}
				})
			},
			startRecognize: function() {
				var options = {};
				var that = this;
				options.engine = 'baidu';
				plus.speech.startRecognize(options, function(s) {
					that.CheckContentHandleModel.Content += s;
				}, function(e) {
					console.log("语音识别失败：" + e.message);
					plus.speech.stopRecognize();
				});
			},
			bindPicture() {
				if (this.CheckContentHandleModel.HandleFiles.length === 5) {
					uni.showModal({
						content: '已经有5张图片了,是否清空现有图片？',
						success: e => {
							if (e.confirm) {
								this.CheckContentHandleModel.HandleFiles = [];
								uni.chooseImage({
									count: 5 - this.CheckContentHandleModel.HandleFiles.length,
									sourceType: ["camera"],
									success: res => {
										//console.log("imgPaths => "+ JSON.stringify(res.tempFilePaths))
										this.CheckContentHandleModel.HandleFiles = this.CheckContentHandleModel.HandleFiles.concat(res.tempFilePaths);
									}
								});
							}
						}
					});
				} else {
					uni.chooseImage({
						count: 5 - this.CheckContentHandleModel.HandleFiles.length,
						sourceType: ["camera"],
						success: res => {
							//console.log("imgPaths => "+ JSON.stringify(res.tempFilePaths))
							this.CheckContentHandleModel.HandleFiles = this.CheckContentHandleModel.HandleFiles.concat(res.tempFilePaths);
						}
					});
				}
			},
			clearImage: function(index) {
				this.CheckContentHandleModel.HandleFiles.splice(index, 1);
			},
			toHandleProcess() {}
		},
		components: {
			timeLine,
			timeLineItem,
			earlyInfoItem,
			earlyImgs
		},
		onLoad(load) {
			if (load.typeId) {
				this.typeId = load.typeId;
			}
		}
	}
</script>

<style>
</style>
