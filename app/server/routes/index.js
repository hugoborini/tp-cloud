const express =  require("express");
const db = require("../db");
const router = express.Router();
const auth = require("./authModule")
const addClasse = require("./addClasse");
const { request } = require("express");



router.get



router.get('/', async(req, res, next) =>{


    try{
        auth("aaa", "aaa", async ()=>{
            let results = await db.all();
            res.json(results);
        }, async () =>{
            console.log("api Key not valid")
            res.sendStatus(403);
        })

    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})


router.post('/addClasse', async(req, res, next) =>{

    try{
        auth("aaa", "aaa", async ()=>{
            let results = await db.additem("class", "nameClass" ,req.body.nameClass);
            res.json(results);
        }, async () =>{
            console.log("api Key not valid")
            res.sendStatus(403);
        })

    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})


router.post('/addMatiere', async(req, res, next) =>{

    try{
        auth("aaa", "aaa", async ()=>{
            let results = await db.additem("matiere", "nameMatiere", req.body.nameMatiere);
            res.json(results);
        }, async () =>{
            console.log("api Key not valid")
            res.sendStatus(403);
        })

    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }

})


router.post('/addEleve', async(req, res, next) =>{

    try{
        auth("aaa", "aaa", async ()=>{
            let results = await db.additem("eleve", "nameEleve", req.body.nameEleve);
            res.json(results);
        }, async () =>{
            console.log("api Key not valid")
            res.sendStatus(403);
        })

    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }

})


module.exports = router;
