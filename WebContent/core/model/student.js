Ext.define("app.model.student", {
			extend : "Ext.data.Model",
			fields : [{
						name : 'id',
						type : 'int'
					}, {
						name : 'name',
						type : 'string'
					}, {
						name : 'age',
						type : 'int'
					}]
		})