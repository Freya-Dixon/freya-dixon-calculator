
  describe('The Main page', () => {
    it('The page loads successfully', () => {
      cy.visit('https://freya-dixon.github.io/freya-dixon-calculator/index.html')
    })
  })

  describe('Basic Operator Tests', () => {
    it('Should test 2 + 7 equals 9', () => {
      //Arrange 
      cy.visit('https://freya-dixon.github.io/freya-dixon-calculator/index.html')
     // Act 
     cy.get('btn number two').click();
     cy.get('btn operator plus').click();
     cy.get('btn number seven').click();
     cy.get('btn operator equals').click();

     // Assert
     cy.get('result').should('have.value', 9)

    })

    it('Should test 2 * 9 equals 18'), () => {
      cy.visit('https://freya-dixon.github.io/freya-dixon-calculator/index.html')

      cy.get('btn number 2').click();
      cy.get('btn operator multiply').click();
      cy.get('btn number 9').click();
      cy.get('btn operator equals').click();

      cy.get('result').should('have.value', 18)


    }

    it('Should test 60 - 30 equals 30'), () => {
      cy.visit('https://freya-dixon.github.io/freya-dixon-calculator/index.html')

      cy.get('btn number 6').click();
      cy.get('btn number 0').click();
      cy.get('btn operator minus').click();
      cy.get('btn number 3').click();
      cy.get('btn number 0').click();
      cy.get('btn operator equals').click();

      cy.get('result').should('have.value', 30)
    }



    it('Should test 60 / 30 equals 2'), () => {
      cy.visit('https://freya-dixon.github.io/freya-dixon-calculator/index.html')

      cy.get('btn number 6').click();
      cy.get('btn number 0').click();
      cy.get('btn operator divide').click();
      cy.get('btn number 3').click();
      cy.get('btn number 0').click();
      cy.get('btn operator equals').click();

      cy.get('result').should('have.value', 2)
    }
  })



