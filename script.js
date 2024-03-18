document.addEventListener("DOMContentLoaded", function () {
  //отслеживание секций
  window.addEventListener("scroll", function () {
    var aboutSection = document.getElementById("about").offsetTop;
    var eventsSection = document.getElementById("events").offsetTop;
    var jobsSection = document.getElementById("jobs").offsetTop;
    var contactSection = document.getElementById("contacts").offsetTop;
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    // if (scrollPosition >= aboutSection && scrollPosition < eventsSection) {
    //   document.querySelector(".overlay.about").classList.add("active");
    // } else {
    //   document.querySelector(".overlay.about").classList.remove("active");
    // }

    // if (scrollPosition >= eventsSection && scrollPosition < jobsSection) {
    //   document.querySelector(".overlay.events").classList.add("active");
    // } else {
    //   document.querySelector(".overlay.events").classList.remove("active");
    // }

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
  //бургер
  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
  //стрелочка вверх
  window.addEventListener("scroll", function () {
    var scrollPercentage =
      ((document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;

    if (scrollPercentage >= 30) {
      document.getElementById("scroll-top-button").style.display = "block";
    } else {
      document.getElementById("scroll-top-button").style.display = "none";
    }
  });

  document
    .getElementById("scroll-top-button")
    .addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

  window.addEventListener("scroll", function () {
    var scrollPercentage =
      ((document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;

    if (scrollPercentage >= 30) {
      document.getElementById("scroll-top-button").style.display = "block";
    } else {
      document.getElementById("scroll-top-button").style.display = "none";
    }
  });

  document
    .getElementById("scroll-top-button")
    .addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
});
