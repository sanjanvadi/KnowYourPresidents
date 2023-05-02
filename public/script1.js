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
        question: 'Who was the first president of the usa?',
        answers: [
            { text: 'Barack Obama', correct: false},
            { text: 'George Washington', correct: true},
            { text: 'James Madison', correct: false},
            { text: 'Franklin D. Roosevelt', correct: false}         
        ]
    },

    {
        question: 'What was John Adams` occupation before becoming the President of the United States?',
        answers: [
            { text: 'Soldier', correct: false},
            { text: 'Businessman', correct: false},
            { text: 'Lawyer', correct: true},
            { text: 'Doctor', correct: false}         
        ]
    },


    {
        question: 'Which occupation did Thomas Jefferson not have in addition to being a politician?',
        answers: [
            { text: 'Diplomat', correct: false },
            { text: 'Soldier' , correct: false},
            { text: 'Lawyer', correct: true },
            { text: 'Doctor', correct: false}
        ]
    },

    {
        question: "What was James Madison's political party during his presidency?",
        answers: [
          { text: 'Federalist' ,correct: false},
          { text: 'Whig' ,correct: false},
          { text: 'Democratic-Republican' ,correct: true},
          { text: 'Libertarian' ,correct: false},
        ]
    },

    {
        question: 'During which years did James Madison serve as the President of the United States?',
        answers: [
          { text: '1801-1809' ,correct: false},
          { text: '1809-1817' ,correct: true},
          { text: '1817-1825' ,correct: false},
          { text: '1825-1829' ,correct: false},
        ]
    },

    {
        question: 'How many years did James Monroe serve as the President of the United States?',
        answers: [
          { text: '1 year' ,correct: false},
          { text: '2 years' ,correct: true},
          { text: '4 years' ,correct: false},
          { text: '8 years' ,correct: false},
        ]
    },

    {
        question: 'What position did John Quincy Adams hold prior to becoming the President of the United States?',
        answers: [
          { text: 'Secretary of State' ,correct: true},
          { text: 'Secretary of the Treasury' ,correct: false},
          { text: 'Vice President' ,correct: false},
          { text: 'Speaker of the House' ,correct: false},
        ]
    },


    {
        question: 'Who was the seventh president of the United States?',
        answers: [
          { text: 'George Washington' ,correct: false},
          { text: 'Abraham Lincoln' ,correct: false},
          { text: 'Andrew Jackson' ,correct: true},
          { text: 'Thomas Jefferson' ,correct: false},
        ]
    },

    {
        question: 'How many years did Martin Van Buren serve as president of the United States?',
        answers: [ { text: '1' ,correct: false}, { text: '2' ,correct: false}, { text: '4' ,correct: true}, { text: '8' ,correct: false}, ]
    },


    {
        question: "How long was William Henry Harrison's presidency?",
        answers: [
          { text: '1 year' ,correct: false},
          { text: '2 years' ,correct: false},
          { text: '31 days' ,correct: true},
          { text: '100 days' ,correct: false},
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
