function rollDice(){
    const result=document.getElementById("result");
    const roll=Math.floor(Math.random()*6)+1;
    const diceFaces=["⚀"," ⚁","⚂","⚃","⚄","⚅"];
    result.innerHTML=diceFaces[roll-1];
   
}