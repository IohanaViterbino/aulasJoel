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

    test('Username e pass incorretos', ()=>{
        const result = autService.login('ferrugem', 44998);
        expect(result).toBe(false)
    })

    test('user certo e pass incorreto', ()=>{
        const result = autService.login('ferro', 55846)
        expect(result).toBe(false)
    })

    test('user incorreto e pass correto', ()=>{
        const result = autService.login('eugenio', 55845)
        expect(result).toBe(false)
    })

    test('user e pass vazios', ()=>{
        const result = autService.login('', '')
        expect(result).toBe(false)
    })
})