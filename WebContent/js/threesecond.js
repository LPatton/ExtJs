Ext.onReady(function(){
	Ext.create("Ext.form.Panel",{
			title:'用户登录',
			width:400,
			height:200,
			renderTo:"main",
			defaultType:"textfield",
			defaults:{labelAlign:'right'},
	        items:[{
	        	fieldLabel:"用户名",
	            name:'userName',
	            emptyText:'请输入3到6位姓名'
	        	},
	        	{
	        	fieldLabel:"密码",
	        	name:'pwd'
	        	},
	        	{
	        		fieldLabel:"再次输入密码",
		        	name:'pwd'
	        	}
	        	],
	
	        	buttons:[{text:'注册'},{text:'登录'}],
	        	buttonAlign:'center'
	}).center();
	
});