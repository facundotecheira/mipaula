document.addEventListener("DOMContentLoaded", function () {
  // 1. Navegación entre secciones
  const navButtons = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".section");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetSection = button.getAttribute("data-section");

      // Actualizar botones activos
      navButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Mostrar sección correspondiente
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === targetSection) {
          section.classList.add("active");
        }
      });
    });
  });

  // 2. Generar corazones flotantes
  function createHearts() {
    const container = document.querySelector(".hearts-container");
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.classList.add("heart");

      // Posición aleatoria
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";

      // Tamaño aleatorio
      const size = Math.random() * 30 + 20;
      heart.style.fontSize = size + "px";

      // Animación diferente para cada corazón
      heart.style.animationDuration = Math.random() * 4 + 3 + "s";
      heart.style.animationDelay = Math.random() * 2 + "s";

      container.appendChild(heart);
    }
  }

  // 3. Botón sorpresa
  const surpriseBtn = document.getElementById("surpriseBtn");
  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", function () {
      // Cambiar texto del botón
      this.innerHTML =
        '<i class="fas fa-heart"></i> ¡Te amo con todo mi corazón!';
      this.style.background = "linear-gradient(to right, #9a1750, #e31b6d)";

      // Mostrar mensaje emergente
      const message = document.createElement("div");
      message.innerHTML = "💖 Eres lo mejor que me ha pasado 💖";
      message.style.position = "fixed";
      message.style.top = "50%";
      message.style.left = "47%";
      message.style.transform = "translate(-50%, -50%)";
      message.style.background = "white";
      message.style.padding = "20px 40px";
      message.style.borderRadius = "15px";
      message.style.fontSize = "1.5rem";
      message.style.zIndex = "2000";
      message.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
      message.style.animation = "fadeIn 0.5s";
      message.style.width = "28rem";
      message.style.fontSize = "20px";
      message.style.textAlign = "center";

      document.body.appendChild(message);

      const message2 = document.createElement("div");
      message2.innerHTML = "💖 Mi novia Hermosa 💖";
      message2.style.position = "fixed";
      message2.style.top = "70%";
      message2.style.left = "47%";
      message2.style.transform = "translate(-50%, -50%)";
      message2.style.background = "white";
      message2.style.padding = "20px 40px";
      message2.style.borderRadius = "15px";
      message2.style.fontSize = "1.5rem";
      message2.style.zIndex = "2000";
      message2.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
      message2.style.animation = "fadeIn 0.5s";
      message2.style.width = "28rem";
      message2.style.fontSize = "20px";
      message2.style.textAlign = "center";

      document.body.appendChild(message2);

      const message3 = document.createElement("div");
      message3.innerHTML = "💖 Mi Princesa 💖";
      message3.style.position = "fixed";
      message3.style.top = "90%";
      message3.style.left = "47%";
      message3.style.transform = "translate(-50%, -50%)";
      message3.style.background = "white";
      message3.style.padding = "20px 40px";
      message3.style.borderRadius = "15px";
      message3.style.fontSize = "1.5rem";
      message3.style.zIndex = "2000";
      message3.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
      message3.style.animation = "fadeIn 0.5s";
      message3.style.width = "28rem";
      message3.style.fontSize = "20px";
      message3.style.textAlign = "center";

      document.body.appendChild(message3);

      // Remover mensaje después de 3 segundos
      setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s';
        setTimeout(() => message.remove(), 500);
        message2.style.animation = 'fadeOut 0.5s';
        setTimeout(() => message2.remove(), 500);
        message3.style.animation = 'fadeOut 0.5s';
        setTimeout(() => message3.remove(), 500);
      }, 3000);
    });
  }

  // 4. Galería de fotos (simulada - reemplaza con tus imágenes)
  const galleryContainer = document.querySelector(".gallery-container");
  if (galleryContainer) {
    const photoCount = 17; // Cambia según cuántas fotos tengas

    for (let i = 1; i <= photoCount; i++) {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");

      const img = document.createElement("img");
      // Cambia 'fotos/fotoX.jpg' por la ruta de tus fotos
      img.src = `fotos/foto${i}.jpg`;
      img.alt = `Nuestro momento ${i}`;
      img.onerror = function () {
        // Si la foto no existe, mostrar una imagen de placeholder
        this.src =
          "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
      };

      galleryItem.appendChild(img);
      galleryContainer.appendChild(galleryItem);
    }
  }

  // 5. Cuenta regresiva para cumpleaños
  function updateCountdown() {
    // Fecha del cumpleaños (cambia por la fecha real)
    const birthday = new Date("2026-02-15").getTime(); // Formato: Año-Mes-Día
    const now = new Date().getTime();
    const timeLeft = birthday - now;

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days
        .toString()
        .padStart(2, "0");
      document.getElementById("hours").textContent = hours
        .toString()
        .padStart(2, "0");
      document.getElementById("minutes").textContent = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("seconds").textContent = seconds
        .toString()
        .padStart(2, "0");
    } else {
      document.querySelector(".countdown-container").innerHTML =
        '<h2 style="color:#e31b6d;">🎉 ¡Feliz Cumpleaños, Mi Amor! 🎉</h2>';
    }
  }

  // 6. Control de música
  const musicToggle = document.getElementById("musicToggle");
  const loveSong = document.getElementById("loveSong");

  if (musicToggle && loveSong) {
    musicToggle.addEventListener("click", function () {
      if (loveSong.paused) {
        loveSong.play();
        this.innerHTML = '<i class="fas fa-volume-up"></i>';
        this.style.background = "#9a1750";
      } else {
        loveSong.pause();
        this.innerHTML = '<i class="fas fa-music"></i>';
        this.style.background = "#e31b6d";
      }
    });
  }

  // Inicializar funciones
  createHearts();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
