let counter = 0
let loss_counter = 0
let dead_moles = document.getElementById("dead")
let lost_moles = document.getElementById("lost")

function restart() {
  dead_moles.textContent = 0
  counter = 0

  lost_moles.textContent = 0
  loss_counter = 0
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('hole_has-mole')) {
    counter++
    dead_moles.textContent = counter
    if (counter == 10) {
        restart()
        alert("Вы убили 10 кротов. Я бы не назвал это победой, но вы это сделали")
    }
  } else {
    loss_counter++
    lost_moles.textContent = loss_counter
    if (loss_counter == 3) {
        restart()
        alert("Вы промахнулись 3 раза и проиграли")
    }
  } 
})


