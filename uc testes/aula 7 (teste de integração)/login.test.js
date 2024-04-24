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

    test('Verificação de login, quando houver login', ()=>{
        const login = autService.login('ferro', 55845)
        const result = autService.isLoggedIn()
        expect(result).toBe(true)
    })

    test('listagem dos registros', ()=>{
        const result = database.listUsers()
        expect(result).toBe(undefined) 
        // já que ele não retorna e sim apresenta no console
    })

    test('Verificação de login, quando não houver login', ()=>{
        const result = autService.isLoggedIn()
        expect(result).toBe(false)
    })

    test('logout', ()=>{
        const login = autService.login('ferro', 55845)
        const result = autService.logout()
        expect(result).toBe("Tchauauauauua")
    })
})