const express = require("express");
const db = require("../db");
const router = express.Router();
const auth = require("./authModule")
const addClasse = require("./addClasse");
const { request } = require("express");



router.get('/', async (req, res, next) => {


    try {
        auth("aaa", "aaa", async () => {
            let results = await db.all();
            console.log(results);

            res.json(results);
        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }
})


router.post('/addClass', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let results = await db.additem("class", "nameClass", req.body.nameClass);
            res.json(results);
        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }
})


router.post('/addMatiere', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {

            try {
                let results = await db.additem("matiere", "nameMatiere", req.body.nameMatiere);
                res.json(results);
            } catch (e) {
                console.log(e)

                if (e.code === "ER_DUP_ENTRY") {
                    res.json({ status: "matiere deja rentrée" })
                } else {
                    res.sendStatus(500)
                }
            }

        })
    }
    catch (e) {
        console.log(e);
        res.sendStatus(403);
    }
})


router.post('/addEleve', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let id_requete = await db.getIdItemByName("class", "nameClass" ,req.body.nameClass);

            let id_class = JSON.parse(JSON.stringify(id_requete))[0].id_class;
            
            let result = await db.addEleve(req.body.nameEleve, req.body.lastNameEleve, id_class);
            
            res.json(result);


        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})

router.post('/addProf', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let id_requete = await db.getIdMatiereByName(req.body.nameMatiere);

            let id_matiere = JSON.parse(JSON.stringify(id_requete))[0].id_matiere;

            let result = await db.addProf(req.body.nameProf, req.body.lastNameProf, id_matiere);
            console.log(req.body);
            res.json(result);


        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})


module.exports = router;
