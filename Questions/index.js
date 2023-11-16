// questions
let questions = [
  [
    {
      question: "من هو النبي الذي قام ببناء الكعبة في مكة؟",
      options: [
        "محمد صلى اله عليه وسلم",
        "إسمعيل عليه السلام",
        "إبراهيم عليه السلام",
        "موسى عليه السلام",
      ],
      correctAnswer: "إبراهيم عليه السلام",
      hints: [
        "هذا النبي هو الذي شارك ابنه إسماعيل في بناء الكعبة.",
        "الكعبة هي البيت الذي أمر الله ببنائه للعبادة في مكة.",
        "إبراهيم عليه السلام هو نبي مشهور في الأديان السماوية.",
      ],
    },
    {
      question: "ما هو الشهر الذي يصوم فيه المسلمون خلال شهر رمضان؟",
      options: ["شهر شوال", "شهرذو الحجة", "شهر محرم", "شهر رمضان"],
      correctAnswer: "شهر رمضان",
      hints: [
        "هذا الشهر يأتي بعد شهر شعبان في التقويم الإسلامي.",
        "صيام رمضان من أهم الفرائض في الإسلام.",
        "في رمضان يصام من طلوع الشمس حتى غروبها.",
      ],
    },
    {
      question: "كم عدد أركان الإيمان في الإسلام؟",
      options: ["4", "5", "6", "7"],
      correctAnswer: "5",
      hints: [
        "أركان الإيمان هي الأمور التي يجب على المسلم أن يؤمن بها بقلبه.",
        "من أمثلة أركان الإيمان: الإيمان بالله والملائكة والكتب والأنبياء واليوم الآخر والقدر.",
        "هذه الأركان تشكل جزءًا أساسيًا من العقيدة الإسلامية.",
      ],
    },
    {
      question:
        "ما هي الكلمة التي تشير إلى الاختبارات والتجارب التي يمر بها المسلمون في الحياة والتي تؤدي إلى تنقية الروح؟",
      options: ["صلاة", "صوم", "إيمان", "اختبار"],
      correctAnswer: "صوم",
      hints: [
        "صوم هو الفترة التي يمتنع فيها المسلمون عن الأكل والشرب من طلوع الفجر إلى غروب الشمس.",
        "يعتبر صوم رمضان واجبًا دينيًا يمر به المسلمون سنويًا.",
        "يعتبر الصوم واحدًا من أهم الأعمال الصالحة في الإسلام.",
      ],
    },
  ],

  [
    {
      question: "What is the result of 5 + 7?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "12",
      hints: [
        "It's the sum of 5 and 7.",
        "You can count on your fingers to find the answer.",
      ],
    },
    {
      question: "What is 8 multiplied by 4?",
      options: ["24", "28", "32", "36"],
      correctAnswer: "32",
      hints: [
        "It's the result of repeated addition.",
        "Think of 8 added to itself 4 times.",
      ],
    },
    {
      question:
        "If you have 15 apples and you eat 3 of them, how many apples do you have left?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "12",
      hints: [
        "Start with 15 apples.",
        "Subtract the number you ate to find the answer.",
      ],
    },
    {
      question: "What is 20 divided by 4?",
      options: ["4", "5", "6", "7"],
      correctAnswer: "5",
      hints: [
        "It's the result of sharing 20 equally among 4 groups.",
        "Think of how many are in each group.",
      ],
    },
    {
      question:
        "If you have a square with a side length of 6 units, what is its area?",
      options: ["24", "30", "36", "42"],
      correctAnswer: "36",
      hints: [
        "The area of a square is calculated by multiplying its side length by itself.",
        "Area = side length × side length.",
      ],
    },
  ],
  [
    {
      question: "من هو الملك الذي بنى الأهرامات في مصر؟",
      options: [
        "الفرعون توت عنخ آمون",
        "الفرعون خوفو",
        "الفرعون رمسيس الثاني",
        "الفرعون حتشبسوت",
      ],
      correctAnswer: "الفرعون خوفو",
      hints: [
        "هذا الفرعون بنى الهرم الأكبر.",
        "الهرم الأكبر في الجيزة يعتبر من عجائب العالم القديم.",
        "قام ببناء الأهرامات في العهد القديم.",
        "اشتهر بلقب 'خوفو الكبير'.",
      ],
    },
    {
      question: "ما هي الحضارة التي بنت المدينة المحظورة في الصين؟",
      options: [
        "الحضارة المصرية القديمة",
        "الحضارة الهندية القديمة",
        "الحضارة الصينية القديمة",
        "الحضارة اليونانية القديمة",
      ],
      correctAnswer: "الحضارة الصينية القديمة",
      hints: [
        "تعتبر المدينة المحظورة في بكين أحد أبرز معالم هذه الحضارة.",
        "الصين تمتلك إرثًا ثقافيًا غنيًا ومذهلًا.",
        "الحضارة الصينية شهدت تطورات هائلة في العلوم والفنون.",
        "الكتابة الصينية تعتبر واحدة من أقدم أنظمة الكتابة في العالم.",
      ],
    },
    {
      question: "من هو المكتشف الإسباني الذي اكتشف أمريكا عام 1492؟",
      options: [
        "كريستوفر كولومبوس",
        "فيرناندو ماغلانز",
        "هرنان كورتيز",
        "ماركو بولو",
      ],
      correctAnswer: "كريستوفر كولومبوس",
      hints: [
        "اكتشف قارة أمريكا عام 1492.",
        "أدى اكتشافه إلى فتح أمريكا للاستكشاف الأوروبي.",
        "رحلته كانت بدعم من إسبانيا.",
        "أصبح كولومبوس شخصية تاريخية مهمة في الاستكشافات.",
      ],
    },
    {
      question:
        "ما هو الثورة التي أدت إلى استقلال الولايات المتحدة عن بريطانيا؟",
      options: [
        "الثورة الفرنسية",
        "الحرب الأهلية الأمريكية",
        "الحرب العالمية الثانية",
        "الثورة الروسية",
      ],
      correctAnswer: "الحرب الأهلية الأمريكية",
      hints: [
        "حرب أهلية نشبت بين الاستعمار الأمريكي والإمبراطورية البريطانية.",
        "أدت إلى إعلان استقلال الولايات المتحدة الأمريكية في 1776.",
        "أهم قادة هذه الحرب كانوا جورج واشنطن وتوماس جيفرسون.",
        "هذا الحدث يعتبر من الأحداث الهامة في تاريخ الولايات المتحدة.",
      ],
    },
    {
      question:
        "ما هو الحدث التاريخي الذي وقع في 1969 عندما هبط أول رجل على سطح القمر؟",
      options: [
        "هبوط أبولو 11",
        "غزو أبولو 13",
        "إطلاق سبوتنيك",
        "مهمة سكايلاب",
      ],
      correctAnswer: "هبوط أبولو 11",
      hints: [
        "هذا الحدث وقع خلال برنامج أبولو الفضائي.",
        "نيل أرمسترونج وباز ألدرين هما أول رجلين هبطا على سطح القمر.",
        "هبطوا على القمر في يوليو 1969.",
        "هذا الحدث كان إنجازًا فضائيًا تاريخيًا.",
      ],
    },
    {
      question: "من هو المؤسس الشهير للإمبراطورية الصينية القديمة؟",
      options: ["جنكيز خان", "هانيبال بركة", "قوتاما بودا", "قوانغ أن"],
      correctAnswer: "قوتاما بودا",
      hints: [
        "قوتاما بودا هو مؤسس الإمبراطورية الصينية القديمة.",
        "الإمبراطورية الصينية قامت في عهده.",
        "تميزت الإمبراطورية الصينية بالفلسفة الكونفوشيوسية.",
        "الصين القديمة شهدت تقدمًا في الفنون والعلوم.",
      ],
    },
    {
      question: "ما هو الحضارة التي بنت الأهرامات وعبور الكتب القديمة؟",
      options: [
        "الحضارة الصينية",
        "الحضارة المصرية",
        "الحضارة الهندية",
        "الحضارة الإغريقية",
      ],
      correctAnswer: "الحضارة المصرية",
      hints: [
        "الأهرامات هي من بناها الفراعنة في مصر القديمة.",
        "الكتابة الهيروغليفية شهدت تطورًا كبيرًا في مصر.",
        "النيل كان مصدر حضارة مصر القديمة.",
        "الأهرامات والأهرامات الأخرى تعتبر من أبرز معالم هذه الحضارة.",
      ],
    },
    {
      question:
        "ما هو الثورة التي قادها مارتن لوثر كينغ للمطالبة بحقوق المواطنين الأمريكيين من أصل أفريقي؟",
      options: [
        "الحركة النسوية",
        "حركة الحقوق المدنية",
        "الحركة الانفصالية",
        "الحركة الصناعية",
      ],
      correctAnswer: "حركة الحقوق المدنية",
      hints: [
        "مارتن لوثر كينغ قاد هذه الحركة.",
        "تسعى للمساواة والحقوق المدنية للأمريكيين من أصل أفريقي.",
        "أحد أبرز أحداثها كانت مظاهرة واشنطن من أجل الوظائف والحرية.",
        "هذه الحركة كان لها تأثير كبير على القضايا الاجتماعية في الولايات المتحدة.",
      ],
    },
    {
      question:
        "في أي عام أعلنت الولايات المتحدة الأمريكية استقلالها عن بريطانيا؟",
      options: ["1776", "1865", "1492", "1812"],
      correctAnswer: "1776",
      hints: [
        "هذا العام هو معروف باسم 'عيد الاستقلال' في الولايات المتحدة.",
        "في هذا العام تمت إصدار إعلان الاستقلال.",
        "أدى إعلان الاستقلال إلى تأسيس الولايات المتحدة الأمريكية كدولة مستقلة.",
        "هذا الحدث هو أحد أهم الأحداث في تاريخ الولايات المتحدة.",
      ],
    },
    {
      question: "من هم الفايكنج؟",
      options: [
        "مستوطنون نورديون قدماء",
        "محاربون آسيويون",
        "مغامرون إسبان",
        "عباقرة الرياضيات اليونانيين",
      ],
      correctAnswer: "مستوطنون نورديون قدماء",
      hints: [
        "الفايكنج كانوا مستوطنين ومستكشفين نورديين في العصور الوسطى.",
        "قادوا رحلات استكشافية إلى مناطق مختلفة بما في ذلك أمريكا الشمالية.",
        "كانوا معروفين بسفنهم وقدرتهم على الإبحار عبر المحيطات.",
        "أثروا بشكل كبير على تاريخ الاستكشاف والتجارة في العصور الوسطى.",
      ],
    },
  ],
  [
    {
      question: "ما هو اسم الفاعل في الجملة: 'الولد يقرأ الكتاب.'؟",
      options: ["اسم الشيء", "اسم الفاعل", "اسم الزمان", "اسم الفعل"],
      hints: [
        "يأتي بعد الفعل في الجملة.",
        "يشير إلى من يقوم بالفعل.",
        "ما هو العنصر المحوري في الجملة الصفية؟",
        "ما هو العنصر المحوري في الجملة الفعلية؟",
      ],
      correctAnswer: "اسم الفاعل",
    },
    {
      question: "ما هو الاستفهام في النحو؟",
      options: [
        "الجملة التي تتحقق منها الحقيقة",
        "السؤال الذي يتطلب إجابة بنعم أو لا",
        "السؤال الذي يتطلب إجابة مفصلة",
        "الجملة التي تصف الحدث",
      ],
      hints: [
        "يستخدم للسؤال.",
        "يتطلب إجابة مفصلة.",
        "ما هو النوع الشائع من الأسئلة في اللغة العربية؟",
        "ما هي طرق طرح الأسئلة في النحو؟",
      ],
      correctAnswer: "السؤال الذي يتطلب إجابة مفصلة",
    },
    {
      question:
        "ما هو التمييز بين الحروف الزائدة والحروف المفردة في اللغة العربية؟",
      options: [
        "الحروف الزائدة تتبع الحروف المشددة في الكلمة.",
        "الحروف الزائدة تظهر في الكلمة مرة واحدة فقط.",
        "الحروف المفردة تظهر في الكلمة مرة واحدة فقط.",
        "الحروف المفردة تتبع الحروف المشددة في الكلمة.",
      ],
      hints: [
        "الحروف الزائدة تظهر أكثر من مرة في الكلمة.",
        "الحروف المفردة تظهر مرة واحدة فقط.",
        "ما هو الاستخدام الشائع للحروف الزائدة في القرآن؟",
        "ما هو الاستخدام الشائع للحروف المفردة في النصوص العربية؟",
      ],
      correctAnswer: "الحروف الزائدة تتبع الحروف المشددة في الكلمة.",
    },
    {
      question:
        "ما هو الكلمة الوحيدة في الجملة التالية: 'ذهب الولد إلى المدرسة.'؟",
      options: ["الولد", "إلى", "المدرسة", "ذهب"],
      hints: [
        "تحتوي على المعنى.",
        "تأتي بعد الضمير.",
        "ما هو الكلمة التي تحمل المعنى الأساسي في الجملة؟",
        "ما هو النوع الشائع من الكلمات في الجملة؟",
      ],
      correctAnswer: "المدرسة",
    },
    {
      question: "ما هو الاختلاف بين الإضافة والمضاف في اللغة العربية؟",
      options: [
        "الإضافة تأتي بعد الاسم، بينما المضاف تأتي بعد الفعل.",
        "الإضافة تأتي بعد الفعل، بينما المضاف تأتي بعد الاسم.",
        "الإضافة توضح الإضافة الزمنية، بينما المضاف توضح الإضافة النكرة.",
        "الإضافة توضح الإضافة النكرة، بينما المضاف توضح الإضافة الزمنية.",
      ],
      hints: [
        "تتعلق بترتيب الكلم في الجملة.",
        "توضح العلاقة بين الكلمتين.",
        "ما هو الاستخدام الشائع للإضافة في النصوص؟",
        "ما هو الاستخدام الشائع للمضاف في اللغة العربية؟",
      ],
      correctAnswer: "الإضافة تأتي بعد الاسم، بينما المضاف تأتي بعد الفعل.",
    },
  ],
];

