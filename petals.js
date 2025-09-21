document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("petals-canvas");
  if (!canvas) return; // seguridad extra por si no existe

  const ctx = canvas.getContext("2d");
  let petals = [];
  const petalImg = new Image();
  petalImg.src = "assets/petal.png"; // 🌻 pétalo amarillo

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function createPetal() {
    return {
      x: Math.random() * canvas.width,
      y: -20,
      speed: 1 + Math.random() * 3,
      size: 15 + Math.random() * 20,
      drift: (Math.random() - 0.5) * 2
    };
  }

  function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach((p, i) => {
      ctx.drawImage(petalImg, p.x, p.y, p.size, p.size);

      p.y += p.speed;
      p.x += p.drift;

      if (p.y > canvas.height) {
        petals[i] = createPetal();
        petals[i].y = -20;
      }
    });
    requestAnimationFrame(drawPetals);
  }

  for (let i = 0; i < 40; i++) petals.push(createPetal());

  petalImg.onload = () => drawPetals();
});
