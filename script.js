
const cover = document.getElementById("start");
const enter = document.getElementById("enter");
const reset = document.getElementById("reset");
const nameInput = document.getElementById("name1");
const playerName = document.getElementById("p1name");
const playerScore = document.getElementById("p1score");
const computerScore = document.getElementById("p2score");
const gameText = document.getElementById("gameText");
const round = document.getElementById("round");
const switchBG = document.getElementById("switchBG")
const bg = ["../images/bg1.jpg","../images/bg2.jpg","../images/bg3.jpg","../images/bg4.jpg"];
let playerOutput;
let comOutput;
let name1;
enter.addEventListener("click",function(){
    cover.style.zIndex = 0;
    name1 = nameInput.value.toUpperCase();
    while (name1 === "" ||name1 ==="Player1's name"){
        name1 = prompt("Player 1, what is your name?").toUpperCase();
    }
    playerName.innerHTML = name1;
    playerScore.innerHTML = 0;
});

//reset
reset.onclick = function () {
    playerName.innerHTML = "Player1's name";
    name1 = prompt("Player 1, what is your name?").toUpperCase();
    while (name1 === "" ||name1 ==="Player1's name"){
        name1 = prompt("Player 1, what is your name?").toUpperCase();
    }
    playerName.innerHTML = name1;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    round.innerHTML = "";
    gameText.innerHTML = "";
    console.log("reset is pushed.")  
    }; 
//switch background
    switchBG.onclick = function() {
        let index = Math.floor(Math.random()* bg.length);
        document.getElementById("container").style.backgroundImage = `url(${bg[index]})`;
        console.log("switchBG is pushed ")  
        };
const computerTurn = () => {
    let outCome = Math.floor(Math.random() * 3);
    console.log(outCome)
    if(outCome === 0){
            comOutput = "Rock";
    }else if(outCome === 1){
            comOutput = "Paper";
    }else{
            comOutput = "Scissors";
    }
}
const winner = () =>{
    computerTurn();
    if (playerOutput === comOutput){
        round.innerHTML += `Computer played ${comOutput}!`
        gameText.innerHTML = "It's a tie!";
    }else if ((playerOutput === "Rock" && comOutput === "Scissors")|| (playerOutput === "Paper" && comOutput === "Rock")|| (playerOutput === "Scissors" && comOutput === "Paper")){
        round.innerHTML += `Computer played ${comOutput}!`
        gameText.innerHTML = `${name1} won this round!`;
        playerScore.innerHTML = Number(playerScore.innerHTML)+1;
    }else{
        round.innerHTML += `Computer played ${comOutput}!`
        gameText.innerHTML = `Computer won this round!`;
        computerScore.innerHTML = Number(computerScore.innerHTML)+1;
    }
}

// icons actions
document.getElementById("p1R").onclick = function() { 
    playerOutput = "Rock";
    round.innerHTML = `${name1} played Rock! `
    winner();
};   
document.getElementById("p1P").onclick = function() {  
    playerOutput = "Paper";
    round.innerHTML = `${name1} played Paper! `;
    winner();
};  
document.getElementById("p1S").onclick = function() {
    playerOutput = "Scissors";
    round.innerHTML = `${name1} played Scissors! `;
    winner();  
};  
