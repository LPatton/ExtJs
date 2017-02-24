Ext.onReady(function(){
	var menu=[
	  {title:'学生管理模块',menus:[
	    {name:"添加学生",url:'进入添加学生界面'},
	    {name:"更新学生",url:'进入更新学生界面'},
	    {name:"删除学生",url:'进入删除学生界面'},
	    {name:"查询学生",url:'进入查询学生界面'}
	    ]
	    },
	    {title:'宿舍管理模块',menus:[
	                   	    {name:"添加宿舍",url:'进入添加宿舍界面'},
	                   	    {name:"更新宿舍",url:'进入更新宿舍界面'},
	                   	    {name:"删除宿舍",url:'进入删除宿舍界面'},
	                   	    {name:"查询宿舍",url:'进入查询宿舍界面'}
	            ]
	                   	    },
               	 {title:'班主任管理模块',menus:[
	                   	             	    {name:"添加班主任",url:'进入添加班主任界面'},
	                   	             	    {name:"更新班主任",url:'进入更新班主任界面'},
	                   	             	    {name:"删除班主任",url:'进入删除班主任界面'},
	                   	             	    {name:"查询班主任",url:'进入查询班主任界面'}
	                   	             	    ]
	                   	             	    }
	                   	    				];
Ext.create("Ext.container.Viewport",{
	layout:'border',
	items:[{
		height:70,
		html:'<center><font size=7 color=red>学生管理系统</font></center>',
		region:'north'
	},{
		title:'操作菜单',
		region:'west',
		width:100,
		collapsible:true,
		resizable:true,
		maxWidth:100,
		minWidth:60,
		id:"menus",
//		layout:{
//			type:'accordion',
//			titleCollapse:true,
//			animate:true,
//			activeOnTop:true
//		
//	},
//	{
//		xtype:"tabpanel",
//		region:'center',
//		id:"mainDisp"
//	},
		items:[{
			xtype:'button',
			text:'添加工作面板',
			handler: function(){
				var tabpanel=this.up("viewport").down("tabpanel")
				var tab;
				var panels=tabpanel.query("panel#domManager")
				if(panels&&panels.length>0){
					tab=panels[0];
				}else{
					tab=tabpanel.add({
							title:'工作区2',
							html:'欢迎进入宿舍管理',
							closeable:true,
							itemId:'domManager'
					});
				}
				tabpanel.setActiveTab(tab);
			}
		}]
	}, {
		       xtype:'tabpanel',
		       region:'center',
		       items:[{
				title:'工作区1',
				html:'欢迎进入本系统'
			       }]
		},{
		title:'工具区',
		region:'east',
		width:100,
		collapsible:true,
		resizable:true
	},{
		title:'备注区',
		region:'south',
		height:100,
		collapsible:true,
		resizable:true
	}]
});
})