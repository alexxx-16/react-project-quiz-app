import { useState } from 'react';
import Result from './result';

export default function Quiz() {
  const questionBank = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      question: 'Who wrote "Harry Potter"?',
      options: [
        'J.K. Rowling',
        'Stephen King',
        'George Orwell',
        'Ernest Hemingway',
      ],
      answer: 'J.K. Rowling',
    },
    {
      question: 'What does JSX stand for?',
      options: [
        'JavaScript XML',
        'Java Syntax eXtension',
        'JavaScript eXtended',
        'Java Source eXtension',
      ],
      answer: 'JavaScript XML',
    },
  ];
  const initialAnswers = new Array(questionBank.length).fill(null);
  //instead of typing [null,null,null,null]

  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0); // index or current question
  const selectedAnswer = userAnswers[currentQuestion]; // user selection on the question
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  function handleSelect(option) {
    const updatedAnswers = [...userAnswers]; // dont mutate state directly
    updatedAnswers[currentQuestion] = option; // ["user's answer", null, null, null]

    setUserAnswers(updatedAnswers);
  }

  function previousQuestion() {
    currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1);
  }

  function nextQuestion() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function restartQuiz() {
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    return (
      <Result
        userAnswers={userAnswers}
        questionBank={questionBank}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map(
        (
          option //create a button for each question's options
        ) => (
          <button
            key={option}
            className={
              'option ' + (selectedAnswer === option ? 'selected' : '')
              // add a space after "option" so it shows as className = "option selected"
            }
            onClick={() => handleSelect(option)}
            // ()=> anonymous function to make sure it runs only when clicked
          >
            {option}
          </button>
        )
      )}
      <div className="nav-buttons">
        <button onClick={previousQuestion} disabled={currentQuestion === 0}>
          Previous Question
        </button>
        <button onClick={nextQuestion} disabled={!selectedAnswer}>
          {currentQuestion === questionBank.length - 1
            ? 'Finish Quiz'
            : 'Next Question'}
        </button>
      </div>
    </div>
  );
}
