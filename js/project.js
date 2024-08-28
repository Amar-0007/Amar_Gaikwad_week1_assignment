// project.js
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the content for the projects section
    fetch('html/projects.html') // Ensure this path is correct and 'projects.html' exists
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Insert the fetched content into the placeholder section
            document.getElementById('project-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading projects section:', error));
});
