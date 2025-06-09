describe('Live Site Tests', () => {
  it('loads the homepage successfully', () => {
    cy.visit('/')
    cy.get('body').should('be.visible')
    cy.title().should('include', 'BuildRight')
  })

  it('has working navigation', () => {
    cy.visit('/')
    
    // Check navigation links exist
    cy.get('.navbar-brand').should('contain', 'BuildRight')
    cy.contains('a', 'Services').should('be.visible')
    cy.contains('a', 'Projects').should('be.visible')
    cy.contains('a', 'About Us').should('be.visible')
    cy.contains('a', 'Contact').should('be.visible')
    cy.contains('a', 'Client Questionnaire').should('be.visible')
    
    // Navigate to Services page
    cy.contains('a', 'Services').click()
    cy.url().should('include', '/services.html')
    
    // Navigate to Projects page
    cy.contains('a', 'Projects').click()
    cy.url().should('include', '/projects.html')
    
    // Navigate to About page
    cy.contains('a', 'About Us').click()
    cy.url().should('include', '/about.html')
    
    // Navigate to Contact page
    cy.contains('a', 'Contact').click()
    cy.url().should('include', '/contact.html')
    
    // Navigate to Questionnaire page
    cy.contains('a', 'Client Questionnaire').click()
    cy.url().should('include', '/questionnaire.html')
  })

  it('loads the questionnaire page', () => {
    cy.visit('/questionnaire.html')
    cy.contains('Client Questionnaire').should('be.visible')
    cy.contains('Help us understand your project needs better').should('be.visible')
    cy.get('form').should('exist')
    cy.get('button[type="submit"]').should('exist')
  })

  it('loads the contact page', () => {
    cy.visit('/contact.html')
    cy.contains('Contact Us').should('be.visible')
    cy.get('form').should('exist')
    cy.get('input[type="text"]').should('exist')
    cy.get('input[type="email"]').should('exist')
    cy.get('textarea').should('exist')
  })
}) 