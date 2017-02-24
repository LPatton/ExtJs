Ext.onReady(function() {
			var myComp = Ext.create("Ext.form.Panel", {
						width : 350,
						renderTo : "main",
						title : '用户注册',
						titleAlign : 'left',
						buttonAlign : 'center',
						bodyStyle : {
							background : 'red',
							padding : '15px'
						},
						defaults : {
							labelAlign : 'right'
						},
						items : [{
									xtype : 'textfield',
									fieldLabel : '用户名',
									emptyText : '请输入用户名',
									allowBlank : false,
									blankText : "请输入3~6位密码",
									msgTarget : 'side',
									minLength : 3,
									maxLength : 6,
									itemId : 'username'
								}, {
									xtype : 'textfield',
									fieldLabel : '密码',
									emptyText : '123',
									inputType : 'password',
									itemId : 'pwd'
								}, {
									xtype : 'textfield',
									fieldLabel : '再次输入密码',
									inputType : 'password',
									emptyText : '123',
									itemId : 'pwd2'
								}, {
									xtype : 'numberfield',
									fieldLabel : '年龄',
									maxValue : '60',
									inValue : '18',
									value : 18

								}, {
									xtype : 'numberfield',
									fieldLabel : '身高',
									unitText : ' cm',
									maxValue : '2.15',
									minValue : '1.50',
									value : 1.88,
									step : 0.05

								},

								{
									xtype : 'fieldcontainer',
									fieldLabel : '性别',
									defaultType : 'radiofield',
									defaults : {
										flex : 1
									},

									items : [{
												boxLabel : '男',
												checked : true,
												name : 'sex',
												inputValue : 'm',
												id : 'radio1'
											}, {
												boxLabel : '女',
												name : 'sex',
												inputValue : 'f',
												id : 'radio2'
											}]
								}, {
									xtype : 'fieldcontainer',
									fieldLabel : '爱好',
									defaultType : 'checkboxfield',
									layout : 'hbox',
									items : [{
												boxLabel : '游戏',
												name : 'topping',
												inputValue : '1',

												checked : true,
												itemId : 'checkbox1'
											}, {
												boxLabel : '睡觉',
												name : 'topping',
												inputValue : '2',
												itemId : 'checkbox2'
											}, {
												boxLabel : '小说',
												name : 'topping',
												inputValue : '3',
												itemId : 'checkbox3'
											}]
								}, {
									fieldLabel : "角色",
									xtype : 'combo',
									name : 'role',
									store : Ext.create('Ext.data.Store', {
												fields : ['name', 'value'],
												data : [{
															name : '老师',
															value : 'admin'
														}, {
															name : '学生',
															value : 'student'
														}, {
															name : '教授',
															value : 'teacher'
														}]
											}),
									displayField : 'name',
									valueField : 'value',
									queryMode : 'local'
								}, {
									fieldLabel : "选择专业",
									xtype : 'combo',
									name : 'pro',
									value : '信息管理也信息系统',
									store : Ext.create('Ext.data.Store', {
												fields : ['name', 'value'],
												data : [{
															name : '计算机科学与技术',
															value : "info"
														}, {
															name : '物联网工程',
															value : "computer"
														}, {
															name : '网络工程',
															value : "teach"
														}, {
															name : '教育技术',
															value : "web"
														}, {
															name : '数字多媒体',
															value : "comu"
														},

														{   name : '软件工程',
															value : "soft"
														}]
											}),

									queryMode : 'local',
									displayField : 'name',
									valueField : 'value'
									,
								}, {
									xtype : 'datefield',
									fieldLabel : "出生年月",
									name : 'birthday',
									value : new Date(),
									format : 'Y-m-d'
									,
								}, {
									// 鎻愪氦缁欐湇鍔″櫒鐨勬牸寮�
									xtype : 'fieldset',
									title : '补充信息',
									collapsed : false,
									collapsible : true,
									items : [{
												xtype : 'textfield',
												fieldLabel : '别名'

											}, {
												xtype : 'textarea',
												fieldLabel : '家庭住址'
											}]
									,
								}],
						buttons : [{
									text : '保存'
								}]
					}).center();
		});

//					
// }],
// },
// ]
//                 
// });
// })
//		

