
//  function for getting computer choice 

function getComputerChoice (){
    const pick=["rock","paper", "scissor"];
    const arrayRandomNumber = Math.floor (Math.random()* pick.length) ;
    let computerChoice= pick[arrayRandomNumber]
    console.log(computerChoice);

    return computerChoice;
}


// Function  to get human choice

function getHumanChoice(){
   let  humanChoice = window.prompt("Select rock, paper or scissor");
   console.log(humanChoice)
   return  humanChoice.toLowerCase();
}

//  initial scores 
 let humanScore = 0;
 let computerScore =0;

//  function call of  two variables 
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
 
//   function for single round
function playRound(humanChoice,computerChoice){



    if (humanChoice===computerChoice){
        alert("Tie")
        return (`humanScore :${humanScore} ,computerScore : ${computerScore}`);
    }


    else if(humanSelection=="rock" && computerSelection == "scissor"){
        
        alert("human wins");

        alert(`your choice :  ${humanChoice} and computer choice  : ${computerChoice} `);

        humanScore += 1;
        console.log(humanScore);
        return humanScore;      
    } 
    else if(humanChoice=="scissor" && computerChoice == "rock"){

        alert("computer wins ");

        alert(`your choice:  ${humanChoice} and computer choice is : ${computerChoice} `)

        computerScore +=1;
        console.log(computerScore);
        return computerScore;

        }
    else if(humanChoice=="scissor" && computerChoice == "paper"){
            alert("human wins");

            alert(`your choice :  ${humanChoice} and computer choice  : ${computerChoice} `);
            
            humanScore += 1;
            console.log(humanScore);
            return humanScore;

        }
    else if(humanChoice=="paper" && computerChoice == "scissor"){
            alert("computer wins ");

            alert(`your choice:  ${humanChoice} and computer choice is : ${computerChoice} `);

            computerScore +=1;
            console.log(computerScore);
            return computerScore;
        
     }   
    else if(humanChoice=="paper" && computerChoice == "rock"){
        
            alert("human wins");
    
            alert(`your choice :  ${humanChoice} and computer choice  : ${computerChoice} `);
            humanScore += 1;
            console.log(humanScore);
            return humanScore;
            
        }  
    else if(humanChoice=="rock" && computerChoice == "paper"){

            alert("computer wins ");

            alert(`your choice:  ${humanChoice} and computer choice is : ${computerChoice} `);

            computerScore +=1;
            console.log(computerScore);
            return computerScore;
        
        }  
}


playRound(humanSelection, computerSelection);


//   function to play 5 rounds 
function playGame(){
  for (let round=0;round<=5;round++){
    
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    
    playRound(humanSelection,computerSelection);}


 console.log(` Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}
console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);

if (humanScore > computerScore) {
    alert("Human wins the game!");
} else if (computerScore > humanScore) {
    alert("Computer wins the game!");
} else {
    alert("The game is a tie!");
}


    
        
        
        
            
    


  
    
    



playGame()
