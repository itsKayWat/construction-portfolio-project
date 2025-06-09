describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/contact.html')
  })

  it('displays the contact form correctly', () => {
    cy.get('#contactForm').should('exist')
    cy.get('#name').should('exist')
    cy.get('#email').should('exist')
    cy.get('#phone').should('exist')
    cy.get('#message').should('exist')
    cy.get('button[type="submit"]').contains('Send Message').should('exist')
  })

  it('validates required fields', () => {
    // Submit empty form
    cy.get('#contactForm button[type="submit"]').click()
    
    // Check for error messages
    cy.get('#name').should('have.class', 'is-invalid')
    cy.get('#email').should('have.class', 'is-invalid')
    cy.get('#message').should('have.class', 'is-invalid')
  })

  it('validates email format', () => {
    // Fill in name and message but use invalid email
    cy.get('#name').type('Test User')
    cy.get('#email').type('invalid-email')
    cy.get('#message').type('This is a test message')
    
    // Submit form
    cy.get('#contactForm button[type="submit"]').click()
    
    // Check that email field shows error
    cy.get('#email').should('have.class', 'is-invalid')
  })

  it('submits form successfully with valid data', () => {
    // Fill in all required fields with valid data
    cy.get('#name').type('Test User')
    cy.get('#email').type('test@example.com')
    cy.get('#phone').type('555-123-4567')
    cy.get('#message').type('This is a test message')
    
    // Submit form
    cy.get('#contactForm button[type="submit"]').click()
    
    // Check for success message
    cy.get('.alert-success').should('exist')
    cy.get('.alert-success').should('contain', 'Message Sent!')
  })
}) 