<template>
	<view>
		<scroll-view :style="'height: '+scrollHeight+'px;width: 100%;'" scroll-y>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(proItem,proKey) in procedureCheckList" :key="proKey">
					<view class="uni-list-cell-navigate uni-list-cell-navigate-item">
						{{proItem.name}}
					</view>
					<radio-group class="check-radio-group" @change="bindRadioChange">
						<radio class='pro-check' :checked="'0'===proItem.value?true:false" :value="proItem.id+',0'">
							<view class="check-radio-block" :style="'0'===proItem.value?'color: #FFFFFF':''">已落实</view>
						</radio>
						<radio class='pro-check' :checked="'1'===proItem.value?true:false" :value="proItem.id+',1'">
							<view class="check-radio-block" :style="'1'===proItem.value?'color: #FFFFFF':''">未落实</view>
						</radio>
					</radio-group>
				</view>
			</view>
		</scroll-view>
		<view class="btn-single">
			<button class="btn-single-next" @click="bindSure">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: 500,
				procedureCheckList: [{
						"id": "0",
						"name": "机械伤害、起重吊装",
						"value": "0"
					}, {
						"id": "1",
						"name": "坍塌、起重伤害、高处坠落、大风、雷击、大雾",
						"value": "0"
					}, {
						"id": "2",
						"name": "钢箱梁桥面吊机吊装",
						"value": "0"
					},
					{
						"id": "3",
						"name": "中铁隧道局集团有限公司",
						"value": "0"
					},
					{
						"id": "4",
						"name": "深中通道安全风险动态管控系统深中通道安全风险动态管控系统深中通道安全风险动态管控系统",
						"value": "0"
					}
				]
			}
		},
		methods: {
			bindRadioChange(e) {
				var keyValue = e.detail.value.split(","); // value: id,value 由id和value值组成
				for (var i = 0; i < this.procedureCheckList.length; i++) {
					var proI = this.procedureCheckList[i];
					if (keyValue[0] === proI.id) {
						proI.value = keyValue[1];
					}
				}
			},
			bindSure() {
				console.log("this.procedureCheckList: " + JSON.stringify(this.procedureCheckList));
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "管控措施"
			})
			this.scrollHeight = uni.getSystemInfoSync().windowHeight - 70;
		}
	}
</script>

<style>
	.check-radio-group {
		font-size: 16px;
		width: 25%;
	}
</style>
