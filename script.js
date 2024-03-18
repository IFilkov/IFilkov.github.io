document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var aboutSection = document.getElementById("about").offsetTop;
    var eventsSection = document.getElementById("events").offsetTop;
    var jobsSection = document.getElementById("jobs").offsetTop;
    var contactSection = document.getElementById("contacts").offsetTop;
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= aboutSection && scrollPosition < eventsSection) {
      document.querySelector(".overlay.about").classList.add("active");
    } else {
      document.querySelector(".overlay.about").classList.remove("active");
    }

    if (scrollPosition >= eventsSection && scrollPosition < jobsSection) {
      document.querySelector(".overlay.events").classList.add("active");
    } else {
      document.querySelector(".overlay.events").classList.remove("active");
    }

    if (scrollPosition >= jobsSection && scrollPosition < contactSection) {
      document.querySelector(".overlay.jobs").classList.add("active");
    } else {
      document.querySelector(".overlay.jobs").classList.remove("active");
    }

    if (scrollPosition >= contactSection) {
      document.querySelector(".overlay.contact").classList.add("active");
    } else {
      document.querySelector(".overlay.contact").classList.remove("active");
    }
  });

  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
