package todo_SpringbootApp.controller;

//test end point
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {
	
	@GetMapping("/getme")
	public String getMessage() {
		return "Hello  world";
	}
	
	

}
