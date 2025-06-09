document.addEventListener('DOMContentLoaded', function() {
    // Add a shadow to navbar on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (name.value.trim() === '') {
                showError(name, 'Name is required');
                isValid = false;
            } else {
                removeError(name);
            }
            
            if (email.value.trim() === '') {
                showError(email, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            } else {
                removeError(email);
            }
            
            if (message.value.trim() === '') {
                showError(message, 'Message is required');
                isValid = false;
            } else {
                removeError(message);
            }
            
            if (isValid) {
                // If valid, submit the form to FormSubmit
                contactForm.submit();
            }
        });
    }
    
    // Form validation for questionnaire form
    const questionnaireForm = document.getElementById('questionnaireForm');
    if (questionnaireForm) {
        questionnaireForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation - just check required fields
            let isValid = true;
            const requiredFields = questionnaireForm.querySelectorAll('[required]');
            
            requiredFields.forEach(function(field) {
                if (field.value.trim() === '') {
                    showError(field, 'This field is required');
                    isValid = false;
                } else {
                    removeError(field);
                }
            });
            
            if (isValid) {
                // For demo purposes, show success message
                const formWrapper = document.querySelector('.questionnaire-form');
                formWrapper.innerHTML = '<div class="alert alert-success" role="alert"><h4 class="alert-heading">Questionnaire Submitted!</h4><p>Thank you for providing your project details. We\'ll review your requirements and contact you soon.</p></div>';
            }
        });
    }

    // Project filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (filterButtons.length > 0 && projectItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Filter projects
                projectItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                    } else if (item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Helper functions
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.invalid-feedback') || document.createElement('div');
        
        errorMessage.className = 'invalid-feedback';
        errorMessage.innerText = message;
        
        if (!formGroup.querySelector('.invalid-feedback')) {
            formGroup.appendChild(errorMessage);
        }
        
        input.classList.add('is-invalid');
    }
    
    function removeError(input) {
        input.classList.remove('is-invalid');
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}); 