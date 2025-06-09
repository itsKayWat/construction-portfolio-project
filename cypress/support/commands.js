// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- Custom command for filling out the contact form --
Cypress.Commands.add('fillContactForm', (name, email, phone, message) => {
  cy.get('#name').type(name)
  cy.get('#email').type(email)
  if (phone) cy.get('#phone').type(phone)
  cy.get('#message').type(message)
})

// -- Custom command for filling out the questionnaire form --
Cypress.Commands.add('fillQuestionnaireForm', (options) => {
  const defaults = {
    fullName: 'Test Client',
    email: 'client@example.com',
    phone: '555-123-4567',
    companyName: 'Test Company',
    projectType: 'Residential',
    address: '123 Test Street',
    budget: '$100k-$250k',
    timeline: '3-6 months',
    description: 'This is a test project description'
  }
  
  // Merge provided options with defaults
  const data = { ...defaults, ...options }
  
  cy.get('#fullName').type(data.fullName)
  cy.get('#clientEmail').type(data.email)
  cy.get('#clientPhone').type(data.phone)
  cy.get('#companyName').type(data.companyName)
  cy.get('#projectType').select(data.projectType)
  cy.get('#projectAddress').type(data.address)
  cy.get('#projectBudget').select(data.budget)
  cy.get('#projectTimeline').select(data.timeline)
  cy.get('#projectDescription').type(data.description)
})

// -- Custom command to check navigation structure --
Cypress.Commands.add('checkNavigationStructure', () => {
  cy.get('#navbarNav .nav-link').should('have.length', 6)
  cy.get('#navbarNav .nav-link').eq(0).should('contain', 'Home')
  cy.get('#navbarNav .nav-link').eq(1).should('contain', 'Services')
  cy.get('#navbarNav .nav-link').eq(2).should('contain', 'Projects')
  cy.get('#navbarNav .nav-link').eq(3).should('contain', 'About Us')
  cy.get('#navbarNav .nav-link').eq(4).should('contain', 'Contact')
  cy.get('#navbarNav .nav-link').eq(5).should('contain', 'Client Questionnaire')
})