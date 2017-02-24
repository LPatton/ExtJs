Ext.require("app.store.student");
Ext.onReady(function() {
			var stuStore = Ext.create("app.store.student"/*,{storeId:'student'}*/);
			//alert(stuStore.storeId);
			/*var stuStore1=Ext.getStore("app.store.student");
			alert(stuStore1==stuStore);
			stuStore1=Ext.getStore("student");
			alert(stuStore1==stuStore);
			*/
			stuStore.load(function(records, operation, success) {
						var stu1=stuStore.getAt(0);
						stu1.set("age",99);
						stuStore.removeAt(1);
						stuStore.add({name:'tom',age:77});
						alert("同步到服务上……");
						stuStore.sync();
					});
		})