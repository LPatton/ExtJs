Ext.create("Ext.panel.Panel",{
	title:'card布局',
    width:220,
    heigth:210,
    layout:'card',
    border:false,
    bodyPadding:2,
    items:[
           {id:'card-0',html:"<center><img src=''></center>"},
           {id:'card-1',html:"<center><img src=''></center>"},
           {id:'card-2',html:"<center><img src=''></center>"},
           {id:'card-3',html:"<center><img src=''></center>"},
           ],
           renderTo:Ext.getBody()

}).center();