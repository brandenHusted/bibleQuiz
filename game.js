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
        question: "What do we believe at Outreach Christian Church?",
        answers: ["We believe salvation comes by Grace through the blood of Christ", "We believe you can be saved by following and obeying the laws of the Gospel", "There is only one God, Muhammad", "Truxton Daniels is our savior"],
        correct: "We believe salvation comes by Grace through the blood of Christ",
        reason: "We believe salvation comes by Grace through the blood of Christ is the central theme of Christianity and our church is built on what the Bible says.",
      },
      {
        question: "What time does Worship Service start at Outreach?",
        answers: ["9:30am", "10:30am", "8:30am", "6:69am"],
        correct: "10:30am",
        reason: "Worship service starts at 10:30 and Sunday school starts at 9:30.",
      },
      {
        question: "Who is the pastor at Outreach Christian Church?",
        answers: ["Justin Lilley", "Fred Lab", "Kelly Maatman", "Branden Husted"],
        correct: "Fred Lab",
        reason: "Justin Lilley is the youth pastor, Kelly Maatman is the Administrative Assistant. Fred Lab is the pastor! Branden Husted is me the developer of this game and a member of Outreach."
      },
      {
        question: "Where is Outreach Christian Church Located?",
        answers: ["Lake Odessa", "Ionia", "Hell", "Heaven"],
        correct: "Lake Odessa",
        reason: "Outreach is located in Lake Odessa, Michigan."
      },
      {
        question: "When is deeper hour and sunday school at Outreach?",
        answers: ["9:30", "9:35", "10:00", "8:30"],
        correct: "9:30",
        reason: "Deeper hour is a place for adults to dive deeper into God's word. Sunday school is for kids to learn the bible. They all take palce at the same time 9:30 at Outreach."
      },
      {
        question: "Does Outreach have livestreams on Facebook and Youtube?",
        answers: ["Yes", "No"],
        correct: "Yes",
        reason: "You can find Outreach's livestreams on their facebook page and on the official youtube channel."
      },
      {
        question: "What is Outreach's email?",
        answers: ["hello@outreachcc.com", "outreach@gmail.com", "welcome@outreachcc.com", "fred@outreachcc.com"],
        correct: "hello@outreachcc.com",
        reason: "You can find Outreach's email on their official website."
      },
      {
        question: "Do we use grape juice or real wine at Outreach for communion?",
        answers: ["Grape juice", "Real wine", "Depends on who you ask"],
        correct: "Grape juice",
        reason: "We use grape juice at Outreach during communion."
      },
      {
        question: "Do we beleive in the trinity at outreach?",
        answers: ["Yes", "No"],
        correct: "Yes",
        reason: "We beleive in the trinity, God is God, Jesus, and the Holy Spirit all at the same time."
      },
      {
        question: "What is Outreach's Phone Number?",
        answers: ["616-374-0115", "616-374-7110", "616-374-9887"],
        correct: "616-374-0115",
        reason: "This number is the number to contact Outreach Christian Church."
      }
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
        question: "Do all Life groups meet weekly during the summer months?",
        answers: ["Yes", "No"],
        correct: "No",
        reason: "Please be aware that some groups do not meet weekly during the summer months, so be sure to ask the group leaders about their group's summer schedule before attending.",
      },
      {
        question: "What are ways you can volunteer at Outreach?",
        answers: ["Adopt-A-Highway Cleanup", "Give a gift to a child in need for Christmas", "Hold the door for incoming Guests before Church", "All these activities and more"],
        correct: "All these activities and more",
        reason: "All of these activities are ways you can volunteer your time to Outreach. To learn more go to: https://www.outreachcc.com/",
      },
      {
        question: "Where is the Statewide Teen Convention held that Outreach's youth group attends?",
        answers: ["Calvin University", "Great Lakes Christian College", "Mooville parking lot", "Albion College"],
        correct: "Great Lakes Christian College",
        reason: "The youth group goes to Statewide at Great Lakes Christian College. The college Justin attended and earned his degree at.",
      },
      {
        question: "Does Justin like pizza?",
        answers: ["Yes", "No", "What is this question, I refuse to answer"],
        correct: "Yes",
        reason: "Justin loves pizza and he have it at every event he plans during youth group. This is a great fact to know so you can give Justin a gift of pizza next time you see him.",
      },
      {
        question: "Does Justin go to the neighboring schools and get involved with the community?",
        answers: ["Yes, you bet ya its Outreach for a reason!", "No"],
        correct: "Yes, you bet ya its Outreach for a reason",
        reason: "Justin loves to get involved with people from his youth group and he even is celebrating with them at their high school graduations, what a guy!",
      },
      {
        question: "What are ways you can volunteer at Outreach?",
        answers: ["Help out with Sunday School", "Be in charge of audio/tech", "Be in charge of morning coffee", "All these activities and more"],
        correct: "All these activities and more",
        reason: "All of these activities are ways you can volunteer your time to Outreach. To learn more go to: https://www.outreachcc.com/",
      },
      {
        question: "What kind of music do we play during service?",
        answers: ["Mostly contemporary praise and worship with a touch of old school", "Rock music that will lift your soul to the heavens above", "Hymns that fit the sermon very well", "We do not play music"],
        correct: "Mostly contemporary praise and worship with a touch of old school",
        reason: "We play Mostly contemporary praise and worship with a touch of old school tunes because it is a great way to start off the service and our congregation loves it! ",
      },
      {
        question: "Will Outreach's teachings not challenge you in your daily life?",
        answers: ["Yes", "No"],
        correct: "No",
        reason: "At Outreach we use the Bible in everything that we preach and the Bible has some very hard lessons that we take very seriously. You will learn more about God and how to walk as a Christian in your daily life here at Outreach.",
      },
      {
        question: "Justin Lilley has been playing on a worship team since 4th grade.",
        answers: ["True", "False"],
        correct: "True",
        reason: "Justin loves to play in our worship band. He loves playing drums, guitar, piano, and singing.",
      },
    ],
    hard: [
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
        question: "What camp is Justin Lilley (the youth pastor) in charge of?",
        answers: ["Rock Lake Christian Assembly", "Michigan Christian Youth Camp", "Lake Ann Camp", "Grace Adventures"],
        correct: "Rock Lake Christian Assembly",
        reason: "Justin is in charge of Rock Lake Christian Assembly during the week for high school students. Many students come from Outreach and this is a great opportunity to outreach and meet new people!"
      },
      {
        question: "What is Outreach's Mission?",
        answers: ["To connect people to God through His Love, His World, and His Fellowship", "Love God, Love People, Make Disciples", "Helping people find and follow Jesus Christ", "Our mission is to make fully devoted followers of Christ"],
        correct: "To connect people to God through His Love, His World, and His Fellowship",
        reason: "At Outreach we love to connect with people and grow in fellowship with everyone we meet. Look on Outreach's website for their mission statement.",
      },
      {
        question: "Which person is a member of Outreach as of Dec 2023?",
        answers: ["Carrie Pratt", "Jacob Lilley", "Steve Vanden Heuvel", "Jonathan Gerdes", "Robert Silvernail"],
        correct: "Carrie Pratt",
        reason: "Carrie Pratt goes to Outreach as of Dec 2023. I saw her at the Christmas Eve Service. No one else goes to Outreach."
      },
      {
        question: "Who is the amazing nice person that is 51 in 2024 and loves to greet everyone that comes to church everyday?",
        answers: ["Danny", "Fred", "Scott", "Deanna"],
        correct: "Danny",
        reason: "Danny is a super nice person that has been at Outreach for a very long time. He turned 51 on Tuesday April 30th."
      },
      {
        question: "Who is a elder at Outreach Christian church in 2024?",
        answers: ["John Daniels", "Al Husted", "Scott Moford", "Chuck Rectenwal"],
        correct: "John Daniels",
        reason: "John Daniels is a elder at Outreach. The rest are not."
      },
      {
        question: "What day and time is men's ministry group at Outreach?",
        answers: ["1st Monday of every month 6-8pm", "3rd Monday of every Month 7-8pm", "1st Tuesday of every week 5-6pm", "Sundays 9-10am"],
        correct: "1st Monday of every month 6-8pm",
        reason: "The 1st Monday of every month 6-8 is outreach's men's group. This is a great way to get connected to Outreach outside of just sunday mornings."
      },
      {
        question: "What day and time is Women's Gathering at Outreach?",
        answers: ["1st Monday of every month 6-8pm", "3rd Monday of every Month 7-8pm", "1st Tuesday of every week 5-6pm", "Sundays 9-10am"],
        correct: "3rd Monday of every Month 7-8pm",
        reason: "3rd Monday of every Month 7-8pm is outreach's women's group. This is a great way to get connected to Outreach outside of just sunday mornings."
      },
      {
        question: "At Outreach's wild game dinner, what animal is usually served?",
        answers: ["Turtle", "Ring-necked Pheasant", "Ostrich", "Bear", "Muskox"],
        correct: "Turtle",
        reason: "At the annual wild game dinner at Outreach turtle was served when I last went and none of the other wild game meat was served."
      },
      {
        question: "How long has Fred been the pastor of Outreach Christian Church since 2024?",
        answers: ["22 Years", "21 Years", "25 years", "23 years", "19 years"],
        correct: "22 years",
        reason: "Fred has been the pastor at Outreach since October 2002. From this year in 2024 that would be 22 years."
      },
      
      
    ],
  };

  let currentQuestionIndex = 0;
  let timerInterval;
  let difficulty = 'easy'; // Initial difficulty level
  let questionsAnswered = 0;
  const questionText = document.getElementById('question-text');
  const answersContainer = document.getElementById('answers-container');
  const nextButton = document.getElementById('next-button');
  const scoreContainer = document.getElementById('score-container');
  const scorePercentage = document.getElementById('score-percentage');
  const explanationButton = document.getElementById('explanation-button');
  const progressBar = document.getElementById('progress-bar');
  let timeRemaining;
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
  // handle timer
  startTimer(60);
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
    clearInterval(timerInterval);
  }

  // Function to show the explanation
  function showExplanation(reason) {
    alert(reason);
  }

  function startTimer(duration) {
    timeRemaining = duration;
    timerInterval = setInterval(() => {
      timeRemaining--;
      document.getElementById("time-remaining").textContent = timeRemaining;
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
        displayScore(0);

      }
    }, 1000); // 1000 milliseconds (1 second)
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
