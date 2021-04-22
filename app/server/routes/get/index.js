const express = require("express");
const db = require("../../db");
const router = express.Router();
const auth = require("../authModule")


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

router.get('/Prof/:nameProf', async (req, res, next) => {

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


router.get('/EleveFromClass/:nameClass', async (req, res, next) => {

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

router.get('/NoteByEleve/:nameEleve/:lastNameEleve', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let raw_idEleve = await db.getInfoEleve(req.params.nameEleve, req.params.lastNameEleve);

            let id_eleve = JSON.parse(JSON.stringify(raw_idEleve))[0].id_eleve;    

            let result = await db.getNoteByEleve(id_eleve)

            res.json(result);

        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})



router.get('/AverageByEleve/:nameEleve/:lastNameEleve', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let somme = 0;
            let sommeCoef = 0;
            let moyenne = 0;
            let tabMatiere = [];
            let globalMoyenne = {};

            let raw_idEleve = await db.getInfoEleve(req.params.nameEleve, req.params.lastNameEleve);

            let id_eleve = JSON.parse(JSON.stringify(raw_idEleve))[0].id_eleve;    

            let results = await db.getNoteByEleve(id_eleve)

            results.forEach(result => {
                somme = somme + result.note * result.coef
                sommeCoef = sommeCoef + result.coef;

                tabMatiere.push(result.nameMatiere);

            });

            tabMatiere = tabMatiere.filter((matiere, index) => tabMatiere.indexOf(matiere) === index)

            moyenne = somme / sommeCoef
        

            tabMatiere.forEach(async  matiere =>{
                
                let sommeMatiere = 0;
                let sommeCoefMatiere = 0;
                let moyenneMatiere = 0;
    
                let noteByMatiere = await db.getNoteBytMatiereByEleve(id_eleve, matiere)
                
                
                noteByMatiere.forEach( note =>{
                
                    sommeMatiere = sommeMatiere + note.note * note.coef
                    sommeCoefMatiere = sommeCoefMatiere + note.coef

                })

                moyenneMatiere = sommeMatiere / sommeCoefMatiere

                
                globalMoyenne[`moyenne_${matiere}`] = moyenneMatiere

                console.log(globalMoyenne);
                
                
            });

            globalMoyenne["moyenneGenerale"] = moyenne;

            const interval = setInterval(() => {
                if(Object.keys(globalMoyenne).length > tabMatiere.length ){
                    clearInterval(interval)
                    res.json(globalMoyenne)
                    
                }
            }, 100);


        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})


router.get('/NoteByClass/:nameClass', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {

            let result = await db.getNoteByClass(req.params.nameClass)

            res.json(result);

        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})

router.get('/AverageByClass/:nameClass', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {
            let globalMoyenne = {}

            let tabMatiere = [];

            let somme = 0;
            let sommeCoef = 0;
            let moyenne = 0;

            let results = await db.getNoteByClass(req.params.nameClass)

            results.forEach(result =>{
                somme = somme + result.note * result.coef;
                sommeCoef = sommeCoef + result.coef;

                tabMatiere.push(result.nameMatiere);
            })
            

            tabMatiere = tabMatiere.filter((matiere, index) => tabMatiere.indexOf(matiere) === index)
            
            console.log(tabMatiere)

            tabMatiere.forEach(async  matiere =>{
                
                let sommeMatiere = 0;
                let sommeCoefMatiere = 0;
                let moyenneMatiere = 0;
    
                let noteByMatiere = await db.getNoteByMatiereByClass(req.params.nameClass, matiere)
                
                
                noteByMatiere.forEach( note =>{
                
                    sommeMatiere = sommeMatiere + note.note * note.coef
                    sommeCoefMatiere = sommeCoefMatiere + note.coef

                })

                moyenneMatiere = sommeMatiere / sommeCoefMatiere

                
                globalMoyenne[`moyenne_${matiere}`] = moyenneMatiere
                
                
            });

            
            moyenne = somme / sommeCoef

            globalMoyenne["moyenneGenerale"] = moyenne;


            const interval = setInterval(() => {
                if(Object.keys(globalMoyenne).length > tabMatiere.length ){
                    clearInterval(interval)
                    res.json(globalMoyenne)
                    
                }
            }, 100);


        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})


router.get('/EleveBySearch/:nameEleve/:lastNameEleve', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {

            let result = await db.getElevesBySearch(req.params.nameEleve, req.params.lastNameEleve)
            console.log(result);
            
            res.json(result);

        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})

router.get('/AbsenceByEleve/:nameEleve/:lastNameEleve', async (req, res, next) => {

    try {
        auth("aaa", "aaa", async () => {

            let result = await db.getAbsenceByEleve(req.params.nameEleve, req.params.lastNameEleve);

            res.json(result);

        })

    } catch (e) {
        console.log(e);
        res.sendStatus(403);
    }

})

module.exports = router;
