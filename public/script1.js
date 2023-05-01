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
        question: 'Who was the first president of the usa?',
        answers: [
            { text: 'Barack Obama', correct: false},
            { text: 'George Washington', correct: true},
            { text: 'James Madison', correct: false},
            { text: 'Franklin D. Roosevelt', correct: false}         
        ]
    },
    
    {
        question: 'What was George Washington`s political party during his presidency?',
        answers: [
            { text: 'Democratic-Republican', correct: false},
            { text: 'Federalist', correct: true},
            { text: 'Whig', correct: false},
            { text: 'Libertarian', correct: false}         
        ]
    },

    {
        question: 'In which years did George Washington serve as the President of the United States?',
        answers: [
            { text: '1797-1801', correct: false},
            { text: '1789-1793', correct: false},
            { text: '1801-1805', correct: false},
            { text: '1789-1797', correct: true}         
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
        question: 'During which years did John Adams serve as the second President of the United States?',
        answers: [
          { text: '1797-1801' ,correct: true},
          { text: '1789-1793' , correct: false},
          { text: '1801-1805' , correct: false},
          { text: '1805-1809' , correct: false}
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
        question: 'During which years did Thomas Jefferson serve as the President of the United States?',
        answers: [
          { text: '1789-1793' ,correct: false},
          { text: '1797-1801' ,correct: false},
          { text: '1801-1809' ,correct: true},
          { text: '1805-1809' ,correct: false},
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
        question: 'Which political party did James Monroe belong to during his presidency?',
        answers: [
          { text: 'Federalist' ,correct: false},
          { text: 'Whig' ,correct: false},
          { text: 'Democratic-Republican' ,correct: true},
          { text: 'Libertarian' ,correct: false},
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
        question: 'Which political party did John Quincy Adams belong to during his presidency?',
        answers: [
          { text: 'Federalist' ,correct: false},
          { text: 'Whig' ,correct: false},
          { text: 'Democratic-Republican' ,correct: true},
          { text: 'Libertarian' ,correct: false},
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
        question: "What is Andrew Jackson's background before he was elected as president?",
        answers: [
          { text: 'He was a farmer' ,correct: false},
          { text: 'He was a doctor' ,correct: false},
          { text: 'He was a lawyer, general, and statesman' ,correct: true},
          { text: 'He was a musician' ,correct: false},
        ]
    },

    {
        question: 'How many years did Martin Van Buren serve as president of the United States?',
        answers: [ { text: '1' ,correct: false}, { text: '2' ,correct: false}, { text: '4' ,correct: true}, { text: '8' ,correct: false}, ]
    },

    {
        question: 'What state did Martin Van Buren serve as governor before becoming president?',
        answers: [
          { text: 'New York' ,correct: true},
          { text: 'Virginia' ,correct: false},
          { text: 'Massachusetts' ,correct: false},
          { text: 'Pennsylvania' ,correct: false},
        ]
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
    {
        question: "What was William Henry Harrison's profession before he became President?",
        answers: [
          { text: 'Military officer' ,correct: true},
          { text: 'Lawyer' ,correct: false},
          { text: 'Farmer' ,correct: false},
          { text: 'Physician' ,correct: false},
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
        console.log(scoreBuf);
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
