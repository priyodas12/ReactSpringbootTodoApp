package todo_SpringbootApp.todoAppController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import todo_SpringbootApp.todoAppBean.Todo;
import todo_SpringbootApp.todoAppService.TodoGenericService;

@RestController
@RequestMapping("/todo-api")
@CrossOrigin(origins = "http://localhost:3005")
public class TodoResource {
	
	@Autowired
	private TodoGenericService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(){
		return todoService.findAll();
	}
	
}
