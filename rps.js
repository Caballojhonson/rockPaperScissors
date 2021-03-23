
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

    if (computerSelect === 'Rock' && playerSelect == 'Rock') {
        return 'Draw! You both drew Rock... Try again!';
    } else if (computerSelect === 'Paper' && playerSelect == 'Paper') {
        return 'Draw! You both drew Paper... Try again!';
    }else if (computerSelect === 'Scissors' && playerSelect == 'Scissors') {
        return 'Draw! You both drew Scissors... Try again!';
    
    }else if (computerSelect === 'Rock' && playerSelect == 'Paper') {
        return 'You win! Paper beats Rock';
    }else if (computerSelect === 'Rock' && playerSelect == 'Scissors') {
        return 'You lose! Rock beats Scissors';

    }else if (computerSelect === 'Paper' && playerSelect == 'Rock') {
        return 'You lose! Paper beats Rock';
    }else if (computerSelect === 'Paper' && playerSelect == 'Scissors') {
        return 'You win! Scissors beats Paper';

    }else if (computerSelect === 'Scissors' && playerSelect == 'Rock') {
        return 'You win! Rock beats Scissors';
    }else if (computerSelect === 'Scissors' && playerSelect == 'Paper') {
        return 'You lose! Scissors beats Paper';
    }
}

