class UserData{
    constructor(){
        this.users = new Map(); //simula um banco
    }

    addUser(username, pass){
        this.users.set(username, pass);
    }

    getUserPassword(username){
        return this.users.get(username);
    }

    listUsers(){
        this.users.forEach((pass, user) => {
            console.log(`${user} -- ${pass}`)
        })
    }
}

module.exports = UserData;