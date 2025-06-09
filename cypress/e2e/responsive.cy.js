describe('Responsive Design', () => {
  it('displays mobile navigation on small screens', () => {
    // Set viewport to mobile size
    cy.viewport('iphone-x')
    cy.visit('/')
    
    // Check that navbar-toggler is visible
    cy.get('.navbar-toggler').should('be.visible')
    
    // Check that nav links are collapsed
    cy.get('#navbarNav').should('not.be.visible')
    
    // Click the navbar toggler
    cy.get('.navbar-toggler').click()
    
    // Check that nav links are now visible
    cy.get('#navbarNav').should('be.visible')
    cy.get('#navbarNav .nav-link').should('have.length', 6)
  })

  it('adapts service cards to stack on mobile', () => {
    // Set viewport to mobile size
    cy.viewport('iphone-x')
    cy.visit('/')
    
    // Check column layout on mobile
    cy.get('#services-preview .service-card').should(($cards) => {
      // In mobile view, cards should take full width and stack
      const rect = $cards[0].getBoundingClientRect()
      expect(rect.width).to.be.greaterThan(300) // Should be wide
    })
  })

  it('adapts to tablet screen size', () => {
    // Set viewport to tablet size
    cy.viewport('ipad-2')
    cy.visit('/')
    
    // Check that navbar-toggler is not visible on tablet
    cy.get('.navbar-toggler').should('not.be.visible')
    
    // Check that nav links are visible
    cy.get('#navbarNav').should('be.visible')
    cy.get('#navbarNav .nav-link').should('have.length', 6)
  })

  it('adapts to desktop screen size', () => {
    // Set viewport to desktop size
    cy.viewport(1200, 800)
    cy.visit('/')
    
    // Check that navbar-toggler is not visible on desktop
    cy.get('.navbar-toggler').should('not.be.visible')
    
    // Check that nav links are visible
    cy.get('#navbarNav').should('be.visible')
    cy.get('#navbarNav .nav-link').should('have.length', 6)
    
    // Check that service cards are displayed side by side
    cy.get('#services-preview .col-md-4').should('have.length', 3)
  })
}) 