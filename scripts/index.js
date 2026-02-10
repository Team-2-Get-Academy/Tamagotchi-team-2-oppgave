setInterval(reduceBoredom, 5000)
function reduceBoredom(){
    BoredomLevel -= 5;
    console.log(boredomLevel)
}

function feed(newBoredom){
    boredom = Math.min(boredom + newBoredom, maxBoredom);
}


function updateBoredomView(){
    boredomHud.innerHTML = /*HTML*/ `
    <button id="feedButton" onclick="play(25)"></button> 
    <progress id="BoredomBar" value="${boredom}" max="${maxBoredom}"></progress> 
    `;}