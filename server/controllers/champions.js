const express = require('express');
const router = express.Router();

const champion1 = require('./models/champion');

router.get('/', (req, res) => {
    const championsData = Champion.all;
    res.send(championsData);
});
router.get('/:id', (req, res) => {
    try {
        const championId = parseInt(req.params.id);
        const selectedChampion = Champion.findById(championId);
        res.send(selectedChampion);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newChampion = Champion.create(data);
    res.status(201).send(newChampion);
});
router.delete('/:id', (req, res) => {
    const championId = parseInt(req.params.id);
    const championToDestroy = Champion.findById(championId);
    championToDestroy.destroy();
    res.status(204).send();
});

module.exports = router;
