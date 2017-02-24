// 定义一个student的model结构而已
Ext.define("app.studentModel", {
			extend : "Ext.data.Model",
			fields : [{
						name : 'stuId',
						type : 'string',
						mapping : 'stuId'
					}, {
						name : "name",
						type : 'string'
					}, {
						name : 'age',
						type : 'int'
					}, {
						name : 'sex',
						type : 'string'
					}, {
						name : 'zhuanye',
						type : 'string'
					}],
					idProperty:"stuId",
					proxy:{
					  type:'ajax',
					  url:'getStudent',
					  reader:{
					    type:'json',
					    root :'data'
					  }
				
					 }
		});