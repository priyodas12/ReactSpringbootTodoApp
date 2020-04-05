import axios from 'axios'
class HelloWorldService {

  executeHelloWorldService(){
    return   axios.get('http://localhost:8496/api/greet');
  }

  executeHelloWorldBeanService(){
    return   axios.get('http://localhost:8496/api/greet-bean');
  }

}

export default new HelloWorldService()
