Ext.define("app.persons", {
			extend : "Ext.data.Store",
			autoLoad : true,
			storeId : "personStore",
			require : ["app.person"],
			model : "app.person",
			pageSize : 10,
			proxy : {
				type : 'ajax',
				url : "getPersons",
				reader : {
					type : 'json',
					root : 'data',
					totalProperty : 'total'
				}
			}
		});