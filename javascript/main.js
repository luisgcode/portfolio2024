"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // // counter increment
  const counterYears = document.querySelector(".counterYears");
  const counterProjects = document.querySelector(".counterProjects");
  const counterHours = document.querySelector(".counterHours");

  const incrementHours = function (counter) {
    counterHours.innerText = "0";

    const updateCounter = () => {
      const target = +counterHours.getAttribute("data-target");
      const c = +counterHours.innerText;

      const increment = target / 300;

      if (c < target) {
        counterHours.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
      } else {
        counterHours.innerText = target;
      }
    };

    updateCounter();
  };

  const incrementProjects = function (counter) {
    counterProjects.innerText = "0";

    const updateCounter = () => {
      const target = +counterProjects.getAttribute("data-target");
      const c = +counterProjects.innerText;

      const increment = target / 500;

      if (c < target) {
        counterProjects.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 90);
      } else {
        counterProjects.innerText = target;
      }
    };

    updateCounter();
  };

  const incrementYears = function (counter) {
    counterYears.innerText = "0";

    const updateCounter = () => {
      const target = +counterYears.getAttribute("data-target");
      const c = +counterYears.innerText;

      const increment = target / 500;

      if (c < target) {
        counterYears.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 600);
      } else {
        counterYears.innerText = target;
      }
    };

    updateCounter();
  };

  const odometro = document.querySelector(".abilities-wrapper-counter");
  const odometroHeight = odometro.getBoundingClientRect().height;

  function activarOdometro(entries) {
    const entry = entries[0];

    if (entry.isIntersecting) {
      incrementHours();
      incrementProjects();
      incrementYears();
    }
  }
  const observer = new IntersectionObserver(activarOdometro, {
    rootMargin: `${odometroHeight + 10}px`,
  });

  observer.observe(odometro);
});

// // Hamburguer menu displaying
const openNavBtns = document.querySelectorAll(".toolbar-mobile-ul-hamburguer");
const mobileMenus = document.querySelectorAll(".nav-mobile");

openNavBtns.forEach(function (openBtn) {
  openBtn.addEventListener("click", function () {
    mobileMenus.forEach(function (mobileMenu) {
      mobileMenu.classList.toggle("active");
    });
  });
});

// Print button function
const printLinks = document.querySelectorAll('[id^="printLink"]');

printLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    window.print();
  });
});

// contact modal
const modal = document.querySelector(".contact");
const btnOpenModal = document.querySelectorAll(".open-modal");
const btnCloseModal = document.querySelectorAll(".close-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
};

btnOpenModal.forEach(function (btn) {
  btn.addEventListener("click", openModal);
});

btnCloseModal.forEach(function (btn) {
  btn.addEventListener("click", closeModal);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Font sizes
const btnIncreaseFonts = document.querySelectorAll(".btn-increase");
const regularText = document.querySelectorAll("p");

const increaseSizeFont = function () {
  btnIncreaseFonts.forEach(function (btn) {
    btn.addEventListener("click", function () {
      regularText.forEach(function (text) {
        text.classList.toggle("increase");
      });
    });
  });
};

increaseSizeFont();

// // Scroll Revealing //
const allRevealSections = document.querySelectorAll(".scroll");

const revealSection = function (entries, oberserver) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("scroll-hidden");
  oberserver.unobserve(entry.target);
};

const sectionOberserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allRevealSections.forEach(function (section) {
  sectionOberserver.observe(section);
  section.classList.add("scroll-hidden");
});

// play videos with hover
const btnVideos = document.querySelectorAll(".videoBtn");
const videosCard = document.querySelectorAll("projects-card");

btnVideos.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
  });
});

btnVideos.forEach(function (video) {
  video.addEventListener("mouseout", function () {
    video.pause();
  });
});
