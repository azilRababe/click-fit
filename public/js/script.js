const menuBtn = $("#menu-btn");
const navLinks = $("#nav-links");
const menuBtnIcon = menuBtn.find("i");

menuBtn.on("click", function () {
  navLinks.toggleClass("open");

  const isOpen = navLinks.hasClass("open");
  menuBtnIcon.attr(
    "class",
    isOpen ? "ri-menu-unfold-line" : "ri-menu-fold-line"
  );
});

navLinks.on("click", (e) => {
  navLinks.removeClass("open");
  menuBtnIcon.attr("class", "ri-menu-fold-line");
});

// scroll animation
const reveal_options = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
// ----header-----
ScrollReveal().reveal(".header__image img", {
  ...reveal_options,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...reveal_options,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...reveal_options,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...reveal_options,
  delay: 1500,
});

// ------about us
ScrollReveal().reveal(".about__image img", {
  ...reveal_options,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...reveal_options,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...reveal_options,
  delay: 1000,
});
ScrollReveal().reveal(".about__btn", {
  ...reveal_options,
  delay: 1500,
});
// about cards
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});
// strong
ScrollReveal().reveal(".strong__content .section__header", {
  ...reveal_options,
});
ScrollReveal().reveal(".strong__content p", {
  ...reveal_options,
  delay: 500,
});

// coaches
ScrollReveal().reveal(".coaches__card", {
  ...reveal_options,
  interval: 500,
});
ScrollReveal().reveal(".gallery__card", {
  ...reveal_options,
  interval: 500,
});
// banner
ScrollReveal().reveal(".banner__content h2", {
  ...reveal_options,
});
ScrollReveal().reveal(".banner__content p", {
  ...reveal_options,
  delay: 500,
});
