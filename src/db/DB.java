package db;

import java.util.HashMap;
import java.util.Map;

public class DB {
	public static Map<Integer,student> students=new HashMap<Integer,student>();
	static{
		int i=1;
		student stu=null;
		stu=new student();
		stu.setStuId("信息A000");
		stu.setName("张三");
		stu.setAge(19);
		stu.setSex(true);
		students.put(i, stu);
		
		stu=new student();
		stu.setStuId("信息B000");
		stu.setName("李四");
		stu.setAge(20);
		stu.setSex(false);
		i++;
		students.put(i, stu);
		
		stu=new student();
		stu.setStuId("信息C000");
		stu.setName("王五");
		stu.setAge(20);
		stu.setSex(false);
		i++;
		students.put(i, stu);
		
		stu=new student();
		stu.setStuId("信息D000");
		stu.setName("柳绿");
		stu.setAge(18);
		stu.setSex(true);
		i++;
		students.put(i, stu);
	}

}
