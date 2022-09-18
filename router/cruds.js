const express = require('express')
const router = express.Router()
const Crud = require('../models/crud');

router.get('/', async function (req, res) {
    try {
        const cruds = await Crud.find();
        res.json(cruds);
    } catch (error) {
        res.send("Error : " + error)
    }
});

router.get('/:id', async function (req, res) {
    try {
        const crud = await Crud.findById(req.params.id);
        res.json(crud);
    } catch (error) {
        res.send("This is the Error : " + error)
    }
})

router.post('/', async function (req, res) {
    const crud = new Crud({
        name: req.body.name,
        about: req.body.about,
        problem: req.body.problem,
        underAge: req.body.underAge
    })

    try {
        const c1 = await crud.save();
        res.json(c1);
    } catch (error) {
        res.send("Error : " + error);
    }
})


router.patch('/:id', async function (req, res) {
    try {
        const crud = await Crud.findById(req.params.id);
        crud.underAge = req.body.sub
        const c1 = await crud.save();
        res.json(c1)
    } catch (error) {
        res.send("This is the Error : " + error);
    }
});

router.delete('/:id', async function (req, res) {
    try {
        const crud = await Crud.findById(req.params.id);
        const c1 = await crud.remove();
        res.json(c1);
    } catch (error) {
        res.send("This is the Error : " + error);
    }
})


module.exports = router