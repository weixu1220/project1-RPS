class Rounds {
    constructor(){
        this.rock = false;
        this.paper = false;
        this.scissors = false;
    }
    
}

class Player{
    constructor(name,rounds,playerTurn){
        this.name = name;
        this.rounds = rounds;
        this.playerTurn = playerTurn;
        this.score = 0;
        this.play = []
    }
    endRound(){
        if (this.playerTurn === true){
            this.playerTurn = false
        }else{
            this.playerTurn = true
        }
    }
}
// prompt and display player names
let name1;
let name2;
const getPlayersName = () =>{
    // player1 name
    name1 = prompt("Player 1, what is your name?");
    while (name1 === "" ||name1 ==="Player1's name"){
        name1 = prompt("Player 1, what is your name?");
    }
    document.getElementById("p1name").innerHTML = name1.toUpperCase();
    //player2 name
    name2 = prompt("Player 2, what is your name?");
    while (name2 === ""||name2 ==="Player2's name"){
        name2 = prompt("Player 2, what is your name?");
    }
    document.getElementById("p2name").innerHTML = name2.toUpperCase();
}

//display game modes
document.getElementById("mode").onclick = function(){
    if (document.getElementById("subMode").style.visibility === "hidden"){
        document.getElementById("subMode").style.visibility = "visible"
    }else{
        document.getElementById("subMode").style.visibility = "hidden";
    }
}
//set game mode
let gameMode = 0;
document.getElementById("one").onclick = function(){
    gameMode = 1;
    document.getElementById("subMode").style.visibility = "hidden";
    round()
}
document.getElementById("three").onclick = function(){
    gameMode = 3;
    document.getElementById("subMode").style.visibility = "hidden";
    round()
}
document.getElementById("five").onclick = function(){
    gameMode = 5;
    document.getElementById("subMode").style.visibility = "hidden";
    round()
}

// remove loading page
document.getElementById("enter").onclick = function(){
    document.getElementById("start").style.zIndex = 0;
    getPlayersName();
    alert("Please choose a game mode!");
    
}

//create game
let player1;
let player2;
createGame = ()=>{
player1 = new Player(name1,gameMode,true)
console.log(player1)
player2 = new Player(name2,gameMode,false)
console.log(player2)
}
createGame()
const round = () =>{
    if(player1.playerTurn === true){
        console.log("checkpoint 1")
        document.getElementById("p1").style.zIndex=2;
        document.getElementById("p2").style.zIndex=0;
    }else{
        console.log("checkpoint 1")
        document.getElementById("p2").style.zIndex=2;
        document.getElementById("p1").style.zIndex=0;
    }
}


document.getElementById("endRound").onclick = function() {
    if (gameMode === 0){
        alert("Please choose a game mode!");
    }else{
    player1.endRound()
    player2.endRound()  
    console.log("end round is pushed ")  
    if(player1.playerTurn === true){
        console.log(`It is now ${player1.name}'s turn!`)
    }else{
        console.log(`It is now ${player2.name}'s turn!`)
    }
    
    }}; 
     
//reset button
document.getElementById("reset").onclick = function() {
    document.getElementById("p1name").innerHTML = "Player1's name";
    document.getElementById("p2name").innerHTML = "Player2's name";
    document.getElementById("p1score").innerHTML = "Player1's score";
    document.getElementById("p2score").innerHTML = "Player2's score";      
    getPlayersName();
    createGame();
    gameMode = 0;   
    console.log("reset is pushed.")  
    }; 

document.getElementById("surrender").onclick = function() {  
    console.log("surrender is pushed ")  
    }; 
document.getElementById("switchBG").onclick = function() {  
    console.log("switchBG is pushed ")  
    }; 
document.getElementById("p1R").onclick = function() { 
    if (gameMode === 0){
        alert("Please choose a game mode!");
    } else{
        player1.play.push("rock")
    console.log("player one played Rock ")  
    }
    
    };  
document.getElementById("p2R").onclick = function() {  
    if (gameMode === 0){
        alert("Please choose a game mode!");
    } else{
        player1.play.push("rock")
        console.log("player two played Rock ")  
}}; 
document.getElementById("p1P").onclick = function() {  
    if (gameMode === 0){
        alert("Please choose a game mode!");
    } else{
    player1.play.push("paper")
    console.log("player one played Paper ")  
}};  
document.getElementById("p2P").onclick = function() { 
    if (gameMode === 0){
        alert("Please choose a game mode!");
    } else{ 
        player1.play.push("paper")
        console.log("player two played Paper ")  
}}; 
document.getElementById("p1S").onclick = function() {
    if (gameMode === 0){
        alert("Please choose a game mode!");
    } else{  
    player1.play.push("scissors")
    console.log("player one played Scissors ")  
}};  
document.getElementById("p2S").onclick = function() {  
    if (gameMode === 0){
        alert("Please choose a game mode!");
    } else{
        player1.play.push("scissors")
        console.log("player two played Scissors ")  
}}; 

console.log("gamemode",gameMode === 0)