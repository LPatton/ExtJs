Ext.onReady(function(){
	Ext.create("Ext.form.Panel",{
			title:'用户注册',
			width:250,
			height:300,
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
	        	 fieldLabel:'手机号',
	        	 name:'phone',
	        	 allowBlank:false,
	        	 emptyText:'请输入11位手机号',
	        	 maxLength:11,
	        	 minLength:11
	        	},
	        	{
	        	 fieldLabel:'e-mail',
	        	 name:'email',
	        	 vtype:'email'
	        	},
	        	{
	        	 fieldLabel:'混和密码',
	        	 name:'minpwd',
	        	 regex:/^[a-zA-Z]{3}[@#$%&][0-9]{2}$/,
	        	 regexText:'输入3位字符一位@#$%,2位数字'
	        	},
	        	{
	        	 xtype:'numberfield',
	        	 name:'age',
	        	 fieldLabel:'输入年龄',
	        	 maxValue:15,
	        	 minValue:7,
	        	 value:8,
	        	 step:2
	        	}
	  
	        	],
	        	buttons:[{text:'注册'}],
	        	buttonAlign:'center'
	}).center();
	var store = Ext.create('Ext.data.TreeStore', {
	    root: {
	        expanded: true,
	        children: [
	            { text: "目的地", expanded: true, children:[
	                {text:"武汉",leaf:true},
	                {text:"西安",leaf:true},
	                {text:"天水",leaf:true}
	                ] },
	            { text: "家庭作业", expanded: true, children: [
	                { text: "读书报告", leaf: true },
	                { text: "algebra", leaf: true},
	                { text: "数学", leaf: true }
	            ] },
	            { text: "买票", leaf: true }
	        ]
	    }
	});

	Ext.create('Ext.tree.Panel', {
	    title: 'Simple Tree',
	    width: 200,
	    height: 150,
	    store: store,
	    rootVisible: false,
	    renderTo: Ext.getBody()
	});
//	Ext.Msg.show({
//	     title:'Save Changes?',
//	     msg: '关闭菜单不保存还是保存？',
//	     buttons: Ext.Msg.YESNOCANCEL,
//	     icon: Ext.Msg.QUESTION
//	});
//	
});