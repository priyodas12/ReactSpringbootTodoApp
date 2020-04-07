package todo_SpringbootApp.bean;

public class HelloWorld {
	
	public String beanId;

	public String getBeanId() {
		return beanId;
	}

	public void setBeanId(String beanId) {
		this.beanId = beanId;
	}

	public HelloWorld(String beanId) {
		super();
		this.beanId = beanId;
	}

}
