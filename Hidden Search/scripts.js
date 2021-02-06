const btn = document.querySelector(".btn");
const inp = document.querySelector(".find");
const search = document.querySelector(".search");

btn.addEventListener(
  "click",
  () => {
    search.classList.toggle("active");
    inp.focus();
  },
  false
);
