const spaceship = document.getElementById("spaceship")
const barier = document.getElementById("barier")
const button = document.querySelector(".start")

let isstartnewgame = false 
let interval

const activeEngine = () => {
    if (isstartnewgame) {
        if (!spaceship.classList.contains("active")) {
            spaceship.classList.add("active")
        }

        setTimeout (() => {
            spaceship.classList.remove("active")
        }, 300) 
    }
}

const startNewGame = () => {
    isstartnewgame = true
    barier.classList.add("animate")

    interval = setInterval(() => {
        let spaceshipTop = parseInt(window.getComputedStyle(spaceship).getPropertyValue("top"))
        let barierLeft = parseInt(window.getComputedStyle(barier).getPropertyValue("left"))

        if (barierLeft < 50 && barierLeft > 0 && spaceshipTop >= 150) {
            gameOver()
        }
    }, 10)
}
 
const gameOver = () => {
    isstartnewgame = false
    clearInterval(interval)
    barier.classList.remove("animate")
    alert("GAME OVER!")
}

document.addEventListener("keydown", activeEngine)

button.addEventListener("click", ()  => {
    startNewGame()
})

