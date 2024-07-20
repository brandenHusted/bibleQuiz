document.addEventListener('DOMContentLoaded', () => {
  // using AI to change difficulty if questions are right or wrong during quiz
  const quizData = {
    easy: [
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["Josiah Magley", "Justin Lilley", "Kristin VanBeveren", "Bob Husted"],
        correct: "Bob Husted",
        reason: "There is no Bob Husted as of 2024 at Outreach Christian Church."
      },
      {
        question: "What time is youth group at Outreach?",
        answers: ["Thursday 5-8pm", "Sunday 5-7pm", "Tuesday 6-7pm", "Sunday 9-10am"],
        correct: "Sunday 5-7pm",
        reason: "On Outreach's website OCC Youth is at Sunday 5-7pm at the church building."
      },
      {
        question: "What are ways you can volunteer at Outreach?",
        answers: ["Adopt-A-Highway Cleanup", "Give a gift to a child in need for Christmas", "Hold the door for incoming Guests before Church", "All these activities and more"],
        correct: "All these activities and more",
        reason: "All of these activities are ways you can volunteer your time to Outreach. To learn more go to: https://www.outreachcc.com/",
      },
    ],
    medium: [
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["Robin Husted", "Fred Lab", "Michael Beethoven", "Rebecca Haller Leiter"],
        correct: "Michael Beethoven",
        reason: "Michael VanBeveren goes to Outreach Christian Church not Michael Beethoven. Rebecca Haller Leiter is a new member to Outreach. Fred Lab is the pastor of Outreach and Robin Husted is a regular member of Outreach."
      },
      {
        question: "Which person is not a member of Outreach as of July 2024?",
        answers: ["AL Husted", "Johnerica Daniels", "Emily Lawhead", "Austin Pratt"],
        correct: "Austin Pratt",
        reason: "Austin Pratt is not a regular member of Outreach. Everyone else is a regular member."
      },
      {
        question: "What do we believe at Outreach Christian Church?",
        answers: ["We believe salvation comes by Grace through the blood of Christ", "We believe you can be saved by following and obeying the laws of the Gospel", "There is only one God, Muhammad", "Truxton Daniels is our savior"],
        correct: "We believe salvation comes by Grace through the blood of Christ",
        reason: "We believe salvation comes by Grace through the blood of Christ is the central theme of Christianity and our church is built on what the Bible says.",
      },
      {
        question: "Do all Life groups meet weekly during the summer months?",
        answers: ["Yes", "No"],
        correct: "No",
        reason: "Please be aware that some groups do not meet weekly during the summer months, so be sure to ask the group leaders about their group's summer schedule before attending.",
      },
    ],
    hard: [
      {
        question: "Who is the pastor at Outreach Christian Church?",
        answers: ["Justin Lilley", "Fred Lab", "Kelly Maatman", "Branden Husted"],
        correct: "Fred Lab",
        reason: "Justin Lilley is the youth pastor, Kelly Maatman is the Administrative Assistant. Fred Lab is the pastor! Branden Husted is me the developer of this game and a member of Outreach."
      },
      {
        question: "What fundraiser did OCC have for their mission trip in 2016?",
        answers: ["Pie Sale Fundraiser", "5K Run Fundraiser", "Social Media Fundraiser", "Car Wash Fundraiser"],
        correct: "Pie Sale Fundraiser",
        reason: "In 2016 April 23rd OCC (Outreach Christian Church) had a Pie Sale Fundraiser. We made over 900 pies in under 3 hours!"
      },
      {
        question: "Who plays The Little Drummer Boy on every Christmas Eve at Outreach?",
        answers: ["Rick Fox", "Justin Lilley", "Justin Littlefield", "Truxton Daniels"],
        correct: "Rick Fox",
        reason: "Rick Fox plays The Little Drummer Boy every Christmas on a drum and it is amazing! Come to Outreach's Christmas Eve Service and see it for yourself!",
      },
      {
        question: "What time does Worship Service start at Outreach?",
        answers: ["9:30am", "10:30am", "8:30am", "6:69am"],
        correct: "10:30am",
        reason: "Worship service starts at 10:30 and Sunday school starts at 9:30.",
      },
    ],
  };

  let currentQuestionIndex = 0;
  let difficulty = 'easy'; // Initial difficulty level
  let questionsAnswered = 0;
  const questionText = document.getElementById('question-text');
  const answersContainer = document.getElementById('answers-container');
  const nextButton = document.getElementById('next-button');
  const scoreContainer = document.getElementById('score-container');
  const scorePercentage = document.getElementById('score-percentage');
  const explanationButton = document.getElementById('explanation-button');
  const progressBar = document.getElementById('progress-bar');
  let points = 0;
  // shuffles questions based on difficulty
  let questionsPool = shuffleArray(quizData[difficulty]);

  // Hide buttons initially
  nextButton.style.visibility = "hidden";
  explanationButton.style.visibility = "hidden";
  answersContainer.style.visibility = "visible";

  // Function to shuffle array elements
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to load a question and its answers
  function loadQuestion() {
    if (questionsPool.length === 0) {
      questionsPool = shuffleArray(quizData[difficulty]);
    }
    const currentQuestion = questionsPool.pop();
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';

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
      points++;
    }
    questionsAnswered++;
    adjustDifficulty();
    answersContainer.style.visibility = "hidden";
    explanationButton.onclick = () => showExplanation(reason);
    nextButton.style.visibility = 'visible'; // Show the "Next" button
    explanationButton.style.visibility = 'visible'; // Show the "Show Explanation" button
  }

  // Function to adjust the difficulty based on performance
  function adjustDifficulty() {
    const scorePercentage = (points / questionsAnswered) * 100;
    if (scorePercentage >= 80 && difficulty !== 'hard') {
      difficulty = difficulty === 'easy' ? 'medium' : 'hard';
      questionsPool = shuffleArray(quizData[difficulty]);
    } else if (scorePercentage < 50 && difficulty !== 'easy') {
      difficulty = difficulty === 'hard' ? 'medium' : 'easy';
      questionsPool = shuffleArray(quizData[difficulty]);
    }
  }

  // Function to calculate and display score
  function displayScore(points) {
    const scorePercentageValue = (points / 10) * 100;
    localStorage.setItem('scorePercentage', scorePercentageValue.toFixed(2));
    window.location.href = 'complete.html'; // Redirect to complete page
  }

  // Function to show the explanation
  function showExplanation(reason) {
    alert(reason);
  }

  // Function to update the progress bar
  function updateProgressBar(currentIndex) {
    const progressPercentage = ((currentIndex + 1) / 10) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${currentIndex + 1}/10`;
  }

  // Event listener for the "Next" button
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    answersContainer.style.visibility = "visible";
    if (currentQuestionIndex < 10) {
      loadQuestion(currentQuestionIndex);
      nextButton.style.visibility = 'hidden'; // Hide the "Next" button until an answer is selected
      explanationButton.style.visibility = 'hidden';
      updateProgressBar(currentQuestionIndex);
    } else {
      nextButton.style.visibility = 'hidden'; // Hide the "Next" button at the end of the quiz
      explanationButton.style.visibility = 'hidden';
      displayScore(points);
    }
  });

  // Load the first question
  loadQuestion();
  updateProgressBar(currentQuestionIndex);
});
