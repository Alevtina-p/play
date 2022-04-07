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
            else if (x>y) {return 'You are a winner !'}
              else {return 'Computer is a winner!'}
  } 
    const buttons=document.querySelectorAll('button');
    const container=document.querySelector('#container');
    buttons.forEach((button)=> {
      button.addEventListener('click',() => {
        if ((player<5)&&(comp<5)){
          const computerSelection=computerPlay();
          const playerSelection=button.textContent;
          const div=document.createElement('div');
          container.appendChild(div);
          const score=playRound(playerSelection,computerSelection);
          div.textContent=`you = ${playerSelection}  comp= ${computerSelection}     score: ${score}`;
          if (player===5||comp===5) {
            const winner=document.createElement('h2');
            container.appendChild(winner);
            winner.textContent=count(score.charAt(0),score.charAt(2)) ;
          
          }
          
        } 
      });
    });
