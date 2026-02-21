
function toggleMenu() {
  const menuOverlay = document.getElementById('menuOverlay');
  const btn = document.getElementById('hamburger');
  const body = document.body;
  menuOverlay.classList.toggle('active');
  btn.classList.toggle('active');
  body.classList.toggle('no-scroll');
}

document.getElementById('menuOverlay').addEventListener('click', function (e) {
  if (e.target === this) {
    toggleMenu();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay.classList.contains('active')) {
      toggleMenu();
    }
  }
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContacto');
  
    if(form) {
        form.addEventListener('submit', function(e) {
            
            limpiarErrores();
        
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            let esValido = true;

            if (nombre === '') {
                mostrarError('nombre', 'Por favor, ingresá tu nombre.');
                esValido = false;
            } else if (nombre.length < 3) {
                mostrarError('nombre', 'El nombre es muy corto.');
                esValido = false;
            }

            if (email === '') {
                mostrarError('email', 'Por favor, ingresá tu email.');
                esValido = false;
            } else if (!esEmailValido(email)) {
                mostrarError('email', 'El formato del email no es válido.');
                esValido = false;
            }

            if (mensaje === '') {
                mostrarError('mensaje', 'Por favor, escribí un mensaje.');
                esValido = false;
            } else if (mensaje.length < 10) {
                mostrarError('mensaje', 'El mensaje es muy corto (mínimo 10 caracteres).');
                esValido = false;
            }

       
            if (!esValido) {
             
                e.preventDefault(); 
            } else {
              
                const btn = form.querySelector('.contact-btn');
                btn.innerText = 'ENVIANDO...';
                btn.style.opacity = '0.7';
           
            }
        });
    }
});


/* ==========================================================
   FUNCIONES AUXILIARES DE VALIDACIÓN (Quedan igual)
   ========================================================== */

function mostrarError(campoId, mensaje) {
    const input = document.getElementById(campoId);
    const errorSmall = document.getElementById('error-' + campoId);
    if(input) input.classList.add('input-error'); 
    if(errorSmall) {
        errorSmall.textContent = mensaje;
        errorSmall.style.display = 'block';
    }
}

function limpiarErrores() {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    const mensajes = document.querySelectorAll('.error-msg');
    inputs.forEach(input => input.classList.remove('input-error'));
    mensajes.forEach(msg => msg.style.display = 'none');
    
    // Ocultamos también el status viejo si quedó visible
    const status = document.getElementById('form-status');
    if(status) status.style.display = 'none';
}

function esEmailValido(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function toggleMenu() {
  const menuOverlay = document.getElementById('menuOverlay');
  const btn = document.getElementById('hamburger');
  const body = document.body;
  menuOverlay.classList.toggle('active');
  btn.classList.toggle('active');
  body.classList.toggle('no-scroll');
}

document.getElementById('menuOverlay').addEventListener('click', function (e) {
  if (e.target === this) {
    toggleMenu();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay.classList.contains('active')) {
      toggleMenu();
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const textos = document.querySelectorAll(".animarTexto");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        textos.forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.5}s`;
          el.classList.add("show");
        });
        textos.forEach(el => observer.unobserve(el));
      }
    });
  }, { threshold: 0.3 });
  textos.forEach(texto => observer.observe(texto));
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".li-academic");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.4 });
  items.forEach(item => observer.observe(item));
});

const track = document.querySelector('.slider-track');
if (track) {
    const images = Array.from(track.children);

    images.forEach(img => {
      track.appendChild(img.cloneNode(true));
    });

    let index = 0;
    const tiempoQuieto = 3100;   
    const tiempoSlide = 1500;    

    function mover() {
      index++;
      track.style.transition = `transform ${tiempoSlide}ms ease-in-out`;
      track.style.transform = `translateX(-${index * 100}vw)`;

      if (index === images.length) {
        setTimeout(() => {
          track.style.transition = "none";
          track.style.transform = "translateX(0)";
          index = 0;
        }, tiempoSlide);
      }

      setTimeout(mover, tiempoQuieto + tiempoSlide);
    }
    setTimeout(mover, tiempoQuieto);
}

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");
  if (!aboutSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("animate");
        observer.unobserve(aboutSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(aboutSection);
});


document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".proyectos-wrapper");
  const title = document.querySelector(".Proyectos-title");
  const values = document.querySelector(".values-section");

  if (!wrapper || !title || !values) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        title.classList.add("animate");
        values.classList.add("animate");
        observer.unobserve(wrapper);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(wrapper);
});


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const aboutSection = document.querySelector(".about-section");

  if (!counters.length || !aboutSection) return;

  const animateCounter = (counter) => {
    const target = +counter.dataset.target;
    const duration = 2700;
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * target);

      counter.textContent = value.toLocaleString("es-AR");

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString("es-AR");
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => animateCounter(counter));
        observer.unobserve(aboutSection);
      }
    });
  }, { threshold: 0.4 });

  observer.observe(aboutSection);
});



document.addEventListener("DOMContentLoaded", () => {
    const toasts = document.querySelectorAll(".toast-message");
    toasts.forEach(toast => {
        setTimeout(() => {
            toast.style.animation = "fadeOut 0.5s forwards";
            toast.addEventListener("animationend", () => {
                toast.remove();
            });
        }, 5000);
    });
});