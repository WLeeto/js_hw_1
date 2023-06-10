const current_time = document.getElementById("timer")
let remainingTime = Number(current_time.textContent)

current_time.textContent = "00:00:05"

let intervalId = setInterval(() => {
    remainingTime--

    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    current_time.textContent = formattedTime

    if (remainingTime <= 0) {
        // alert("Ура! Таймер закончился!")
        clearInterval(intervalId)
        window.location.href = "https://disk.yandex.ru/i/atGaa_JbL-eVPA"
    }

}, 1000)