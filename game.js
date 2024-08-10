document.addEventListener('DOMContentLoaded', () => {
  // using AI to change difficulty if questions are right or wrong during quiz
  const quizData = {
    easy: [
      {
        question: "How do you become a Christian?",
        answers: ["The Apostle's Creed", "The Lord's Prayer", "The ten Commandments", "Beleive Christ died for you"],
        correct: "Beleive Christ died for you",
        reason: "Christian Formula = Christ was killed for us, His death has washed away our sins, and by dying he has disabled death itself. You are Christian by beleiving Christ died for you.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What word or phrase means giving somebody something good that he or she doesn't deserve?",
        answers: ["Grace", "Forgiveness", "Love", "Kindness"],
        correct: "Grace",
        reason: "Grace is giving something good that he or she doesn't deserve.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "What is not required in order to stand in God's holy place?",
        answers: ["Clean Hands", "Pure Heart", "Wealth", "Rejecting False Idols"],
        correct: "Wealth",
        reason: "Wealth is not required to stand in God's holy place stated in Psalms 24:4.",
        mode: "easy",
        category: "Christian Life based in the Bible"
      },
      {
        question: "Who walked on water toward Jesus?",
        answers: ["Peter", "Matthew", "Andrew", "John"],
        correct: "Peter",
        reason: "Peter walked on water toward Jesus in Matthew 14:22-33.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "What town was Jesus born in?",
        answers: ["Bethlehem", "Jerusalem", "Israel", "Nazareth"],
        correct: "Bethlehem",
        reason: "In Matthew 2:1-2 it states that Jesus was born in Bethlehem.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Who did God tell to let my people go?",
        answers: ["Moses", "Jesus", "David", "Abraham"],
        correct: "Moses",
        reason: "In Exodus 5:1 God told Moses to let my people go, so that they may hold a festival unto me in the wilderness.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "What was the first miracle performed by Christ?",
        answers: ["Healing of a blind man","Feeding of the five thousand", "Water turned into wine", "Jesus walking on water"],
        correct: "Water turned into wine",
        reason: "The first miracle Christ performed was turning water into wine in John 2:1.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Where did Jesus give his first sermon?",
        answers: ["Nazareth","Jerusalem", "Capernaum", "Bethlehem"],
        correct: "Nazareth",
        reason: "Jesus gave his first sermon at Nazareth in Luke 4:14-30.",
        mode: "easy",
        category: "History in the Bible"
      },
      {
        question: "Fill in the blank: Thy word is a ____ unto my feet, and a light unto my path.",
        answers: ["Lamp", "light", "Beacon", "Guide"],
        correct: "Lamp",
        reason: "Thy word is a lamp unto my feet is in Psalm 119:105 in King James Version of the Bible.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "From what part of Adam's body did God create Eve?",
        answers: ["thigh", "Gluteus Maximus", "Rib", "Elbow"],
        correct: "Rib",
        reason: "God created Eve with Adam's Rib in Genesis 2:21-22.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What is verse 1 in Genesis?",
        answers: ["In the beginning God created the heavens and the earth", "In the beginning God created light from darkness", "Amen. Come, Lord Jesus", "And God said, Let there be light"],
        correct: "In the beginning God created the heavens and the earth",
        reason: "The first verse in the Bible is in the beginning God created the heavens and the earth.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What is the last word in the Bible?",
        answers: ["Amen", "Jesus", "Israel", "name"],
        correct: "Amen",
        reason: "The last word in the bible is Amen.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "Romans 3:23 says that who has sinned?",
        answers: ["Everyone", "The Devil", "Israel", "Peter"],
        correct: "Everyone",
        reason: "Romans 3:23 saids that everyone has sinned and fell short of the glory of God.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "which books are the Gospels?",
        answers: ["Matthew, Mark, Luke, John", "Matthew, Mark, Luke, John, Peter", "Numbers", "All of them"],
        correct: "Matthew, Mark, Luke, John",
        reason: "The Gospels are the records we have of Jesus' life. Matthew, Mark, Luke, John wrote down the teachings of Jesus.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "What does that each one of you know how to control his own body in holiness and honor mean?",
        answers: ["Control your desire for sex", "Control excessive eating", "Fight in honor for God", "All of them"],
        correct: "Control your desire for sex",
        reason: "That each one of you know how to control his own body in holiness and honor means control your desire for sex. This is stated in 1 Thessalonians 4:4.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "We are called to be free in Christ so how do we use are freedom?",
        answers: ["Serve one another humbly in love", "Indulge in the flesh", "Go hide out in a bunker and watch anime"],
        correct: "Serve one another humbly in love",
        reason: "We use are freedom to serve one another humbly in love. This is stated in Galatians 5:13.",
        mode: "easy",
        category: "Common Facts about Bible"
      },
      {
        question: "Who is called the light of the world?",
        answers: ["Jesus", "Moses", "Abraham"],
        correct: "Jesus",
        reason: "Jesus is called the light of the world in John 8:12.",
        mode: "easy",
        image: "images/jesus.jpg",
        category: "Questions with images"
      },
      {
        question: "What is the duty of man, according to the Scriptures?",
        answers: ["Fear God and keep his commandments", "Love enemies", "Be fruitful and multiply"],
        correct: "Fear God and keep his commandments",
        reason: "The duty of man in the scriptures is to Fear God and keep his commandments stated in Ecclesiastes 12:13.",
        mode: "easy",
        image: "images/prayer.jpg",
        category: "Questions with images"
      },
      
      {
        question: "Were their two of each kind of animal on Noah's ark?",
        answers: ["Yes", "No"],
        correct: "Yes",
        reason: "Yes there was two of each kind of animal on Noah's ark in Genesis 7:15.",
        mode: "easy",
        image: "images/ark.jpg",
        category: "Questions with images"
      },
      {
        question: "Peter told Jesus he would lay down his life for him but Jesus told him he would do what three times?",
        answers: ["Leave him", "Deny him", "Die with him", "Hate him"],
        correct: "Deny him",
        reason: "Peter denies Jesus three times in John 13:38.",
        mode: "easy",
        image: "images/peter.jpg",
        category: "Questions with images"
      },
      {
        question: "Peter told Jesus he would lay down his life for him but Jesus told him he would do what three times?",
        answers: ["Leave him", "Deny him", "Die with him", "Hate him"],
        correct: "Deny him",
        reason: "Peter denies Jesus three times in John 13:38.",
        mode: "easy",
        image: "images/peter.jpg",
        category: "Questions with images"
      },
      {
        question: "When Jesus was born, he was placed in a ___?",
        answers: ["Manger", "Crib", "Cradle", "Throne"],
        correct: "Manger",
        reason: "Jesus was born and placed in a manger in Luke 2:7",
        mode: "easy",
        image: "images/manger.jpg",
        category: "Questions with images"
      },
      {
        question: "What land did God and Moses lead the Israelites out of bondage from?",
        answers: ["Egypt", "Persia", "Israel", "Lebanon"],
        correct: "Egypt",
        reason: "God and Moses led the Israelites out of slavery in Egypt in Deuteronomy 5:6.",
        mode: "easy",
        image: "images/israelites.jpg",
        category: "Questions with images"
      },
      {
        question: "Jesus said many are called but few are ___?",
        answers: ["Chosen", "Forgiven", "Followers", "Human"],
        correct: "Chosen",
        reason: "Jesus said many are called but few are chosen in Matthew 22:14.",
        mode: "easy",
        image: "images/chosen.jpg",
        category: "Questions with images"
      },
      {
        question: "What did David use to defeat Goliath?",
        answers: ["A sling and a stone", "A sword", "A pair of brass knuckles", "A semi-automatic shotgun"],
        correct: "A sling and a stone",
        reason: "David used a sling and a stone to defeat Goliath in 1 Samuel 50.",
        mode: "easy",
        image: "images/david.jpg",
        category: "Questions with images"
      },
      {
        question: "What did Adam and Eve eat from the tree of knowledge of good and evil?",
        answers: ["Apple", "Grape", "Cherries", "Paper"],
        correct: "Apple",
        reason: "Adam and Eve ate an apple from the tree of knowledge of good and evil in Genesis 3:6.",
        mode: "easy",
        image: "images/adam.jpg",
        category: "Questions with images"
      },
      {
        question: "What did Paul say the saints would judge?",
        answers: ["The world", "The church", "The vikings", "The pope"],
        correct: "The church",
        reason: "Paul said the saints would judge the church in 1 Corinthians 6:2.",
        mode: "easy",
        image: "images/paul.jpg",
        category: "Questions with images"
      },
      {
        question: "How many disciples were there?",
        answers: ["12", "3", "11", "13"],
        correct: "12",
        reason: "There was 12 disciples. This was stated in Luke 6:13.",
        mode: "easy",
        image: "images/12-disciples.jpg",
        category: "Questions with images"
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
      {
        question: "How many sons did Jacob have?",
        answers: ["3", "12", "6", "1","None"],
        correct: "12",
        reason: "Jacob had 12 sons in Genesis 49.",
        mode: "medium"
      },
      {
        question: "What day was the Sabbath in the bible?",
        answers: ["Sunday", "Saturday", "Friday", "Sabbath doesn't matter"],
        correct: "Saturday",
        reason: "The Sabbath was viewed on Saturday the 7th day of the week. The 1st day of the week is Sunday so the last would be Saturday",
        mode: "medium"
      },
      {
        question: "Is Christianity based on humanitarian philosophy?",
        answers: ["True","False"],
        correct: "True",
        reason: "True. Christianity emphasizes serving humanity and reducing suffering.",
        mode: "Medium"
      },
      {
        question: "What were the first words God spoke to man?",
        answers: ["Rule the earth","Fill the earth", "Be fruitful and multiply", "Love your neighbor"],
        correct: "Be fruitful and multiply",
        reason: "God said Be fruitful and multiply in Genesis 1:28.",
        mode: "Medium"
      },
      {
        question: "Quote the first words of our Savior while on earth.",
        answers: ["Why are you searching for me? Didn't you know I would be in my Father's house","I am the way the truth and the life", "You shall love the Lord your God with all you mind, heart and soul", "I don't know maybe baby noises"],
        correct: "Why are you searching for me? Didn't you know I would be in my Father's house",
        reason: "The first words we know God said are Why are you searching for me? Didn't you know I would be in my Father's house in Luke 2:49.",
        mode: "Medium"
      },
      {
        question: "Quote the last words of our Savior while on earth.",
        answers: ["It is finished","Father forgive them for they do not know what they do", "Father into your hands I commit my spirit", "Love your neighbor"],
        correct: "It is finished",
        reason: "The last words we know God said are it is finished in John 19:30.",
        mode: "Medium"
      },
      {
        question: "How many commandments did Moses receive?",
        answers: ["10","8", "3", "1"],
        correct: "10",
        reason: "Moses received 10 commandments from God in Exodus 20:2-17.",
        mode: "Medium",
        image: "images/moses.jpg"
      },
      {
        question: "To whom did God promise that his children should be in numbers as the stars in heaven?",
        answers: ["Jacob","Abraham", "Moses", "Jethro"],
        correct: "Abraham",
        reason: "Abraham received a promise that his children should be in numbers as the stars in heaven from God in Genesis 15:5.",
        mode: "Medium",
        image: "images/abraham.jpg"
      },
      {
        question: "What Old Testament book gave a prophesy about baby Jesus being conceived in Mary as a virgin?",
        answers: ["Genesis","Exodus", "Proverbs", "Isaiah"],
        correct: "Isaiah",
        reason: "Isaiah was the Old Testament book that gave a prophesy about baby Jesus being conceived in Mary as a virgin in Matthew 1:18.",
        mode: "Medium"
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
        answers: ["Sycamore Tree", "Fig Tree", "Olive Tree", "Acacia Tree", "Tamarisk Tree"],
        correct: "Sycamore Tree",
        reason: "Zacchaeus climbed up a Sycamore tree in Luke 19:4-8.",
        mode: "hard"
      },
      {
        question: "Why does God allow bad things to happen?",
        answers: ["Bad things happen because the whole world is controlled by the evil one", "Bad things happen because the world is controlled by sinners", "Bad things happen so we can turn bad things into good things", "Bad things happen because Christians let bad things happen"],
        correct: "Bad things happen because the whole world is controlled by the evil one",
        reason: "Bad things happen because the whole world is controlled by the evil one. This is stated in 1 John 5:19 in the Bible.",
        mode: "hard",
        image: "images/badthings.jpg"
      },
      {
        question: "which prophet was told by God to marry a prostitute?",
        answers: ["Hosea", "Isaiah", "Barnabas", "Enoch"],
        correct: "Hosea",
        reason: "In Hosea 1:2-4 in the Bible. Hosea was told by God to marry a prostitute.",
        mode: "hard",
      },
      {
        question: "What Athenian judge was converted under Paul's preaching?",
        answers: ["Eunice", "Candace", "Eubulus", "Dionysius"],
        correct: "Dionysius",
        reason: "Dionysius was converted under Paul's preaching in Acts 17:34.",
        mode: "hard"
      },
      {
        question: "How were the children of Israel guided in their forty years of wandering in the wilderness?",
        answers: ["By a pillar of cloud by day and a pillar of fire by night", "By the voice of God", "By Moses", "Noah", "By Aaron's rod"],
        correct: "By a pillar of cloud by day and a pillar of fire by night",
        reason: "They were guided by a pillar of cloud by day and a pillar of fire by night. you can read this in Exodus 13:21.",
        mode: "hard"
      },
      
      {
        question: "What king did God smite with Leprosy?",
        answers: ["Athaliah", "Jehoram", "Amaziah", "Uzziah"],
        correct: "Uzziah",
        reason: "God smited Uzziah with Leprosy in 2 Chronicles 26:19.",
        mode: "hard",
        image: "images/leprosy.jpg"
      },
      {
        question: "What prophet was sent as a missionary to the Ninevites?",
        answers: ["Jonah", "Paul", "Elon", "Malachi", "Jesus"],
        correct: "Jonah",
        reason: "Jonah was a prophet sent as a missionary to the Ninevites in Jonah 1:1-2.",
        mode: "hard"
      },
      {
        question: "What queen of bible times who was the daughter of Queen Jezebel was called that wicked women?",
        answers: ["Lydia", "Esther", "Athaliah", "Jezebel"],
        correct: "Athaliah",
        reason: "Athaliah was the daughter of Queen Jezebel and called that wicked women 2 Chronicles 24:7 because she murdered her children and grandchildren to become queen.",
        mode: "hard",
        image: "images/athaliah.jpg"
      },
      {
        question: "Who was the first Christian Martyr?",
        answers: ["Stephen", "Esther", "John", "Paul"],
        correct: "Stephen",
        reason: "Stephen was the first Christian Martyr stated in Acts 7:58.",
        mode: "hard",
      },
      {
        question: "What man, although warned, invited his murderer to a feast?",
        answers: ["Jesse", "Gedaliah", "Gideon", "Jesus"],
        correct: "Gedaliah",
        reason: "Gedaliah invited his murderer to a feast in Jeremiah 40:14.",
        mode: "hard",
      },
      {
        question: "Did Adam and Eve have three sons?",
        answers: ["Yes", "No"],
        correct: "Yes",
        reason: "Yes Adam and Eve had three sons Cain, Abel and Seth stated in Genesis 4:25.",
        mode: "hard",
      },
      {
        question: "Which of the following is not one of the 10 commandments of God in the Bible?",
        answers: ["You shall not steal", "Remember the Sabbath", "You shall not judge others lest you be judged", "You shall not make yourself a carved image", "You shall not covet"],
        correct: "You shall not judge others lest you be judged",
        reason: "You shall not judge others lest you be judged is not one of the 10 commandments. You can see the 10 commandments in Exodus 20:2-17.",
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
  const progressBar = document.getElementById('progress-bar');
  const questionImage = document.getElementById('question-image');
  const reasonContainer = document.getElementById('reason');
  const music = document.getElementById('background-music');
  const playButton = document.getElementById('play-button');
  const dropupContent = document.getElementById('dropup-content');
  let points = 0;

  // Toggle the dropup menu for music when the play button is clicked
  playButton.addEventListener('click', () => {
    dropupContent.style.display = dropupContent.style.display === 'block' ? 'none' : 'block';
  });
  // Play the selected song when a menu item is clicked
  dropupContent.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const song = event.target.getAttribute('data-song');
      music.src = song;
      music.play();
      dropupContent.style.display = 'none'; // Close the menu after selection
    });
  });
  // Close the dropup menu if the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (!event.target.matches('#play-button')) {
      dropupContent.style.display = 'none';
    }
  });
   // Initially pause the music
   music.pause();
   // Event listener for the "Play" button
   playButton.addEventListener('click', () => {
     if (music.paused) {
       music.play();
     } else {
      music.pause();
     }
   });
   music.addEventListener('ended', () => {
     music.play(); // Restart music if it ends
   });
  
  // Retrieve difficulty and category from local storage
  const savedDifficulty = localStorage.getItem('selectedDifficulty');
  const savedCategory = localStorage.getItem('selectedCategory');
  difficulty = savedDifficulty || 'easy'; // Default to 'easy' if no saved difficulty
  
  // Hide button initially
  nextButton.style.visibility = "hidden";

  // show buttons initially
  answersContainer.style.visibility = "visible"; 

  // Function to shuffle array elements
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap the element at index i with the element at index j
      [array[i], array[j]] = [array[j], array[i]];
    }
    // return swapped array
    return array;
  }
  
  function getFilteredQuestions() {
    let allQuestions = [];

    // Combine questions based on difficulty
    allQuestions = quizData[difficulty];
    // Filter based on category
    if (savedCategory !== 'all') {
      allQuestions = allQuestions.filter(question => question.category === savedCategory);
    }
    // Shuffle combined questions
    return shuffleArray(allQuestions);
  }
  
  let questionsPool = getFilteredQuestions();
  
  // Function to load a question and its answers
  function loadQuestion() {
    if (questionsPool.length === 0) {
      questionsPool = shuffleArray(quizData[difficulty]);
    }
    const currentQuestion = questionsPool.pop();
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';
    difficultyMode.textContent = currentQuestion.mode;

    reasonContainer.textContent = currentQuestion.reason
    reasonContainer.style.display = 'none';

    // Set image source and display
    if (currentQuestion.image) {
      questionImage.src = currentQuestion.image;
      questionImage.style.display = 'block'; // Show image
    } else {
      questionImage.src = '';
      questionImage.style.display = 'none'; // Hide image
    }
    
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

  function checkAnswer(selectedAnswer, correctAnswer) {
    // Store question data in localStorage
    const questionData = {
      question: questionText.textContent,
      selectedAnswer: selectedAnswer,
      correctAnswer: correctAnswer,
      reason: reasonContainer.textContent
    };
  
    // Retrieve existing questions data from localStorage or initialize an empty array
    let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
    answeredQuestions.push(questionData);
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
    questionImage.style.display = 'none'; // Hide images
  
    if (selectedAnswer === correctAnswer) {
      reasonContainer.textContent = "Correct: " + reasonContainer.textContent;
      // hex for light green
      reasonContainer.style.backgroundColor = "#90EE90";
      points++;
    } else {
      reasonContainer.textContent = "Wrong: " + reasonContainer.textContent;
      // hex for light red
      reasonContainer.style.backgroundColor = "#FFCCCB";
    }
    questionsAnswered++;
    answersContainer.style.visibility = "hidden";
    nextButton.style.visibility = 'visible';
    // Display the explanation (reason)
    document.getElementById('reason').style.display = 'block';
  }

  // Function to calculate and display score
  function displayScore(points) {
    const scorePercentageValue = (points / 10) * 100;
    localStorage.setItem('scorePercentage', scorePercentageValue.toFixed(2));
    window.location.href = 'complete.html'; // Redirect to complete page
  }

  

  // Function to update the progress bar
  function updateProgressBar(currentIndex) {
    const progressPercentage = ((currentIndex + 1) / 10) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${currentIndex + 1}/10`;
  }

  // Event listener for the "Next" button
  nextButton.addEventListener('click', () => {
    reasonContainer.textContent = reasonContainer.textContent
    currentQuestionIndex++;
    answersContainer.style.visibility = "visible";
    if (currentQuestionIndex < 10) {
      loadQuestion(currentQuestionIndex);
      nextButton.style.visibility = 'hidden'; // Hide the "Next" button until an answer is selected
      updateProgressBar(currentQuestionIndex);
    } else {
      nextButton.style.visibility = 'hidden'; // Hide the "Next" button at the end of the quiz
      displayScore(points);
    }
  });

  // Load the first question
  loadQuestion();
  updateProgressBar(currentQuestionIndex);
});
