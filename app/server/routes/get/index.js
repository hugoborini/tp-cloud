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



module.exports = router;
