Ext.require("app.store.student");
Ext.onReady(function() {
			Ext.create("Ext.grid.Panel", {
						title : "学生显示",
						width : 600,
						height : 300,
						renderTo : 'main',
						forceFit : true,
						plugins:[{ptype: 'cellediting', clicksToEdit: 2}],
						selType : "checkboxmodel",
						selModel : {
							checkOnly : false,
							mode : "MULTI"
						},
						dockedItems : [{
									xtype : 'toolbar',
									dock : 'top',
									items : [{
												text : '删除',
												handler:function(){
												var grid=this.up("grid");
												var selModel=grid.getSelectionModel();
												var models=selModel.getSelection();
												if(models.length<1){
												  Ext.Msg.show({title:'提示',msg:'没有选中记录'})
												  }else{
												  grid.getStore().remove(models);
												  }
												}
											},{text:'保存',handler:function(){
											var grid=this.up("grid");
												grid.getStore().sync();
											}}]
								}],
						columns : [{
									xtype : "rownumberer"
								}, {
									text : 'id',
									dataIndex : 'id'
								}, {
									text : '姓名',
									dataIndex : 'name',
									editor:'textfield'
								}, {
									text : '学号',
									dataIndex : 'stuId'
								}, {
									text : '年龄',
									dataIndex : 'age',
									editor:'numberfield',
									renderer : function(value) {
										if (value <= 18) {
											return "<font color='blue'>少年</font>"
										} else {
											return "<font color='green'>青年</font>"
										}
									}
								}, {
									text : '性别',
									dataIndex : 'sex',
									xtype : 'booleancolumn',
									trueText : '男',
									falseText : '女'
								}],
						store : Ext.create("app.store.student", {
									storeId : 'student'
								})
					}).center();
			Ext.getStore("student").load();
		});