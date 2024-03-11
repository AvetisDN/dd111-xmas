document.querySelector("#menu-open").addEventListener("click", () => {
  document.querySelector(".overlay").classList.add("show");
});
document.querySelector("#menu-close").addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("show");
});
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
}
if (localStorage.getItem("xmas-theme")) {
  if (localStorage.getItem("xmas-theme") === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

document.querySelector("#theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "xmas-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

const handleScroll = () => {
  if (window.scrollY > 60) {
    document.querySelector(".header-wrapper").classList.add("scrolled");
  } else {
    document.querySelector(".header-wrapper").classList.remove("scrolled");
  }
};

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
window.addEventListener("resize", handleScroll);

$(document).ready(function () {
  $(".gits_carousel").owlCarousel({
    loop: true,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 24,
        stagePadding: 64,
      },
      540: {
        items: 2,
        center: false,
        margin: 32,
        stagePadding: 24,
      },
      810: {
        items: 3,
        center: false,
        margin: 64,
        stagePadding: 24,
      },
    },
  });
});

AOS.init();
