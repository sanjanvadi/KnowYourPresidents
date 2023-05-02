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
        question: 'Which political party did John Tyler belong to?',
        answers: [
          { text: 'Democratic-Republican' ,correct: false},
          { text: 'Federalist' ,correct: false},
          { text: 'Whig' ,correct: true},
          { text: 'Democratic' ,correct: false},
        ]
    },
    
    {
        question: 'How long did James K. Polk serve as the President of the United States?',
        answers: [
          { text: '2 years' ,correct: false},
          { text: '3 years' ,correct: false},
          { text: '4 years' ,correct: true},
          { text: '5 years' ,correct: false},
        ]
    },
    {
        question: 'Which president served only one year out of a four-year term before his death in 1850?',
        answers: [
          { text: 'John Tyler' ,correct: false},
          { text: 'James K. Polk' ,correct: false},
          { text: 'William Henry Harrison' ,correct: false},
          { text: 'Zachary Taylor' ,correct: true},
        ]
    },
    
    {
        question: "What was Millard Fillmore's political party affiliation during his presidency?",
        answers: [
          { text: 'Democrat' ,correct: false},
          { text: 'Republican' ,correct: false},
          { text: 'Whig ' ,correct: true},
          { text: 'Independent' ,correct: false},
        ]
    },
    
    {
        question: "What was Franklin Pierce's political party?",
        answers: [
          { text: 'Whig' ,correct: false},
          { text: 'Republican' ,correct: false},
          { text: 'Democrat' ,correct: true},
          { text: 'Independent' ,correct: false},
        ]
    },


    {
        question: 'How long did Abraham Lincoln serve as the President of the United States?',
        answers: [
          { text: '4 years ' ,correct: true},
          { text: '6 years' ,correct: false},
          { text: '8 years' ,correct: false},
          { text: '10 years' ,correct: false},
        ]
    },
    {
        question: 'Who was the 17th president of the United States?',
        answers: [
          { text: 'Abraham Lincoln' ,correct: false},
          { text: 'Andrew Johnson' ,correct: true},
          { text: 'James Buchanan' ,correct: false},
          { text: 'Franklin Pierce' ,correct: false},
        ]
    },
    
    
    {
        question: "Prior to becoming President, what was Ulysses S. Grant's occupation?",
        answers: [
          { text: 'Lawyer' ,correct: false},
          { text: 'Businessman' ,correct: false},
          { text: 'Military officer ' ,correct: true},
          { text: 'Farmer' ,correct: false},
        ]
    },

    {
        question: 'Which state did Rutherford B. Hayes govern before becoming president?',
        answers: [
          { text: 'Ohio' ,correct: true},
          { text: 'New York' ,correct: false},
          { text: 'Pennsylvania' ,correct: false},
          { text: 'Virginia' ,correct: false},
        ]
      },
      {
        question: 'How long did James A. Garfield serve as the 20th President of the United States?',
        answers: [
          { text: '4 years' ,correct: false},
          { text: '3 years' ,correct: false},
          { text: '2 years' ,correct: false},
          { text: '5 months' ,correct: true},
        ]
      }
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