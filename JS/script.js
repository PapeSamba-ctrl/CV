/* ============================================
   FONCTION 1 — TYPEWRITER (effet de frappe)
   Anime le nom "Pape Samba Dia" lettre par lettre
   + fait apparaître les éléments sidebar un par un
   ============================================ */
const typeWriter = () => {
  const element = document.querySelector(".profile-container h1");
  const texte = element.textContent;
  element.textContent = "";
  element.style.borderRight = "2px solid #a3e2cd";

  let index = 0;

  const interval = setInterval(() => {
    element.textContent += texte[index];
    index++;

    if (index === texte.length) {
      clearInterval(interval);
      setTimeout(() => {
        element.style.borderRight = "none";
      }, 1500);

      animerSidebar();
    }
  }, 80);
};

const animerSidebar = () => {
  const elements = document.querySelectorAll(
    ".profile-container p, .sidebar-section h2, .contact-item, .sidebar-list li"
  );

  elements.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateX(-20px)";
    el.style.transition = `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`;

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }, 50);

    const estInteractif =
      el.classList.contains("contact-item") ||
      el.parentElement.classList.contains("sidebar-list");

    if (estInteractif) {
      el.style.cursor = "default";

      el.addEventListener("mouseenter", () => {
        el.style.color = "#a3e2cd";
        el.style.transform = "translateX(8px)";
        el.style.transition = "color 0.3s ease, transform 0.3s ease";
      });

      el.addEventListener("mouseleave", () => {
        el.style.color = "";
        el.style.transform = "translateX(0)";
        el.style.transition = "color 0.3s ease, transform 0.3s ease";
      });
    }
  });
};
/*FONCTION 2 — SCROLL REVEAL (apparition des sections du mainau scroll)*/
const scrollReveal = () => {
  const sections = document.querySelectorAll(".main-section, .card");

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));
};
/*FONCTION 3 — HOVER SHADOW (ombre verte au survol) */
const hoverShadow = () => {
  const cartes = document.querySelectorAll(".card");

  cartes.forEach((carte) => {
    carte.style.transition = "box-shadow 0.3s ease, transform 0.3s ease";

    carte.addEventListener("mouseenter", () => {
      carte.style.boxShadow = "0 -4px 0 0 #1b4d3e, 0 8px 24px rgba(27, 77, 62, 0.15)";
      carte.style.transform = "translateY(-3px)";
    });

    carte.addEventListener("mouseleave", () => {
      carte.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.06)";
      carte.style.transform = "translateY(0)";
    });
  });
};
     /*LANCEMENT*/
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  scrollReveal();
  hoverShadow();
});