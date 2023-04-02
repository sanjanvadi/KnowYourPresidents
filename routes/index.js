
const presidents = require('./presidents');


const constructorMethod = (app) => {
  app.use('/', presidents);
  app.use('*', (req, res) => {
    return res.status(404).render('./errorPage', {title: "Error", error1: "Oops! the page you are searching doesn't exist"});
    
  });
};

module.exports = constructorMethod;