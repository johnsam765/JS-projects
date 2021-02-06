"use strict";

var sounds = ["Belavanai", "Kalangina", "Muzhuval", "Nandri", "Oruvarum"];
sounds.forEach(function (sound) {
  var btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", function () {
    stopSongs();
    document.getElementById(sound).play();
  });
  document.getElementById("button").appendChild(btn);
});

function stopSongs() {
  sounds.forEach(function (sound) {
    var song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}