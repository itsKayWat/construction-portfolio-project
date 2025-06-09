# End-to-End Testing Documentation

This project uses Cypress for end-to-end testing of the BuildRight Construction website.

## Test Structure

The tests are organized into several files:

- `live-site.cy.js` - Basic tests that work against the live site
- `homepage.cy.js` - Tests for the homepage functionality
- `contact-form.cy.js` - Tests for the contact form
- `projects-filter.cy.js` - Tests for the projects page filtering
- `questionnaire.cy.js` - Tests for the client questionnaire
- `responsive.cy.js` - Tests for responsive design
- `accessibility.cy.js` - Tests for accessibility features

## Running Tests Locally

### Prerequisites

- Node.js installed
- npm installed

### Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running Tests in Cypress UI

To open the Cypress Test Runner:

```
npm run cypress:open
```

### Running Tests in Headless Mode

To run all tests:

```
npm test
```

To run a specific test file:

```
npm test -- --spec "cypress/e2e/live-site.cy.js"
```

### Testing Against Live Site

By default, tests run against `http://localhost:8080`. To run against the live site:

```bash
# Using npm scripts
npm run test:live

# To run a specific test against the live site
npm run test:live -- --spec "cypress/e2e/live-site.cy.js"
```

## CI/CD Integration

This project is configured to run tests automatically on GitHub Actions. The workflow is defined in `.github/workflows/cypress.yml`.

### Setting Up GitHub Actions

1. Push your code to GitHub
2. Go to your repository's Settings > Secrets > Actions
3. Add a new repository secret:
   - Name: `CYPRESS_RECORD_KEY`
   - Value: `43dd2dcc-1a65-4310-910f-ca45e067c948`

The GitHub Actions workflow will:
- Run on every push to the repository
- Run tests against the live site
- Run tests in parallel across 2 machines
- Record results to Cypress Cloud

### Cypress Cloud Recording

Tests are recorded to Cypress Cloud for better visibility and debugging. The project ID (`y7gktf`) is configured in `cypress.config.js`.

To run tests with recording:

```
npm run test:record
```

To run tests against the live site with recording:

```
npm run test:live:record
```

## Troubleshooting

If you encounter PowerShell errors like `spawn powershell.exe ENOENT`, try the following:

1. Run tests through the Cypress UI instead of command line
2. Use a different terminal (e.g., Command Prompt or Git Bash)
3. Run tests in GitHub Actions by pushing changes to the repository

## Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress GitHub Actions Integration](https://docs.cypress.io/guides/continuous-integration/github-actions)
- [Cypress Cloud](https://docs.cypress.io/guides/cloud/introduction) 