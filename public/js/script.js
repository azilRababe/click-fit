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
// TODO
$(document).ready(function () {
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    method: "GET",
    success: function (response) {
      $("#fact").text(response.text);
    },
    error: function () {
      $("#fact").text("Failed to load the fact.");
    },
  });

  //   // Drag and Drop Image Upload
  //   let dropArea = $("#drop-area");

  //   dropArea.on("click", function () {
  //     $("#fileInput").click();
  //   });

  //   dropArea.on("dragover", function (e) {
  //     e.preventDefault();
  //     $(this).addClass("dragging");
  //   });

  //   dropArea.on("dragleave drop", function () {
  //     $(this).removeClass("dragging");
  //   });

  //   dropArea.on("drop", function (e) {
  //     e.preventDefault();
  //     let files = e.originalEvent.dataTransfer.files;
  //     uploadFiles(files);
  //   });

  //   $("#fileInput").on("change", function () {
  //     uploadFiles(this.files);
  //   });

  //   function uploadFiles(files) {
  //     let formData = new FormData();
  //     $.each(files, function (i, file) {
  //       formData.append("file", file);
  //     });

  //     $.ajax({
  //       url: "/upload",
  //       method: "POST",
  //       data: formData,
  //       contentType: false,
  //       processData: false,
  //       success: function (response) {
  //         alert("File uploaded successfully!");
  //       },
  //       error: function () {
  //         alert("File upload failed.");
  //       },
  //     });
  //   }
});
