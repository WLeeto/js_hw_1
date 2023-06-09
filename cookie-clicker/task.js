let current_clicks = document.getElementById('clicker__counter')
let total_clicks = Number(current_clicks.textContent)
const img = document.getElementById('cookie')
let isClicked = false

img.onclick = () => {
    if (isClicked) {
        img.style.transform = 'scale(1)'
        isClicked = false
    } else {
        img.style.transform = 'scale(1.2)'
        img.style.transformOrigin = 'top left'
        isClicked = true
    }
    total_clicks++
    current_clicks.textContent = total_clicks
}

let current_speed = document.getElementById('speed__counter')
let startTime = Date.now()

setInterval(() => {
    let currentTime = Date.now()
    let elapsedTime = (currentTime - startTime) / 1000 // Прошедшее время в секундах
    let clicksPerMinute = (total_clicks / elapsedTime).toFixed(2) // Количество кликов в минуту

    current_speed.textContent = clicksPerMinute.toString()
})