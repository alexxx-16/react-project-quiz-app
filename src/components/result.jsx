export default function Result({ userAnswers, questionBank, restartQuiz }) {
  function getScore() {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        score++;
      }
    });
    return score;
  }

  const userScore = getScore();

  return (
    <div>
      <h2>Quiz completed!</h2>
      <p className="score">
        Your score is {userScore}/{questionBank.length}
        {userScore === 4 ? '! Awesome!' : '. Try again?'}
      </p>
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}
