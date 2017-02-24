Ext.onReady(function(){
	var arr=[];
	/*
	 * 
	 
	 */
	var arr=[1,2,3,4,5,6,7,8,9,10];
	document.write("集合之和"+Ext.Array.sum(arr)+"<br>");
	document.write("集合平均值"+Ext.Array.mean(arr)+"<br>");
	Ext.Array.insert(arr,2,['a','b']);
	document.write("插入两个元素后的集合"+arr+"<br>");
	var arr1=[1,2,3,4];
	var arr2=[2,4,6,8];
	document.write("arr1和arr2的共有元素"+Ext.Array.intersect(arr1,arr2)+"<br>");
	document.write("arr1和arr2的所有元素"+Ext.Array.merge(arr1,arr2)+"<br>");
});

