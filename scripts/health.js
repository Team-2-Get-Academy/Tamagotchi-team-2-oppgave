

setInterval(reduceHealth, 2500)

function reduceHealth(){
  if (hunger <= 0 || cleanLevel <= 0 || boredom <= 0) {
    health -= 20;
  }
  if (health < 0) {
    health = 0;
  }
}

setInterval(increaseHealth, 1000)
function increaseHealth(){
  if(hunger >= 50 && cleanLevel >= 50 && boredom >= 50) {
    health += 10;
    health = Math.min(health, maxHealth);
  }
} 

function updateImg() {
  const tamagotchiImg = document.getElementById("tamagotchiImg")
  if (health <= 0) {
    tamagotchiImg.src = "../images/dead/lavachicken.jpg"
    document.getElementById("top-sec").style.visibility = "hidden";
    document.getElementById("bottom-sec").style.visibility = "hidden";
    document.getElementById("yousuck").innerHTML += "YOU SUCK";
  }
  else if (health < 50) {
    tamagotchiImg.src = "../images/evolve/animal.png"  
  }
  else if (health >51){
    tamagotchiImg.src = "../images/evolve/diamond.png"
  }
}