const express = require('express');
const router = express.Router();
const index = require('../data/index');

router.route('/')
.get(async(req,res) => {
    try{
        if (!req.session.user) {
            return res.redirect('/sign-in');
        }
        else {
            // let data = await index.presidents.getAllPresidents();
            res.render('./quizModules',{title:'KnowYourPresidents', head:'Know Your Presidents'});
        }
    }catch(e){
        return res.status(500).render('./errorPage',{title:'Error4',head:e});
    }
})

router.route('/quiz1')
.get(async(req,res) => {
    try{
        if (!req.session.user) {
            return res.redirect('/sign-in');
        }
        else {
            // let data = await index.presidents.getAllPresidents();
            res.render('./quiz',{title:'KnowYourPresidents', head:'Know Your Presidents',quiz:'1'});
        }
    }catch(e){
        return res.status(500).render('./errorPage',{title:'Error4',head:e});
    }
})

router.route('/quiz2')
.get(async(req,res) => {
    try{
        if (!req.session.user) {
            return res.redirect('/sign-in');
        }
        else {
            // let data = await index.presidents.getAllPresidents();
            res.render('./quiz',{title:'KnowYourPresidents', head:'Know Your Presidents',quiz:'2'});
        }
    }catch(e){
        return res.status(500).render('./errorPage',{title:'Error4',head:e});
    }
})

router.route('/quiz3')
.get(async(req,res) => {
    try{
        if (!req.session.user) {
            return res.redirect('/sign-in');
        }
        else {
            // let data = await index.presidents.getAllPresidents();
            res.render('./quiz',{title:'KnowYourPresidents', head:'Know Your Presidents',quiz:'3'});
        }
    }catch(e){
        return res.status(500).render('./errorPage',{title:'Error4',head:e});
    }
})

router.route('/quiz4')
.get(async(req,res) => {
    try{
        if (!req.session.user) {
            return res.redirect('/sign-in');
        }
        else {
            // let data = await index.presidents.getAllPresidents();
            res.render('./quiz',{title:'KnowYourPresidents', head:'Know Your Presidents',quiz:'4'});
        }
    }catch(e){
        return res.status(500).render('./errorPage',{title:'Error4',head:e});
    }
})

router.route('/quiz5')
.get(async(req,res) => {
    try{
        if (!req.session.user) {
            return res.redirect('/sign-in');
        }
        else {
            // let data = await index.presidents.getAllPresidents();
            res.render('./quiz',{title:'KnowYourPresidents', head:'Know Your Presidents',quiz:'5'});
        }
    }catch(e){
        return res.status(500).render('./errorPage',{title:'Error4',head:e});
    }
})

module.exports = router;