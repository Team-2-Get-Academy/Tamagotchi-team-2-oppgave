setInterval(reduceHealth, 3000)

function reduceHealth(){
  if (hunger <= 0 || cleanLevel <= 0 || boredom <= 0) {
    health -= 10;
  }
  if (health < 0) {
    health = 0;
  }
  
  updateImg();
}

function updateImg() {
    if (health <= 0) {
        tamagotchiImg.src = "../images/dead/lavachicken.jpg"
    }
    else if (health < 50) {
      tamagotchiImg.src = "../images/evolve/animal.png"  
    }
    else {
        tamagotchiImg.src = "../images/evolve/diamond.png"
    }
}