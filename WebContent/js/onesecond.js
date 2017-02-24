Ext.onReady(function(){
	Ext.define("Usuario",{
	config:{
		nome:"",
		senha:""
	},
	setNome:function(n){
		this.nome=n+"*";
	}
});
Ext.define("Calculadora",{
	statics:{
		numero:0,
		soma:function(n1,n2){
			return n1+n2;
		}
	},
	constructor:function(){
		this.statics().numero++;
	}
});
Ext.define("Constantes",{
	singleton:true,
	URL_BLOG:"http://henriquesilvestre.com",
	FACEBOOK:"http://facebook.com/hsilvest"
});
  var me=Ext.create("Usuario");
  alert(me.setNome('saying'));
  alert(Calculadora.soma(2,5));
  alert(Constantes.URL_BLOG);
	
});
