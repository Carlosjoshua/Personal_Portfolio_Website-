document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const errorMessage = document.getElementById('error-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop form from refreshing the page
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Requirements: Form Validation
            if (name === "" || email === "" || message === "") {
                errorMessage.textContent = "All fields are required!";
                errorMessage.style.color = "red";
            } else if (!email.includes("@") || !email.includes(".")) {
                errorMessage.textContent = "Please enter a valid email address.";
                errorMessage.style.color = "red";
            } else {
                errorMessage.textContent = "Message sent successfully!";
                errorMessage.style.color = "green";
                contactForm.reset(); // Clear the form
            }
        });
    }
});