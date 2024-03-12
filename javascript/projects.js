"use strict";
// projects.js
document.addEventListener("DOMContentLoaded", function () {
  const projects_wrapper = document.querySelector(".projects-wrapper");

  const projects_array = [];

  class project_constructor {
    constructor(
      video_src,
      web_name,
      stacks,
      responsive,
      link_live,
      link_github
    ) {
      this.video_src = video_src;
      this.web_name = web_name;
      this.stacks = stacks;
      this.responsive = responsive;
      this.link_live = link_live;
      this.link_github = link_github;
    }
  }

  let pro_portfolio = new project_constructor(
    "",
    "luisgcode.com | Portfolio <small> **Work in progress**</small>",
    "Tech stacks:<span> HTML, SCSS, CSS, and JavaSCript </span>",
    "Mobile responsive ✔️",
    "",
    "https://github.com/luisgcode/portfolio2024"
  );

  let pro_encoreGym = new project_constructor(
    "videos/encore-gym-web.mp4",
    "EncoreGym website",
    "Tech stacks:<span> HTML, CSS, and JavaSCript </span>",
    "Mobile responsive ✔️",
    "https://luisgcode.github.io/encoregymWeb/",
    "https://github.com/luisgcode/encoregymWeb"
  );

  let pro_stores_infanti = new project_constructor(
    "videos/stores-infanti.mp4",
    "Our stores | Infanti.cl",
    "Tech stacks:<span> HTML, SCSS, CSS, and JavaSCript",
    "Mobile responsive ✔️",
    "https://infanti.cl/tiendas",
    "https://github.com/luisgcode/live-available-stores"
  );

  let pro_final_project_js = new project_constructor(
    "",
    "Final project JS 1 | College <small>**Work in progress**</small>",
    "Tech stacks:<span> HTML, CSS, and JavaSCript </span>",
    "",
    "https://luisgcode.github.io/firstTermFinalProjectFanshaweJS/",
    "https://github.com/luisgcode/firstTermFinalProjectFanshaweJS"
  );

  let pro_meet_people = new project_constructor(
    "videos/meetpeople-web.mp4#t=3",
    "MEETpeople website",
    "Tech stacks:<span> HTML, SCSS, CSS, and JavaSCript </span>",
    "Mobile responsive ✔️",
    "https://luisgcode.github.io/meetpeople-sass/",
    "https://github.com/luisgcode/meetpeople-sass"
  );

  let pro_timer_infant = new project_constructor(
    "videos/timer-infanti.mp4",
    "Offers timer | Infanti.cl",
    "Tech stacks:<span> HTML, CSS, and JavaSCript </span>",
    "Mobile responsive ✔️",
    "https://infanti.cl/",
    ""
  );

  let pro_slot_machine = new project_constructor(
    "videos/slot-machine-college.mp4",
    "Slot machine | College",
    "Tech stacks:<span> HTML, CSS, and JavaSCript </span>",
    "Mobile responsive ✔️",
    "https://luisgcode.github.io/slotMachineJSCollegeTerm1/",
    "https://github.com/luisgcode/slotMachineJSCollegeTerm1"
  );

  let pro_catalogs_infanti = new project_constructor(
    "videos/catalos-infanti.mp4",
    "Catalogs | Infanti.cl",
    "Tech stacks:<span> HTML, CSS </span>",
    "Mobile responsive ✔️",
    "https://infanti.cl/catalogos",
    ""
  );

  let pro_benefits_infanti = new project_constructor(
    "videos/benefits-infanti.mp4",
    "Benefits | Infanti.cl",
    "Tech stacks:<span> HTML, CSS </span>",
    "Mobile responsive ✔️",
    "https://infanti.cl/",
    ""
  );

  projects_array.push(
    pro_portfolio,
    pro_encoreGym,
    pro_stores_infanti,
    pro_final_project_js,
    pro_meet_people,
    pro_timer_infant,
    pro_slot_machine,
    pro_catalogs_infanti,
    pro_benefits_infanti
  );

  projects_array.forEach(function (project) {
    let projects_iteration = `
    <div class="projects-card">
    <video class="videoBtn" width="100% " style="border-radius: 7px">
      <source src="${project.video_src}" type="video/mp4" alt="video" />
    </video>

    <div class="projects-card-details">
      <h4>${project.web_name}</h4>
      <small>
      ${project.stacks}
      </small>
      <br />
      <small>${project.responsive}</small>
    </div>
    <div class="projects-card-links">
      <a
        href="${project.link_live}"
        target="_blank"
        ><i class="projects-icons fa-solid fa-link"></i> Live site</a
      >
      <a
        href="${project.link_github}"
        target="_blank"
        ><i class="projects-icons fa-brands fa-github"></i> View
        Code</a
      >
    </div>
  </div>
  `;

    projects_wrapper.innerHTML += projects_iteration;
  });

  commonFunction();
});
