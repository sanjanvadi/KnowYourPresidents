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
        question: "What was Ronald Reagan's profession before entering politics?",
        answers: [
          { text: 'Lawyer' ,correct: false},
          { text: 'Doctor' ,correct: false},
          { text: 'Actor' ,correct: true},
          { text: 'Scientist' ,correct: false},
        ]
      },
      {
        question: 'When did George Bush serve as the President of the United States?',
        answers: [
          { text: '1981-1989' ,correct: false},
          { text: '1989-1993' ,correct: true},
          { text: '1993-2001' ,correct: false},
          { text: '2001-2009' ,correct: false},
        ]
      },
      {
        question: "What was George Bush's political affiliation?",
        answers: [
          { text: 'Democrat' ,correct: false},
          { text: 'Republican' ,correct: true},
          { text: 'Independent' ,correct: false},
          { text: 'Libertarian' ,correct: false},
        ]
      },
      {
        question: 'What was the political party affiliation of President Bill Clinton?',
        answers: [
          { text: 'Republican' ,correct: false},
          { text: 'Democrat ' ,correct: true},
          { text: 'Independent' ,correct: false},
          { text: 'Green Party' ,correct: false},
        ]
      },
      {
        question: 'How many terms did Ronald Reagan serve as the President of the United States?',
        answers: [ { text: '1' ,correct: false}, { text: '2' ,correct: true}, { text: '3' ,correct: false}, { text: '4' ,correct: false}, ]
      },

      {
        question: 'What political party did George W. Bush belong to?',
        answers: [
          { text: 'Democratic' ,correct: false},
          { text: 'Independent' ,correct: false},
          { text: 'Libertarian' ,correct: false},
          { text: 'Republican' ,correct: true},
        ]
      },
      {
        question: 'In which year did Barack Obama become the President of the United States?',
        answers: [
          { text: '2008' ,correct: false},
          { text: '2009' ,correct: true},
          { text: '2010' ,correct: false},
          { text: '2017' ,correct: false},
        ]
      },
      {
        question: "What was Barack Obama's political affiliation during his presidency?",
        answers: [
          { text: 'Republican' ,correct: false},
          { text: 'Democrat' ,correct: true},
          { text: 'Independent' ,correct: false},
          { text: 'Libertarian' ,correct: false},
        ]
      },
      {
        question: 'In which year did George W. Bush become the President of the United States?',
        answers: [
          { text: '1995' ,correct: false},
          { text: '2000' ,correct: false},
          { text: '2001' ,correct: true},
          { text: '2009' ,correct: false},
        ]
      },
      {
        question: 'From which state did Bill Clinton serve as the governor before becoming the President?',
        answers: [
          { text: 'New York' ,correct: false},
          { text: 'Arkansas ' ,correct: true},
          { text: 'California' ,correct: false},
          { text: 'Texas' ,correct: false},
        ]
      },

      {
        question: "What was Donald Trump's political party affiliation during his presidency?",
        answers: [
          { text: 'Democratic' ,correct: false},
          { text: 'Republican' ,correct: true},
          { text: 'Libertarian' ,correct: false},
          { text: 'Independent' ,correct: false},
        ]
      },
      {
        question: 'In which year did Donald Trump become the President of the United States?',
        answers: [
          { text: '2015' ,correct: false},
          { text: '2016' ,correct: false},
          { text: '2017' ,correct: true},
          { text: '2018' ,correct: false},
        ]
    },
    {
        question: 'How long did Joe Biden serve as the Vice President of the United States under Barack Obama?',
        answers: [
          { text: '4 years' ,correct: false},
          { text: '6 years' ,correct: false},
          { text: '8 years' ,correct: true},
          { text: '10 years' ,correct: false},
        ]
    },
    {
        question: 'What state did Joe Biden represent in the United States Senate?',
        answers: [
          { text: 'Delaware' ,correct: true},
          { text: 'New York' ,correct: false},
          { text: 'California' ,correct: false},
          { text: 'Texas' ,correct: false},
        ]
    }
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