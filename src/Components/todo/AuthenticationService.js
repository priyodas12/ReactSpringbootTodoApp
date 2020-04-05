

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
}

export default new AuthenticationService();
