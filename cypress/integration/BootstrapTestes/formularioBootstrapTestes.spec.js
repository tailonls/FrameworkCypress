	
	context('Actions', () => {
		
		//acessar esse link antes de todos os testes
		beforeEach(() => {
			cy.visit('https://getbootstrap.com.br/docs/4.1/components/forms/?')
		})
 
		it('Testa primeiro formulario', function() {
			
			cy.get('#exampleInputEmail1')
				.type('fake@email.com')
				.should('have.value', 'fake@email.com')
				
			cy.get('#exampleInputPassword1')
				.type('senha123')
				.should('have.value', 'senha123')
			
		})

		it('Testa segundo formulario', function() {
			//código aqui
		})

		it('Testa terceiro formulario', function() {
			//código aqui
		})
	})