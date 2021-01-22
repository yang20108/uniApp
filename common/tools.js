class Tools {

	constructor(arg) {
		this.now = new Date();
		// 1547608579197
		this.time = new Date().getTime();
	}

	/**
	 * @param {Object} e 工点层级
	 * @param {Object} sites 工点数据
	 */
	GetSiteProject(e, sites) {
		if (e && e.length && sites && sites.length) {
			var SiteProject = {
				LineId: "", // 线路id
				LineName: "", // 线路名称
				SegmentId: "", // 标段ID
				SegmentName: "", // 标段名称
				AreaId: "", // 工区id
				AreaName: "", // 工区名称
				SiteId: "", // 工点id
				SiteName: "" // 工点名称
			}
			if (1 === e.length) {
				SiteProject.SiteId = sites[e[0]].SiteID;
				SiteProject.SiteName = sites[e[0]].SiteName;
			} else if (2 === e.length) {
				SiteProject.SegmentId = sites[e[0]].ID;
				SiteProject.SegmentName = sites[e[0]].label;
				SiteProject.SiteId = sites[e[0]].Sites[e[1]].SiteID;
				SiteProject.SiteName = sites[e[0]].Sites[e[1]].SiteName;
			} else if (3 === e.length) {
				SiteProject.LineId = sites[e[0]].ID;
				SiteProject.LineName = sites[e[0]].label;
				SiteProject.SegmentId = sites[e[0]].children[e[1]].ID;
				SiteProject.SegmentName = sites[e[0]].children[e[1]].label;
				SiteProject.SiteId = sites[e[0]].children[e[1]].children[e[2]].SiteID;
				SiteProject.SiteName = sites[e[0]].children[e[1]].children[e[2]].label;
			} else if (4 === e.length) {
				SiteProject.LineId = sites[e[0]].ID;
				SiteProject.LineName = sites[e[0]].Name;
				SiteProject.SegmentId = sites[e[0]].Children[e[1]].ID;
				SiteProject.SegmentName = sites[e[0]].Children[e[1]].Name;
				SiteProject.AreaId = sites[e[0]].Children[e[1]].Children[e[2]].ID;
				SiteProject.AreaName = sites[e[0]].Children[e[1]].Children[e[2]].Name;
				SiteProject.SiteId = sites[e[0]].Children[e[1]].Children[e[2]].Sites[e[3]].SiteID;
				SiteProject.SiteName = sites[e[0]].Children[e[1]].Children[e[2]].Sites[e[3]].SiteName;
			} else if (5 === e.length) {}
			// console.log("SiteProject: " + JSON.stringify(SiteProject));
			return SiteProject;
		}
		return "";
	}

	
	/**
	 * 将数组array根据param分成新的小数组并返回新数组
	 * @param {Object} array 数据集合
	 * @param {Object} param 对象字段
	 */
	GroupArrayParam(array, param) {
		var map = [], dest = [];
		array.forEach((aI, aK) => {
			if (aI[param] && map[aI[param]]) {
				dest.forEach((dJ, dK) => {
					if (dJ[0][param] == aI[param]) {
						dJ.push(aI);
						return;
					}
				})
			} else {
				dest.push([aI]);
				map[aI[param]] = aI;
			}
		})
		return dest;
	}
	/**
	 * 将数组array分成长度为subGroupLength的小数组并返回新数组
	 * @param {Object} array 数据集合
	 * @param {Object} subGroupLength 分割长度
	 */
	GroupArrayLen(array, subGroupLength) {
		let index = 0;
		let newArray = [];
		while(index < array.length) {
			newArray.push(array.slice(index, index += subGroupLength));
		}
		return newArray;
	}

	/**
	 * @param {Object} val 表示检索的值
	 */
	WarnStepInfo(val) {
		var steps = [
			{"id": "YJQR", "name": "预警确认", "sort": 1},
			{"id": "YJCZ", "name": "预警处置", "sort": 2},
			{"id": "JQGZ", "name": "警情跟踪", "sort": 3},
			{"id": "XJSQ", "name": "消警申请", "sort": 4},
			{"id": "YQSP", "name": "延期审批", "sort": 5},
			{"id": "YQSQ", "name": "延期申请", "sort": 6},
			{"id": "XJSH", "name": "消警审核", "sort": 7},
			{"id": "BH", "name": "闭合", "sort": 21},
			{"id": "GZ", "name": "跟踪", "sort": 22},
			{"id": "YQSP", "name": "逾期审批", "sort": 23},
		]
		return steps.find(function(s){
			return s.id === val || s.name === val || s.sort === val
		})
	}

	/**
	 * 随机数
	 * @param {Object} min 最小数
	 * @param {Object} max 最大数
	 */
	random(min, max) {
		var randomNum = Math.floor(Math.random() * (max - min)) + min;
		// return 0 === randomNum % 2;  // 返回Boolean类型
		return randomNum;
	}

	// 字符串转换日期格式，并获取时间戳
	Time(date) {
		let now = new Date();
		if (date) {
			// 支持格式：2020-06-18 16:01:22
			now = new Date(Date.parse(date.replace(/-/g,"/")))
		}
		return now.getTime();
	}

	// 格式化日期
	toDate(date) {
		// 将"-"转换"/"
		date = date.replace("-", "/")
		date = date.replace("-", "/")
		date = date.replace("-", "/")
		let now = new Date(date);
		var month = now.getMonth() + 1
		if (1 === month.toString().length) {
			month = "0" + month;
		}
		var day = now.getDate();
		if (1 === day.toString().length) {
			day = "0" + day;
		}
		return now.getFullYear() + "-" + month + "-" + day;
	}

	// 2019-01-16
	date() {
		let now = new Date();
		var month = now.getMonth() + 1
		if (1 === month.toString().length) {
			month = "0" + month;
		}
		var day = now.getDate();
		if (1 === day.toString().length) {
			day = "0" + day;
		}
		return now.getFullYear() + "-" + month + "-" + day;
	}

	// 2019-3-20 17:17:52
	dateTime() {
		let now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		if (1 === month.toString().length) {
			month = "0" + month;
		}
		var day = now.getDate();
		if (1 === day.toString().length) {
			day = "0" + day;
		}
		var hour = now.getHours();
		if (1 === hour.toString().length) {
			hour = "0" + hour;
		}
		var minute = now.getMinutes();
		if (1 === minute.toString().length) {
			minute = "0" + minute;
		}
		var second = now.getSeconds();
		if (1 === second.toString().length) {
			second = "0" + second;
		}
		return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
	}


	// 已知文件路径，获取文件名
	GetFileNameByPath(path) {
		var index = path.lastIndexOf("/"); // 找到最后一个 / 的位置
		var fileName = path.substr(index + 1); // 截取剩余的字符，即得文件名xxx.doc
		return fileName;
	}

	// 已知文件路径，获取文件类型
	GetFileTypeByPath(path) {
		var index = path.lastIndexOf("."); // 找到最后一个 . 的位置
		var fileType = path.substr(index + 1); // 截取剩余的字符，即得文件名xxx.doc
		return fileType;
	}

	// 已知文件路径，获取文件后缀.doc
	GetFileExtensionByPath(path) {
		var index = path.lastIndexOf("."); // 找到最后一个 . 的位置
		var index2 = path.length;
		var fileExtension = path.substr(index1, index2); // 截取剩余的字符，即得文件后缀.doc
		return fileExtension;
	}

	UUID() {
		return 'xxxxxxxx-xxxx-1129-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	// URL正则表达式
	IsURL(url) {
		if (!url) { return false }
		var regex = "((http|ftp|https)://)(([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,4})*(/[a-zA-Z0-9\&%_\./-~-]*)?";
		return RegExp(regex).test(url);
	}

	/**
	 * 2020-07-07
	 * 获取系统当前日期，并指定天数后得到的日期
	 * @param {Object} addDay 天数
	 */ 
	GetDateAddDay(addDay) {
		if (typeof addDay != "number") { addDay = 0 }
		if (!addDay) { addDay = 0 }
		let now = new Date();
		now.setDate(now.getDate() + addDay);
		var month = now.getMonth() + 1
		if (1 === month.toString().length) { month = "0" + month; }
		var day = now.getDate();
		if (1 === day.toString().length) { day = "0" + day; }
		return now.getFullYear() + "-" + month + "-" + day;
	}

	// 在日期基础上，增加days天数
	addDateDays(date, days) {
		if (date) {
			var date = new Date(date);
			date.setDate(date.getDate() + days);
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var mm = "'" + month + "'";
			var dd = "'" + day + "'";

			//单位数前面加0
			if (mm.length == 3) {
				month = "0" + month;
			}
			if (dd.length == 3) {
				day = "0" + day;
			}
			return date.getFullYear() + "-" + month + "-" + day
		}
		return 0
	}

	//校验邮箱格式
	checkEmail(email) {
		return RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(
			email);
	}
	//校验手机z格式
	checkMobile(mobile) {
		return RegExp(/^1[34578]\d{9}$/).test(mobile);
	}

	//比较日期大小（用前者比较后者）
	compareDate(logintime, logouttime) {
		var arys1 = new Array();
		var arys2 = new Array();
		if (logintime != null && logouttime != null) {
			arys1 = logintime.split('-');
			var logindate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
			arys2 = logouttime.split('-');
			var logoutdate = new Date(arys2[0], parseInt(arys2[1] - 1), arys2[2]);
			if (logindate >= logoutdate) {
				return true;
			} else {
				return false;
			}
		}
	}

	/* 
	 * 数组降序
	 * @param {Object} array 排序的数组
	 * @param {Object} key 数组的排序元素
	 */
	reverseArray(array, key) {
		if (undefined != array && "" != array && 0 < array.length) {
			return array.sort(function(a, b) {
				var x = a[key];
				var y = b[key];
				return ((x < y) ? -1 : (x > y) ? 1 : 0)
			}).reverse();
		}
		return [];
	}

	/* 
	 * 数组升序
	 * @param {Object} array 排序的数组
	 * @param {Object} key 数组的排序元素
	 */
	sortArray(array, key) {
		if (undefined != array && "" != array && 0 < array.length) {
			return array.sort(function(a, b) {
				var x = a[key];
				var y = b[key];
				return ((x < y) ? -1 : (x > y) ? 1 : 0)
			});
		}
		return [];
	}


	// ES6: base64解码
	decodeBase64Content(base64Content) {
		let commonContent = base64Content.replace(/\s/g, '+');
		commonContent = Buffer.from(commonContent, 'base64').toString();
		return commonContent;
	}

	// ES6: base64编码
	encodeBase64Content(commonContent) {
		let base64Content = Buffer.from(commonContent).toString('base64');
		return base64Content;
	}

	// 判断数据类型
	isTypeOf(value) {
		if (typeof value === 'string') {
			return "string";
		} else if (typeof value === 'number') {
			return "number";
		} else if (typeof value === 'boolean') {
			return "boolean";
		} else if (Array.isArray(value)) {
			return "array";
		} else if (typeof value === 'undefined') {
			return "undefined";
		} else if (typeof value === 'object') {
			return "object";
		} else if (typeof value === 'function') {
			return "function";
		} else if (typeof value === 'symbol') {
			return "symbol";
		}
	}

	/**
	 * 手机软键盘是否弹出
	 * js调用不生效，使用时将SoftKeyBoard中代码体复制到Vue生命周期onShow或onLoad中并赋值给新变量
	 */
	SoftKeyBoard() {
		var winHeight = uni.getSystemInfoSync().windowHeight;
		uni.onWindowResize((res) => {
			// 变化后的窗口宽度res.size.windowWidth，变化后的窗口高度res.size.windowHeight
			if (winHeight - res.size.windowHeight > 50) {
				// 窗口发生改变(大), 故此时键盘弹出
				return true;
			} else {
				// 窗口发生改变(小), 故此时键盘收起
				return false;
			}
		});
	}

	/**
	 * 计算字符串所占的内存字节数，默认使用UTF-8的编码方式计算，也可制定为UTF-16
	 * UTF-8 是一种可变长度的 Unicode 编码格式，使用一至四个字节为每个字符编码
	 * 
	 * 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             一个字节
	 * 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             两个字节
	 * 000800 - 00D7FF 
	 * 00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz           三个字节
	 * 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节
	 * 
	 * 注: Unicode在范围 D800-DFFF 中不存在任何字符
	 * {@link http://zh.wikipedia.org/wiki/UTF-8}
	 * 
	 * UTF-16 大部分使用两个字节编码，编码超出 65535 的使用四个字节
	 * 000000 - 00FFFF  两个字节
	 * 010000 - 10FFFF  四个字节
	 * 
	 * {@link http://zh.wikipedia.org/wiki/UTF-16}
	 * @param  {String} str 字符串
	 * @param  {String} charset 'utf-8', 'utf-16'
	 * @return {Number}
	 */
	stringSize(str, charset) {
		var total = 0,
			charCode,
			i,
			len;
		charset = charset ? charset.toLowerCase() : '';
		if (charset === 'utf-16' || charset === 'utf16') {
			for (i = 0, len = str.length; i < len; i++) {
				charCode = str.charCodeAt(i);
				if (charCode <= 0xffff) {
					total += 2;
				} else {
					total += 4;
				}
			}
		} else {
			for (i = 0, len = str.length; i < len; i++) {
				charCode = str.charCodeAt(i);
				if (charCode <= 0x007f) {
					total += 1;
				} else if (charCode <= 0x07ff) {
					total += 2;
				} else if (charCode <= 0xffff) {
					total += 3;
				} else {
					total += 4;
				}
			}
		}
		return total;
	}
	/**
	 * 计算字节体积大小
	 * @param {Object} size 字节体积大小
	 *
	 * toFixed定义和用法
	 * toFixed() 方法可把Number四舍五入为指定小数位数的数字。
	 * 语法 Number.toFixed(num)
	 * 参数 num[必需]
	 * 描述 规定小数的位数，是 0 ~ 20 之间的值，包括 0 和 20，有些实现可以支持更大的数值范围。如果省略了该参数，将用 0 代替。
	 */
	formatSize(size) {
		var fileSizeString;
		size = parseInt(size);
		if (size == 0) {
			fileSizeString = "0B";
		} else if (size < 1024) {
			fileSizeString = size + "B";
		} else if (size < 1048576) {
			fileSizeString = (size / 1024).toFixed(2) + "KB";
		} else if (size < 1073741824) {
			fileSizeString = (size / 1048576).toFixed(2) + "MB";
		} else {
			fileSizeString = (size / 1073741824).toFixed(2) + "GB";
		}
		return fileSizeString;
	}

}

const _tools = new Tools();
export default _tools;
