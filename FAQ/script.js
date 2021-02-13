const but = document.querySelectorAll(".faq-toggle")
but.forEach(a => {
    a.addEventListener("click", () => {
        console.log(a.parentNode)
        a.parentNode.classList.toggle("active")
    })
})