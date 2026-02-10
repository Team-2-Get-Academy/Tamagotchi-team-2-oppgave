

updateCleanView();
setInterval(reduceCleanliness,  500);
function reduceCleanliness(){
    cleanLevel -= 5;
    console.log(cleanLevel);
    updateCleanView();

    
}

function cleanUp(){
    cleanLevel += 25;
    newCleanLevel = cleanLevel
    cleanLevel = Math.min(cleanLevel + newCleanLevel, maxClean);
    console.log(cleanLevel)
    updateCleanView();
    
}

function updateCleanView(){
    cleanliness.innerHTML = /*html*/ `
    <button onclick="cleanUp()">
    Clean <progress id="clean" value="${cleanLevel}" max="${maxClean}"></progress>
    </button>`
}


/*function addPoop(){
    if (cleanLevel <= 75){
        var poop = document.createElement("poop");
        poop.setAttribute("src", "poop.png")
        poop.setAttribute("height", "25");
        poop.setAttribute("width", "25");
        cleanliness.append(poop);
    }
}*/


