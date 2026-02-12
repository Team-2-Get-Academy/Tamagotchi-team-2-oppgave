const page = document.getElementById("mainView")
let currentpage = "mainGameView";

updateMainView();
updateImg();
function updateMainView(){
    let html = "";

    if(currentpage == "mainGameView") html = drawMainView();
    
    page.innerHTML = html;
    updateImg();

}

function changepage(element){
    currentpage = element;
    updateMainView();

}

function drawMainView(){
return /*html*/`
    <div id="container">
        <div id="top-sec">
            <div id="cleanHUD">Clean:${cleanLevel}
            <button onclick="cleanUp(25)">Clean</button> 
            <progress id="cleanBar" value="${cleanLevel}" max="${maxClean}"></progress>
            </div>
            <div id="hungerHUD">Hunger:${hunger}
            <button onclick="feed(25)">Feed</button> 
            <progress id="hungerBar" value="${hunger}" max="${maxHunger}"></progress>
            </div>
        </div>

        <div id="gameplay">
            <p id="yousuck"></p>
            <img id="tamagotchiImg" src="">
        </div>

        <div id="bottom-sec">
            <div id="boredomHUD">Boredom:${boredom}
            <button onclick="play(25)">Play</button> 
            <progress id="boredomBar" value="${boredom}" max="${maxBoredom}"></progress>
            </div>

            <div id="healthHUD">HP:${health}
            
            <progress id="healthBar" value="${health}" max="${maxHealth}"></progress>
            </div>
        </div>
    </div>

  

    


    `;
}

