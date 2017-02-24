Ext.onReady(function(){
   Ext.Ajax.request({
	 url:'getstudents',
	 success:function(response){
		 var result=Ext.decode(response.responseText);
		 var tp1=new Ext.XTemplate(
		  '<center><table border=1 width=60%>'
				 +'<tr><td>id</td><td>姓名</td><td>学号</td><td>年龄</td></tr>',
				 '<tp1 for=".">',
				 '<tr><td>{id}</td><td>{name}</td><td>{stuId}</td><td>{age}</td></tr>',
		         '</tpl></table></center>');
		 tpl.overwrite(Ext.getBody(),result.datas);
	 },
	 failure:function(response){
		 
	 }
	   
   });
	   
	   
	   
   });
   
	
	
	


