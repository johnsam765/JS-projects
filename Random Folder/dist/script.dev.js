"use strict";

var tags = document.querySelector(".tags");
var input = document.querySelector("#in");
input.focus();
input.addEventListener("keyup", function (e) {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(function () {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  var data = input.split(",").filter(function (tag) {
    return tag.trim() !== "";
  }).map(function (tag) {
    return tag.trim();
  });
  tags.innerHTML = "";
  data.forEach(function (i) {
    var tagEl = document.createElement('span');
    tagEl.classList.add("tag");
    tagEl.innerText = i;
    tags.appendChild(tagEl);
  });
}

function randomSelect() {
  var times = 30;
  /*no.of times it highlights each one*/

  var interval = setInterval(function () {
    var randomTag = pickRandom();
    highlightTag(randomTag);
    setTimeout(function () {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(function () {
    clearInterval(interval);
    setTimeout(function () {
      var randomTag = pickRandom();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandom() {
  var tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("focus");
}

function unhighlightTag(tag) {
  tag.classList.remove("focus");
}