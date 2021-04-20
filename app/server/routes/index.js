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


router.post('/add/Class', async (req, res, next) => {

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


router.post('/add/Matiere', async (req, res, next) => {

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


router.post('/add/Eleve', async (req, res, next) => {

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

router.post('/add/Prof', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let id_requete = await db.getIdItemByName("matiere","nameMatiere",req.body.nameMatiere);

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

router.post('/add/ProfToClass', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let raw_id_prof = await db.getIdItemByName("prof","nameProf",req.body.nameProf);

            let raw_id_class = await db.getIdItemByName("class", "nameClass", req.body.nameClass)


            let id_prof = JSON.parse(JSON.stringify(raw_id_prof))[0].id_prof;

            let id_class = JSON.parse(JSON.stringify(raw_id_class))[0].id_class;


            console.log(id_prof)

            console.log(id_class)
            
            let result = await db.addProfToLink(id_prof, id_class, req.body.isPrincipal);
            //console.log(req.body);
            res.json(result);


        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})


router.get('/get/Prof/:nameProf', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {

            let result = await db.getProfInfo(req.params.nameProf)

            res.json(result);

        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})


router.get('/get/EleveFromClass/:nameClass', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {

            let result = await db.getElevesFromClass(req.params.nameClass)

            res.json(result);

        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})

router.post('/add/insertNote/:nameEleve/:lastNameEleve', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let idEleve = await db.getIdEleve('nameEleve', 'lastNameEleve', req.params.nameEleve, req.params.lastNameEleve);
            let noteConfig = {
                id_eleve: idEleve,
                id_matiere: 1,
                note: 18,
                coef: 2,
                dateNote: new Date(),
                id_prof: 1
            }
            let insert = await db.insertNote(noteConfig)
            res.json(insert);

        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})


module.exports = router;
