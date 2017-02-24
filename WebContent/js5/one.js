Ext.define("app.model.student", {
			extend : 'Ext.data.Model',
			require : ["Ext.data.Model"],
			field : [{
						name : 'stuid',
						type : 'int'
					}, {
						name : 'name',
						type : 'String'
					}, {
						name : 'age',
						type : 'int'
					}, {
						name : 'sex',
						type : 'boolean'
					}],
			idPorperty : 'stuid'
		});