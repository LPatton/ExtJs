Ext.define("app.personForm", {
			extend : 'Ext.window.Window',
			title : '编辑person',
			autoShow : true,
			width : 300,
			height : 300,
			items : [{
						xtype : 'form',
						defaultType : 'textfield',
						items : [{
									fieldLabel : '姓名',
									name : 'name'
								}, {
									fieldLabel : '性别',
									name : 'sex'
								}, {
									xtype : 'hidden',
									name : 'id'
								}]
					}],
			dockedItems : [{
						xtype : 'toolbar',
						dock : 'bottom',
						items : [{
									text : '修改',
									itemId : 'update'
								}, {
									text : '放弃',
									itemId : 'cancel'
								}]
					}]
		})