//

const lettersBox = document.querySelector(".letters-box");
const word = document.querySelector(".answer");
const bg = document.querySelector(".bg");
const hintBtn = document.querySelector(".hint");
const allHint = document.querySelectorAll(".info");
const answerNum = document.querySelector(".answer-num");
const allAnswerNum = document.querySelector(".all-answer-num");
const resultBox = document.querySelector(".result-box");
const wrongAnswers = document.querySelector(".wrong-answers");
const restartBtn = document.querySelector(".restart-btn");
const menuBtn = document.querySelector(".menu-btn");
let questionsIndex = 0;
let catigoryIndex = parseInt(localStorage.getItem("index"));
let hintIndex = 0;
let stopHintIndex = false;
let numOfHints = 0;
let wrongAnswersArr = [];
let score = 0;

//puth questions to mian game
function setQuestions(q, h, ch) {
  let question = document.querySelector(".quetion");
  let hints = document.querySelectorAll("li");
  const choices = document.querySelectorAll(".choice");
  question.innerHTML = q;
  numOfHints = 0;
  for (let i = 0; i < h.length; i++) {
    numOfHints++;
  }
  for (let i = 0; i < ch.length; i++) {
    choices[i].innerHTML = ch[i];
  }
}
// create list of wrong answers
function createListOfWrong(q, a) {
  let li = document.createElement("li");
  li.innerHTML = `${q}   the answer is : <br> " <span> ${a}</span> "`;
  return li;
}

