// contact.js
function contact() {
    fetch('html/contact.html') // Fetch the content of contact.html
        .then(response => response.text()) // Get the HTML content as text
        .then(data => {
            document.getElementById('contact-placeholder').innerHTML = data; // Insert it into the placeholder
        })
        .catch(error => console.error('Error loading skills section:', error));
}

// Load the skills section when the page is loaded
window.onload = contact;
