const r='rock';
const p='paper';
const s='scissors';
const draw='draw';
let comp=0;
let player=0;


  function computerPlay() {

    let number=Math.floor(Math.random()*3+1);
    switch (number) {
      case 1: return r;
      break;
      case 2: return p;
      break;
      default: return s;}
  }
    
  function playRound(playerSelection,computerSelection) {
     if (playerSelection===computerSelection) {return player+':'+comp}
      else if (playerSelection===r){
          if (computerSelection===p)  ++comp
                             else  ++player}        
      else if (playerSelection===p){
          if (computerSelection===r)  ++player
          else 
             comp++ } 
      else if (computerSelection===r) comp++ 
            else { player++};
      return player+':'+comp;      
  }
  function count(x,y) {
          if (x===y) return draw
            else if (x>y) {console.log('You won!')}
              else console.log('Comp won!')
  } 
    
 
  function game() {
   for ( let i=0; i<5; i++) {
      const playerSelection=(prompt('input value: Rock, Paper, Scissors','')).toLowerCase();
      const computerSelection=computerPlay();
      let score=playRound(playerSelection,computerSelection);
      console.log('you='+playerSelection,'comp='+computerSelection,'score:'+ score);
      if (i===2) {
       count(score.charAt(0),score.charAt(2)) 
     }
   }
  }
  
   game();