// reset data
function reset(e) {
  e.innerHTML = "Drop The Correct Answer";
  e.style.color = "#aaa";
  e.style.backgroundColor = "#fff";
}

// drag and drop functions
function dragStart(e) {
  e.dataTransfer.setData("txt", e.target.innerHTML);
  e.target.p;
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
    score++;
  } else {
    e.target.style.backgroundColor = "#f30000";
    e.target.style.color = "#fff";
    wrongAnswers.appendChild(
      createListOfWrong(questions[catigoryIndex][questionsIndex].question, ans)
    );
  }
  passToAotherQ(e.target);
}
//
function passToAotherQ(e) {
  setTimeout(() => {
    questionsIndex++;
    if (questionsIndex >= questions[catigoryIndex].length) {
      // catigoryIndex++;
      resultBox.style.height = "calc(100% - 20px)";
      allAnswerNum.innerHTML = questions[catigoryIndex].length;
      answerNum.innerHTML = score;
    } else {
      setQuestions(
        questions[catigoryIndex][questionsIndex].question,
        questions[catigoryIndex][questionsIndex].hints,
        questions[catigoryIndex][questionsIndex].options
      );
    }
    reset(e);
  }, 1000);
}
// event
// add hint

menuBtn.addEventListener("click", () => {
  location.href = "./../main.html";
});
restartBtn.addEventListener("click", () => {
  questionsIndex = 0;
  resultBox.style.height = "0px";
  wrongAnswers.innerHTML = "";
  score = 0;
  reset(word);
});

//add questions
setQuestions(
  questions[catigoryIndex][questionsIndex].question,
  questions[catigoryIndex][questionsIndex].hints,
  questions[catigoryIndex][questionsIndex].options
);
