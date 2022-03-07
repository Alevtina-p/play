const r='rock';
const p='paper';
const s='scissors';
function computerPlay() {

    let number=Math.floor(Math.random()*3+1);
    switch (number) {
      case 1: return r;
      break;
      case 2: return p;
      break;
      default: return s;}
}
//console.log(computerPlay());
const playerSelection=(prompt('input value: Rock, Paper, Scissors','')).toLowerCase();
const computerSelection=computerPlay();
function playRound(playerSelection,computerSelection){
   const comp='you lost';
   const player='comp lost'; 
   const draw='draw';
     if (playerSelection===computerSelection) { return draw}
     else if (playerSelection===r){
          if (computerSelection===p) {return comp}
           else return player;}        
     else if (playerSelection===p){
          if (computerSelection===r) {return player}
          else comp } 
          else if (computerSelection===r) {return comp}
            else return player  ;
}
