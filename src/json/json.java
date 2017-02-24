package json;

import java.util.List;

public class json {
	private boolean success=true;
	private String msg;
	private List datas;
	private int total;
	private boolean prePage;
	private boolean nextPage;
	private int currentPage;
	private int pageSize;
	public boolean getSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public List getDatas() {
		return datas;
	}
	public void setDatas(List datas) {
		this.datas = datas;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public boolean getPrePage() {
		return prePage;
	}
	public void setPrePage(boolean prePage) {
		this.prePage = prePage;
	}
	public boolean getNextPage() {
		return nextPage;
	}
	public void setNextPage(boolean nextPage) {
		this.nextPage = nextPage;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	

}
