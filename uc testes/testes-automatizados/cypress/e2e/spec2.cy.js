describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Login Page',()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000');
  });

  it('login realizado com sucesso', () =>{
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Bem-vindo ao Dashboard!');
  });
  
  it('sucesso para flavio', ()=> {
    cy.get('#username').type('flavio');
    cy.get('#password').type('123');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Bem-vindo ao Dashboard!');
  })

  it('mostrar mensagem de erro', ()=>{
    cy.get('#username').type('admin');
    cy.get('#password').type('passwords');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Credenciais invalidas, tente novamente.');
  });

  it('mostrar mensagem de erro (nome user)', ()=>{
    cy.get('#username').type('joel');
    cy.get('#password').type('password');
    cy.get('form').submit(); 
    cy.get('#message').should('contain', 'Credenciais invalidas, tente novamente.');
  });
  
})

describe('Cadastro Page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/cadastro');
  });

  it('nenhum campo preenchido', () => {
    cy.get('form').submit();
    cy.get('#erroruser').should('contain', 'Nome de usuário é obrigatório');
    cy.get('#erroremail').should('contain', 'Email é obrigatório');
    cy.get('#errorpass').should('contain', 'Senha é obrigatória');
  })
  
  it('campo de nome obrigatório', () => {
    cy.get('#email').type('alinhoGameplay@conta.com');
    cy.get('#password').type('manoq');
    cy.get('form').submit();
    cy.get('#erroruser').should('contain', 'Nome de usuário é obrigatório');
  })
  
  it('campo de email obrigatório', () => {
    cy.get('#username').type('Alan');
    cy.get('#password').type('manoquedoiidoo');
    cy.get('form').submit();
    cy.get('#erroremail').should('contain', 'Email é obrigatório');
  })
  
  it('campo de senha obrigatório', () => {
    cy.get('#username').type('Alan');
    cy.get('#email').type('alinhoGameplay@conta.com');
    cy.get('form').submit();
    cy.get('#errorpass').should('contain', 'Senha é obrigatória');
  })
  
  
  it('todos os campos preenchidos', () => {
    cy.get('#username').type('Alan');
    cy.get('#email').type('alinhoGameplay@conta.com');
    cy.get('#password').type('manoquedoiidoo');
    cy.get('form').submit();
    cy.url().should('include', '/')
  })

})