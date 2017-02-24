Ext.require(["app.persons", "app.personForm"]);
Ext.onReady(function() {
			Ext.create("Ext.grid.Panel", {
						width : 500,
						height : 400,
						title : '显示学生',
						renderTo : 'main',
						forceFit : true,
						columns : [{
									text : 'id',
									dataIndex : 'id'
								}, {
									text : '姓名',
									dataIndex : "name",
									editor : "textfield"
								}, {
									text : '性别',
									dataIndex : 'sex',
									editor : "textfield"
								}],
						store : Ext.create("app.persons"),
						bbar : Ext.create('Ext.toolbar.Paging', {
									store : Ext.getStore("personStore"),
									displayInfo : true,
									displayMsg : '显示学生 {0} - {1} of {2}',
									emptyMsg : "没有任何学生"
								}),
						plugins : [Ext.create('Ext.grid.plugin.RowEditing', {
									clicksToEdit : 2
								})],
						tbar : [{
									text : "添加",
									handler : function() {

									}
								}]
					}).center();
		})