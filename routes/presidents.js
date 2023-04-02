const express = require('express');
const router=express.Router();
const index = require('../data/index');

router.route('/')
.get(async (req,res)=>{
    try{
        let data = await index.presidents.getAllPresidents();
        // console.log(data);
        return res.render('./home',{title:'KnowYourPresidents', head:'Know Your Presidents',data:data});
    }catch(e){
        return res.status(500).render('./errorPage',{title:'Error',head:e});
    }
});

router.route('/:id')
.get(async(req,res)=>{
    try {
        let data = await index.presidents.getPresident(req.params.id);
        return res.render('./presidentInfo',{title:data.name,head:data.name,data:data});
    } catch (e) {
        return res.status(404).render('./errorPage',{title:'Error',head:e});
    }
})

module.exports = router;