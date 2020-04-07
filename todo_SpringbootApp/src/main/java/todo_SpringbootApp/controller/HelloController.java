package todo_SpringbootApp.controller;

import org.springframework.beans.factory.config.RuntimeBeanNameReference;
import org.springframework.web.bind.annotation.CrossOrigin;
//test end point
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import todo_SpringbootApp.bean.HelloWorld;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3005")
public class HelloController {
	
	@GetMapping("/greet")
	public String getMessage() {
		return "Hello  User";
	}
	
	@GetMapping("/greet-bean")
	public HelloWorld getBeanMessage() {
		return new HelloWorld("10");
	}
	
	@GetMapping("/greet-bean/path-var/{name}")
	public HelloWorld getPathVarMessage(@PathVariable String name ) {
		return new HelloWorld("Hello "+name);
	}
	
	
//	@GetMapping("/greet-bean/error/{name}")
//	public Exception getErrorMessage(@PathVariable String name ) {
//		throw new RuntimeException("Hello "+name+" ,Unexpected Error Occured!");
//	}
	
	
	

}
