<template>
	<movable-area class="fish-body">
		<image class="fish-body-bgi" src="../../static/games-fish/fish_home.png"></image>
		<view class="fish-drift-bo1" :style="{left:(blLeft-5)+'px'}">
			<image class="drift-mbo" v-for="(one, oneI) in blList" :key="oneI" src="../../static/games-fish/fish_mbo1.png"></image>
		</view>
		<view class="fish-drift-bo2" :style="{left:blLeft+'px'}">
			<image class="drift-mbo" v-for="(tow, towI) in blList" :key="towI" src="../../static/games-fish/fish_mbo2.png"></image>
		</view>
		<image class="fish" v-for="(fish, fishI) in fishlist" :key="fishI" :style="{left:fish.x+'px',top:fish.y+'px'}"
		 src="../../static/games-fish/fish_fish.png" @click="reducefish(fishI)">
		</image>
		<movable-view class="pang-xie" direction="all" :inertia="true">
			<image class="pang-xie" :style="{left:pxLeft+'px'}" src="../../static/games-fish/fish_px.png"></image>
		</movable-view>
		<!-- <view class="fish-btn">
			<button class="fish-btn-item" :style="{float:'left',backgroundImage:'url('+require('../../static/games-fish/fish_moveLeft.png')+')',backgroundRepeat:'round'}"
			 @click="moveLeft(2)" @longtap="moveLeft(5)"></button>
			<button class="fish-btn-item" :style="{float:'left',backgroundImage:'url('+require('../../static/games-fish/fish_moveRight.png')+')',backgroundRepeat:'round'}"
			 @click="moveRight(2)" @longtap="moveRight(5)"></button>
			<button class="fish-btn-item" :style="{float:'right'}" @click="fire"></button>
		</view> -->
	</movable-area>
</template>

<script>
	/**
	 * name:小鱼游戏
	 * 属性：
	 * fishmaxspeed Number类型 小鱼游动最大速度
	 * bospeed Number类型 波纹运动速度
	 * fishsum Number类型 小鱼的数目
	 * 事件：
	 */
	export default {
		name: "games-fish",
		props: {
			fishmaxspeed: {
				type: Number,
				default: 1
			},
			bospeed: {
				type: Number,
				default: 1
			},
			fishsum: {
				type: Number,
				default: 2
			}
		},
		data() {
			return {
				blLeft: 0,
				pxLeft: 0,
				blList: 30,
				windowWidth: 0,
				fishlist: [],
				count: 0
			}
		},
		methods: {
			fire() {
				console.log("fire");
			},
			moveLeft(reduce) {
				this.pxLeft -= reduce;
			},
			moveRight(add) {
				this.pxLeft += add;
			},
			touchStart() {
				console.log("long right");
				this.pxLeft += 2;
			},
			addfish(sum) {
				// 增加鱼的数目
				for (var m = 0; m < sum; m++) {
					var vote = {};
					vote.x = -30;
					vote.y = 70 + Math.random() * 130;
					vote.s = Math.random() * (this.fishmaxspeed * 10) + 10;
					this.fishlist.push(vote);
				}
			},
			reducefish(sum) {
				// 减少鱼的数目
				this.count += 1
				this.fishlist.splice(sum, 1);
				this.addfish(1)
			},
			fishGames: function() {
				this.blLeft += this.bospeed;
				if (this.blLeft + 100 >= 0) this.blLeft = 100 - this.windowWidth;

				//鱼游动
				for (var m = 0; m < this.fishlist.length; m++) {
					this.fishlist[m].x += this.fishlist[m].s / 10;
					if (this.fishlist[m].x > this.windowWidth) {
						// 当小鱼游出屏幕后，重新设置高度和位置
						this.fishlist[m].x = -30;
						this.fishlist[m].y = 70 + Math.random() * 130;
					}
				}

				var that = this;
				setTimeout(function() {
					that.fishGames();
				}, 100);
			}
		},
		created() {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.windowWidth = res.windowWidth;
					that.blLeft = 100 - res.windowWidth;
				}
			});
			//初始化鱼的数目
			for (var m = 0; m < this.fishsum; m++) {
				var vote = {};
				vote.x = Math.random() * this.windowWidth;
				vote.y = 70 + Math.random() * 130;
				vote.s = Math.random() * (this.fishmaxspeed * 10) + 10;
				this.fishlist.push(vote);
			}
			this.fishGames();
		}
	}
</script>

<style>
	.fish-btn {}

	.fish-btn-item {
		width: 50px;
		height: 50px;
		margin: 10px;
		border-radius: 50px;
		border: 1px solid #FFFFFF;
	}

	.fish-body {
		width: 100%;
		height: 300px;
	}

	.fish-body-bgi {
		width: 100%;
		height: 100%;
	}

	.fish-drift-bo1 {
		position: fixed;
		top: 70px;
		left: 0;
		width: 200%;
		height: 25px;
		overflow: hidden
	}

	.drift-mbo {
		width: 44px;
		height: 22px;
	}

	.fish-drift-bo2 {
		position: fixed;
		top: 80px;
		left: 0;
		width: 200%;
		height: 25px;
		overflow: hidden
	}

	.fish {
		width: 40px;
		height: 30px;
		position: fixed;
		bottom: 80px;
		left: 260px;
	}

	.pang-xie {
		width: 30px;
		height: 30px;
		position: relative;
	}
</style>
