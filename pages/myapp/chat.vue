<template>
	<view class="uni-column">
		<view class="content" id="content" :style="{height:style.contentViewHeight+'px'}">
			<scroll-view id="scrollview" :style="{height:style.contentViewHeight+'px'}" :scroll-top="chatObj.scrollTop"
			 :scroll-with-animation="true" scroll-y="true">
				<chat-message v-for="(message,index) in messagesList" :key="index" :message="message" :cid="index" :aiIcon="dataList[dataIndex].icon"
				 myIcon="../../static/img/animalsRabbit.jpg" :borderRadius="chatObj.borderRadius" @long-top="longTop(message.content)"></chat-message>
				<view id="bottom"></view>
			</scroll-view>
		</view>
		<view class="foot">
			<chat-input @send-message="getInputMessage" @focus="inputGetFocus"></chat-input>
		</view>
		<uni-drawer :visible="showRigth" mode="right">
			<view class="card-my-info">
				<image class="card-img" src="../../static/img/yangk.jpg" :style="chatObj.borderRadius?'border-radius: 50px;':''"></image>
				<view class="card-margin-left">
					<view class="card-info-title">杨k</view>
					<view class="card-info-mark">开发者</view>
				</view>
			</view>
			<view class="card-list-item first-child" :style="true?'margin-top: 10px;':''" @click="changeDataList" hover-class="chat-cell-hover">
				<view class="card-item-li"></view>
				<view class="card-item-title">换人聊天</view>
				<text class="tmicon tm-right1 tm-font-right"></text>
			</view>
			<view class="card-radio-group animated magictime" :class="classDataList?'boingInUp':'boingOutDown'" v-if="showDataList">
				<radio-group @change="changeRadioGroup">
					<view class="card-list-item2" :class="dataList.length-1===dataKey?'last-child':''" v-if="data.key" v-for="(data, dataKey) in dataList"
					 :key="dataKey" @click="bindRadioGroup(data.key)" hover-class="chat-cell-hover">
						<image class="card-data-icon" :style="chatObj.borderRadius?'border-radius: 50px;':''" :src="data.icon"></image>
						<view class="card-item-title">{{data.username}}</view>
						<radio :checked="dataIndex===dataKey" :value="data.key" color="#57A6F4"></radio>
					</view>
				</radio-group>
			</view>
			<view class="card-list-item" @click="clearChatData" hover-class="chat-cell-hover">
				<view class="card-item-li"></view>
				<view class="card-item-title">清空聊天记录</view>
				<text class="tmicon tm-right1 tm-font-right"></text>
			</view>
			<view class="card-list-item" @click="longTop('杨坤')" hover-class="chat-cell-hover">
				<view class="card-item-li"></view>
				<view class="card-item-title">打小鱼</view>
				<text class="tmicon tm-right1 tm-font-right"></text>
			</view>
			<view class="card-list-item first-child" :style="true?'margin-top: 10px;':''">
				<view class="card-item-li"></view>
				<view class="card-item-title">设置图像圆角</view>
				<switch class="chat-switch" :checked="chatObj.borderRadius" @change="bindBorderRadius" color="#57A6F4"></switch>
			</view>
			<view class="card-list-item" @click="toLockNumber('')" hover-class="chat-cell-hover">
				<view class="card-item-li"></view>
				<view class="card-item-title">{{saveLock?"修改密码":"设置密码"}}</view>
				<text class="tmicon tm-right1 tm-font-right"></text>
			</view>
			<view class="card-list-item" v-if="saveLock" @click="toLockNumber('close')" hover-class="chat-cell-hover">
				<view class="card-item-li"></view>
				<view class="card-item-title">关闭密码</view>
				<text class="tmicon tm-right1 tm-font-right"></text>
			</view>
			<view class="card-list-version">版本：v1.0.0</view>
		</uni-drawer>
	</view>
</template>

