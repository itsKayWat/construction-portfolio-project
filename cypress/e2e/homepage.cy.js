describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the header and navigation', () => {
    // Check logo
    cy.get('.navbar-brand').should('contain', 'BuildRight')
    cy.get('.navbar-brand i.fas.fa-hard-hat').should('exist')
    
    // Check navigation links
    cy.get('#navbarNav .nav-link').should('have.length', 6)
    cy.get('#navbarNav .nav-link').contains('Home').should('have.class', 'active')
    cy.get('#navbarNav .nav-link').contains('Services').should('exist')
    cy.get('#navbarNav .nav-link').contains('Projects').should('exist')
    cy.get('#navbarNav .nav-link').contains('About Us').should('exist')
    cy.get('#navbarNav .nav-link').contains('Contact').should('exist')
    cy.get('#navbarNav .nav-link').contains('Client Questionnaire').should('exist')
  })

  it('displays the hero section with correct content', () => {
    cy.get('.hero').should('exist')
    cy.get('.hero h1').should('contain', 'Building Your Dreams')
    cy.get('.hero .btn-primary').should('contain', 'Get a Free Quote')
    cy.get('.hero .btn-outline-light').should('contain', 'View Our Projects')
  })

  it('displays the services section with three services', () => {
    cy.get('#services-preview').should('exist')
    cy.get('#services-preview .service-card').should('have.length', 3)
    cy.get('#services-preview .service-card').eq(0).should('contain', 'Residential Construction')
    cy.get('#services-preview .service-card').eq(1).should('contain', 'Commercial Projects')
    cy.get('#services-preview .service-card').eq(2).should('contain', 'Renovations')
  })

  it('displays the featured projects section with three projects', () => {
    cy.get('#featured-projects').should('exist')
    cy.get('#featured-projects .project-card').should('have.length', 3)
    cy.get('#featured-projects .project-card').eq(0).should('contain', 'Modern Residential Home')
    cy.get('#featured-projects .project-card').eq(1).should('contain', 'Downtown Office Complex')
    cy.get('#featured-projects .project-card').eq(2).should('contain', 'Luxury Kitchen Remodel')
  })

  it('has working navigation links', () => {
    // Check Services link
    cy.get('#navbarNav .nav-link').contains('Services').click()
    cy.url().should('include', '/services.html')
    
    // Go back to homepage
    cy.visit('/')
    
    // Check Projects link
    cy.get('#navbarNav .nav-link').contains('Projects').click()
    cy.url().should('include', '/projects.html')
    
    // Go back to homepage
    cy.visit('/')
    
    // Check About Us link
    cy.get('#navbarNav .nav-link').contains('About Us').click()
    cy.url().should('include', '/about.html')
    
    // Go back to homepage
    cy.visit('/')
    
    // Check Contact link
    cy.get('#navbarNav .nav-link').contains('Contact').click()
    cy.url().should('include', '/contact.html')
    
    // Go back to homepage
    cy.visit('/')
    
    // Check Client Questionnaire link
    cy.get('#navbarNav .nav-link').contains('Client Questionnaire').click()
    cy.url().should('include', '/questionnaire.html')
  })
}) 