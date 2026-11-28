
// MENÚ RESPONSIVE

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Cerrar menú");
    } else {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Abrir menú");
    }
});

// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Abrir menú");
    });
});

// ANIMACIÓN DE APARICIÓN

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".service-card, .process-card, .quote, .contact-content"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});