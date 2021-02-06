const ldTxt = document.querySelector(".text-load");
const bgImg = document.querySelector(".bgimg");

let load = 0;
let int = setInterval(blur, 30);
function blur() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  ldTxt.innerText = `${load}%`;
  ldTxt.style.opacity = scale(load, 0, 100, 1, 0);
  bgImg.style.filter = `blur(${scale(load, 0, 80, 30, 0)}px)`;
}
/*   https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers*/
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
