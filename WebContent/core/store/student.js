Ext.define("app.store.student", {
			extend : 'Ext.data.Store',
			requires : ["app.model.student"],
			model : "app.model.student",
			/* autoLoad:true, */
			proxy : {
				api : {
					create : "addStudent",
					read : "getStudents",
					update : "updateStudent",
					destroy : "deleteStudent"
				},
				type : 'ajax',
				reader : {
					type : 'json',
					root : 'datas'
				},
				writer:{
				 type:'json',
				 allowSingle : false,
				 encode:true,
				 root:'data'
				}
				
			}
		});