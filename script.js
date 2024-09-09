const quizData = [
  {
    question: "What is the capital of Japan?",
    a: "Beijing",
    b: "Seoul",
    c: "Tokyo",
    d: "Bangkok",
    correct: "c",
  },
  {
    question: "Which element is found in water?",
    a: "Oxygen",
    b: "Helium",
    c: "Iron",
    d: "Carbon",
    correct: "a",
  },
  {
    question: "Who is the author of '1984'?",
    a: "J.K. Rowling",
    b: "George Orwell",
    c: "Mark Twain",
    d: "Ernest Hemingway",
    correct: "b",
  },
  {
    question: "What is the square root of 81?",
    a: "9",
    b: "8",
    c: "7",
    d: "6",
    correct: "a",
  },
  {
    question: "Which country is known for the Eiffel Tower?",
    a: "Spain",
    b: "Germany",
    c: "France",
    d: "Italy",
    correct: "c",
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    a: "Oxygen",
    b: "Hydrogen",
    c: "Nitrogen",
    d: "Carbon Dioxide",
    correct: "c",
  },
  {
    question: "What year did World War II end?",
    a: "1945",
    b: "1939",
    c: "1950",
    d: "1918",
    correct: "a",
  },
  {
    question: "What is the chemical symbol for gold?",
    a: "Go",
    b: "Gd",
    c: "Au",
    d: "Ag",
    correct: "c",
  },
];

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  $("#question").text(currentQuizData.question);
  $("#a_text").text(currentQuizData.a);
  $("#b_text").text(currentQuizData.b);
  $("#c_text").text(currentQuizData.c);
  $("#d_text").text(currentQuizData.d);
}

function deselectAnswers() {
  $(".answer").prop("checked", false);
}

function getSelected() {
  let answer = undefined;

  $(".answer").each(function () {
    if ($(this).is(":checked")) {
      answer = $(this).attr("id");
    }
  });

  return answer;
}

$("#submit").on("click", function () {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      $("body").css("background", "linear-gradient(135deg, #a3d5a5, #6dbf67)");
    } else {
      $("body").css("background", "linear-gradient(135deg, #d98880, #c0392b)");
    }

    currentQuiz++;

    setTimeout(() => {
      $("body").css("background", "linear-gradient(135deg, #d3d3d3, #a6a6a6)");

      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        $("#quiz").html(
          `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>`
        );
      }
    }, 1000);
  }
});
