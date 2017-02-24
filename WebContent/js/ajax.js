Ext.onReady(function(){
	Ext.widget("form",{
		title:'注册用户',
		width:300,
		height:200,
		renderTo:'main',
		defaultType:"textfield",
		items:[{
			fieldLabel:'用户名',
			name:'userName',
			id:"userName",
			msgTarget:'qtip',
			listeners:{
				blur:function(){
					var value=this.getvalue();
					var me=this;
					Ext.Ajax.request({
						url:'register',
						params:{
							name:value
						},
						success:function(response){
							var text=response.responseText;
							var obj=Ext.decode(text);
							if(me.myTip){
								me.myTip.update(obj.msg);
							}else{
								me.myTip=Ext.widget("tooltip",{
									target:'userName',
									html:obj.msg
								});
							}
						},
						failure:function(response){
							var text=response.responseText;
							var obj=Ext.decode(text);
							if(me.myTip){
								me.myTip.update(obj.msg);
							}else{
								me.myTip=Ext.widget("tooltip",{
									target:'userName',
									html:obj.msg
								});
							}
						}
					});
				}
			}
		},{
			fieldLabel:'密码',
			name:'pwd'
		}],
		buttons:[{
			text:'注册'
		}]
		
	}).center()

});