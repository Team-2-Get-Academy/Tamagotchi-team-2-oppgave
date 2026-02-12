


setInterval(reduceCleanliness,  500);
function reduceCleanliness(){
    cleanLevel -= 5;
    cleanLevel = Math.max(cleanLevel, minClean);
    console.log(cleanLevel);
    updateMainView();
    
}

function cleanUp(newCleanLevel){
    cleanLevel = Math.min(cleanLevel + newCleanLevel, maxClean);
    
}





