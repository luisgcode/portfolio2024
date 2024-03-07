"use strict";

function commonFunction() {
  // Font sizes
  const btnIncreaseFonts = document.querySelectorAll(".btn-increaseFont");
  const btnDecreaseFonts = document.querySelectorAll(".btn-decreaseFont");

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

  // Dropdown menu
  const dropDownActivator = document.querySelector(".dropActivator");
  const dropdown = document.querySelector(".dropdown");

  dropDownActivator.addEventListener("click", function () {
    dropdown.classList.toggle("dropdownActivated");
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

// // CHECK THIS, WHY IS NOT WORKING ON THE REST OF THE PAGE,
// // PROBABLY BECAUSE SOME CSS OF THE HEADER MAYBE
// // // Hamburguer menu displaying
// const openNavBtns = document.querySelectorAll(".toolbar-mobile-ul-hamburguer");
// const mobileMenus = document.querySelectorAll(".nav-mobile");

// openNavBtns.forEach(function (openBtn) {
//   openBtn.addEventListener("click", function () {
//     mobileMenus.forEach(function (mobileMenu) {
//       mobileMenu.classList.toggle("active");
//     });
//   });
// });
