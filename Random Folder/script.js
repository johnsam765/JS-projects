const tags = document.querySelector(".tags")
const input = document.querySelector("#in")
input.focus()
input.addEventListener("keyup", (e) => {
    createTags(e.target.value)
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ""
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const data = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())
    tags.innerHTML = ""
    data.forEach(i => {
        const tagEl = document.createElement('span')
        tagEl.classList.add("tag")
        tagEl.innerText = i;
        tags.appendChild(tagEl);
    })
}

function randomSelect() {
    const times = 30; /*no.of times it highlights each one*/
    const interval = setInterval(() => {
        const randomTag = pickRandom()
        highlightTag(randomTag)
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandom()
            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandom() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add("focus")
}

function unhighlightTag(tag) {
    tag.classList.remove("focus")
}