Ext.onReady(function(){
	Ext.define("one",
			{one_1:function(){console.log("one_1方法 调用");},
			one_2:function(){console.log("one one_2");}			
			});
	Ext.define("two",
			{two_1:function(){console.log("two two_1方法");},
			two_2:function(){console.log("two two_2");}			
			});
	  Ext.define("three",{
		name:'tom',
		mixins:['one','two'],
		three_1:function(){
			three_prototype.one_1();
			three_prototype.one_2();
		}	
		
	
	});
	     
	
});