describe('acesso ao site', () => {
  it('passes', () => {
    cy.visit('https://adriellucasf.github.io/aulauc10/')
  })
})

describe('Todo-app com uma entrada',() => {
  const novoItem = "Add tarefa nova"

  beforeEach(()=>{
    cy.visit('https://adriellucasf.github.io/aulauc10/');
  });

  it('Adicionar tarefa e atualização dinamica da lista',() => {

    cy.get('#task-input')
    .type(`${novoItem}{enter}`);

    cy.get('#task-list li')
      .should(($li) => {
        expect($li).to.have.length(1)
      })
  })
  
  it('Concluir uma tarefa',() => {
    cy.get('#task-input')
    .type(`${novoItem}{enter}`);

    cy.contains(`${novoItem}`)
    .parent('li')
    .find('input[type=checkbox]')
    .check();

    cy.contains(`${novoItem}`)
    .parents('li')
    .should('have.class', 'completed');
  })

  it('Excluir tarefa',() => {
    cy.get('#task-input')
    .type(`${novoItem}{enter}`);
    
    cy.contains(`${novoItem}`)
    .parent('li')
    .find('input[type=checkbox]')
    .check();

    cy.contains(`${novoItem}`)
    .parents('li')
    .should('have.class', 'completed')
    .get('.delete-btn')
    .click();

    cy.get('#task-list li')
    .should(($li) => {
      expect($li).to.have.length(0)
    })
  })
})

describe('Todo app com mais tarefas', () => {
  const item1 = "Add tarefa nova 1"
  const item2 = "Add tarefa nova 2"
  const item3 = "Add tarefa nova 3"

  beforeEach(()=>{
    cy.visit('https://adriellucasf.github.io/aulauc10/');
  });

  it('Adicionando tarefas', () => {
    cy.get('#task-input')
    .type(`${item1}{enter}`)
    .type(`${item2}{enter}`)
    .type(`${item3}{enter}`);

    cy.get('#task-list li')
    .should(($li) => {
      expect($li).to.have.length(3)
    });
  })

  it('Marcando todas as tarefas', () => {
    cy.get('#task-input')
    .type(`${item1}{enter}`)
    .type(`${item2}{enter}`)
    .type(`${item3}{enter}`);

    cy.get('#task-list li') 
    .find('input[type=checkbox]')
    .check();
    
    cy.get('#task-list li')
    .should('have.class', 'completed');
  })

  it('Marcando a ultima tarefa', () => {
    cy.get('#task-input')
    .type(`${item1}{enter}`)
    .type(`${item2}{enter}`)
    .type(`${item3}{enter}`);

    cy.get('#task-list li')
    .last()
    .find('input[type=checkbox]')
    .check();
    
    cy.get('#task-list li')
    .last() 
    .should('have.class', 'completed');
  })
  
  it('Excluir primeira tarefa',() => {
    cy.get('#task-input')
    .type(`${item1}{enter}`)
    .type(`${item2}{enter}`)
    .type(`${item3}{enter}`);

    cy.get(`#task-list li`)
    .first()
    .find('.delete-btn')
    .click();

    cy.get('#task-list li')
    .should(($li) => {
      expect($li).to.have.length.lessThan(3)
    })
  })

})