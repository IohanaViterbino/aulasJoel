const UserDataBase = require('./userData')
const Auth = require('./authService')

let banco = new UserDataBase();

banco.addUser("cobre", 63546);
banco.addUser("ferro", 55845);
banco.addUser("ouro", 19697);
banco.addUser(55845, "ferro");

console.log(banco.getUserPassword(55845));

banco.listUsers();

let aute = new Auth(banco);

console.log(aute.login("ferro", 55845))