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
        question: 'Where was Calvin Coolidge born?',
        answers: [
          { text: 'New York' ,correct: false},
          { text: 'Vermont' ,correct: true},
          { text: 'Massachusetts' ,correct: false},
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
        question: 'How many years did Calvin Coolidge serve as President of the United States?',
        answers: [ { text: '2' ,correct: false}, { text: '3' ,correct: false}, { text: '4' ,correct: true}, { text: '6' ,correct: false}, ]
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
          { text: 'Republican' ,correct: false},
          { text: 'Democrat ' ,correct: true},
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
          { text: 'Lyndon B. Johnson' ,correct: true},
          { text: 'Richard Nixon' ,correct: false},
          { text: 'Gerald Ford' ,correct: false},
        ]
      },
      {
        question: 'How many terms did Lyndon B. Johnson serve as President?',
        answers: [
          { text: '1' ,correct: false},
          { text: '1.5(1 full term + half a term)' ,correct: true},
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

      {
        question: 'How long did Gerald Ford serve as president?',
        answers: [
          { text: '1 year' ,correct: false},
          { text: '2 years' ,correct: false},
          { text: '3 years' ,correct: true},
          { text: '4 years' ,correct: false},
        ]
      },
      {
        question: 'In which state did Jimmy Carter serve as a senator before becoming governor?',
        answers: [
          { text: 'Florida' ,correct: false},
          { text: 'Alabama' ,correct: false},
          { text: 'Georgia' ,correct: true},
          { text: 'South Carolina' ,correct: false},
        ]
      },
      {
        question: 'How many terms did Jimmy Carter serve as the President of the United States?',
        answers: [ { text: '1' ,correct: true}, { text: '2' ,correct: false}, { text: '3' ,correct: false}, { text: '4' ,correct: false}, ]
      },
      {
        question: 'Before becoming president, Gerald Ford served as the leader of which party in the House of Representatives?',
        answers: [
          { text: 'Democratic' ,correct: false},
          { text: 'Green' ,correct: false},
          { text: 'Libertarian' ,correct: false},
          { text: 'Republican' ,correct: true},
        ]
      },
      {
        question: 'When was Richard Nixon born?',
        answers: [
          { text: '1900' ,correct: false},
          { text: '1913 ' ,correct: true},
          { text: '1920' ,correct: false},
          { text: '1932' ,correct: false},
        ]
      },

      {
        question: 'How long did Gerald Ford serve as president?',
        answers: [
          { text: '1 year' ,correct: false},
          { text: '2 years' ,correct: false},
          { text: '3 years' ,correct: true},
          { text: '4 years' ,correct: false},
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