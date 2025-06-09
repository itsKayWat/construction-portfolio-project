describe('Accessibility Features', () => {
  it('has proper page title on all pages', () => {
    // Check homepage title
    cy.visit('/')
    cy.title().should('include', 'BuildRight Construction')
    
    // Check services page title
    cy.visit('/services.html')
    cy.title().should('include', 'Services')
    
    // Check projects page title
    cy.visit('/projects.html')
    cy.title().should('include', 'Projects')
    
    // Check about page title
    cy.visit('/about.html')
    cy.title().should('include', 'About')
    
    // Check contact page title
    cy.visit('/contact.html')
    cy.title().should('include', 'Contact')
    
    // Check questionnaire page title
    cy.visit('/questionnaire.html')
    cy.title().should('include', 'Client Questionnaire')
  })

  it('has proper alt text for important images', () => {
    cy.visit('/')
    
    // Check project images for alt text
    cy.get('#featured-projects img').each(($img) => {
      const altText = $img.attr('alt')
      expect(altText).to.not.be.empty
    })
  })

  it('has proper ARIA labels on forms', () => {
    cy.visit('/contact.html')
    
    // Check form labels
    cy.get('label[for="name"]').should('exist')
    cy.get('label[for="email"]').should('exist')
    cy.get('label[for="phone"]').should('exist')
    cy.get('label[for="message"]').should('exist')
    
    // Check form controls have proper attributes
    cy.get('#name').should('have.attr', 'aria-required', 'true')
    cy.get('#email').should('have.attr', 'aria-required', 'true')
    cy.get('#message').should('have.attr', 'aria-required', 'true')
  })

  it('has keyboard-navigable navigation', () => {
    cy.visit('/')
    
    // Focus on first nav link
    cy.get('#navbarNav .nav-link').first().focus()
    
    // Press tab to move to the next link
    cy.focused().tab()
    
    // Check that the second link has focus
    cy.focused().should('contain', 'Services')
    
    // Press tab again to move to the next link
    cy.focused().tab()
    
    // Check that the third link has focus
    cy.focused().should('contain', 'Projects')
  })
}) 