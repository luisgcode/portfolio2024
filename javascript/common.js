"use strict";

function commonFunction() {
  // Font sizes
  const btnIncreaseFonts = document.querySelectorAll(".increaseFont");
  const btnDecreaseFonts = document.querySelectorAll(".decreaseFont");

  const regularText = document.querySelectorAll("p");

  btnIncreaseFonts.forEach(function (btn) {
    btn.addEventListener("click", function () {
      regularText.forEach(function (text) {
        text.classList.add("agrandar");
      });
    });
  });

  btnDecreaseFonts.forEach(function (btn) {
    btn.addEventListener("click", function () {
      regularText.forEach(function (text) {
        text.classList.remove("agrandar");
      });
    });
  });

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

  // // Hamburguer menu displaying
  const openNavBtn = document.querySelector(".toolbar-mobile-ul-li-openBtn");
  const navMenu = document.querySelectorAll(".nav-mobile");
  const wrappHeroImage = document.querySelector(".wrapper-hero");

  openNavBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    wrappHeroImage.classList.toggle("active");
  });

  // Dropdown menu
  const dropDownActivator = document.querySelector(".dropActivator");
  const dropdown = document.querySelector(".dropdown");

  dropDownActivator.addEventListener("click", function () {
    dropdown.classList.toggle("dropdownActivated");
  });

  // play videos with hover
  const btnVideos = document.querySelectorAll(".videoBtn");

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