<script>
	import chatInput from "@/components/custom-tools/chat-input.vue";
	import chatMessage from "@/components/custom-tools/chat-message.vue";
	import uniDrawer from "../../components/custom-tools/uni-drawer.vue"
	import service from "../../common/service.js"

	export default {
		data() {
			return {
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					mitemHeight: 0,
				},
				chatObj: {
					scrollTop: 0,
					borderRadius: false
				},
				messages: {
					"user": "home",
					"content": "你好呀！"
				},
				messagesList: [],
				dataIndex: 0,
				dataList: [{
					"key": "347b39ee228b4b109dae7270cc08d3c8",
					"userid": "",
					"icon": "../../static/img/animalsCat.jpg",
					"username": "小默"
				}, {
					"key": "acfbca724ea1b5db96d2eef88ce677dc",
					"userid": "uni-test",
					"icon": "../../static/img/animalsRabbit2.jpg",
					"username": "小test"
				}, {
					"key": "00af5f988608401fa2d4030958f046ae",
					"userid": "",
					"icon": "../../static/img/animalsCat2.jpg",
					"username": "吖头"
				}, {
					"key": "ca2338242158489490f07d4e2a9b67be",
					"userid": "",
					"icon": "../../static/img/animalsDog2.jpg",
					"username": "臭臭"
				}],
				showRigth: false,
				showDataList: false,
				classDataList: false,
				saveLock: false,
				lockStr: ""
			}
		},
		methods: {
			longTop(content) {
				var indOf = content.indexOf("杨坤");
				if (0 <= indOf) {
					uni.navigateTo({
						url: "./games"
					})
				}
				this.closeRigth();
			},
			changeRadioGroup(e) {
				this.bindRadioGroup(e.detail.value);
			},
			bindRadioGroup(dataKey) {
				for (var i = 0; i < this.dataList.length; i++) {
					var dataI = this.dataList[i];
					if (dataKey === dataI.key) {
						this.dataIndex = i;
						break;
					}
				}
				this.getDataInfo(this.dataIndex);
				this.closeRigth();
				this.showDataList = false;
			},
			changeDataList() {
				if (this.showDataList && this.classDataList) {
					this.classDataList = false;
					let that = this;
					setTimeout(function() {
						that.showDataList = false;
					}, 800);
				} else {
					this.classDataList = true;
					this.showDataList = true;
				}
			},
			getInputMessage: function(message) { //获取子组件的输入数据
				console.log("message: " + JSON.stringify(message));
				this.addMessage('customer', message.content);
				this.toRobot(message.content);
			},
			addMessage: function(user, content) {
				var that = this;
				that.messagesList.push({
					user: user,
					content: content
				});
			},
			scrollToBottom: function() {
				var that = this;
				var query = uni.createSelectorQuery();
				query.select('#scrollview').boundingClientRect();

				query.exec(function(res) {
					// console.log("res: " + JSON.stringify(res));
					that.style.mitemHeight += res[0].height + 20;
					if (that.style.mitemHeight > that.style.contentViewHeight) {
						that.chatObj.scrollTop += that.style.mitemHeight - that.style.contentViewHeight;
					}
					// 保存聊天记录显示高度scrollTop
					service.setChatObject(that.chatObj, that.dataList[that.dataIndex].key);
				});
			},
			toRobot: function(info) {
				var item = this.dataList[this.dataIndex];
				uni.request({
					url: "http://www.tuling123.com/openapi/api",
					data: {
						"key": item.key,
						"info": info
					},
					// console.log("data: " + JSON.stringify(data));
					success: (res) => {
						// console.log("res: " + JSON.stringify(res));
						if (200 === res.statusCode) {
							console.log('request success => ' + res.data.text);
							var frequency = res.data.text.indexOf("请求次数已用完");
							if (0 <= frequency) {
								res.data.text = item.username + "出去玩了，下次再聊吧。";
							}
							var httpsIndex = res.data.text.indexOf("http");
							if (0 <= httpsIndex) {
								res.data.text = "没词啦？那我回去继续打小鱼了~";
							}
							var fishIndex = info.indexOf("打小鱼");
							if (0 <= fishIndex) {
								this.addMessage('home', "哈哈哈，打小鱼是开发者设计的隐藏功能，也叫APP彩蛋。");
								res.data.text = "打小鱼就在这里面的某个地方，快去发现找到它吧。";
							}
							this.addMessage('home', res.data.text);
						} else {
							this.addMessage('home', item.username + "出去玩了，下次再聊吧。");
							console.log('request ' + res.statusCode + ' => ' + res.data.text);
						}
						// 实施保存聊天记录，防止非正常退出
						service.removeChatDataList(item.key);
						service.setChatDataList(this.messagesList, item.key);
						this.scrollToBottom();
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: "请检查当前网络状态！",
							showCancel: false
						})
					}
				});
			},
			getDataInfo(index) {
				var data = this.dataList[index];
				// console.log("data: " + JSON.stringify(data));
				if (data) {
					// 加载聊天记录
					this.messagesList = service.getChatDataList(data.key) ? service.getChatDataList(data.key) : [];
					this.messagesList.push(this.messages);
					// 加载个人设置
					if (service.getChatObject(data.key)) {
						this.chatObj = service.getChatObject(data.key);
					} else {
						this.chatObj = {
							"scrollTop": 0,
							"borderRadius": false
						}
					}
					uni.setNavigationBarTitle({
						title: data.username
					})
				}
			},
			bindBorderRadius(e) {
				this.chatObj.borderRadius = e.detail.value;
				service.setChatObject(this.chatObj, this.dataList[this.dataIndex].key);
				this.closeRigth();
			},
			clearChatData() {
				var dataI = this.dataList[this.dataIndex];
				service.removeChatDataList(dataI.key);
				this.messagesList = [this.messages];
				// 保存聊天记录显示高度scrollTop
				this.chatObj.scrollTop = 20;
				service.setChatObject(this.chatObj, dataI.key);
				uni.showToast({
					title: '已清空聊天记录。',
					icon: 'none'
				});
				this.closeRigth();
			},
			toLockNumber(check) {
				uni.navigateTo({
					url: './lockNumber?lockClose=' + check
				});
				this.closeRigth();
			},
			closeRigth() {
				if (this.showRigth) {
					this.showRigth = false;
				}
			}
		},
		components: {
			chatInput,
			chatMessage,
			uniDrawer
		},
		onNavigationBarButtonTap() {
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
			this.showRigth = !this.showRigth;
		},
		onBackPress() {
			if (this.showRigth) {
				this.showRigth = false;
				return true;
			}
		},
		onShow() {
			this.lockStr = service.getChatLock();
			if (this.lockStr) {
				this.saveLock = true;
			} else {
				this.saveLock = false;
			}
		},
		onLoad: function() {
			this.lockStr = service.getChatLock();
			if (this.lockStr) {
				this.toLockNumber("unlock");
			}
			this.getDataInfo(this.dataIndex);
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100); //像素
		}
	}
