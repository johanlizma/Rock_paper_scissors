function getComputerChoice(){
    let results=["rock","paper","scissors"];
    let op=Math.floor(Math.random()*3);
    return results[op];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase()==="paper" && computerSelection.toLowerCase()==="rock")
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
    else if(playerSelection.toLowerCase()==="scissors" && computerSelection.toLowerCase()==="paper")
     return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
    else if(playerSelection.toLowerCase()==="rock" && computerSelection.toLowerCase()==="scissors")
     return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
    else if(playerSelection.toLowerCase()===computerSelection.toLowerCase())
     return `It's a tie!`;
    else
        return `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
}
function game(){
    for(let i=0;i<5;i++){  
        const playerSelection = prompt("What is your choice?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}