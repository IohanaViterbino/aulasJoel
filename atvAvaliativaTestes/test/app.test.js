const request = require('supertest');
const app = require('../app');
const { banco } = require('../controller/userController');

describe('API de usuários', () => {
    beforeEach(() => {
        banco.length = 0; // Limpa o array sem perder a referência
    });

    test('Adicionando um novo usuário', async () => {
        const novoU = { nome: 'John Doe', email: 'john.doe@example.com', senha: '123456' };

        const response = await request(app)
            .post('/user/criarUser')
            .send(novoU);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(novoU);
    });

    test('Lista de usuários', async () => {
        const usuario1 = { nome: 'John Doe', email: 'john.doe@example.com', senha: '123456' };
        const usuario2 = { nome: 'Jane Doe', email: 'jane.doe@example.com', senha: 'abcdef' };

        await request(app).post('/user/criarUser').send(usuario1);
        await request(app).post('/user/criarUser').send(usuario2);

        const response = await request(app).get('/user/listar');

        expect(response.status).toBe(200);
        expect(response.body.uNumbers).toBe(2); // Verifica o número de usuários
        expect(response.body.users).toEqual([usuario1, usuario2]);
    });
});
