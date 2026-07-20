// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
});

document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
});
