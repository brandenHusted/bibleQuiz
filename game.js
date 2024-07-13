document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["Josiah Magley", "Justin Lilley", "Kristin VanBeveren", "Bob Husted"],
        correct: "Bob Husted",
        reason: "There is no Bob Husted as of 2024 at Outreach Christian Church."
      },
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["Robin Husted", "Fred Lab", "Michael Beethoven", "Rebecca Haller Leiter"],
        correct: "Michael Beethoven",
        reason: "Michael VanBeveren goes to Outreach Christian Church not Michael Beethoven. Rebecca Haller Leiter is a new member to Outreach. Fred Lab is the pastor of Outreach and Robin Husted is a regular member of Outreach."
      },
      {
        question: "Who is the pastor at Outreach Christian Church?",
        answers: ["Justin Lilley", "Fred Lab", "Kelly Maatman", "Branden Husted"],
        correct: "Fred Lab",
        reason: "Justin Lilley is the youth pastor, Kelly Maatman is the Administrative Assistant. Fred Lab is the pastor! Branden Husted is me the developer of this game and a member of Outreach."
      },
      {
        question: "What time is youth group at Outreach?",
        answers: ["Thursday 5-8pm", "Sunday 5-7pm", "Tuesday 6-7pm", "Sunday 9-10am"],
        correct: "Sunday 5-7pm",
        reason: "On Outreach's website OCC Youth is at Sunday 5-7pm at the church building."
      },
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["AL Husted", "Johnerica Daniels", "Emily Lawhead", "Austin Pratt"],
        correct: "Austin Pratt",
        reason: "Austin Pratt is not a regular member of Outreach. Everyone else is a regular member."
      },
      // More questions can be added here
    ];
  
    let currentQuestionIndex = 0;
    let shuffledQuestions = shuffleArray([...quizData]);
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const nextButton = document.getElementById('next-button');
    const explanationButton = document.getElementById('explanation-button');
    const explanationText = document.getElementById('explanation-text');
  
    // Hide buttons initially
    nextButton.style.visibility = "hidden";
    explanationButton.style.visibility = "hidden";
  
    // Function to shuffle array elements
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    // Function to load a question and its answers
    function loadQuestion(questionIndex) {
      const currentQuestion = shuffledQuestions[questionIndex];
      questionText.textContent = currentQuestion.question;
      answersContainer.innerHTML = '';
      explanationText.style.display = 'none';
  
      let shuffledAnswers = shuffleArray([...currentQuestion.answers]);
      shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => {
          checkAnswer(answer, currentQuestion.correct, currentQuestion.reason);
        });
        answersContainer.appendChild(button);
      });
    }
  
    // Function to check the selected answer
    function checkAnswer(selectedAnswer, correctAnswer, reason) {
      if (selectedAnswer === correctAnswer) {
        alert('Correct!');
      } else {
        alert('Incorrect. The correct answer is: ' + correctAnswer);
      }
      explanationButton.style.visibility = 'visible'; // Show the "Show Explanation" button
      explanationButton.onclick = () => showExplanation(reason); // Set the explanation text
      nextButton.style.visibility = 'visible'; // Show the "Next" button
    }
  
    // Function to show the explanation
    function showExplanation(reason) {
      explanationText.textContent = reason;
      explanationText.style.display = 'block';
    }
  
    // Event listener for the "Next" button
    nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion(currentQuestionIndex);
        nextButton.style.visibility = 'hidden'; // Hide the "Next" button until an answer is selected
        explanationButton.style.visibility = 'hidden'; // Hide the "Show Explanation" button
      } else {
        alert('You have completed the quiz!');
        nextButton.style.visibility = 'hidden'; // Hide the "Next" button at the end of the quiz
        window.location.href = 'complete.html';
      }
    });
  
    // Load the first question
    loadQuestion(currentQuestionIndex);
  });
  
  