
const presidents = require('./presidents');
const home = require('./home');
const quiz = require('./quiz');


const constructorMethod = (app) => {
  app.use('/', home);
  app.use('/presidents', presidents);
  app.use('/quiz',quiz)
  app.use('*', (req, res) => {
    return res.status(404).render('./errorPage', {title: "Error2", error1: "Oops! the page you are searching doesn't exist"});
    
  });
};

module.exports = constructorMethod;