let score =  JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loose: 0,
    ties: 0};

    updateScore();

    

 /* if (!score) {
    score = {
    wins: 0,
    loose: 0,
    ties: 0
  };
  } */

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'tie';
    } else if (computerMove === 'Paper') {
      result = 'You loose';
    }else {
      result = 'You win';
    }
  }

  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win';
    } else if (computerMove === 'Paper') {
      result = 'tie';
    }else {
      result = 'You loose';
    } 
  }

  else if(playerMove === 'Scessiors') {
    if (computerMove === 'Rock') {
      result = 'You loose';
    } else if (computerMove === 'Paper') {
      result = 'You win';
    }else {
      result = 'tie';
    }
  }

  document.querySelector('.result-part').classList.remove('green-text');
  document.querySelector('.result-part').classList.remove('red-text');
  if (result === 'You win') {
    score.wins += 1;
    document.querySelector('.result-part').classList.add('green-text');

  }else if (result === 'You loose') {
    score.loose+= 1;
    document.querySelector('.result-part').classList.add('red-text');
  }else {
    score.ties += 1;
  }
  
  localStorage.setItem('score',JSON.stringify(score));

  updateScore();
  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-move')
  .innerHTML = `You <img class="move" src="img/${playerMove}-emoji.png" alt="">  <img class="move" src="img/${computerMove}-emoji.png" alt=""> Computer`;

  }

  function updateScore() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Looses: ${score.loose}, ties: ${score.ties}`;

  }

  function pickComputerMove() {
      const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber>=0 && randomNumber<1/3) {
      computerMove = 'Rock';
    } else if(randomNumber>=1/3 && randomNumber<2/3) {
      computerMove = 'Paper';
    }else{
      computerMove = 'Scessiors'
    }

    return computerMove;
  }

  