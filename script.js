// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
};

fetch("bewildered-wallie-konerulakshmaiaheducationfoudation-f59b3746.koyeb.app/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData)
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

