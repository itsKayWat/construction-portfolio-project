describe('Projects Page Filter', () => {
  beforeEach(() => {
    cy.visit('/projects.html')
  })

  it('displays the projects page with filter buttons', () => {
    cy.get('.filter-btn').should('have.length.at.least', 3)
    cy.get('.filter-btn[data-filter="all"]').should('exist').and('have.class', 'active')
    cy.get('.project-item').should('have.length.at.least', 3).and('be.visible')
  })

  it('filters residential projects correctly', () => {
    // Click the residential filter button
    cy.get('.filter-btn[data-filter="residential"]').click()
    
    // Check that it becomes active
    cy.get('.filter-btn[data-filter="residential"]').should('have.class', 'active')
    cy.get('.filter-btn[data-filter="all"]').should('not.have.class', 'active')
    
    // Check that only residential projects are visible
    cy.get('.project-item.residential').should('be.visible')
    cy.get('.project-item:not(.residential)').should('not.be.visible')
  })

  it('filters commercial projects correctly', () => {
    // Click the commercial filter button
    cy.get('.filter-btn[data-filter="commercial"]').click()
    
    // Check that it becomes active
    cy.get('.filter-btn[data-filter="commercial"]').should('have.class', 'active')
    cy.get('.filter-btn[data-filter="all"]').should('not.have.class', 'active')
    
    // Check that only commercial projects are visible
    cy.get('.project-item.commercial').should('be.visible')
    cy.get('.project-item:not(.commercial)').should('not.be.visible')
  })

  it('filters renovation projects correctly', () => {
    // Click the renovation filter button
    cy.get('.filter-btn[data-filter="renovation"]').click()
    
    // Check that it becomes active
    cy.get('.filter-btn[data-filter="renovation"]').should('have.class', 'active')
    cy.get('.filter-btn[data-filter="all"]').should('not.have.class', 'active')
    
    // Check that only renovation projects are visible
    cy.get('.project-item.renovation').should('be.visible')
    cy.get('.project-item:not(.renovation)').should('not.be.visible')
  })

  it('shows all projects when "All Projects" is clicked', () => {
    // First filter to renovation
    cy.get('.filter-btn[data-filter="renovation"]').click()
    
    // Then click "All Projects"
    cy.get('.filter-btn[data-filter="all"]').click()
    
    // Check that all projects are visible
    cy.get('.project-item').should('be.visible')
  })
}) 