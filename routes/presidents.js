const express = require('express');
const router = express.Router();
const index = require('../data/index');

router.route('/')
.get(async (req,res)=>{
    try{
        if (!req.session.user) {
            return res.redirect('/sign-in');
        }
        else {
            let data = await index.presidents.getAllPresidents();
            return res.render('./allPresidents',{title:'KnowYourPresidents', head:'Know Your Presidents',data:data});
        }
    }catch(e){
        return res.status(500).render('./errorPage',{title:'Error4',head:e});
    }
});

router.route('/:id')
.get(async(req,res)=>{
    try {
        if (!req.session.user) {
            return res.redirect('/sign-in');
        }
        else {
            let data = await index.presidents.getPresident(req.params.id);
            return res.render('./presidentInfo',{title:data.name,head:data.name,data:data});
        }
    } catch (e) {
        return res.status(404).render('./errorPage',{title:'Error5',head:e});
    }
})

module.exports = router;