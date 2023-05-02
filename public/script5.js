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
        question: 'In which year did Barack Obama become the President of the United States?',
        answers: [
          { text: '2008' ,correct: false},
          { text: '2009' ,correct: true},
          { text: '2010' ,correct: false},
          { text: '2017' ,correct: false},
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