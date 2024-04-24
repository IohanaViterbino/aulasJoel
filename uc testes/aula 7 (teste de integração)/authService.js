class AuthService{
    constructor(banco){
        this.database = banco;
        this.loggedInUser = null;
    }

    login(userName, pass){
        const passwordUser = this.database.getUserPassword(userName);

        if (passwordUser && pass === passwordUser) {
            this.loggedInUser = userName;
            return true
        } else {
            return false
        }

    }

    isLoggedIn(){
        if(this.loggedInUser != null){
            return true;
        } else {
            return false
        }
    }
    
    logout(){
        this.loggedInUser = null;
        return "Tchauauauauua"
    }
}

module.exports = AuthService;