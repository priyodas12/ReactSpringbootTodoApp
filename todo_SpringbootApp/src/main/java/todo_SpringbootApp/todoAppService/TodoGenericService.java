package todo_SpringbootApp.todoAppService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

import todo_SpringbootApp.todoAppBean.Todo;

@Component
public class TodoGenericService {
	
	private static List<Todo> todoList=new ArrayList();
	
	private static long idCounter=0;
	
	static {
		
		todoList.add(new Todo(++idCounter,"priyodas12","Learn Python",false,new Date()));
		todoList.add(new Todo(++idCounter,"priyodas12","Learn Bootstrap4",true,new Date()));
		todoList.add(new Todo(++idCounter,"priyodas12","Learn React",false,new Date()));
	}
	
	public List<Todo> findAll(){
		return todoList;
	}

}
