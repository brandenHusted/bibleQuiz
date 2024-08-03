document.addEventListener('DOMContentLoaded', () => {
  // using AI to change difficulty if questions are right or wrong during quiz
  const quizData = {
    easy: [
      {
        question: "How do you become a Christian?",
        answers: ["The Apostle's Creed", "The Lord's Prayer", "The ten Commandments", "Beleive Christ died for you"],
        correct: "Beleive Christ died for you",
        reason: "Christian Formula = Christ was killed for us, His death has washed away our sins, and by dying he has disabled death itself.",
        mode: "easy"
      },
      {
        question: "What is the last word in the Bible?",
        answers: ["Amen", "Jesus", "Israel", "name"],
        correct: "Amen",
        reason: "The last word in the bible is Amen.",
        mode: "easy"
      },
      {
        question: "What town was Jesus born in?",
        answers: ["Bethlehem", "Jerusalem", "Israel", "Nazareth"],
        correct: "Bethlehem",
        reason: "In Matthew 2:1-2 it states that Jesus was born in Bethlehem.",
        mode: "easy"
      },
      {
        question: "Romans 3:23 says that who has sinned?",
        answers: ["Everyone", "The Devil", "Israel", "Peter"],
        correct: "Everyone",
        reason: "Romans 3:23 saids that everyone has sinned and fell short of the glory of God.",
        mode: "easy"
      },
      {
        question: "Who did God tell to let my people go, that they may hold a festival unto me in the wilderness?",
        answers: ["Moses", "Jesus", "David", "Abraham"],
        correct: "Moses",
        reason: "In Exodus 5:1 God told Moses to let my people go, so that they may hold a festival unto me in the wilderness.",
        mode: "easy"
      },
      {
        question: "which books are the Gospels?",
        answers: ["Matthew, Mark, Luke, John", "Matthew, Mark, Luke, John, Peter", "Numbers", "All of them"],
        correct: "Matthew, Mark, Luke, John",
        reason: "The Gospels are the records we have of Jesus' life. Matthew, Mark, Luke, John wrote down the teachings of Jesus.",
        mode: "easy"
      },
      {
        question: "What word or phrase means giving somebody something good that he or she doesn't deserve?",
        answers: ["Grace", "Forgiveness", "Love", "Kindness"],
        correct: "Grace",
        reason: "Grace is giving something good that he or she doesn't deserve.",
        mode: "easy"
      },
      {
        question: "Who walked on water toward Jesus?",
        answers: ["Peter", "Matthew", "Andrew", "John"],
        correct: "Peter",
        reason: "Peter walked on water toward Jesus in Matthew 14:22-33.",
        mode: "easy"
      },
      {
        question: "Fill in the blank: Thy word is a ____ unto my feet, and a light unto my path.",
        answers: ["Lamp", "light", "Beacon", "Guide"],
        correct: "Lamp",
        reason: "Thy word is a lamp unto my feet is in Psalm 119:105 in King James Version of the Bible.",
        mode: "easy"
      },
      {
        question: "How many sons did Jacob have?",
        answers: ["3", "12", "6", "1","None"],
        correct: "12",
        reason: "Jacob had 12 sons in Genesis 49.",
        mode: "easy"
      },
      {
        question: "From what part of Adam's body did God create Eve?",
        answers: ["thigh", "Gluteus Maximus", "Rib", "Elbow"],
        correct: "Rib",
        reason: "God created Eve with Adam's Rib in Genesis 2:21-22.",
        mode: "easy"
      },
    
    ],
    medium: [
      {
        question: "Who said Fear not, Mary: for you have found favor with God.",
        answers: ["Angel Gabriel", "Jesus Christ", "Paul", "The Devil"],
        correct: "Angel Gabriel",
        reason: "Angel Gabriel tells Mary to not fear, because you have found favor with God in Luke 1:30.",
        mode: "medium"
      },
      {
        question: "How many days did God blind Saul on the road to Damascus.",
        answers: ["3 Days", "4 Days", "10 days", "30 days"],
        correct: "3 Days",
        reason: "God blinded Saul on the road to Damascus for 3 days in Acts 9:9 in the Bible.",
        mode: "medium"
      },
      {
        question: "Why was Saul on the road to Damascus breathing out murderous threats against the Lord's disciples?",
        answers: ["He obtained arrest warrants from the Chief Priest", "To Attend a Religious Festival in Damascus", "To Obtain Permission from the Roman Authorities to Execute Disciples", "To Seek Forgiveness for His Sins"],
        correct: "He obtained arrest warrants from the Chief Priest",
        reason: "Saul obtained arrest warrants from the Chief Priest and he was out to imprison the Disciples in Acts 9:2 in the Bible.",
        mode: "medium"
      },
      {
        question: "What was God's sign to Noah that he would never destroy the earth again?",
        answers: ["A Rainbow", "A Dove", "A Flood", "A Son"],
        correct: "A Rainbow",
        reason: "God's sign to Noah that he would never destroy the earth again was a rainbow in Genesis 9:13.",
        mode: "medium"
      },
      {
        question: "Through what did God speak to Moses in the desert?",
        answers: ["A Dream", "A Thunderous Voice from Heaven", "A Thunderstorm", "A Burning Bush"],
        correct: "A Burning Bush",
        reason: "God spoke to Moses with A Burning Bush in Exodus 3:2-4.",
        mode: "medium"
      },
      // add more questions
      {
        question: "Who said Fear not, Mary: for you have found favor with God.",
        answers: ["Angel Gabriel", "Jesus Christ", "Paul", "The Devil"],
        correct: "Angel Gabriel",
        reason: "Angel Gabriel tells Mary to not fear, because you have found favor with God in Luke 1:30.",
        mode: "medium"
      },
      {
        question: "How many days did God blind Saul on the road to Damascus.",
        answers: ["3 Days", "4 Days", "10 days", "30 days"],
        correct: "3 Days",
        reason: "God blinded Saul on the road to Damascus for 3 days in Acts 9:9 in the Bible.",
        mode: "medium"
      },
      {
        question: "Why was Saul on the road to Damascus breathing out murderous threats against the Lord's disciples?",
        answers: ["He obtained arrest warrants from the Chief Priest", "To Attend a Religious Festival in Damascus", "To Obtain Permission from the Roman Authorities to Execute Disciples", "To Seek Forgiveness for His Sins"],
        correct: "He obtained arrest warrants from the Chief Priest",
        reason: "Saul obtained arrest warrants from the Chief Priest and he was out to imprison the Disciples in Acts 9:2 in the Bible.",
        mode: "medium"
      },
      {
        question: "What was God's sign to Noah that he would never destroy the earth again?",
        answers: ["A Rainbow", "A Dove", "A Flood", "A Son"],
        correct: "A Rainbow",
        reason: "God's sign to Noah that he would never destroy the earth again was a rainbow in Genesis 9:13.",
        mode: "medium"
      },
      {
        question: "Through what did God speak to Moses in the desert?",
        answers: ["A Dream", "A Thunderous Voice from Heaven", "A Thunderstorm", "A Burning Bush"],
        correct: "A Burning Bush",
        reason: "God spoke to Moses with A Burning Bush in Exodus 3:2-4.",
        mode: "medium"
      },
      
       
    ],
    hard: [
      {
        question: "How many books in the Bible are named after women?",
        answers: ["2-Ruth and Esther", "2-Ezra and Hosea", "1-Mary", "3-Colossians, Ruth and Lamentations"],
        correct: "2-Ruth and Esther",
        reason: "Ruth and Esther are the only books in the Bible named after women.",
        mode: "hard"
      },
      {
        question: "Who said in the Bible am I my brother's keeper?",
        answers: ["Cain", "Moses", "Abel", "Noah", "Elijah"],
        correct: "Cain",
        reason: "Cain said am I my brother's keeper in Genesis 4:9 after he murdered Abel.",
        mode: "hard"
      },
      {
        question: "What kind of tree did Zacchaeus climb on to see Jesus?",
        answers: ["Sycamore Tree", "Fig Tree", "Olive Tree", "Acacia Tree, Tamarisk Tree"],
        correct: "Sycamore Tree",
        reason: "Zacchaeus climbed up a Sycamore tree in Luke 19:4-8.",
        mode: "hard"
      },
      // add more questions
      {
        question: "How many books in the Bible are named after women?",
        answers: ["2-Ruth and Esther", "2-Ezra and Hosea", "1-Mary", "3-Colossians, Ruth and Lamentations"],
        correct: "2-Ruth and Esther",
        reason: "Ruth and Esther are the only books in the Bible named after women.",
        mode: "hard"
      },
      {
        question: "Who said in the Bible am I my brother's keeper?",
        answers: ["Cain", "Moses", "Abel", "Noah", "Elijah"],
        correct: "Cain",
        reason: "Cain said am I my brother's keeper in Genesis 4:9 after he murdered Abel.",
        mode: "hard"
      },
      {
        question: "What kind of tree did Zacchaeus climb on to see Jesus?",
        answers: ["Sycamore Tree", "Fig Tree", "Olive Tree", "Acacia Tree, Tamarisk Tree"],
        correct: "Sycamore Tree",
        reason: "Zacchaeus climbed up a Sycamore tree in Luke 19:4-8.",
        mode: "hard"
      },
      {
        question: "How many books in the Bible are named after women?",
        answers: ["2-Ruth and Esther", "2-Ezra and Hosea", "1-Mary", "3-Colossians, Ruth and Lamentations"],
        correct: "2-Ruth and Esther",
        reason: "Ruth and Esther are the only books in the Bible named after women.",
        mode: "hard"
      },
      {
        question: "Who said in the Bible am I my brother's keeper?",
        answers: ["Cain", "Moses", "Abel", "Noah", "Elijah"],
        correct: "Cain",
        reason: "Cain said am I my brother's keeper in Genesis 4:9 after he murdered Abel.",
        mode: "hard"
      },
      {
        question: "What kind of tree did Zacchaeus climb on to see Jesus?",
        answers: ["Sycamore Tree", "Fig Tree", "Olive Tree", "Acacia Tree, Tamarisk Tree"],
        correct: "Sycamore Tree",
        reason: "Zacchaeus climbed up a Sycamore tree in Luke 19:4-8.",
        mode: "hard"
      },
      
      
      
    ],
  };

  let currentQuestionIndex = 0;
  let difficulty = 'easy'; // Initial difficulty level
  let questionsAnswered = 0;
  const questionText = document.getElementById('question-text');
  const answersContainer = document.getElementById('answers-container');
  const nextButton = document.getElementById('next-button');
  const difficultyMode = document.getElementById('difficulty-mode');
  const explanationButton = document.getElementById('explanation-button');
  const progressBar = document.getElementById('progress-bar');
  let points = 0;
  // shuffles questions based on difficulty
  let questionsPool = shuffleArray(quizData[difficulty]);

  // Hide buttons initially
  nextButton.style.visibility = "hidden";
  explanationButton.style.visibility = "hidden";

  // show buttons initially
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
    difficultyMode.textContent = currentQuestion.mode;

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

  function checkAnswer(selectedAnswer, correctAnswer, reason) {
    // Store question data in localStorage
    const questionData = {
      question: questionText.textContent,
      selectedAnswer: selectedAnswer,
      correctAnswer: correctAnswer
    };
  
    // Retrieve existing questions data from localStorage or initialize an empty array
    let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
    answeredQuestions.push(questionData);
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
  
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
      // If the condition is true (i.e., difficulty is 'easy'), then difficulty is set to 'medium' or If the condition is false (i.e., difficulty is not 'easy'), then difficulty is set to 'hard'.
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
      window.location.href = 'complete.html';
    }
  });

  // Load the first question
  loadQuestion();
  updateProgressBar(currentQuestionIndex);
});
