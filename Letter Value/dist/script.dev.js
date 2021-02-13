"use strict";

var cont = document.querySelector("#container");
window.addEventListener("keydown", function (event) {
  cont.innerHTML = "<div class=\"key\">\n    ".concat(event.key === " " ? 'Space' : event.key, "\n    <small>event.key</small>\n</div>\n<div class=\"key\">\n    ").concat(event.keyCode, "\n    <small>event.keyCode</small>\n</div>\n<div class=\"key\">\n").concat(event.code, "\n    <small>event.code</small>\n</div>");
}, false);