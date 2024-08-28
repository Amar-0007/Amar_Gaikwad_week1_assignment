// about.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('html/about.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('about-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading about section:', error));
});
