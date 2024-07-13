document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["Josiah Magley", "Justin Lilley", "Kristin VanBeveren", "Bob Husted"],
        correct: "Bob Husted"
      },
      {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
      },
      {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
      },
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["Josiah Magley", "Justin Lilley", "Kristin VanBeveren", "Bob Husted"],
        correct: "Bob Husted"
      },
      {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
      },
      {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
      },
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["Josiah Magley", "Justin Lilley", "Kristin VanBeveren", "Bob Husted"],
        correct: "Bob Husted"
      },
      {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
      },
      {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
      },
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["Josiah Magley", "Justin Lilley", "Kristin VanBeveren", "Bob Husted"],
        correct: "Bob Husted"
      },
      {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
      },
      {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
      }
    ];
  
    let currentQuestionIndex = 0;
    let shuffledQuestions = shuffleArray([...quizData]);
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const nextButton = document.getElementById('next-button');
  
    // Hide the next button initially
    nextButton.style.visibility = "hidden";
  
    // Function to shuffle array elements
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // array swapping
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    // Function to load a question and its answers
    function loadQuestion(questionIndex) {
      const currentQuestion = shuffledQuestions[questionIndex];
      questionText.textContent = currentQuestion.question;
      answersContainer.innerHTML = '';
  
      let shuffledAnswers = shuffleArray([...currentQuestion.answers]);
      shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => {
          checkAnswer(answer, currentQuestion.correct);
        });
        answersContainer.appendChild(button);
      });
    }
  
    // Function to check the selected answer
    function checkAnswer(selectedAnswer, correctAnswer) {
      if (selectedAnswer === correctAnswer) {
        alert('Correct!');
      } else {
        alert('Incorrect. The correct answer is: ' + correctAnswer);
      }
      nextButton.style.visibility = 'visible'; // Show the "Next" button
    }
  
    // Event listener for the "Next" button
    nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex <= 9) {
        loadQuestion(currentQuestionIndex);
        nextButton.style.visibility = 'hidden'; // Hide the "Next" button until an answer is selected
      } else {
        alert('You have completed the quiz!');
        nextButton.style.visibility = 'hidden'; // Hide the "Next" button at the end of the quiz
        window.location.href = 'complete.html';
      }
    });
  
    // Load the first question
    loadQuestion(currentQuestionIndex);
  });
  