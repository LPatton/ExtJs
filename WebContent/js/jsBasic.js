//Ext.onReady(function(){
//	 var x={
//	 name:"李旭亮",
//	 age:20,
//	 sex:"男"
//	 };
//	 var y={
//	 name:"张奇奇",
//	 age:23
//	 };
//		
//	 alert(x.name+","+x.age+","+x.sex+","+y.name+","+y.age);
//		
//	Ext.create('Ext.Window.Window',{
//		title:'Hello',
//		height:200,
//		layout:'fit',
//		items:{
//			xtype:'grid',
//			border:false,
//			columns:[{header:'world'}],
//			store:Ext.create('Ext.data.ArrayStore',{})
//		}
//		
//	}).show();
//
	
//	Ext.Msg.alert('statues','save change successfully');
//	Ext.Msg.show({
//		title:'save changes?',
//		msg:'you are closing a tab that has unsave'
//		buttons:Ext.Msg.YESNOCANCEL,
//		icon:
//	})
//Ext.onReady(function(){
//Ext.create('Ext.tab.Panel', {
//title: 'Ext.tab.Panel示例',
//frame: true,
//height: 150,
//width: 300,
//activeTab: 0,//默认激活第一个tab页
//renderTo: Ext.getBody(),
//items: [
//{title: 'tab标签页1', html: 'tab标签页1内容'},
//{title: 'tab标签页2', html: 'tab标签页2内容'},
//{title: 'tab标签页3', html: 'tab标签页3内容'},
//{title: 'tab标签页4', html: 'tab标签页4内容'},
//{title: 'tab标签页5', html: 'tab标签页5内容'},
//{title: 'tab标签页6', html: 'tab标签页6内容'},
//{title: 'tab标签页7', html: 'tab标签页7内容'}
//]
//});
//Ext.onReady(function(){
//Ext.create('Ext.panel.Panel', {
//title: '使用items进行面板嵌套',
//width: 250,
//height: 200,
//frame: true,
//collapsible: true,//允许展开和收缩
//renderTo: Ext.getBody(),
//bodyPadding: 5,
//layout: 'vbox',
//defaults: {//设置默认属性
//bodyStyle: 'background-color: #ffffff',//设置面板颜色
//collapsible: true,//允许展开和收缩
//width: 230,
//autoScroll: true//自动显示滚动条
//},
//items: [{
//title: '嵌套面板一',
//height: 80, //子面板高度为80
//contentEl: 'localElement'//加载本地资源
//}, {
//title: '嵌套面板二',
//autoLoad: 'page1.html'//加载远程页面
//}]
//});
//自定义电话号码验证示例
Ext.onReady(function(){
//自定义电话号码的VType验证
Ext.apply(Ext.form.field.VTypes, {
phone: function(v){
//规则区号(3-4位数字)-电话号码(7-8位数字)
return /^(\d{3}-|\d{4}-)?(\d{8}|\d{7})$/.test(v);
},
phoneText: '请输入有效的电话号码',
phoneMask: /[\d-]/i//只允许输入数字和-号
});
Ext.QuickTips.init();
Ext.create('Ext.form.Panel', {
title: '自定义电话号码验证示例',
width: 300,
frame: true,
renderTo: Ext.getBody(),
bodyPadding: 5,
defaultType: 'textfield',//设置表单字段的默认类型
fieldDefaults: {
labelSeparator: ':',
labelWidth: 80,
width: 270,
msgTarget: 'side'
},
items: [{
fieldLabel: '住宅号码',
vtype: 'phone'//使用电话验证类型
},{
fieldLabel: '办公号码',
vtype: 'phone'//使用电话验证类型
}]
});


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})