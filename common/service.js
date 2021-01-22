class Service {

	constructor() {
		// 服务器地址
		this.SERVICE_URL = 'http://10.0.70.54:8888/'; // 测试平台

		// 管理账号信息
		this.USERS_KEY = 'USERS_KEY';
		this.MEMORY_USER = 'MEMORY_USER';
		// 管理缓存KEY
		this.PONINTS_KEY = 'PONINTS_KEY';
		this.UNIT_ENGINEERING = 'UNIT_ENGINEERING';
		this.ALLCONDITION = 'ALLCONDITION';
		this.IMGDATAARR = 'IMGDATAARR';
		this.UNITENGINEERITEMS = 'UNITENGINEERITEMS';
		this.CONSTRUCTIONSTEPDETAIL = 'CONSTRUCTIONSTEPDETAIL';
		this.RISKDYNAMICITEMS = 'RISKDYNAMICITEMS';
		this.ALLRISK = 'ALLRISK';
		this.ALLRISKDYNAMIC = 'ALLRISKDYNAMIC';
		this.ALLRISKENGINEE = "ALLRISKENGINEE";
		this.ALLRISKENGINEELIST = "ALLRISKENGINEELIST";
		this.ALLOPERATIONS = "ALLOPERATIONS";
		this.CHATDATALIST = "CHATDATALIST";
		this.CHATOBJ_SCROLLTOP_BORDERRADIUS = "CHATOBJ_SCROLLTOP_BORDERRADIUS";
		this.CHATLOCKNUMBER = "CHATLOCKNUMBER";
	}

	// 保存用户信息
	addUser(user) {
		/* let user = this.getUser();
		user.push({
			account: user.account,
			password: user.password,
			unitid: user.UnitID,
			unitname: user.UnitName,
			token: user.Token
		}); */
		uni.setStorageSync(this.USERS_KEY, JSON.stringify(user));
	}
	// 获取用户信息
	getUser() {
		let ret = '';
		ret = uni.getStorageSync(this.USERS_KEY);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除用户信息
	removeUserInfo(user) {
		uni.clearStorageSync();
		// 保留用户账号信息，方便下次登录
		this.setMemoryUser(user);
	}
	// 保存记忆用户（方便登录）
	setMemoryUser(user) {
		uni.setStorageSync(this.MEMORY_USER, JSON.stringify(user));
	}
	// 获取记忆用户
	getMemoryUser() {
		let ret = '';
		ret = uni.getStorageSync(this.MEMORY_USER);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}

	// 保存chat“聊天”对话记录
	setChatDataList(chatList, userKey) {
		uni.setStorageSync(this.CHATDATALIST + userKey, JSON.stringify(chatList));
	}
	// 获取chat“聊天”对话记录
	getChatDataList(userKey) {
		let ret = "";
		ret = uni.getStorageSync(this.CHATDATALIST + userKey);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除chat“聊天”对话记录
	removeChatDataList(userKey) {
		uni.removeStorageSync(this.CHATDATALIST + userKey);
	}

	// 保存chat“聊天”中是否设置图像圆角borderRadius，聊天记录高度scrollTop
	setChatObject(obj, userKey) {
		uni.setStorageSync(this.CHATOBJ_SCROLLTOP_BORDERRADIUS + userKey, JSON.stringify(obj));
	}
	// 获取chat“聊天”中是否设置图像圆角borderRadius，聊天记录高度scrollTop
	getChatObject(userKey) {
		let ret = '';
		ret = uni.getStorageSync(this.CHATOBJ_SCROLLTOP_BORDERRADIUS + userKey);
		if (!ret) {
			ret = '""';
		}
		return JSON.parse(ret);
	}
	// 清除chat“聊天”中是否设置图像圆角borderRadius，聊天记录高度scrollTop
	removeChatObject(userKey) {
		uni.removeStorageSync(this.CHATOBJ_SCROLLTOP_BORDERRADIUS + userKey);
	}

	// 保存chat“聊天”设置的密码锁
	setChatLock(lock) {
		uni.setStorageSync(this.CHATLOCKNUMBER, JSON.stringify(lock));
	}
	// 获取chat“聊天”设置的密码锁
	getChatLock() {
		let ret = '';
		ret = uni.getStorageSync(this.CHATLOCKNUMBER);
		if (!ret) {
			ret = '""';
		}
		return JSON.parse(ret);
	}
	// 清除chat“聊天”设置的密码锁
	removeChatLock() {
		uni.removeStorageSync(this.CHATLOCKNUMBER);
	}

	// 保存“工点”信息
	setPoints(points) {
		uni.setStorageSync(this.PONINTS_KEY, JSON.stringify(points));
	}
	// 获取“工点”信息
	getPoints() {
		let ret = '';
		ret = uni.getStorageSync(this.PONINTS_KEY);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}

	// 保存单位工程
	setUnitEngineeringLists(unit) {
		uni.setStorageSync(this.UNIT_ENGINEERING, JSON.stringify(unit))
	}
	// 获取单位工程
	getUnitEngineeringLists() {
		let ret = '';
		ret = uni.getStorageSync(this.UNIT_ENGINEERING);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除单位工程
	removeUnitEngineeringLists() {
		uni.removeStorageSync(this.UNIT_ENGINEERING);
	}

	// 保存所有没有提交工况检查记录
	setAllCondition(all) {
		let allCon = this.getAllCondition();
		allCon.push(all);
		uni.setStorageSync(this.ALLCONDITION, JSON.stringify(allCon))
	}
	// 获取所有没有提交工况检查记录
	getAllCondition() {
		let ret = '';
		ret = uni.getStorageSync(this.ALLCONDITION);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret)
	}
	// 清除所有没有提交工况检查记录
	removeAllCondition() {
		uni.removeStorageSync(this.ALLCONDITION)
	}

	// 保存上传图片后返回数据集合
	setImgDataArr(img) {
		let imgArr = this.getImgDataArr();
		imgArr.push(img);
		uni.setStorageSync(this.IMGDATAARR, JSON.stringify(imgArr));
	}
	// 获取上传图片后返回数据集合
	getImgDataArr() {
		let ret = '';
		ret = uni.getStorageSync(this.IMGDATAARR);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret)
	}
	// 清除保存图片集合
	removeImgArr() {
		uni.removeStorageSync(this.IMGDATAARR)
	}

	// 保存某分区下的分部分项以及工序
	setUnitEngineerItems(unitItem) {
		uni.setStorageSync(this.UNITENGINEERITEMS, JSON.stringify(unitItem));
	}
	// 获取某分区下的分部分项以及工序
	getUnitEngineerItems() {
		let ret = '';
		ret = uni.getStorageSync(this.UNITENGINEERITEMS);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除某分区下的分部分项以及工序
	removeUnitEngineerItems() {
		uni.removeStorageSync(this.UNITENGINEERITEMS)
	}

	// 保存施工工况的详细信息
	setConstructionStepDetail(stepDetail) {
		uni.setStorageSync(this.CONSTRUCTIONSTEPDETAIL, JSON.stringify(stepDetail));
	}
	// 获取施工工况的详细信息
	getConstructionStepDetail() {
		let ret = '';
		ret = uni.getStorageSync(this.CONSTRUCTIONSTEPDETAIL);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除施工工况的详细信息
	removeConstructionStepDetail() {
		uni.removeStorageSync(this.CONSTRUCTIONSTEPDETAIL);
	}

	// 保存某工点下的所有风险
	setRiskDynamicItems(riskDynamicItems) {
		uni.setStorageSync(this.RISKDYNAMICITEMS, JSON.stringify(riskDynamicItems));
	}
	// 获取某工点下的所有风险
	getRiskDynamicItems() {
		let ret = '';
		ret = uni.getStorageSync(this.RISKDYNAMICITEMS);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除某工点下的所有风险
	removeRiskDynamicItems() {
		uni.removeStorageSync(this.RISKDYNAMICITEMS);
	}

	// 保存所有没有提交风险检查记录
	setAllRisk(risk) {
		let allRisk = this.getAllRisk();
		allRisk.push(risk);
		uni.setStorageSync(this.ALLRISK, JSON.stringify(allRisk));
	}
	// 获取所有没有提交风险检查记录
	getAllRisk() {
		let ret = '';
		ret = uni.getStorageSync(this.ALLRISK);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除所有没有提交风险检查记录
	removeAllRisk() {
		uni.removeStorageSync(this.ALLRISK)
	}

	// 保存本用户已上传的风险列表
	setAllRiskDynamic(allRisk) {
		uni.setStorageSync(this.ALLRISKDYNAMIC, JSON.stringify(allRisk));
	}
	// 获取本用户已上传的风险列表
	getAllRiskDynamic() {
		let ret = '';
		ret = uni.getStorageSync(this.ALLRISKDYNAMIC);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除本用户已上传的风险列表
	removeAllRiskDynamic() {
		uni.removeStorageSync(this.ALLRISKDYNAMIC);
	}

	// 保存危大工程列表
	setAllRiskEnginee(allRiskEnginee) {
		uni.setStorageSync(this.ALLRISKENGINEE, JSON.stringify(allRiskEnginee));
	}
	// 获取危大工程列表
	getAllRiskEnginee() {
		let ret = '';
		ret = uni.getStorageSync(this.ALLRISKENGINEE);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除危大工程列表
	removeAllRiskEnginee() {
		uni.removeStorageSync(this.ALLRISKENGINEE);
	}

	// 保存本地所有危大工程列表
	setAllDangerous(dangerous) {
		let allDangerousList = this.getAllDangerous();
		allDangerousList.push(dangerous);
		uni.setStorageSync(this.ALLRISKENGINEELIST, JSON.stringify(allDangerousList));
	}
	// 获取本地所有危大工程列表
	getAllDangerous() {
		let ret = '';
		ret = uni.getStorageSync(this.ALLRISKENGINEELIST);
		if (!ret) {
			ret = '[]';
		}
		return JSON.parse(ret);
	}
	// 清除本地所有危大工程列表
	removeAllDangerous() {
		uni.removeStorageSync(this.ALLRISKENGINEELIST);
	}

	// 存储用户操作权限
	setAllOperations(operations) {
		uni.setStorageSync(this.ALLOPERATIONS, JSON.stringify(operations));
	}
	// 获取用户操作权限
	getAllOperations() {
		let ret = '';
		ret = uni.getStorageSync(this.ALLOPERATIONS);
		if (!ret) {
			ret = "[]";
		}
		return JSON.parse(ret);
	}
	// 清除用户操作权限
	removeAllOperations() {
		uni.removeStorageSync(this.ALLOPERATIONS);
	}
}

const _service = new Service();
export default _service;
