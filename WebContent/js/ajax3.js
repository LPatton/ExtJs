Ext.onReady(function() {
			Ext.Ajax.request({
						url : 'getStudents',
						success : function(response) {
							var result = Ext.decode(response.responseText);
							var tpl = new Ext.XTemplate(
									'<center><table border=1 width=60%>'
											+ '<tr><td>id</td><td>姓名</td><td>学号</td><td>年龄</td></tr>',
									'<tpl for=".">',
									'<tr><td>{id}</td><td>{name}</td><td>{stuId}</td><td>{age}</td></tr>',
									'</tpl></table></center>');
							tpl.overwrite(Ext.getBody(), result);
						},
						failure : function(response) {

						}
					});
		});