const NUM_DOODLES = 40;
const doodleContainer = document.querySelector('.doodle-container');

for (let i = 0; i < NUM_DOODLES; i++) {
    createDoodle();
}

function createDoodle() {
    const svgs = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="135" height="50" viewBox="0 0 135 50" fill="none">
    <path d="M131.826 25.0497C131.826 25.0497 119.602 11.6797 109.065 8.91515C95.0648 5.24233 85.1175 26.0071 86.0686 36.3155C87.0197 46.6239 96.4998 47.6299 102.587 46.7019C108.674 45.774 113.261 37.8539 111.076 28.8929C108.89 19.9318 94.4654 3.03608 74.4681 4.64001C54.4708 6.24394 44.8678 17.7772 52.7229 29.7164C55.5996 34.0889 59.3299 36.3205 63.2211 37.603C67.1123 38.8854 75.1411 36.6469 74.4455 27.9741C73.7498 19.3013 56.9343 4.68971 42.6292 7.19373C29.8172 9.43639 17.8283 19.7568 18.6845 30.4316C19.5407 41.1065 29.0296 40.3454 31.0686 40.1818C33.1075 40.0183 38.6084 38.7372 39.0776 30.8108C39.5468 22.8844 33.6842 -1.99277 3.0357 4.57832" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="48" viewBox="0 0 52 48" fill="none">
    <path d="M48.4382 12.5C39.5672 13.6424 18.0602 19.6483 2.99991 34.532" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
    <path d="M45.3122 32.0413C36.1158 29.3174 17.2412 19.9595 15.3146 4.3197" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
  </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="68" height="60" viewBox="0 0 68 60" fill="none">
  <path d="M7.46691 48.3693C4.84545 37.3462 0.620269 15.1139 4.69125 14.3687C9.77997 13.4372 19.9574 34.3964 20.42 39.9856C20.8826 45.5747 21.3452 9.71098 27.8218 3.65608C34.2984 -2.39882 33.8357 35.328 31.9853 39.9856C30.1349 44.6431 54.6534 18.0945 63.443 19.4918C72.2326 20.8891 41.7005 60.4788 24.5837 56.7527" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="68" height="60" viewBox="0 0 68 60" fill="none">
<path d="M7.46691 48.3693C4.84545 37.3462 0.620269 15.1139 4.69125 14.3687C9.77997 13.4372 19.9574 34.3964 20.42 39.9856C20.8826 45.5747 21.3452 9.71098 27.8218 3.65608C34.2984 -2.39882 33.8357 35.328 31.9853 39.9856C30.1349 44.6431 54.6534 18.0945 63.443 19.4918C72.2326 20.8891 41.7005 60.4788 24.5837 56.7527" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
<path d="M46.9709 36.0474C49.9819 36.0474 44.8478 -0.836878 57.6855 3.3279C69.8912 7.28766 52.8242 36.0474 55.6921 36.0474C58.56 36.0474 78.6044 34.3914 79.9389 43.4093C81.4292 53.4807 55.171 47.8433 54.3887 49.1352C53.6064 50.4271 64.6986 65.7233 57.6855 70.4029C50.42 75.2509 41.1427 57.3151 39.5531 57.3151C37.9634 57.3151 29.7472 86.6978 23.069 78.5828C17.6417 71.9876 30.5793 57.3151 28.0142 57.3151C25.4491 57.3151 6.31206 58.8057 3.28822 49.1352C-0.407272 37.3167 32.6187 45.7561 34.6078 43.4093C36.597 41.0625 18.6888 22.2246 28.0142 17.2337C37.2219 12.3058 43.9598 36.0474 46.9709 36.0474Z" stroke="#A5DC60" stroke-width="5" stroke-linecap="round"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="103" height="84" viewBox="0 0 103 84" fill="none">
<path d="M60.8924 11.0568C72.2245 4.0897 82.8586 2.79837 86.7591 3.0236" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M32.4816 53.3286C24.2313 53.1305 18.1269 55.7576 16.106 57.0959" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M67.8891 26.9584C81.9149 18.1578 95.0768 16.5267 99.9045 16.8112" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M34.2855 72.175C22.5199 71.7852 13.8497 75.4912 10.9852 77.393" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M64.9207 17.8414C71.0512 13.2578 76.8041 12.4082 78.9142 12.5564" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M34.3897 62.9909C18.2182 61.1266 6.73618 65.721 3.01663 68.2512" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="74" height="59" viewBox="0 0 74 59" fill="none">
<path d="M26.8041 22.1376C30.3205 20.573 37.4314 0.780492 39.8538 3.20566C42.2762 5.63083 45.8708 22.1376 48.1368 22.1376C50.4029 22.1376 72.1264 16.2703 70.9543 18.3043C69.7821 20.3383 52.6691 33.4811 52.7472 36.5322C52.8253 39.5832 60.0925 55.8553 57.8264 55.8553C55.5603 55.8553 40.4789 41.7736 37.4314 41.9301C34.3839 42.0866 15.6298 57.6546 14.1451 55.8553C12.6604 54.0559 22.4282 38.7226 21.4905 36.5322C20.5528 34.3417 0.392174 18.3043 3.28342 18.3043C6.17467 18.3043 23.2877 23.7022 26.8041 22.1376Z" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="93" height="65" viewBox="0 0 93 65" fill="none">
<path d="M75.5279 22.8067C75.5279 22.8067 81.9282 16.4759 87.5346 15.3844" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M69.3326 20.9772C69.3326 20.9772 68.1751 6.43391 65.7358 3.15936" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M78.0896 30.875C78.0896 30.875 87.6039 29.574 89.5687 30.9417" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M21.2966 43.49C21.2966 43.49 14.3633 41.3625 3.83185 50.3663" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M25.0106 48.4014C25.0106 48.4014 21.0218 57.626 21.2806 61.7178" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
<path d="M22.3315 36.0197C22.3315 36.0197 16.8738 36.0197 12.4237 30.2224" stroke="#A5DC60" stroke-width="6" stroke-linecap="round"/>
</svg>`
];
    const svgText = svgs[Math.floor(Math.random() * svgs.length)];
    const doodle = new DOMParser().parseFromString(svgText, 'image/svg+xml').documentElement;
    doodle.className = 'doodle';

    // Randomize position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    doodle.style.position = 'absolute';
    doodle.style.left = `${x}px`;
    doodle.style.top = `${y}px`;
    doodle.style.width = `30px`;
    doodle.style.height = `30px`;

    doodleContainer.appendChild(doodle);
}

const questions = [
    {
        question: "What is not a wind instrument?",
        answers: [
            { text: "Oboek", correct: false},
            { text: "Viola", correct: true},
            { text: "Trombone", correct: false},
            { text: "Duduk", correct: false},
        ],
        hint: "Hint: It's the largest mammal on Earth.",
        skipped: false,
    },
    {
        question: "Who is the frontman of the band 30 Seconds to Mars?",
        answers: [
            { text: "Jared Leto", correct: true},
            { text: "Gerard Way", correct: false},
            { text: "Mecury", correct: false},
            { text: "Mars", correct: false},
        ],
        hint: "Hint: It starts with 'J'.",
        skipped: false,
    },
    {
        question: "Who is the lead singer of the band Coldplay?",
        answers: [
            { text: "Chris Isaak", correct: false},
            { text: "Chris Martin", correct: true},
            { text: "Chris Wallace", correct: false},
            { text: "Chris Connelly", correct: false},
        ],
        hint: "Hint: It starts with 'm'.",
        skipped: false,
    },
    {
        question: "Where did afrobeat music originate?",
        answers: [
            { text: "ivory coast", correct: false},
            { text: "gabon", correct: false},
            { text: "south africa", correct: false},
            { text: "ghana and nigeria", correct: true},
        ],
        hint: "Hint: in west africa",
        skipped: false,
    }
]
    let questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const hintButtons = document.getElementById('hints-btn');
    const hints = document.getElementById('hint');
    


    let currentQuestionIndex = 0;
    const totalTime = 30;
    let score = 0;
    let timer;
    let timeLeft = totalTime;

    const timerElement = document.getElementById("timer");

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.innerText = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft === 0) {
            clearInterval(timer);
            timeLeft = 0;
            showScore();
            resetState();
            nextButton.innerHTML = "Try again";
            nextButton.style.display = "block";
        }else{
            timeLeft--;
        }
    }
    
    function resetTimer() {
        clearInterval(timer);
        timeLeft = totalTime;
        updateTimer();
        timer = setInterval(updateTimer, 1000);
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        resetTimer();
        showQuestion();
    }



    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        resetTimer();
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        hints.textContent = currentQuestion.hint;
        hints.style.display = "none";

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });

        nextButton.innerHTML = "Next";
        nextButton.style.display = "block";
    }

    function resetState(){
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }

    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";

        

        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }

        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });

        if (currentQuestionIndex === questions.length - 1){
            showScore();
        } else {
            nextButton.style.display = "block";
        }
        
        }

        function showScore(){
            resetState();
            questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "Play Again";
            nextButton.style.display = "block";
        }

        function handleNextButton(){
            currentQuestionIndex++;
            if(currentQuestionIndex < questions.length){
                showQuestion();
            }else{
                showScore();
            }
        }

       function handleTryAgainButton(){
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length){
                showQuestion();
                resetTimer();
            }
            else{
                if(timeLeft === 0){
                    startQuiz();
                }
                else{
                    resetQuiz();
                }
            }
        }
        nextButton.addEventListener("click", ()=>{
            if (timeLeft === 0) {
                startQuiz();
            } else if(currentQuestionIndex < questions.length){
                handleNextButton();
            } else {
                handleTryAgainButton();
            }
        
        });

        hintButtons.addEventListener("click", () => {
            if (hints.style.display === "none") {
                hints.style.display = "block";
            } else {
                hints.style.display = "none";
            }
        });
        

       


startQuiz();
updateTimer();
