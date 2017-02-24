Ext.onReady(function(){
var win=Ext.create("Ext.window.Window",{
	title:"My first window",
	width:300,
	heigh:200,
	maximizable:true,
	layout:{
		xtype:"panel",
		type:'hbox',
		align:'stretch',
		height:60
	},
	items:[{
		title:"Menu",
		html:"The main menu",
		flex:1
	},{
		title:"Content",
		html:"The main content!",
		flex:1
	}]
}).show();
});