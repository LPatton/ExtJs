Ext.onReady(function(){
	var btn=Ext.get("btn");
	btn.on("click",function(){
		var doms=Ext.dom.Query.select("p");
		if(doms){
			Ext.each(doms,function(item){
				Ext.get(item).remove();
			});
		}
	});
	
	Ext.Msg.show({
		modal:false,
		title:'系统加载',
		wait:true,
		waitConfig:{
			interval:500,
			duration:5000,
			increment:15,
			text:'拼命加载中...'
		}
	});
	
	
	
});