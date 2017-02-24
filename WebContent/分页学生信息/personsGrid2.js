Ext.require(["app.persons","app.personForm"]);
Ext.onReady(function() {
			Ext.create("Ext.grid.Panel", {
						width : 500,
						height : 400,
						title : '显示学生',
						renderTo : 'main',
						forceFit:true,
						columns : [{
									text : 'id',
									dataIndex : 'id'
								}, {
									text : '姓名',
									dataIndex : "name"
								}, {
									text : '性别',
									dataIndex : 'sex'
								}]
						,
                      store:Ext.create("app.persons"),
                       bbar: Ext.create('Ext.toolbar.Paging', {
                        store:Ext.getStore("personStore"),
                        displayInfo: true,
                        displayMsg: '显示学生 {0} - {1} of {2}',
                        emptyMsg: "没有任何学生"
                    }),
                    listeners:{
                    itemdblclick:function( me, record, item, index, e, eOpts ){
                     var window=Ext.create("app.personForm");
                     window.down("form").getForm().loadRecord(record);
                     window.down("button#update").on("click",function(){
                      window.down("form").getForm().updateRecord(record);
                       window.close();
                     })
                    }
                    }
					}).center();
		})