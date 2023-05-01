const startb = document.getElementById('startb');
const nextb = document.getElementById('nextb');
const questionc = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const ansb = document.getElementById('ansb');
const body = document.getElementById('body');
let scoreBuf = 0;
let shuffledq, currentqindex;

const questions = [
    {
        question: "What was John Tyler's role before he became president?",
        answers: [
          { text: 'Vice President' ,correct: true},
          { text: 'Secretary of State' ,correct: false},
          { text: 'Speaker of the House' ,correct: false},
          { text: 'Governor of Virginia' ,correct: false},
        ]
    },
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
        question: 'Which party did Chester Arthur belong to?',
        answers: [
          { text: 'Democratic' ,correct: false},
          { text: 'Republican' ,correct: true},
          { text: 'Whig' ,correct: false},
          { text: 'Federalist' ,correct: false},
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
          { text: 'Grover Cleveland' ,correct: true},
          { text: 'Rutherford B. Hayes' ,correct: false},
          { text: 'James A. Garfield' ,correct: false},
          { text: 'Chester Arthur' ,correct: false},
        ]
      },
      {
        question: 'Which political party did Grover Cleveland belong to?',
        answers: [
          { text: 'Republican' ,correct: false},
          { text: 'Democrat' ,correct: true},
          { text: 'National Union' ,correct: false},
          { text: 'Whig' ,correct: false},
        ]
      },
      {
        question: 'What party did Benjamin Harrison belong to?',
        answers: [
          { text: 'Democrat' ,correct: false},
          { text: 'Republican' ,correct: true},
          { text: 'National Union' ,correct: false},
          { text: 'Whig' ,correct: false},
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
        question: 'Which party did Grover Cleveland belong to during his presidency?',
        answers: [
          { text: 'Republican' ,correct: false},
          { text: 'Democratic' ,correct: true},
          { text: 'Whig' ,correct: false},
          { text: 'Federalist' ,correct: false},
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
        question: "What was William McKinley's political party affiliation?",
        answers: [
          { text: 'Democrat' ,correct: false},
          { text: 'Republican ' ,correct: true},
          { text: 'Independent' ,correct: false},
          { text: 'Whig' ,correct: false},
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
        question: 'Which political party did William Howard Taft belong to?',
        answers: [
          { text: 'Democratic' ,correct: false},
          { text: 'Republican' ,correct: true},
          { text: 'Whig' ,correct: false},
          { text: 'Libertarian' ,correct: false},
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
        question: 'Which political party did Woodrow Wilson belong to?',
        answers: [
          { text: 'Republican' ,correct: false},
          { text: 'Democrat' ,correct: true},
          { text: 'Independent' ,correct: false},
          { text: 'Green' ,correct: false},
        ]
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
          { text: 'Republican' ,correct: true},
          { text: 'Independent' ,correct: false},
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
    question.answers.forEach(ans => {
        const button = document.createElement('button');
        button.innerText = ans.text
        button.classList.add('btn');
        if(ans.correct){
            button.dataset.correct = ans.correct
        }
        button.addEventListener('click', selectans);
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
    setStatusClass(body, correct);
    Array.from(ansb.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledq.length > currentqindex + 1 ) {
        nextb.classList.remove('hide');
    } else {
        startb.innerText = 'Restart';
        startb.classList.remove('hide');
        alert(`You scored ${scoreBuf} out of ${shuffledq.length}.`);
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