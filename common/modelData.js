class ModelData {

	// 工况数据模型
	modelCondition() {
		return {
			UnitID: '', // 创建人单位信息
			UnitName: '', // 创建人单位信息
			StepDate: '', // 创建日期
			Status: '', // 施工状态返回数字 => 0未开工 1施工中 2竣工 3停工
			CreatorName: '', // 上传人
			UploadDate: '', // 上传日期
			CurrentSiteID: '', // 工点ID
			Mark: '', // 补充说明
			conditionName: '', // 用于列表名称展示
			siteName: '', // 用于列表名称展示
			Steps: [], //JSON.stringify()
			checked: false, // 当前记录是否是检查状态
			Time: '', // 当前记录保存时间戳
			serviceLastDate: '', // 当前记录最近一次提交时间
			scrollLeft: 2 // scroll-view组件scroll-left属性设置
		}
	}

	// 工况下的工序数据模型
	modelStep() {
		return {
			AreaID: '', // 分区id => Value
			SubItemID: '', //分部分项id
			SubName: '', //分部分项名称
			TaskItemID: '', // 工程类型 -> 分部分项 -> 工序item.id
			Name: '', // 工序名称
			CspTaskItemID: '', //
			Status: '', // 表示施工状态返回数字 => 1施工中 2停工 3完工 4未施工
			Mark: '',
			Attributes: []
		}
	}

	// 工序下的Attributes
	modelAttributes() {
		return {
			FieldName: '', // 文本
			DisplayName: '',
			Datas: '',
			Value: [], // JSON.stringify() [{FileOldName:"",FileNewName:"",Url:"",FileSize:"",FileType:""}]
			DataType: ''
		}
	}

	// 风险数据模型
	modelRisk() {
		return {
			siteId: '', // 工点id
			siteName: '', // 工点Name
			Risk_ItemID: '', // 风险 ID
			RiskName: '', // 风险名称
			UnitID: '', // [人员信息]单位ID
			UnitName: '', // [人员信息]单位名称
			UserID: '', // [人员信息]提交人ID
			UserName: '', // [人员信息]提交人
			//Sort: '',  [系统]排序序号
			AddTime: '', // [系统]提交时间（和UpdateTime一致）
			UpdateTime: '', // [系统]风险提交（上传）更新时间
			DynamicTime: '', //风险检查时间
			Monitoringsituation: '', //监测预警状态 "0"无 "1"有
			MonitoringsituationEnums: '', //监测预警
			MoreInformation: '', //补充说明
			RiskCheckItems: [], // 风险检查项集合
			checked: false, // 标记次检查项是否被检查
			scrollLeft: 2 // scroll-view组件scroll-left属性设置
		}
	}

	// 风险下的检查项
	modelDynamic() {
		return {
			Risk_CheckItemID: '', //检查项Id
			Risk_CheckItemRecodeID: '', // 动态检查项记录Id
			Status: '', //状态
			FileList: [], //附件
			Mark: '' //隐患描述
		}
	}

	// 危大工程数据模型
	modelDangerous() {
		return {
			siteId: '', // 工点id
			siteName: '', // 工点Name
			Risk_ProjectItemID: '', // 危大id
			Risk_ProjectItemName: '', // 危大Name
			UserID: '', // [人员信息]提交人ID
			UserName: '', // [人员信息]提交人Name
			UnitID: '', // [人员信息]单位ID
			UnitName: '', // [人员信息]单位名称
			CheckType: '000', // 检查类型
			CheckDate: '', // 检查时间
			CheckRecordName: '', // 检查记录
			ImageList: [], // 现场影像string类型，上传时进行JSON.stringify()
			scrollLeft: 2, // scroll-view组件scroll-left属性设置
			checked: false // 标记次检查项是否被检查
		}
	}

	// 工点数据模型
	modelSiteData() {
		return [{"IDPath":"384a9733-2ad6-439c-b26d-91a4a719703d","ID":"384a9733-2ad6-439c-b26d-91a4a719703d","label":"4号线","children":[{"IDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,f3bd2f5c-d056-4614-a40c-238fd73d065c","ID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","label":"1标","children":[{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,f3bd2f5c-d056-4614-a40c-238fd73d065c","SiteID":"34eeb0df-5816-495c-b424-2873b4309d53","label":"橘园站","ParentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Parentlabel":"1标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Text":"1标","CanSelect":false,"Datas":null}],"SegmentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Segmentlabel":"1标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"完工"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,f3bd2f5c-d056-4614-a40c-238fd73d065c","SiteID":"0b6ac1ed-a4bf-4f85-9727-222d57a81c0b","label":"园亭路站","ParentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Parentlabel":"1标","Parents":
			[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Text":"1标","CanSelect":false,"Datas":null}],"SegmentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Segmentlabel":"1标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"完工"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,f3bd2f5c-d056-4614-a40c-238fd73d065c","SiteID":"39ce1579-ed94-41e9-a78b-f22530052e24","label":"金牛山站","ParentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Parentlabel":"1标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Text":"1标","CanSelect":false,"Datas":null}],"SegmentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Segmentlabel":"1标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"未开工"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,f3bd2f5c-d056-4614-a40c-238fd73d065c","SiteID":"ad1464b6-8e34-4ba2-be05-9342a60ba918","label":"西二环站",
			"ParentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Parentlabel":"1标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Text":"1标","CanSelect":false,"Datas":null}],"SegmentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Segmentlabel":"1标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,f3bd2f5c-d056-4614-a40c-238fd73d065c","SiteID":"36df78aa-79be-4550-8dee-0cdb7d257624","label":"橘园站-园亭路站区间","ParentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Parentlabel":"1标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Text":"1标","CanSelect":false,"Datas":null}],"SegmentID":"f3bd2f5c-d056-4614-a40c-238fd73d065c","Segmentlabel":"1标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"未开工"}]},{"IDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,d733f8d1-ddb4-4864-8bc5-8caf6006959e",
			"ID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","label":"2标","children":[{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,d733f8d1-ddb4-4864-8bc5-8caf6006959e","SiteID":"aee12cba-52ac-4f0a-ba8d-7eb862e973cd","label":"池边站-化工路站区间","ParentID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Parentlabel":"2标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Text":"2标","CanSelect":false,"Datas":null}],"SegmentID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Segmentlabel":"2标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,d733f8d1-ddb4-4864-8bc5-8caf6006959e","SiteID":"c2c78851-ea7c-45fd-9635-7b715b90ca56","label":"福新东路站","ParentID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Parentlabel":"2标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Text":"2标","CanSelect":false,"Datas":null}],"SegmentID":
			"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Segmentlabel":"2标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,d733f8d1-ddb4-4864-8bc5-8caf6006959e","SiteID":"7d3bb81c-22ef-4a0e-9d8b-9c87e519f228","label":"前屿站","ParentID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Parentlabel":"2标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Text":"2标","CanSelect":false,"Datas":null}],"SegmentID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Segmentlabel":"2标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"未开工"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,d733f8d1-ddb4-4864-8bc5-8caf6006959e","SiteID":"70150db7-889f-4dd2-8f77-ed8c34e83e15","label":"化工路站-福新东路站区间","ParentID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Parentlabel":"2标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":
			"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Text":"2标","CanSelect":false,"Datas":null}],"SegmentID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Segmentlabel":"2标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,d733f8d1-ddb4-4864-8bc5-8caf6006959e","SiteID":"30945964-5cb0-4e8d-b50b-e83075e881eb","label":"远洋路站-鳌峰路站区间","ParentID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Parentlabel":"2标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Text":"2标","CanSelect":false,"Datas":null}],"SegmentID":"d733f8d1-ddb4-4864-8bc5-8caf6006959e","Segmentlabel":"2标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"}]},{"IDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,5e083107-fe22-452c-adcb-6422c162e5de","ID":"5e083107-fe22-452c-adcb-6422c162e5de","label":"3标","children":[{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,5e083107-fe22-452c-adcb-6422c162e5de",
			"SiteID":"9aec5e13-caa1-40e5-b003-cce8a2c929bf","label":"鳌峰路站-江边村站区间","ParentID":"5e083107-fe22-452c-adcb-6422c162e5de","Parentlabel":"3标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"5e083107-fe22-452c-adcb-6422c162e5de","Text":"3标","CanSelect":false,"Datas":null}],"SegmentID":"5e083107-fe22-452c-adcb-6422c162e5de","Segmentlabel":"3标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,5e083107-fe22-452c-adcb-6422c162e5de","SiteID":"4a4b4b34-9323-43ee-ae0c-a3b0c8d67249","label":"江边村站","ParentID":"5e083107-fe22-452c-adcb-6422c162e5de","Parentlabel":"3标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"5e083107-fe22-452c-adcb-6422c162e5de","Text":"3标","CanSelect":false,"Datas":null}],"SegmentID":"5e083107-fe22-452c-adcb-6422c162e5de","Segmentlabel":"3标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},
			{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,5e083107-fe22-452c-adcb-6422c162e5de","SiteID":"92c5a151-206d-4555-a019-468a66e6a91f","label":"会展中心站","ParentID":"5e083107-fe22-452c-adcb-6422c162e5de","Parentlabel":"3标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"5e083107-fe22-452c-adcb-6422c162e5de","Text":"3标","CanSelect":false,"Datas":null}],"SegmentID":"5e083107-fe22-452c-adcb-6422c162e5de","Segmentlabel":"3标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,5e083107-fe22-452c-adcb-6422c162e5de","SiteID":"02eea96a-dd75-44ac-a7c0-0234ea06c31b","label":"林浦站-城门站区间","ParentID":"5e083107-fe22-452c-adcb-6422c162e5de","Parentlabel":"3标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"5e083107-fe22-452c-adcb-6422c162e5de","Text":"3标","CanSelect":false,"Datas":null}],"SegmentID":"5e083107-fe22-452c-adcb-6422c162e5de","Segmentlabel":"3标",
			"LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,5e083107-fe22-452c-adcb-6422c162e5de","SiteID":"d728bc2c-78f2-45ec-9eb3-804ba5f05c2e","label":"林城区间风井","ParentID":"5e083107-fe22-452c-adcb-6422c162e5de","Parentlabel":"3标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"5e083107-fe22-452c-adcb-6422c162e5de","Text":"3标","CanSelect":false,"Datas":null}],"SegmentID":"5e083107-fe22-452c-adcb-6422c162e5de","Segmentlabel":"3标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,5e083107-fe22-452c-adcb-6422c162e5de","SiteID":"f68db028-bdfc-4c6d-a0da-210c9a8b910b","label":"螺洲镇站-帝封江站区间","ParentID":"5e083107-fe22-452c-adcb-6422c162e5de","Parentlabel":"3标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"5e083107-fe22-452c-adcb-6422c162e5de","Text":"3标",
			"CanSelect":false,"Datas":null}],"SegmentID":"5e083107-fe22-452c-adcb-6422c162e5de","Segmentlabel":"3标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,5e083107-fe22-452c-adcb-6422c162e5de","SiteID":"20ed132c-c112-404d-86f8-adaa7dc75692","label":"江边村站-会展中心站区间","ParentID":"5e083107-fe22-452c-adcb-6422c162e5de","Parentlabel":"3标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d","Text":"4号线","CanSelect":false,"Datas":null},{"Value":"5e083107-fe22-452c-adcb-6422c162e5de","Text":"3标","CanSelect":false,"Datas":null}],"SegmentID":"5e083107-fe22-452c-adcb-6422c162e5de","Segmentlabel":"3标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"},{"ParentIDPath":"384a9733-2ad6-439c-b26d-91a4a719703d,5e083107-fe22-452c-adcb-6422c162e5de","SiteID":"a1282d15-9ff3-47a8-b65a-fdf4e7797750","label":"会展中心站-林浦站区间","ParentID":"5e083107-fe22-452c-adcb-6422c162e5de","Parentlabel":"3标","Parents":[{"Value":"384a9733-2ad6-439c-b26d-91a4a719703d",
			"Text":"4号线","CanSelect":false,"Datas":null},{"Value":"5e083107-fe22-452c-adcb-6422c162e5de","Text":"3标","CanSelect":false,"Datas":null}],"SegmentID":"5e083107-fe22-452c-adcb-6422c162e5de","Segmentlabel":"3标","LineID":"384a9733-2ad6-439c-b26d-91a4a719703d","Linelabel":"4号线","ConstructionState":"施工中"}]}],"Sites":null},{"IDPath":"008fd419-2c59-4166-9586-a7e8cce9b871","ID":"008fd419-2c59-4166-9586-a7e8cce9b871","label":"3号线","children":[{"IDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,9d3fdc79-abeb-407a-85f0-d21fa58cb895","ID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","label":"1标","children":[{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,9d3fdc79-abeb-407a-85f0-d21fa58cb895","SiteID":"79bb87f9-227d-430d-8212-3e8c15819369","label":"桐木岭站","ParentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Parentlabel":"1标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Text":"1标","CanSelect":false,"Datas":null}],"SegmentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Segmentlabel":"1标","LineID"
			:"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"完工"},{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,9d3fdc79-abeb-407a-85f0-d21fa58cb895","SiteID":"c5166205-bf0d-4705-bae7-8c4816e436e1","label":"桃花寨站","ParentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Parentlabel":"1标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Text":"1标","CanSelect":false,"Datas":null}],"SegmentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Segmentlabel":"1标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"施工中"},{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,9d3fdc79-abeb-407a-85f0-d21fa58cb895","SiteID":"592d66df-ee0a-470a-96f5-a9aead15e494","label":"太慈桥站","ParentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Parentlabel":"1标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Text":"1标","CanSelect":false,"Datas":null}],
			"SegmentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Segmentlabel":"1标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"施工中"},{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,9d3fdc79-abeb-407a-85f0-d21fa58cb895","SiteID":"37e8f67b-406e-4aed-a9f0-feda109a8f21","label":"桐木岭站-桃花寨站区间","ParentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Parentlabel":"1标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Text":"1标","CanSelect":false,"Datas":null}],"SegmentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Segmentlabel":"1标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"施工中"},{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,9d3fdc79-abeb-407a-85f0-d21fa58cb895","SiteID":"3de76feb-993a-4bf8-befe-f1d1d6197de9","label":"桃花寨-太慈桥站区间","ParentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Parentlabel":"1标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,
			"Datas":null},{"Value":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Text":"1标","CanSelect":false,"Datas":null}],"SegmentID":"9d3fdc79-abeb-407a-85f0-d21fa58cb895","Segmentlabel":"1标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"施工中"}]},{"IDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,41e814ed-5884-4cdb-8295-07c765d0e1b0","ID":"41e814ed-5884-4cdb-8295-07c765d0e1b0","label":"2标","children":[{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,41e814ed-5884-4cdb-8295-07c765d0e1b0","SiteID":"5eab2d57-9f2a-42ca-bf7f-416b3e199296","label":"花果园西站","ParentID":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Parentlabel":"2标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Text":"2标","CanSelect":false,"Datas":null}],"SegmentID":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Segmentlabel":"2标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"未开工"},{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,41e814ed-5884-4cdb-8295-07c765d0e1b0",
			"SiteID":"d7b37e14-314c-412c-b56e-9a7eb9e4d5ab","label":"浣纱路站","ParentID":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Parentlabel":"2标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Text":"2标","CanSelect":false,"Datas":null}],"SegmentID":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Segmentlabel":"2标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"未开工"},{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,41e814ed-5884-4cdb-8295-07c765d0e1b0","SiteID":"fa8e87c2-6fc0-4c03-8ec0-c867684e65c1","label":"黔灵山公园站","ParentID":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Parentlabel":"2标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Text":"2标","CanSelect":false,"Datas":null}],"SegmentID":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Segmentlabel":"2标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"施工中"},{"ParentIDPath":
			"008fd419-2c59-4166-9586-a7e8cce9b871,41e814ed-5884-4cdb-8295-07c765d0e1b0","SiteID":"68c79f79-724d-40ae-816a-e18dfe0c9100","label":"花果园西站-浣纱路站区间","ParentID":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Parentlabel":"2标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Text":"2标","CanSelect":false,"Datas":null}],"SegmentID":"41e814ed-5884-4cdb-8295-07c765d0e1b0","Segmentlabel":"2标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"施工中"}]},{"IDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","ID":"95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","label":"3标","children":[{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","SiteID":"d30e371d-18ad-46c4-b58f-f4ae2447ed93","label":"北京路站","ParentID":"95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","Parentlabel":"3标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":
			"95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","Text":"3标","CanSelect":false,"Datas":null}],"SegmentID":"95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","Segmentlabel":"3标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"施工中"},{"ParentIDPath":"008fd419-2c59-4166-9586-a7e8cce9b871,95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","SiteID":"3710b1b4-a2b3-4ea3-821a-98f55711e471","label":"贵医站","ParentID":"95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","Parentlabel":"3标","Parents":[{"Value":"008fd419-2c59-4166-9586-a7e8cce9b871","Text":"3号线","CanSelect":false,"Datas":null},{"Value":"95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","Text":"3标","CanSelect":false,"Datas":null}],"SegmentID":"95d6d02d-7e4f-42d1-ad1a-be54a6d1cd0f","Segmentlabel":"3标","LineID":"008fd419-2c59-4166-9586-a7e8cce9b871","Linelabel":"3号线","ConstructionState":"施工中"}]}],
			"Sites":null}]
	}

	// 危大录入“风险源”数据模型
	modelDangerousRisk() {
		return {"SdcAreaID":"78fc0b85-3598-41d8-9dc4-af1c246b4f4a","AreaID":"badcce10-d2d3-4ea7-84b7-6b71d441325e","AreaName":"主体N3","IsMain":true,"ConstructionMethodCode":"ZTGF-03","ConstructionMethod":"盾构区间","ConstructionStages":null,"ConstructionStageIds":null,"ConstructionStageList":[{"Value":"0c81ffe9-a034-4972-978a-42472c2e460f","Text":"盾构掘进","CanSelect":false,"Datas":false},{"Value":"17c720f3-ec2e-4d82-9950-721a1469a7aa","Text":"盾构接收","CanSelect":true,"Datas":false},{"Value":"7e299dce-f02f-4d78-ae44-335872703432","Text":"盾构穿越","CanSelect":true,"Datas":false},{"Value":"8f93c912-f742-47ec-b7ea-0c6fe8da9ec4","Text":"井接头施工","CanSelect":false,"Datas":false},{"Value":"a2094abf-618e-4dd1-a716-1767e8eaed04","Text":"盾构始发","CanSelect":false,"Datas":false},{"Value":"fe3e176c-feae-4d92-bcd3-685683719139","Text":"完成","CanSelect":false,"Datas":false}],"Descript":"延期3天处理","Images":["../../static/img/sztd_grid_1.jpg"],
		"Templates":[{"DisplayName":"里程","FieldName":"Mileage","DataType":"Mileage","Datas":null,"Value":"2045"},{"DisplayName":"环号","FieldName":"Number","DataType":"Number","Datas":null,"Value":"0"}],"Checked":false,
		"Datas":{},"titleDescribe":"主体分区-111"}
	}

	// 风险巡查列表页数据模型
	modelRiskPatrol() {
		return [{"CoverRate":66,"HasMonitor":false,"HandleedCount":2,"UnHandleCount":1,"ImgList":["../../static/img/sztd_grid_1.jpg"],"RiskItemID":"0ce45e67-4247-45b3-b132-b037465c7c9b","RiskItemSerialNumber":null,"ItemDynamicID":"30e2eabb-c04d-4f6b-b0af-63e6dadda7ef","SiteID":"accb5548-afff-49f1-aea4-612f13584097","UnitID":"f8fa072c-41f7-4ee3-b0e5-30a0cf0c1c26","UserID":"c8b0756d-11ad-403e-8707-b09d3e96d056","RiskItemName":"gfgfgf","UserName":"谢瑞瑞","UnitName":"测试","SiteName":"沿江高速保护","SegmentName":"S03标","CheckTime":"2019-12-23 17:33:24","CheckType":2,"RiskIsPublished":false,"Buttons":["1","2","3"]},{"CoverRate":83,"HasMonitor":false,"HandleedCount":5,"UnHandleCount":1,"ImgList":["../../static/img/sztd_grid_2.jpg","../../static/img/sztd_grid_3.jpg"],"RiskItemID":"0ce45e67-4247-45b3-b132-b037465c7c9b","RiskItemSerialNumber":null,"ItemDynamicID":"7eafad91-eb57-4c12-a657-34ee081a07c7","SiteID":"accb5548-afff-49f1-aea4-612f13584097","UnitID":"f8fa072c-41f7-4ee3-b0e5-30a0cf0c1c26","UserID":"c8b0756d-11ad-403e-8707-b09d3e96d056","RiskItemName":"gfgfgf","UserName":"谢瑞瑞","UnitName":"测试","SiteName":
		"沿江高速保护","SegmentName":"S03标","CheckTime":"2019-12-19 16:16:52","CheckType":2,"RiskIsPublished":true,
		"Buttons":["4","5","6"]}]
	}

	// 预警汇总列表数据模型
	modelEarlyList() {
		return [
			{"SiteID":"7ed6c11d-6505-49bd-a43e-656020ae519e","SiteName":"太慈桥站","WarnUnitName":"建设单位","CreateDate":"2020-02-25 19:15:51","iconColor":"rgb(229,77,66)","CreateUserName":"李红军"},
			{"SiteID":"4738f445-bf7a-4417-b6e8-58a461b728ae","SiteName":"橘园站","WarnUnitName":"建设单位","CreateDate":"2020-02-25 14:31:34","iconColor":"rgb(211,107,25)","CreateUserName":"李文智"},
			{"SiteID":"00f5e66c-5288-433d-aeef-5deb1b7cc74e","SiteName":"桐木岭站-桃花寨站区间","WarnUnitName":"监理单位","CreateDate":"2020-02-12 21:29:35","iconColor":"rgb(218,205,49)","CreateUserName":"许斌"},
			{"SiteID":"a0cfa842-9255-4f81-bf26-6c4c30c1aa72","SiteName":"桐木岭站-桃花寨站区间","WarnUnitName":"施工单位","CreateDate":"2020-02-12 21:29:27","iconColor":"rgb(218,205,49)","CreateUserName":"程欣然"},
			{"SiteID":"35c499d6-c196-400b-9181-4624a874fb11","SiteName":"园亭路站","WarnUnitName":"风险咨询","CreateDate":"2020-02-12 17:44:31","iconColor":"rgb(211,107,25)","CreateUserName":"朱华俊"},
			{"SiteID":"b66acd45-6da8-4d5b-86dd-c3197423d421","SiteName":"金牛山站","WarnUnitName":"建设单位","CreateDate":"2020-02-12 17:35:47","iconColor":"rgb(229,77,66)","CreateUserName":"李红军"},
			{"SiteID":"601dc057-9ad3-4b16-adb9-00f5d512dcc4","SiteName":"西二环站","WarnUnitName":"建设单位","CreateDate":"2020-02-12 17:25:00","iconColor":"rgb(229,77,66)","CreateUserName":"叶萍"},
			{"SiteID":"fcc4a080-f121-49b8-9f3e-0bcbf31bf9e8","SiteName":"太慈桥站","WarnUnitName":"建设单位","CreateDate":"2020-02-12 17:24:17","iconColor":"rgb(229,77,66)","CreateUserName":"宋宁"},
			{"SiteID":"6a504cd6-347e-429b-821f-303548d0d632","SiteName":"桐木岭站","WarnUnitName":"中建海峡建设发展有限公司","CreateDate":"2020-02-12 15:18:54","iconColor":"","CreateUserName":"许斌"},
			{"SiteID":"5ec5e6af-a218-4008-aeca-07884428f85f","SiteName":"桐木岭站-桃花寨站区间","WarnUnitName":"中建海峡建设发展有限公司","CreateDate":"2020-02-12 15:18:16","iconColor":"rgb(218,205,49)","CreateUserName":"王佳"},
			{"SiteID":"40687979-645d-47e6-87c4-09a372d63250","SiteName":"池边站-化工路站区间","WarnUnitName":"中建海峡建设发展有限公司","CreateDate":"2020-02-12 15:16:11","iconColor":"rgb(218,205,49)","CreateUserName":"王佳"},
			{"SiteID":"72e49a0e-1c95-4e71-8f55-23e399b9c801","SiteName":"橘园站","WarnUnitName":"中建海峡建设发展有限公司","CreateDate":"2020-02-12 15:15:52","iconColor":"rgb(218,205,49)","CreateUserName":"王佳"},
			{"SiteID":"d415b8da-8428-41fd-999c-bebac16c4409","SiteName":"园亭路站","WarnUnitName":"中建海峡建设发展有限公司","CreateDate":"2020-02-12 15:15:42","iconColor":"rgb(218,205,49)","CreateUserName":"王佳"},
			{"SiteID":"4d91b0c2-fd94-4abd-a9b1-ecd4da5b0b2d","SiteName":"福新东路站","WarnUnitName":"中建海峡建设发展有限公司","CreateDate":"2020-02-12 15:14:45","iconColor":"rgb(218,205,49)","CreateUserName":"王佳"},
			{"SiteID":"76da8461-447e-43ec-8e53-ea720f568d8c","SiteName":"远洋路站-鳌峰路站区间","WarnUnitName":"中建海峡建设发展有限公司","CreateDate":"2020-02-12 15:14:41","iconColor":"rgb(218,205,49)","CreateUserName":"王佳"}]
	}

	// 预警汇总列表详情数据模型
	modelEarlyInfo() {
		return {"WarnID":"9bd8d546-c77a-4301-bb7d-2387509b2e18","WarnType":0,"CurNodeID":"00000000-0000-0000-0000-000000000000","CurNodeName":"预警闭合","WarnSiteInfo":{"SiteID":"fa8e87c2-6fc0-4c03-8ec0-c867684e65c1","SiteName":"黔灵山公园站","LineName":"3号线","SegmentName":"2标","AreaName":"2标"},"YJFB":{"ConfirmUserName":"李文智","ConfirmUserUnitType":"建设单位","ConfirmUnitName":"风险咨询","ConfirmDate":"2020-03-03 10:37:16","ConfirmMsg":"web-测试回复","WarnName":"测试-web端",
		"WarnType":0,"WarnTypeName":"监测预警","WarnPart":"测试web","SiteCondition":"四大","SurveyData":[{"SurveyProjectName":"地下水位","GroupName":"WSW","PointName":"WSW6","PointID":"626792c8-d517-4f1e-84be-98c6a9eb82ba","AreaName":"主体","CValue":"-","IsCValueExceed":false,"AValue":"2999.88","IsAValueExceed":true}],"Reason":"撒","SurveySituationDesc":"动词打词","PatrolQuestionDesc":"Null","PatrolImageUrls":null,"ConditionImageUrls":null,"SurveyImageUrls":["../../static/img/sztd_grid_1.jpg",
		"../../static/img/sztd_grid_2.jpg","../../static/img/sztd_grid_3.jpg"],"PossibleImpact":"不能按时交付","CreateUserName":"李红军","CreateUserUnitType":"建设单位","CreateUnitName":"风险咨询","CreateDate":"2020-03-03 10:33:27","Files":[]},"YJCZ":{"MeetingName":"111111","MeetingDate":"2020-03-03 10:38:00","MeetingAddress":"333333334","ActualSiteCondition":"4444444","ImageUrls":[],"WarnAnalysis":"555555555","AlarmName":"66666666666","ApplyTime":"2020-03-03 00:00:00","TreatmentMeasure":"777777777","MettingPeople":"22222222","EliminateCondition":"66666666666","EliminateApplyDate":"2020-03-03 00:00:00","CreateUserName":"许斌","CreateUserUnitType":"监理单位","CreateUnitName":"西安铁一院工程咨询监理有限公司与福州诺成工程项目管理有限公司联合体","CreateDate":"2020-03-03 10:38:51","Files":[]},"JQGZ":{"SurveyData":[{"Item1":"2020-03-03","Item2":[{"SurveyProjectName":"地下水位","GroupName":"WSW","PointName":"WSW6","PointID":"626792c8-d517-4f1e-84be-98c6a9eb82ba","AreaName":"主体","CValue":"0.00","IsCValueExceed":false,"AValue":"2999.88","IsAValueExceed":true}]},
		{"Item1":"2020-03-04","Item2":[{"SurveyProjectName":"地下水位","GroupName":"WGT","PointName":"WW6","PointID":"626792c8-d517-4f1e-84be-98c6a9eb82ba","AreaName":"主体","CValue":"7.08","IsCValueExceed":false,"AValue":"3999.78","IsAValueExceed":true},{"SurveyProjectName":"基坑","GroupName":"JK","PointName":"K001","PointID":"626792c8-d517-4f1e-84be-98c6a9eb82ba","AreaName":"主体","CValue":"73.03","IsCValueExceed":false,"AValue":"2362.99","IsAValueExceed":true}]}],"TrackList":[{"TrackContent":"ggggggggggggg","ImageUrls":[],"CreateUserName":"许斌","CreateUserUnitType":"监理单位","CreateUnitName":"西安铁一院工程咨询监理有限公司与福州诺成工程项目管理有限公司联合体","CreateDate":"2020-03-03 10:39:36","Files":[]}]},"XJSQ":[{"Content":"000000000","ImageUrls":[],"CreateUserName":"程欣然","CreateUserUnitType":"施工单位","CreateUnitName":"上海隧道工程有限公司","CreateDate":"2020-03-03 10:59:40","Files":[]},{"Content":"0000000000000","ImageUrls":["/File/GetFile?id=20200303-748ecfeffdcf427eb580422725716831.jpg"],"CreateUserName":"程欣然","CreateUserUnitType":"施工单位","CreateUnitName":"上海隧道工程有限公司","CreateDate":
		"2020-03-03 10:43:58","Files":[]}],"XJSH":[{"Content":"aaaaaaaaaaaa","CreateUserName":"叶萍","CreateUserUnitType":"建设单位","CreateUnitName":"安监部","CreateDate":"2020-03-03 11:03:25","Files":null},{"Content":"lllllllllllllllll","CreateUserName":"宋宁","CreateUserUnitType":"建设单位","CreateUnitName":"项目部","CreateDate":"2020-03-03 11:02:34","Files":null},{"Content":"kkkkkkkkkkkkkk","CreateUserName":"李文智","CreateUserUnitType":"建设单位","CreateUnitName":"风险咨询","CreateDate":"2020-03-03 11:01:41","Files":null},{"Content":"44444444444444","CreateUserName":"许斌","CreateUserUnitType":"监理单位","CreateUnitName":"西安铁一院工程咨询监理有限公司与福州诺成工程项目管理有限公司联合体","CreateDate":"2020-03-03 11:00:30","Files":null},{"Content":"hhhhhhhhhhhhh","CreateUserName":"许斌","CreateUserUnitType":"监理单位","CreateUnitName":"西安铁一院工程咨询监理有限公司与福州诺成工程项目管理有限公司联合体","CreateDate":"2020-03-03 10:58:44","Files":null}],"PublishInfoBase":{"SurveyData":[{"SurveyProjectName":"地下水位","GroupName":"WSW","PointName":"WSW6","PointID":"626792c8-d517-4f1e-84be-98c6a9eb82ba","AreaName":"主体",
		"CValue":"-","IsCValueExceed":false,"AValue":"2999.88","IsAValueExceed":true}],"Reason":null,"CauseAnalysis":"撒","CreateUserName":"李红军","CreateUserUnitType":"建设单位","CreateUnitName":"风险咨询","CreateDate":"2020-03-03 10:33:27","WarnName":"测试-web端","WarnType":0,"WarnTypeName":"监测预警","WarnLevelText":"红色预警","SiteName":"黔灵山公园站","WarningNo":"JC20200303005","SiteID":"fa8e87c2-6fc0-4c03-8ec0-c867684e65c1","WarnID":"9bd8d546-c77a-4301-bb7d-2387509b2e18","FlowWorkID":"357","SiteCondition":"四大","WarningLocation":"测试web","Images":[],"Files":[],"ConfirmUserName":"李文智","ConfirmUserUnitType":"建设单位","ConfirmUnitName":"风险咨询","ConfirmDate":"2020-03-03 10:37:16","ConfirmMsg":"web-测试回复","ButtonList":[]},"WarningApply":{"Content":"申请延期88天","CreateUserName":"程欣然","CreateUserUnitType":"施工单位","CreateUnitName":"上海隧道工程有限公司","CreateDate":"2020-03-03 10:40:56","Files":null},"WarningReview":{"Content":"ssssssssssssssss","CreateUserName":"李红军","CreateUserUnitType":"建设单位",
		"CreateUnitName":"风险咨询","CreateDate":"2020-03-03 10:43:08","Files":null}}
	}

	// 预警处理列表数据模型
	modelHandleList() {
		return [{"WarnID":"cd2abf94-1a23-4f71-b289-59282b282869","WarnName":"23432","LineName":"3号线","SegmentName":"1标","SiteName":"桐木岭站","WarnUnitName":"中建海峡建设发展有限公司","CreateDate":"2020-02-25 19:56:27","CreateUserName":"王佳","iconColor":"rgb(211,107,25)"},{"WarnID":"gf2abf94-1a23-4f71-b289-59282b282869","WarnName":"23432","LineName":"3号线","SegmentName":"2标","SiteName":"黔灵山公园站","WarnUnitName":"风险咨询","CreateDate":"2020-02-25 19:56:27","CreateUserName":"李文智","iconColor":"rgb(218,205,49)"},{"WarnID":
		"cd2aee94-1a23-4f71-b289-59282b282869","WarnName":"监测0228","LineName":"3号线","SegmentName":"2标","SiteName":"黔灵山公园站","WarnUnitName":"风险咨询","CreateDate":"2020-02-25 19:56:27","CreateUserName":"朱华俊","iconColor":"rgb(218,205,49)"},{"WarnID":"cd3tbf94-1a23-4f71-b289-59282b282869","WarnName":"监测0228","LineName":"3号线","SegmentName":"2标","SiteName":"黔灵山公园站","WarnUnitName":"风险咨询","CreateDate":"2020-02-25 19:56:27","CreateUserName":"朱华俊","iconColor":"rgb(218,205,49)"},{"WarnID":"cwaabf94-1a23-4f71-b289-59282b282869","WarnName":"监测0228","LineName":"3号线","SegmentName":"2标","SiteName":"黔灵山公园站","WarnUnitName":"风险咨询",
		"CreateDate":"2020-02-25 19:56:27","CreateUserName":"朱华俊","iconColor":"rgb(229,77,66)"}]
	}

	// 已办工作列表数据模型
	modelAlreadyDone() {
		return [{"icon":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png","title":"消防演习之灭火器和消防水管实战演练","name":"许明","date":"2018-01-30 15:30","reply":"共有111条回复"},{"icon":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png","title":"睿语考勤通知","name":"徐燕","date":"2018-05-23 9:43","reply":"共有7条回复"},{"icon":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png","title":"邮箱维护通知","name":"赵金鹏","date":"2018-01-31 14:04","reply":"共有114条回复"},{"icon":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png","title":"“我心中的企业”征文启事","name":"徐燕","date":"2017-09-19 13:26","reply":"共有19条回复"},{"icon":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png","title":"新员工入职培训计划表","name":"马海松","date":"2017-06-19 16:19","reply":"共有5条回复"},{"icon":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png","title":"个人通讯录修改通知","name":"徐燕","date":"2017-09-25 11:23","reply":"共有16条回复"},{"icon":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png","title":"试用期考核表","name":"马海松",
		"date":"2017-09-11 11:24","reply":"共有4条回复"},{"icon":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png","title":"试用期考核表","name":"马海松","date":"2017-08-09 11:50","reply":"共有3条回复"}]
	}

	// 待发工作列表数据模型
	modelTobeIssued() {
		return [{"icon":"","title":"员工请假单（新）","name":"杨坤","date":"今天 15:43","reply":"共有0条回复"},{"icon":"","title":"员工请假单（新）","name":"杨坤","date":"2018-11-19 09:24","reply":"共有2条回复"},{"icon":"","title":"员工请假单（新）","name":"杨坤","date":"2018-11-15 09:24","reply":"共有2条回复"},{"icon":"","title":"员工请假单（新）","name":"杨坤","date":"2018-11-13 09:52","reply":"共有2条回复"}]
	}

	// 已发工作列表数据模型
	modelAlreadyIssued() {
		return [{"icon":"","title":"员工请假单（新）","name":"杨坤","date":"2018-11-15 09:24","reply":"共有2条回复"},{"icon":"","title":"员工请假单（新）","name":"杨坤","date":"2018-11-13 09:52","reply":"共有2条回复"},{"icon":"","title":"员工刷卡异常单","name":"杨坤","date":"2017-07-28 18:27","reply":"共有2条回复"},{"icon":"","title":"员工刷卡异常单","name":"杨坤","date":"2018-06-23 09:58","reply":"共有2条回复"}]
	}

	// 巡查报告列表数据模型
	modelRiskShow() {
		return [{"title":"防水施工","level":"Ⅲ","date":"2020-05-08 08:36:34","checked":false},{"title":"钢筋和混凝土施工","level":"Ⅲ","date":"2020-05-08 16:56:34","checked":false},{"title":"模板及支架体系施工","level":"Ⅱ","date":"2020-05-08 16:56:34","checked":false},{"title":"换撑、支撑拆除","level":"Ⅲ","date":"2020-05-08 16:56:34","checked":false},{"title":"红黏土","level":"Ⅲ","date":"2020-05-08 16:43:34","checked":false},{"title":"挂网喷锚施工","level":"Ⅱ","date":"2020-05-08 16:56:34","checked":false},{"title":"土石方开挖(非放坡开挖)","level":"Ⅱ","date":"2020-05-08 16:56:34","checked":false},{"title":"污水管DN400","level":"Ⅱ","date":"2020-05-08 16:56:34","checked":false},{"title":"燃气管DN300","level":"Ⅱ","date":"2020-05-08 16:56:34","checked":false},{"title":"给水管DN110","level":"Ⅱ","date":"2020-05-08 16:56:34","checked":false}]
	}
 }
const _modelData = new ModelData();
export default _modelData;
