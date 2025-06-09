#!/bin/bash

# Initialize Git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add GitHub remote (replace with your username and repository name)
git remote add origin https://github.com/YOUR_USERNAME/construction-site-demo.git

# Push to GitHub
git push -u origin main

echo "Deployment completed! Your site should be available at https://YOUR_USERNAME.github.io/construction-site-demo/ soon."
echo "If you haven't set up GitHub Pages yet, go to your repository settings and enable GitHub Pages with the main branch as source." 