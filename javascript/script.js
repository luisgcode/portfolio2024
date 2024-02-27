"use strict";

// counter increment
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

// footer animation
const menus = document.querySelectorAll(".top-icon-graph-options");
const dots = document.querySelectorAll(".dots");
const progressBar = document.querySelector(".circle-mark");

let currentValue = 1;

let menusArray = Array.from(menus);
let dotsArray = Array.from(dots);

menusArray.forEach(function (menu) {
  menu.addEventListener("click", function () {
    let idValue = menu.getAttribute("data-id");

    if (idValue == 1) {
      progressBar.style.height = "33%";
    } else if (idValue == 2) {
      progressBar.style.height = "63%";
    } else if (idValue == 3) {
      progressBar.style.height = "100%";
    }

    progressBar.style.width = menusArray.forEach(function (men) {
      men.classList.remove("active");
    });

    dotsArray.forEach(function (dot) {
      dot.classList.remove("active");
    });

    this.classList.add("active");

    var dotsIndex = menusArray.indexOf(this);
    dotsArray[dotsIndex + 1].classList.add("active");
  });
});

// Font sizes
const btnIncreaseFonts = document.querySelector(".toolbar-ul-li-increase-max");
const btnDecreaseFonts = document.querySelector(
  ".toolbar-ul-li-increase-regular"
);

const regularText = document.querySelectorAll("p");

btnIncreaseFonts.addEventListener("click", function () {
  regularText.forEach(function (text) {
    text.classList.add("agrandar");
  });
});

btnDecreaseFonts.addEventListener("click", function () {
  regularText.forEach(function (text) {
    text.classList.remove("agrandar");
  });
});

// Scroll Revealing //
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
