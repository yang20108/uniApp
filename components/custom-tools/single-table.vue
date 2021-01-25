<template>
	<view class="wrap">
		<view class="div-table">
			<view v-bind:class="classHead">
				<view v-for="(col,index) in columns" :key="index" v-bind:class="col.className==undefined?classCell:col.className">{{col.title}}</view>
			</view>
			<view v-bind:class="classBody" v-for="(row,index) in datas" :key="index">
				<view v-for="(cell,index1) in row" :key="index1" v-bind:class="cell.className==undefined?classCell:cell.className">{{cell.value}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: { //标题
			title: String,
			//标题样式
			classTitle: {
				type: String,
				default: 'h1'
			},
			//列配置
			columns: {
				type: Array,
				default: function() {
					return [{
						title: '第一列',
						className: 'td'
					}, {
						title: '第二列',
						className: 'td'
					}, {
						title: '第三列',
						className: 'td'
					}, {
						title: '第四列',
						className: 'td'
					}]
				}
			},
			//表头样式
			classHead: {
				type: String,
				default: 'th'
			},
			//表身样式
			classBody: {
				type: String,
				default: 'tr'
			},
			//单元格样式
			classCell: {
				type: String,
				default: 'td'
			},
			//数据
			datas: {
				type: Array,
				default: function() {
					return [
						[{
							value: "I"
						}, {
							value: "A"
						}, {
							value: "B"
						}, {
							value: "C"
						}]
					];
				}
			}
		},
	};
</script>

<style lang="scss">
	.h1 {
		text-align: left;
		font-size: 35upx;
		font-weight: bold;
		padding: 10upx 0;
	}

	.wrap {}

	$div-table-border-color: #ddd;
	$div-table-border-width: 1upx;

	.div-table {
		display: table;
		width: 100%;
		height: 100%;
		border: $div-table-border-width solid $div-table-border-color;
		box-sizing: border-box;
		table-layout: fixed;
		position: relative;

		.celspan {
			display: table;
			width: 100%;
			height: 100%;

			.td {
				display: table-cell;
				border: none !important;
			}

			.td+.td {
				border-left: $div-table-border-width solid $div-table-border-color !important;
			}
		}

		.rowspan {
			display: table;
			width: 100%;
			height: 100%;

			.tr {
				display: table-row;
				border: none !important;
			}
		}

		&.fixed-thead {

			.tbody,
			.thead,
			.tr,
			.th,
			.td {
				display: block;
			}

			.tr,
			.th {
				&:after {
					content: '';
					display: block;
					visibility: hidden;
					clear: both;
					height: 0;
				}
			}

			.td {
				float: left;
				width: 33.33%;
			}

			.tbody {
				height: 400upx;
				overflow-y: auto;
				overflow-x: hidden;
			}
		}

		.tr,
		.th {
			display: table-row;

			&+.tr,
			&+.th {

				.td,
				.th {
					border-top: $div-table-border-width solid $div-table-border-color;
					word-break: break-word;
				}
			}
		}

		.rowspan {

			.tr,
			.th {
				display: table-row;

				.td,
				.th {
					border: none;
				}

				&+.tr,
				&+.th {

					.td,
					.th {
						border-top: $div-table-border-width solid $div-table-border-color;
					}
				}
			}
		}

		.td {
			display: table-cell;
			vertical-align: middle;
			text-align: center;
			box-sizing: border-box;
			padding: 10upx;

			&.noPadding {
				padding: 0;
			}

			&+.td {
				border-left: $div-table-border-width solid $div-table-border-color;
			}
		}

		.th {
			background-color: #ddeaf6;
		}

		.th .td {}

		.tbody {
			display: table-row-group;
		}

		.thead {
			display: table-header-group;

			.tr,
			.th {

				.td,
				.th {
					border-bottom: $div-table-border-width solid $div-table-border-color;
				}
			}
		}

		.tfoot {
			display: table-footer-group;

			.tr,
			.th {

				.td,
				.th {
					border-top: $div-table-border-width solid $div-table-border-color;
				}
			}
		}

		.colgroup {
			display: table-column-group;
		}

		.col {
			display: table-column;
		}

		.caption {
			display: table-caption;
		}
	}
</style>
