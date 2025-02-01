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

// drag&drop
$("#draggable").draggable();
$("#droppable").droppable({
  drop: function (event, ui) {
    $(this).addClass("ui-state-highlight").find("img").html("Dropped!");
    alert("🏀 Congratulations! You made the shot! 🎉");
  },
});

// ajax call
$(document).ready(function () {
  // ajax call
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    method: "GET",
    success: function (response) {
      $("#fact").html(
        response.text +
          "<span class='highlight'> And Don't forget to drop the ball into the basket to score a FREE one-month membership! 🏀🔥</span>"
      );
    },
    error: function () {
      $("#fact").text("Failed to load the fact.");
    },
  });

  // download images
  $(".downloadable").on("click", function () {
    const imageUrl = $(this).attr("src");
    const filename = $(this).data("filename");

    $.ajax({
      url: "/upload",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ url: imageUrl, filename: filename }),
      success: function (response) {
        alert("Image saved successfully!");
      },
      error: function () {
        alert("Failed to save image.");
      },
    });
  });
});
