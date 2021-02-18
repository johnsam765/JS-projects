"use strict";

var but = document.querySelectorAll(".faq-toggle");
but.forEach(function (a) {
  a.addEventListener("click", function () {
    a.parentNode.classList.toggle("active");
  });
});