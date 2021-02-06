const jokeId = document.getElementById("jk-id")
const but = document.getElementById("btn")

but.addEventListener("click", generateJoke)
generateJoke()
    // function generateJoke() {
    //     fetch("https://icanhazdadjoke.com/", {
    //             headers: {
    //                 "Accept": 'application/json'
    //             }
    //         })
    //         .then(data => {
    //             return data.json()
    //         })
    //         .then(main => {
    //             jokeId.innerHTML = main.joke
    //         })
    // }
async function generateJoke() { /*when await is used inside a func, then we need to label the func as async*/
    const res = await fetch("https://icanhazdadjoke.com/", { /*since fetch is a async, so we need to await since it fetches*/
        headers: {
            "Accept": 'application/json'
        }
    })
    const data = await res.json()
    jokeId.innerHTML = data.joke
}