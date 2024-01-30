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
