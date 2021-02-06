"use strict";

var jokeId = document.getElementById("jk-id");
var but = document.getElementById("btn");
but.addEventListener("click", generateJoke);
generateJoke(); // function generateJoke() {
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

function generateJoke() {
  var res, data;
  return regeneratorRuntime.async(function generateJoke$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://icanhazdadjoke.com/", {
            /*since fetch is a async, so we need to await since it fetches*/
            headers: {
              "Accept": 'application/json'
            }
          }));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          data = _context.sent;
          jokeId.innerHTML = data.joke;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}