</script>

<style>
	/* CSS3动画库animate.css：https://www.jqhtml.com/910.html | magic.min.css：http://demo.jb51.net/js/2016/css_magic/ */
	@import url("../../common/animation/animate.min.css");
	@import url("../../common/animation/magic.min.css");

	.card-radio-group {
		margin: 2px 5px 5px 5px;
		padding: 0 5px;
		background: #FFFFFF;
		border-radius: 5px;
	}

	.uni-column {
		display: flex;
		flex-direction: column;
	}

	.content {
		display: flex;
		flex: 1;
		margin-bottom: 100upx;
	}

	.foot {
		position: fixed;
		width: 100%;
		height: 90upx;
		min-height: 90upx;
		left: 0upx;
		bottom: 0upx;
		overflow: hidden;
	}

	.card-my-info {
		height: 70px;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0px 20px;
		background: #FFFFFF;
	}

	.card-img {
		width: 45px;
		height: 45px;
	}

	.card-margin-left {
		margin-left: 13px;
	}

	.card-info-title {
		font-size: 16px;
		color: #101010;
	}

	.card-info-mark {
		font-size: 12px;
		color: #808080;
	}

	.card-list-item {
		height: 45px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
		background-color: #FFFFFF;
	}

	.card-list-item2 {
		height: 45px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
		background-color: #FFFFFF;
	}

	.card-list-item2:after {
		position: absolute;
		z-index: 10;
		right: 5px;
		bottom: 0;
		left: 5px;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.card-list-item:before {
		position: absolute;
		z-index: 10;
		right: 5px;
		top: 0;
		left: 22px;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.card-item-li {
		width: 4px;
		height: 20px;
		margin: 0px 10px;
		border-radius: 50px;
		background-color: #57A6F4;
	}

	.card-item-title {
		width: 100%;
	}

	.tm-font-right {
		font-size: 14px;
		color: #E6E6E6;
		margin-right: 10px;
	}

	.chat-cell-hover {
		background-color: #eee !important;
	}

	.card-data-icon {
		width: 35px;
		height: 25px;
		margin: 0px 8px 0px 5px;
	}

	.card-list-version {
		width: 100%;
		color: #CCCCCC;
		font-size: 12px;
		text-align: center;
		position: fixed;
		bottom: 10px;
	}
</style>
