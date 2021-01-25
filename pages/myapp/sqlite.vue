<template>
	<view>
		<view style="padding: 10px;">
			<button type="primary" plain="true" @click="openDatabase">打开数据库</button>
			<button type="primary" plain="true" @click="transaction">执行事务</button>
			<button type="primary" plain="true" @click="executeSql">创建表并插入数据</button>
			<button type="primary" plain="true" @click="selectSql">查询数据</button>
			<button type="primary" plain="true" @click="droptable">删除表</button>
			<button type="primary" plain="true" @click="closeDatabase">关闭数据库</button>
		</view>
		<view class="sq_tips">操作提示：{{tips}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: "",
				options: {
					"name":"first2", // 数据库名称[必填]
					"path":"_doc/first2.db", // 数据库路径[必填]
					"table": "users", // 表名称[必填]
					"operation": "", // 需要执行的事务操作[必填] begin开始事务、commit提交、rollback回滚
					"sql": "" // 需要执行的SQL语句[必填]
				},
				// Sqlite模块错误
				errors: [
					{"code":"-1401","message":"数据库没有打开"},
					{"code":"-1402","message":"数据库已经打开"},
					{"code":"-1403","message":"WWW目录下的数据库只有读权限"},
					{"code":"-1404","message":"其他错误"},
				]
			}
		},
		methods: {
			openDatabase() {
				if (this.isOpenDatabase()) {
					this.tips = "数据库已经打开";
					return;
				}
				// 如果数据库存在则打开，不存在则创建。 
				// path 必须为本地地址，支持以下类型路径：
				// 1 以"_"开头的相对路径，如"_doc/a.db"（推荐使用"_doc/x.db"目录保存）
				// 2 相对路径 - 相对于当前页面的host位置，如"a.db"（不推荐使用，相对路径无法写入数据，只能读取数据）
				// 3 绝对路径 - 系统绝对路径，如Android平台"/sdcard/a.db"，此类路径通常通过其它5+ API获取的（不推荐使用，无法跨平台）
				// 4 本地路径URL - 以“file://”开头，后面跟随系统绝对路径。 注意：写入数据需符合系统沙盒权限机制，应用资源目录（_www）目录通常不允许写操作，只能读取。 
				let that = this;
		 		plus.sqlite.openDatabase({
		 			name: that.options.name,
		 			path: that.options.path,
		 			success: function(succ){
		 				that.tips = "打开数据库成功";
		 			},
		 			fail: function(fail){
						that.tips = "打开数据库失败 " + JSON.stringify(fail)
		 			}
		 		});
			},
			isOpenDatabase() {
				// 判断数据库是否打开
				return plus.sqlite.isOpenDatabase(this.options)
			},
			closeDatabase() {
				if (this.isOpenDatabase()) {
					let that = this;
					plus.sqlite.closeDatabase({
						name: that.options.name,
						success: function(succ) {
							that.tips = "关闭成功";
						},
						fail: function(fail) {
							that.tips = "关闭失败 " + JSON.stringify(fail);
						}
					})
				}
			},
			transaction() {
				let that = this;
				plus.sqlite.transaction({
					name: that.options.name,
					operation: "begin",
					success: function(succ) {
						that.tips = "执行成功"
					},
					fail: function(fail) {
						that.tips = "执行失败 " + JSON.stringify(fail);
					}
				})
			},
			executeSql() {
				// 执行增、删、改等操作的SQL语句
				let that = this;
				plus.sqlite.executeSql({
					name: that.options.name,
					// sql: "create table if not exists " + that.options.table + " ('name' CHAR(110),'sex' INT(11),'age' INT(11))"
					sql: ["create table if not exists " + that.options.table + " ('name' CHAR(110),'sex' INT(11),'age' INT(11))",
					"insert into " + that.options.table + " values('用户','男','11')"],
					success: function(succ) {
						that.tips = "创建表成功"
						plus.sqlite.transaction({
							name: that.options.name,
							operation: "commit"
						})
					},
					fail: function(fail) {
						that.tips = "创建表失败 " + JSON.stringify(fail);
						plus.sqlite.transaction({
							name: that.options.name,
							operation: "rollback"
						})
					}
				})
			},
			selectSql() {
				// 执行查询的SQL语句
				let that = this
				plus.sqlite.selectSql({
					name: that.options.name,
					sql: "select * from " + that.options.table,
					success: function(succ) {
						that.tips = "查询成功 " + JSON.stringify(succ)
					},
					fail: function(fail) {
						that.tips = "查询失败 " + JSON.stringify(fail)
					}
				})
			},
			droptable() {
				let that = this
				plus.sqlite.executeSql({
					name: that.options.name,
					sql: "drop table " + that.options.table,
					success: function(succ) {
						that.tips = "删除表成功";
					},
					fail: function(fail) {
						that.tips = "删除表失败: " + JSON.stringify(e);
					}
				});
			}
		}
	}
</script>

<style>
	.sq_tips {
		width: 95%;
		border: 1px solid #0099FF;
		padding: 3px;
		font-size: 16px;
		word-wrap: break-word;
		word-break: break-all;
	}
</style>
