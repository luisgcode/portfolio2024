"use strict";

function commonFunction() {
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
}

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
