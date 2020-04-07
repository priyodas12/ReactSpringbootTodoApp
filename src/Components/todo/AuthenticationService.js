

class AuthenticationService{
    registerSuccessLogin(username,password){
      console.log(' success login!')
      sessionStorage.setItem('authenticatedUser',username)
    }

    logout(){
      console.log('success logout!')
      sessionStorage.removeItem('authenticatedUser')
      sessionStorage.clear();
    }

    isUserLoggedIn(){
      let userStatus=sessionStorage.getItem('authenticatedUser');
      if(userStatus===null) return false
      return true
    }

    getLoggedInUsername(){
      let username=sessionStorage.getItem('authenticatedUser');
      if(username===null) return '';
      return username;
    }
}

export default new AuthenticationService();
