"use strict";

function commonFunction() {
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

// Thank you message
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".contact-modal-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      var formData = new FormData(this); // Get form data

      // Log form data to verify it's captured correctly
      console.log("Form Data:", formData);

      fetch("process_contact_form.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text()) // Parse response as text
        .then((result) => {
          console.log("Server Response:", result); // Log server response for debugging
          try {
            var data = JSON.parse(result); // Parse the JSON response
            if (data.status === "success") {
              redirectToHome(); // Redirect to home page after successful form submission
            } else if (data.status === "error") {
              console.error(
                "There was a problem sending your message. Please try again later."
              );
            } else if (data.status === "incomplete") {
              console.error("Please fill out all fields in the form.");
            } else {
              console.error(
                "An error occurred while processing the form. Please try again."
              );
            }
          } catch (error) {
            console.error("Error parsing JSON response:", error);
            console.error(
              "An error occurred while processing the form. Please try again."
            );
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          console.error(
            "An error occurred while processing the form. Please try again."
          );
        });
    });
  } else {
    console.error("Form element not found.");
  }

  // Function to redirect to the home page
  function redirectToHome() {
    window.location.href = "https://luisgcode.com/"; // Redirect to the home page
  }
});
