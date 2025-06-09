https://itskaywat.github.io/construction-portfolio-project/contact.html

# BuildRight Construction - Demo Website

This is a demo construction company website created as part of a proposal. The website is designed to showcase a professional construction business with services, projects, contact information, and a client questionnaire.

## Live Demo

The website is hosted on GitHub Pages at: [https://itskaywat.github.io/construction-portfolio-project/](https://itskaywat.github.io/construction-portfolio-project/)

## Features

- Responsive design that works on all devices (mobile, tablet, desktop)
- Professional and modern UI design for a construction company
- Multiple pages including:
  - Homepage with services and featured projects
  - Services page
  - Projects gallery
  - About Us page
  - Contact page with form
  - Client questionnaire for potential clients
- Bootstrap 5 framework for responsive layout
- Font Awesome icons
- Google Fonts for typography
- Custom CSS for unique styling
- Form validation with JavaScript
- Project filtering functionality
- End-to-end testing with Cypress

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome
- Google Fonts
- Cypress (for testing)

## How to Use

1. Clone this repository to your local machine
   ```
   git clone https://github.com/itsKayWat/construction-portfolio-project.git
   ```

2. Open the project folder in your code editor

3. Open `index.html` in your web browser to view the website

## Testing

This project includes end-to-end tests using Cypress. For detailed testing information, see [TESTING.md](TESTING.md).

Quick start:

```bash
# Install dependencies
npm install

# Run tests in Cypress UI
npx cypress open

# Run tests in headless mode
npx cypress run

# Run tests against live site
$env:TEST_LIVE="true"; npx cypress run  # Windows PowerShell
TEST_LIVE=true npx cypress run  # Linux/Mac
```

## Deployment

### Deploying to GitHub Pages

1. Create a repository on GitHub
2. Push this code to your repository
   ```
   git remote add origin https://github.com/yourusername/construction-site-demo.git
   git branch -M main
   git push -u origin main
   ```

3. Go to your repository Settings > Pages
4. Set Source to "main" branch and click Save
5. Your site will be published at `https://yourusername.github.io/construction-site-demo/`

## Customization

To customize this site for your needs:

1. Replace the placeholder text and images with your content
2. Update the contact information
3. Change colors by modifying CSS variables in `css/styles.css`
4. Add or remove sections as needed

## License

This demo project is available for use in your proposals or projects.

## Credits

- Stock images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com) 
