package db;


public class student {
	
	public String name;
	public String stuId;
	public int age;
	public boolean Sex;
	public boolean isSex() {
		return Sex;
	}
	public void setSex(boolean Sex) {
		this.Sex = Sex;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStuId() {
		return stuId;
	}
	public void setStuId(String stuId) {
		this.stuId = stuId;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	

}
