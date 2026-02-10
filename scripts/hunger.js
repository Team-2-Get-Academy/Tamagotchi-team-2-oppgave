


setInterval(reduceHunger, 5000)
function reduceHunger(){
    hungerLevel -= 5;
    console.log(hungerLevel)
    /* updateHungerView() */
}

function feed(newHunger){
    hunger = Math.min(hunger + newHunger, maxHunger);
    /*  updateHungerView() */
}


/* function updateHungerView(){
    return /*HTML*/ /*`
    <button id="feedButton" onclick="feed(25)"></button> 
    <progress id="hungerBar" value="${hunger}" max="${maxHunger}"></progress> 
    `; 
}
    /* hungerHud.innerHTML = */



function test1(){
    return /*HTML*/ `
    <button id="feedButton" onclick="feed(25)"></button> 
    <progress id="hungerBar" value="${hunger}" max="${maxHunger}"></progress> 
    `;
}