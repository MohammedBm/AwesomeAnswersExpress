const express = require('express');
const router = express.Router();
const {Question} = require('../models');

//questions#index path: /quesitons method: get
router.get('/', function(req, res, next) {
  Question
    .all()
    .then(questions => {
      //to pass a varible isnide a template, pass an object as a second arguemnt to res.render. all the proprties of that object willl be avalibale as local varibles inside o
      res.render('questions/index', {questions});
    })
});

module.exports = router;
