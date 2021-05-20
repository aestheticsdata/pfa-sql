"use strict";
var router = require('express').Router();
var Color = require('../../models/color.model');
router.get('/', function (req, res) {
    Color.find()
        .then(function (colors) { return res.json(colors); })
        .catch(function (err) { return res.status(500).json("Error : " + err); });
});
router.get('/:id', function (req, res) {
    Color.find({ catID: req.params.catID })
        .then(function (color) { return res.json(color); })
        .catch(function () { return res.status(500).json('no color with this id'); });
});
router.post('/add', function (req, res) {
    var _a = req.body, catID = _a.catID, color = _a.color;
    if (!color) {
        return res.status(400).json({ msg: 'Please enter a color' });
    }
    var newColor = new Color({
        catID: catID,
        color: color,
    });
    newColor.save()
        .then(function () { return res.json('new color added'); })
        .catch(function (err) { return res.status(400).json("Error: " + err); });
});
router.delete('/:id', function (req, res) {
    Color.findById(req.params.id)
        .then(function (color) { return color.remove().then(function () { return res.json({ success: true }); }); })
        .catch(function () { return res.status(500).json({ success: false }); });
});
router.put('/:id', function (req, res) {
    Color.findById(req.params.id)
        .then(function (color) {
        color.catID = req.body.catID;
        color.color = req.body.color;
        color.save()
            .then(function () { return res.json('color updated'); })
            .catch(function (err) { return res.status(400).json("Error: " + err); });
    });
});
module.exports = router;
