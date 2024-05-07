describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3002')
  })
})

describe('Login Page',()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3002');
  });

  it('login realizado com sucesso', () =>{
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Bem-vindo ao Dashboard!');
  });
  
  it('sucesso para flavio', ()=> {
    cy.get('#username').type('flavio');
    cy.get('#password').type('123');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Bem-vindo ao Dashboard!');
  })

  it('mostrar mensagem de erro', ()=>{
    cy.get('#username').type('admin');
    cy.get('#password').type('passwords');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Credenciais invalidas, tente novamente.');
  });

  it('mostrar mensagem de erro (nome user)', ()=>{
    cy.get('#username').type('joel');
    cy.get('#password').type('password');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Credenciais invalidas, tente novamente.');
  });
  
})

describe('Cadastro Page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3002/cadastro');
  });

  it('cadastro de alguém válido', () => {
    cy.get('#nome').type('Iohana');
    cy.get('#idade').type(20);
    cy.get('#telefone').type('84999334455');
    cy.get('#endereco').type('R. cor de lápis, nº 409');
    cy.get('#email').type('ioiodoio@conta.com');
    cy.get('#senha').type('manoquedoido');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Cadastro bem feito :) Bem-vindo ao Dashboard!');
  })

  it('cadastro de alguém com senha inválida', () => {
    cy.get('#nome').type('Alan');
    cy.get('#idade').type(30);
    cy.get('#telefone').type('84988337744');
    cy.get('#endereco').type('R. dos cabloquinho, nº 152');
    cy.get('#email').type('alinhoGameplay@conta.com');
    cy.get('#senha').type('manoq');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Cadastro mal feito :( Credenciais invalidas, tente novamente.');
  })
  
  it('login com alguem que cadastrou agora', () => {
    cy.get('#nome').type('Alan');
    cy.get('#idade').type(30);
    cy.get('#telefone').type('84988337744');
    cy.get('#endereco').type('R. dos cabloquinho, nº 152');
    cy.get('#email').type('alinhoGameplay@conta.com');
    cy.get('#senha').type('manoquedoiidoo');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Cadastro bem feito :) Bem-vindo ao Dashboard!');

    cy.get('#LogRend').click()
    cy.get('#username').type('Alan');
    cy.get('#password').type('manoquedoiidoo');
    cy.get('button').click();
    cy.get('#message').should('contain', 'Bem-vindo ao Dashboard!');

  })
})