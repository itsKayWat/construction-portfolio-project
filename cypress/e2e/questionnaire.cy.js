describe('Questionnaire Form', () => {
  beforeEach(() => {
    cy.visit('/questionnaire.html')
  })

  it('displays the questionnaire form correctly', () => {
    // Check for form elements that exist on the live site
    cy.get('form').should('exist')
    cy.get('button[type="submit"]').contains('Submit Questionnaire').should('exist')
    cy.get('input[name="fullName"]').should('exist')
    cy.get('input[name="email"]').should('exist')
    cy.get('input[name="phone"]').should('exist')
    cy.get('input[name="projectAddress"]').should('exist')
  })

  it('has required fields marked with asterisks', () => {
    // Check for required field indicators
    cy.contains('Full Name *').should('exist')
    cy.contains('Email Address *').should('exist')
    cy.contains('Phone Number *').should('exist')
    cy.contains('Project Address *').should('exist')
    cy.contains('Project Type *').should('exist')
    cy.contains('Project Description *').should('exist')
  })

  it('has a project type dropdown with options', () => {
    // Check project type dropdown
    cy.get('select[name="projectType"]').should('exist')
    cy.get('select[name="projectType"]').find('option').should('have.length.at.least', 2)
  })

  it('has a budget range dropdown', () => {
    // Check budget dropdown
    cy.get('select[name="budgetRange"]').should('exist')
    cy.get('select[name="budgetRange"]').find('option').should('have.length.at.least', 2)
  })

  it('has a consent checkbox', () => {
    // Check for consent checkbox
    cy.contains('I consent to being contacted').should('exist')
    cy.get('input[type="checkbox"]').should('exist')
  })

  it('has contact information for help', () => {
    // Check for help contact information
    cy.contains('Need help completing this form?').should('exist')
    cy.contains('(555) 123-4567').should('exist')
    cy.contains('info@buildright.com').should('exist')
  })

  it('validates required fields', () => {
    // Submit empty form
    cy.get('#questionnaireForm button[type="submit"]').click()
    
    // Check for error messages on required fields
    cy.get('[required]').each(($el) => {
      cy.wrap($el).should('have.class', 'is-invalid')
    })
  })

  it('submits form successfully with valid data', () => {
    // Fill in client information
    cy.get('#fullName').type('Test Client')
    cy.get('#clientEmail').type('client@example.com')
    cy.get('#clientPhone').type('555-123-4567')
    cy.get('#companyName').type('Test Company')

    // Fill in project details
    cy.get('#projectType').select('Residential')
    cy.get('#projectAddress').type('123 Test Street')
    cy.get('#projectBudget').select('$100k-$250k')
    cy.get('#projectTimeline').select('3-6 months')
    cy.get('#projectDescription').type('This is a test project description')

    // Submit form
    cy.get('#questionnaireForm button[type="submit"]').click()
    
    // Check for success message
    cy.get('.alert-success').should('exist')
    cy.get('.alert-success').should('contain', 'Questionnaire Submitted!')
  })

  it('toggles additional fields based on project type selection', () => {
    // When selecting Commercial, specific commercial fields should appear
    cy.get('#projectType').select('Commercial')
    cy.get('#commercialDetails').should('be.visible')
    
    // When selecting Residential, commercial fields should be hidden
    cy.get('#projectType').select('Residential')
    cy.get('#commercialDetails').should('not.exist')
  })
}) 