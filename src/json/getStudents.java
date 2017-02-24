package json;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class getStudents
 */
public class getStudents extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private List<student> students=new ArrayList<student>();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public getStudents() {
        super();
        student stu=new student();
        stu.setId(1);
        stu.setName("张三");
        stu.setStuId("信息A1111");
        stu.setAge(18);
        students.add(stu);
        
        stu=new student();
        stu.setId(2);
        stu.setName("李四");
        stu.setStuId("信息A2222");
        stu.setAge(19);
        students.add(stu);
        
        stu=new student();
        stu.setId(3);
        stu.setName("王五");
        stu.setStuId("信息A3333");
        stu.setAge(20);
        students.add(stu);
        
        stu=new student();
        stu.setId(4);
        stu.setName("赵柳");
        stu.setStuId("信息A4444");
        stu.setAge(21);
        students.add(stu);
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json;character=utf-8");
		json result=new json();
		result.setMsg("查询成功");
		result.setDatas(students);
		result.setTotal(students.size());
		
		ObjectMapper objMap=new ObjectMapper();
		String jsonResult=objMap.writeValueAsString(students);
		response.getWriter().write(jsonResult);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
