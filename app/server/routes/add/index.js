const express = require("express");
const db = require("../../db");
const router = express.Router();
const auth = require("../authModule")


router.post('/Class', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            try {
                let results = await db.addItem("class", "nameClass", req.body.nameClass);
                res.json(results);
            }
            catch (e) {
                if (e.code === "ER_DUP_ENTRY") {
                    res.json({ status: "class deja rentrée" })
                } else {
                    res.sendStatus(500)
                }
            }
        })
    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }
})

router.post('/Matiere', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {

            try {
                let results = await db.addItem("matiere", "nameMatiere", req.body.nameMatiere);
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

router.post('/Eleve', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let id_requete = await db.getIdItemByName("class", "nameClass", req.body.nameClass);

            let id_class = JSON.parse(JSON.stringify(id_requete))[0].id_class;

            let result = await db.addEleve(req.body.nameEleve, req.body.lastNameEleve, id_class);

            res.json(result);


        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})

router.post('/Prof', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let id_requete = await db.getIdItemByName("matiere", "nameMatiere", req.body.nameMatiere);

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

router.post('/ProfToClass', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let raw_id_prof = await db.getIdItemByName("prof", "nameProf", req.body.nameProf);

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



router.post('/Note/:nameEleve/:lastNameEleve', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let raw_idEleve = await db.getIdEleve(req.params.nameEleve, req.params.lastNameEleve);
            let id_eleve = JSON.parse(JSON.stringify(raw_idEleve))[0].id_eleve;

            let raw_matiere = await db.getIdItemByName('matiere', 'nameMatiere', req.body.nameMatiere);
            let id_matiere = JSON.parse(JSON.stringify(raw_matiere))[0].id_matiere;

            let raw_prof = await db.getIdItemByName('prof', 'lastNameProf', req.body.lastNameProf);
            let id_prof = JSON.parse(JSON.stringify(raw_prof))[0].id_prof;

            let raw_class = await db.getIdItemByName('class', 'nameClass', req.body.nameClass);
            let id_class = JSON.parse(JSON.stringify(raw_class))[0].id_class;


            let noteConfig = {
                id_eleve: id_eleve,
                id_matiere: id_matiere,
                note: req.body.note,
                coef: req.body.coef,
                dateNote: req.body.dateNote,
                id_prof: id_prof,
                id_class: id_class
            }
            let insert = await db.addNote(noteConfig)
            res.json(insert);
        });

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }
});

router.post('/Absence/:nameEleve/:lastNameEleve', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            try {

                let raw_idEleve = await db.getIdEleve(req.params.nameEleve, req.params.lastNameEleve);
                let id_eleve = JSON.parse(JSON.stringify(raw_idEleve))[0].id_eleve;

                let configAbsence = {
                    id_eleve,
                    dateStart: new Date(),
                    dateEnd: new Date(),
                    isJustificate: req.body.isJustificate
                }

                let results = await db.addAbsence(configAbsence);
                res.json(results);
            }
            catch (e) {
                console.log(e);
                if (e.code === "ER_DUP_ENTRY") {
                    res.json({ status: "class deja rentrée" })
                } else {
                    res.sendStatus(500)
                }
            }
        })
    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }
})


router.post('/addJustification/:id_absence', async (req, res, next) => {
    
    try {
        auth("aaa", "aaa", async () => {
            
            let result = await db.addJustification(req.params.id_absence, req.body.isJustificate);
            res.json(result);
        })
        
    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }
    
})

module.exports = router;