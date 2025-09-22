


// Contador regresivo
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-09-21T00:00:00").getTime();
const title = document.getElementById("title");

function updateCountdown() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    // Mostrar sorpresa (iframe)
    title.textContent = "🌻 ¡El día llegó! 🌻";
    countdown.innerHTML = `
      <iframe src="floresamarillas.html" 
              id="contenido" 
              style="width:100%; height:80vh; border:none;">
      </iframe>`;
    clearInterval(timer); // detenemos el interval
    return;
  }

  // Cálculo del tiempo restante
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar contador
  title.textContent = "⏳ Falta para el 21 de Septiembre";
  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Iniciar contador
const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // primera ejecución inmediata

// Sorpresa
function revealSurprise() {
  document.getElementById("surprise-msg").classList.remove("hidden");
}
// 🌻 Animar secciones al entrar en pantalla
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// 🌻 Animar títulos con GSAP
window.addEventListener("load", () => {
  gsap.from("h1", { duration: 1.5, opacity: 0, y: -50 });
  gsap.from("nav li", { duration: 1, opacity: 0, stagger: 0.2 });
});
// Mostrar solo la sección correspondiente
const links = document.querySelectorAll(".navbar a");
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active", "visible"));
  document.getElementById("inicio").classList.add("active", "visible");
});


links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // Oculta todas
    sections.forEach(sec => sec.classList.remove("active"));
    // Muestra la seleccionada
    document.getElementById(targetId).classList.add("active");
  });
});
