
function computerPlay(min = 1,max = 3) {

    min = Math.ceil(min);
    max = Math.floor(max);
    randNum = Math.floor (Math.random() * (max - min + 1) + min);

    switch(randNum) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
        default:
            return 'Something stupid happened!';
    }
}

function playRound (computerSelect, playerSelect) {

    if (computerSelect === 'Rock' && playerSelect.toLowerCase() == 'rock') {
        return 'Draw! You both drew Rock... Try again!';
    } else if (computerSelect === 'Paper' && playerSelect.toLowerCase() == 'paper') {
        return 'Draw! You both drew Paper... Try again!';
    }else if (computerSelect === 'Scissors' && playerSelect.toLowerCase() == 'scissors') {
        return 'Draw! You both drew Scissors... Try again!';
    
    }else if (computerSelect === 'Rock' && playerSelect.toLowerCase() == 'paper') {
        return 'You win! Paper beats Rock';
    }else if (computerSelect === 'Rock' && playerSelect.toLowerCase() == 'scissors') {
        return 'You lose! Rock beats Scissors';

    }else if (computerSelect === 'Paper' && playerSelect.toLowerCase() == 'rock') {
        return 'You lose! Paper beats Rock';
    }else if (computerSelect === 'Paper' && playerSelect.toLowerCase() == 'scissors') {
        return 'You win! Scissors beats Paper';

    }else if (computerSelect === 'Scissors' && playerSelect.toLowerCase() == 'rock') {
        return 'You win! Rock beats Scissors';
    }else if (computerSelect === 'Scissors' && playerSelect.toLowerCase() == 'paper') {
        return 'You lose! Scissors beats Paper';

    }else {
        return 'Try retyping your choice';
    }
}

function game() {

    let roundCount = 1;
    let computerScore = 0;
    let playerScore = 0;

    while (roundCount < 6) {
        let usrInput = prompt('Round ' + roundCount + ':' + '   Player - ' + playerScore + '   Pc - ' + computerScore)
        let result = playRound(computerPlay(), usrInput);
        roundCount++;
        alert(result);
        let winLose = result.substr(4,4); 

        if (winLose === 'win!') {
            playerScore++;
        }else if (winLose === 'lose') {
            computerScore++;
        }
        console.log('player - ' + playerScore);
        console.log('computer - ' + computerScore);
        console.log(winLose);
    }
    
if (playerScore > computerScore) {
    alert('You won the game!')
 } else if (computerScore > playerScore) {
      alert('You lost...')
}else {
 alert('It\'s a draw!')
}

}

game();
