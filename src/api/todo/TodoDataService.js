import axios from 'axios'

class TodoDataService {

    rerieveAllTodos(username){
      return axios.get(`http://localhost:8496/todo-api/users/${username}/todos`)
    }

}

export default new TodoDataService();
