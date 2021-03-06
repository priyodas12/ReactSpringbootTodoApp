package todo_SpringbootApp.todoAppBean;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class Todo {

	private long id;
	private String username;
	private String desc;
	private boolean status;
	private Date targetDate;
	
	public Todo(long id, String username, String desc, boolean status,
			Date targetDate) {
		super();
		this.id = id;
		this.username = username;
		this.desc = desc;
		this.status = status;
		this.targetDate = targetDate;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public Todo() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 41;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (id != other.id)
			return false;
		return true;
	}

	
	
}
