const startb = document.getElementById('startb');
const nextb = document.getElementById('nextb');
const questionc = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const ansb = document.getElementById('ansb');
const body = document.getElementById('body');
const para = document.getElementById('finalScore');
let scoreBuf = 0;
let shuffledq, currentqindex;

const questions = [
    {
        question: 'Where was Calvin Coolidge born?',
        answers: [
          { text: 'New York' ,correct: false},
          
          { text: 'Massachusetts' ,correct: false},
          { text: 'Vermont' ,correct: true},
          { text: 'Connecticut' ,correct: false},
        ]
      },
      {
        question: 'In which year did Harding die while serving as president?',
        answers: [
          { text: '1921' ,correct: false},
          { text: '1922' ,correct: false},
          { text: '1923 ' ,correct: true},
          { text: '1924' ,correct: false},
        ]
      },

    
      {
        question: 'In which years did Dwight D. Eisenhower serve as President of the United States?',
        answers: [
          { text: '1951-1959' ,correct: false},
          { text: '1953-1961' ,correct: true},
          { text: '1955-1963' ,correct: false},
          { text: '1957-1965' ,correct: false},
        ]
      },
      {
        question: "What was Harry S. Truman's political party?",
        answers: [
          { text: 'Democrat ' ,correct: true},
          { text: 'Republican' ,correct: false},
          
          { text: 'Independent' ,correct: false},
          { text: 'Libertarian' ,correct: false},
        ]
      },
      {
        question: "What was Franklin D. Roosevelt's party affiliation during his presidency?",
        answers: [
          { text: 'Republican' ,correct: false},
          { text: 'Democrat' ,correct: true},
          { text: 'Independent' ,correct: false},
          { text: 'None of the above' ,correct: false},
        ]
      },
      {
        question: 'How long did Herbert Hoover serve as President of the United States?',
        answers: [
          { text: '2 years' ,correct: false},
          { text: '3 years' ,correct: false},
          { text: '4 years' ,correct: true},
          { text: '5 years' ,correct: false},
        ]
      },

      {
        question: 'In what year did John F. Kennedy become the 35th president of the United States?',
        answers: [
          { text: '1953' ,correct: false},
          { text: '1961' ,correct: true},
          { text: '1963' ,correct: false},
          { text: '1965' ,correct: false},
        ]
      },
       
      {
        question: 'Who was the 36th President of the United States?',
        answers: [
          { text: 'John F. Kennedy' ,correct: false},
          
          { text: 'Richard Nixon' ,correct: false},
          { text: 'Gerald Ford' ,correct: false},
          { text: 'Lyndon B. Johnson' ,correct: true},
        ]
      },
      {
        question: 'How many terms did Lyndon B. Johnson serve as President?',
        answers: [
          { text: '1' ,correct: false},
          { text: '1.5' ,correct: true},
          { text: '2' ,correct: false},
          { text: '2.5' ,correct: false},
        ]
      },
      {
        question: "What was Richard Nixon's previous role before becoming President?",
        answers: [
          { text: 'Senator from New York' ,correct: false},
          { text: 'Governor of California' ,correct: false},
          { text: 'Vice President ' ,correct: true},
          { text: 'Secretary of State' ,correct: false},
        ]
      },

       
]

startb.addEventListener('click', startquiz);
nextb.addEventListener('click', () => {
    currentqindex++;
    setnextq();
})

function startquiz(){
    para.innerText='';
    startb.classList.add('hide');
    shuffledq = questions.sort(() => Math.random() - .5);
    currentqindex = 0;
    questionc.classList.remove('hide');
    setnextq();

}

function setnextq(){
    resetState();
    showq(shuffledq[currentqindex]);
}

function showq(question){
    questionElement.innerText = question.question;
    let btnLength = 0;
    question.answers.forEach(ans => {
        const button = document.createElement('button');
        button.innerText = ans.text
        button.setAttribute('id',`btn${btnLength}`);
        btnLength++;
        button.classList.add('btn');
        if(ans.correct){
            button.dataset.correct = ans.correct
        }
        button.addEventListener('click', selectans,{once:true});
        ansb.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(body);
    nextb.classList.add('hide');
    while (ansb.firstChild) {
        ansb.removeChild(ansb.firstChild)        
    }
}

function selectans(e){
    const selb = e.target;
    const correct = selb.dataset.correct;
    if(correct){
        scoreBuf++;
    }
    const btn0 = document.getElementById('btn0');
    btn0.removeEventListener('click',selectans);
    const btn1 = document.getElementById('btn1');
    btn1.removeEventListener('click',selectans);
    const btn2 = document.getElementById('btn2');
    btn2.removeEventListener('click',selectans);
    const btn3 = document.getElementById('btn3');
    btn3.removeEventListener('click',selectans);
    setStatusClass(body, correct);
    Array.from(ansb.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledq.length > currentqindex + 1 ) {
        nextb.classList.remove('hide');
    } else {
        startb.innerText = 'Restart';
        startb.classList.remove('hide');
        console.log(scoreBuf);
        para.innerText = `You scored ${scoreBuf} out of ${shuffledq.length}.`;
        scoreBuf=0;
    }
}  

function setStatusClass(answer, correct){
    clearStatusClass(answer);
    if (correct) {
        answer.classList.add('correct');
    } else {
        answer.classList.add('wrong');
    }
}

function clearStatusClass(answer) {
    answer.classList.remove('correct');
    answer.classList.remove('wrong');
}