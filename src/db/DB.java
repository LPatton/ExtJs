package db;

import java.util.HashMap;
import java.util.Map;

public class DB {
	public static Map<Integer,student> students=new HashMap<Integer,student>();
	static{
		int i=1;
		student stu=null;
		stu=new student();
		stu.setStuId("��ϢA000");
		stu.setName("����");
		stu.setAge(19);
		stu.setSex(true);
		students.put(i, stu);
		
		stu=new student();
		stu.setStuId("��ϢB000");
		stu.setName("����");
		stu.setAge(20);
		stu.setSex(false);
		i++;
		students.put(i, stu);
		
		stu=new student();
		stu.setStuId("��ϢC000");
		stu.setName("����");
		stu.setAge(20);
		stu.setSex(false);
		i++;
		students.put(i, stu);
		
		stu=new student();
		stu.setStuId("��ϢD000");
		stu.setName("����");
		stu.setAge(18);
		stu.setSex(true);
		i++;
		students.put(i, stu);
	}

}
