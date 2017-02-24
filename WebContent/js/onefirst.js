Ext.onReady(function(){
	Ext.define("Usuario",{
		nome:"",
		senha:"",
		constructor:function(option){
			Ext.apply(this.option||{});
			console.log("Constructor foi chamado...");
		},
		login:function(){
			console.log("Fazendo login...");
		},
		logout:function(){
			console.log("Fazendo logout...");
	}
	},
			function(){
				console.log("callback foi chamado");
	}
	);
		var usuario=Ext.create("Usuario",{
			nome:"Henrique",
			senha:"123"
		});
		console.log(usuario);
});
				
