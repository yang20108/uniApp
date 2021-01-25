<template>
	<view style="width: 100%;height: 100%;">
		<view 
		 style="width: 100%;height: 100%;background: #FFCCD6;"
		 @touchstart="touchstart" 
		 @touchmove="touchmove" 
		 @touchend="touchend"
		 @touchcancel="touchcancel">
			<text>{{text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				startX: 0,
				startY: 0,
				endX: 0,
				endY: 0,
				text: '滑动屏幕'
			}

		},
		methods: {
			touchstart(e) {
				// console.log("touchstart => " + JSON.stringify(e));
				this.startX = e.touches[0].pageX;
				this.startY = e.touches[0].pageY;
			},
			touchmove(e) {
				// console.log("touchmove => " + JSON.stringify(e));
			},
			touchend(e) {
				// console.log("touchend => " + JSON.stringify(e));
				this.endX = e.mp.changedTouches[0].pageX;
				this.endY = e.mp.changedTouches[0].pageY;
				var direction = this.GetSlideDirection(this.startX, this.startY, this.endX, this.endY);
				switch (direction) {
					case 0:
						this.text = "没滑动";
						console.log("0 --- 没滑动");
						break;
					case 1:
						this.text = "向上滑动";
						console.log("1 --- 向上");
						break;
					case 2:
						this.text = "向下滑动";
						console.log("2 --- 向下");
						break;
					case 3:
						this.text = "向左滑动";
						console.log("3 --- 向左");
						break;
					case 4:
						this.text = "向右滑动";
						console.log("4 --- 向右");
						break;
					default:
				}
			},
			touchcancel(e) {
				// console.log("touchcancel => " + JSON.stringify(e));
			},
			GetSlideDirection(startX, startY, endX, endY) {
				//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动  
				var dy = startY - endY;
				var dx = endX - startX;
				var result = 0;

				//如果滑动距离太短  
				if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
					return result;
				}

				var angle = this.GetSlideAngle(dx, dy);
				if (angle >= -45 && angle < 45) {
					result = 4;
				} else if (angle >= 45 && angle < 135) {
					result = 1;
				} else if (angle >= -135 && angle < -45) {
					result = 2;
				} else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
					result = 3;
				}
				return result;
			},
			GetSlideAngle(dx, dy) {
				//返回角度  
				return Math.atan2(dy, dx) * 180 / Math.PI;
			}
		},
		components: {}
	}
</script>

<style>
</style>
