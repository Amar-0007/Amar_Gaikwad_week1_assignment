// skills.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('html/skills.html') // Ensure this path is correct
        .then(response => response.text())
        .then(data => {
            document.getElementById('skills-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading skills section:', error));
});
