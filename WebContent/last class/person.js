Ext.define("app.person", {
			extend : 'Ext.data.Model',
			fields: [{
						name : 'id',
						type : 'int'
					}, {
						name : 'name',
						type : 'string'
					}, {
						name : 'sex',
						type : 'boolean'
					}]
		});