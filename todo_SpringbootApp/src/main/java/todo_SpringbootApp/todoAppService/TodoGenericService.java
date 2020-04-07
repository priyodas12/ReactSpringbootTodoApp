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

	public Todo deleteById(long id) {
		Todo todo=findById(id);
		if(todo==null) {
			return null;
		}
		if(todoList.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for(Todo todo:todoList) {
			if(todo.getId()==id) {
				return todo;
			}
			
		}
		return null;
	}
}
