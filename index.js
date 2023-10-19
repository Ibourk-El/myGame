// questions
let questions = [
  [
    {
      question: "Which gas is the most abundant in Earth's atmosphere?",
      correctAnswer: "Nitrogen",
      hints: [
        "This gas makes up about 78% of Earth's atmosphere.",
        "It's not oxygen or carbon dioxide.",
        "It's often used to preserve biological samples in laboratories.",
        "Astronauts in space stations breathe this gas to simulate Earth's air.",
      ],
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    },
    {
      question: "What is the chemical symbol for oxygen gas?",
      correctAnswer: "O2",
      hints: [
        "It's a combination of a letter and a number.",
        "Think about the oxygen you breathe.",
        "It's vital for combustion and respiration.",
        "Its name is derived from the Greek word for 'acid-former.'",
      ],
      options: ["O2", "O", "O3", "Ox"],
    },
    {
      question: "Which gas is responsible for the greenhouse effect?",
      correctAnswer: "Carbon Dioxide",
      hints: [
        "It's a common gas in the atmosphere.",
        "It's associated with global warming.",
        "It's a molecule composed of one carbon atom and two oxygen atoms.",
        "This gas is naturally occurring but has increased due to human activities.",
      ],
      options: ["Carbon Monoxide", "Oxygen", "Methane", "Carbon Dioxide"],
    },
    {
      question: "What gas is used in balloons to make them float?",
      correctAnswer: "Helium",
      hints: [
        "It's a lighter-than-air gas.",
        "Think about balloons at parties.",
        "This gas is non-flammable.",
        "It's the second lightest and second most abundant element in the universe.",
      ],
      options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    },
    {
      question: "Which gas gives soda its fizz?",
      correctAnswer: "Carbon Dioxide",
      hints: [
        "It's a gas produced during fermentation.",
        "It creates bubbles in beverages.",
        "This gas can make your soda 'pop.'",
        "It's also used to make your bread rise in baking.",
      ],
      options: ["Carbon Monoxide", "Oxygen", "Carbon Dioxide", "Nitrogen"],
    },
  ],

  [
    {
      question: "Which country won the 2018 FIFA World Cup?",
      correctAnswer: "France",
      hints: [
        "The tournament took place in Russia.",
        "The team's captain is Hugo Lloris.",
        "They won their second World Cup in 2018.",
        "Their star player, Antoine Griezmann, scored several goals during the tournament.",
      ],
      options: ["Brazil", "France", "Germany", "Argentina"],
    },
    {
      question:
        "Who is the all-time top scorer in the history of the FIFA World Cup?",
      correctAnswer: "Miroslav Klose",
      hints: [
        "He is a retired German striker.",
        "He broke the previous record during the 2014 World Cup.",
        "Klose scored a total of 16 World Cup goals in his career.",
        "He also played for Bayern Munich and Lazio during his club career.",
      ],
      options: ["Lionel Messi", "Cristiano Ronaldo", "Pele", "Miroslav Klose"],
    },
    {
      question: "Which club has won the most UEFA Champions League titles?",
      correctAnswer: "Real Madrid",
      hints: [
        "They are known for their all-white kit.",
        "Their home stadium is Santiago Bernabeu.",
        "Real Madrid has won the Champions League multiple times in consecutive years.",
        "Cristiano Ronaldo played a significant role in their recent success.",
      ],
      options: ["Barcelona", "Real Madrid", "Manchester United", "AC Milan"],
    },
    {
      question: "Who is the current FIFA Ballon d'Or holder as of 2021?",
      correctAnswer: "Lionel Messi",
      hints: [
        "He plays for Paris Saint-Germain (PSG).",
        "Considered one of the greatest footballers of all time.",
        "Messi previously played for FC Barcelona throughout his career.",
        "He has won multiple Ballon d'Or awards during his career.",
      ],
      options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé"],
    },
    {
      question: "Which nation hosted the first FIFA World Cup in 1930?",
      correctAnswer: "Uruguay",
      hints: [
        "It was the inaugural FIFA World Cup.",
        "The final match was held in Montevideo.",
        "Uruguay won the tournament on home soil.",
        "The tournament had 13 participating teams.",
      ],
      options: ["Brazil", "Germany", "Italy", "Uruguay"],
    },
  ],
];

//

const lettersBox = document.querySelector(".letters-box");
const word = document.querySelector(".answer");
const bg = document.querySelector(".bg");
const hintBtn = document.querySelector(".hint");
const allHint = document.querySelectorAll(".info");
const removeBtn = document.querySelector(".removeBtn");
const color = "1234567890abcdef";
let questionsIndex = 0;
let catigoryIndex = 0;
let hintIndex = 0;
let stopHintIndex = false;

function setQuestions(q, h, ch = ["", "", "", ""]) {
  let question = document.querySelector(".quetion");
  let hints = document.querySelectorAll("li");
  const choises = document.querySelectorAll(".choise");
  question.innerHTML = q;
  for (let i = 0; i < h.length; i++) {
    hints[i].innerHTML = h[i];
    choises[i].innerHTML = ch[i];
  }
}

// dag and drop functions
function dragStart(e) {
  e.dataTransfer.setData("txt", e.target.innerHTML);
}
function dragover(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  let ans = questions[catigoryIndex][questionsIndex].correctAnswer;
  e.target.innerHTML = e.dataTransfer.getData("txt");
  e.target.style.color = "#121";
  if (e.target.innerHTML === ans) {
    e.target.style.backgroundColor = "#0f9";
    e.target.style.color = "#fff";
  } else {
    e.target.style.backgroundColor = "#f30000";
    e.target.style.color = "#fff";
  }
  setTimeout(() => {
    questionsIndex++;
    if (questionsIndex >= questions[catigoryIndex].length) {
      catigoryIndex++;
      questionsIndex = 0;
    }
    setQuestions(
      questions[catigoryIndex][questionsIndex].question,
      questions[catigoryIndex][questionsIndex].hints,
      questions[catigoryIndex][questionsIndex].options
    );
    e.target.innerHTML = "Drop Letters Of The Word Here";
    e.target.style.color = "#aaa";
    e.target.style.backgroundColor = "#fff";
  }, 1000);
}
//
// add hint
hintBtn.addEventListener("click", () => {
  allHint[hintIndex].style.display = "block";
  if (!stopHintIndex) hintIndex++;
  else {
    word.innerHTML = questions[0][questionsIndex].correctAnswer;
  }
  if (hintIndex === allHint.length - 1) {
    hintBtn.innerHTML = "show the answer";
    stopHintIndex = true;
  }
});

// make colors
function colorForBg() {
  let c = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    c += color[index];
  }
  return c;
}
let colorsArr = [];
for (let i = 0; i < 5; i++) {
  colorsArr.push(colorForBg());
}
//

setQuestions(
  questions[0][questionsIndex].question,
  questions[0][questionsIndex].hints,
  questions[catigoryIndex][questionsIndex].options
);

setInterval(() => {
  bg.style.backgroundImage = `linear-gradient(to top,${colorsArr[0]} 0% 20%,${colorsArr[1]} 20% 40%,${colorsArr[2]} 40% 60% ,${colorsArr[3]} 60% 80%,${colorsArr[4]} 80% 100%)`;
  colorsArr.unshift(colorForBg());
  colorsArr.pop();
}, 1000);
