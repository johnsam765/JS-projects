const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox, false);
checkBox()

function checkBox() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        /*above method retuns the info abot the size of element andposition related to the viewport*/
        console.log(triggerBottom, boxTop, window.innerHeight)
        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}