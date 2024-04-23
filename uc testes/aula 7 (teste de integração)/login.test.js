const UserData = require('./userData')
const AuthService = require('./authService')

describe('teste de integração e autentificação', ()=>{
    let database;
    let autService;

    beforeEach(() => {
        database = new UserData();        
        database.addUser("cobre", 63546);
        database.addUser("ferro", 55845);
        database.addUser("ouro", 19697);
        autService = new AuthService(database)
    })

    test('Username e pass corretos', ()=>{
        const result = autService.login('ferro', 55845);
        expect(result).toBe(true)
    })
})