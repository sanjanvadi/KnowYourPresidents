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
        question: 'Which political party did James A. Garfield belong to?',
        answers: [
          { text: 'Democratic' ,correct: false},
          { text: 'Whig' ,correct: false},
          { text: 'National Union' ,correct: false},
          { text: 'Republican' ,correct: true},
        ]
      },
    
    
      {
        question: 'When did Chester Arthur serve as the President of the United States?',
        answers: [
          { text: '1881-1885' ,correct: true},
          { text: '1877-1881' ,correct: false},
          { text: '1869-1877' ,correct: false},
          { text: '1865-1869' ,correct: false},
        ]
      },
      {
        question: 'Who was the only president in American history to serve two nonconsecutive terms in office?',
        answers: [
          
          { text: 'Rutherford B. Hayes' ,correct: false},
          { text: 'Grover Cleveland' ,correct: true},
          { text: 'James A. Garfield' ,correct: false},
          { text: 'Chester Arthur' ,correct: false},
        ]
      },
      
    
      {
        question: 'Which president was the grandson of the ninth president of the United States?',
        answers: [
          { text: 'Grover Cleveland' ,correct: false},
          { text: 'Chester Arthur' ,correct: false},
          { text: 'Benjamin Harrison' ,correct: true},
          { text: 'James A. Garfield' ,correct: false},
        ]
      },

      
      {
        question: 'When did William McKinley serve as the President of the United States?',
        answers: [
          { text: '1889-1893' ,correct: false},
          { text: '1893-1897' ,correct: false},
          { text: '1897-1901 ' ,correct: true},
          { text: '1901-1905' ,correct: false},
        ]
      },
      
      {
        question: 'Who was the 26th President of the United States?',
        answers: [
          { text: 'Thomas Jefferson' ,correct: false},
          { text: 'Theodore Roosevelt' ,correct: true},
          { text: 'Benjamin Franklin' ,correct: false},
          { text: 'John Adams' ,correct: false},
        ]
      },

      {
        question: 'How many years did William Howard Taft serve as the President of the United States?',
        answers: [ { text: '1' ,correct: true}, { text: '3' ,correct: false}, { text: '4' ,correct: false}, { text: '5' ,correct: false}, ]
      },
      
      
      {
        question: 'How many terms did Woodrow Wilson serve as the president of the United States?',
        answers: [
          { text: 'One' ,correct: false},
          { text: 'Two' ,correct: true},
          { text: 'Three' ,correct: false},
          { text: 'Four' ,correct: false},
        ]
      },

      {
        question: 'How many years did Calvin Coolidge serve as President of the United States?',
        answers: [ { text: '2' ,correct: false}, { text: '3' ,correct: false}, { text: '4' ,correct: true}, { text: '6' ,correct: false}, ]
      },
      {
        question: 'Which political party did Herbert Hoover belong to?',
        answers: [
          { text: 'Democrat' ,correct: false},
          
          { text: 'Independent' ,correct: false},
          { text: 'Republican' ,correct: true},
          { text: 'Green Party' ,correct: false},
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