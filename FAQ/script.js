const but = document.querySelectorAll(".faq-toggle")
but.forEach(a => {
    a.addEventListener("click", () => {
        a.parentNode.classList.toggle("active")
    })
})