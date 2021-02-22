const counter = document.querySelectorAll(".counter")
counter.forEach(data => {
    data.innerText = "0";
    const updateCount = () => {
        const target = Number(data.getAttribute("data"))
            //const target = +data.getAttribute("data")
        const c = Number(data.innerText)
        const inc = Number(target / 200)
        if (c < target) {
            data.innerText = `${Math.ceil(c + inc)}`
            setTimeout(updateCount, 1)
        } else {
            data.innerText = target
        }
    }
    updateCount()
})