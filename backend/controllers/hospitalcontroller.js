const express = require("express")
const router = express.Router()
const axios = require('axios');
const multer = require("multer");
const mongoose = require('mongoose')
const HospitalSchema = require("../models/HospitalSchema.js")

// Get All HospitalSchema
router.get('/', function (req, res, next) {
    HospitalSchema.find({}).then(function (element) {
        res.send(element);
    }).catch(next);
});

//Get One HospitalSchema
router.get('/id/:id', function (req, res, next) {
    HospitalSchema.findOne({ id: req.params.id }).then(function (element) {
        res.send(element);
    }).catch(next);
});

// Get images by email
router.get('/email/:email', function (req, res, next) {
    HospitalSchema.find({email: req.params.email}).then(function(element){
        res.send(element);
    }).catch(next);
});


//Get Images By Location
router.get('/location/:location', function (req, res, next) {
    HospitalSchema.find({ location: req.params.location }).then(function (element) {
        res.send(element);
    }).catch(next);
});

//Get HospitalSchema By User
router.get('/user/:user', function (req, res, next) {
    HospitalSchema.find({ user: req.params.user }).then(function (element) {
        res.send(element);
    }).catch(next);
});

// add a new HospitalSchema 
router.post('/', function (req, res, next) {
    HospitalSchema.create(req.body).then(function (element) {
        res.send(element);
    }).catch(next);
});

// update a HospitalSchema
router.put('/:id', function (req, res, next) {
    HospitalSchema.findOneAndUpdate({ id: req.params.id }, req.body).then(function (element) {
        HospitalSchema.findOne({ id: req.params.id }).then(function (element) {
            res.send(element);
        });
    });
});

//Increase Likes
router.post('/like/:_id',function(req,res,next){
    HospitalSchema.findOneAndUpdate({_id: req.params._id},req.body).then(function(element){
        HospitalSchema.findOne({_id: req.params._id}).then(function(element){
            res.send(element);
        }).catch((e)=>res.send(e));
    });
});

// delete a HospitalSchema 
router.delete('/:id', function (req, res, next) {
    HospitalSchema.findOneAndDelete({ id: req.params.id }).then(function (element) {
        res.send(element);
    });
});

// delete all HospitalSchema
// router.delete('/', function (req, res, next) {
//     HospitalSchema.deleteMany(req.body).then(function (element) {
//         res.send(element);
//     }).catch(next);
// });

module.exports = router