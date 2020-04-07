package todo_SpringbootApp.todoAppController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> removeTodo(@PathVariable String username, @PathVariable long id){
		Todo todo=todoService.deleteById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	
	
}
