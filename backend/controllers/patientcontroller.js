const express = require("express")
const router = express.Router()
const  PatientSchema = require("../models/PatientSchema.js")

// Get All PatientSchema
router.get('/', function (req, res, next) {
    PatientSchema.find({}).then(function (element) {
        res.send(element);
    }).catch(next);
});

//Get One PatientSchema
router.get('/id/:id', function (req, res, next) {
    PatientSchema.findOne({id: req.params.id}).then(function(element){
        res.send(element);
    }).catch(next);
});

//Get One PatientSchema by email
router.get('/user/one/:email', function (req, res, next) {
    PatientSchema.findOne({email: req.params.email}).then(function(element){
        res.send(element);
    }).catch(next);
});

//Get all PatientSchema By email
router.get('/user/:email', function (req, res, next) {
    PatientSchema.find({email: req.params.email}).then(function(element){
        res.send(element);
    }).catch(next);
});

// add a new PatientSchema 
router.post('/',function(req,res,next){
    console.log(req.body.id);
    PatientSchema.create(req.body).then(function(element){
        res.send(element);
    }).catch(next);
});

// update a PatientSchema
router.put('/:id',function(req,res,next){
    PatientSchema.findOneAndUpdate({id: req.params.id},req.body).then(function(element){
        PatientSchema.findOne({id: req.params.id}).then(function(element){
            res.send(element);
        });
    });
});

// delete a PatientSchema 
router.delete('/:id',function(req,res,next){
    PatientSchema.findOneAndDelete({id: req.params.id}).then(function(element){
        res.send(element);
    });
});

// delete all PatientSchema
router.delete('/',function(req,res,next){
    PatientSchema.deleteMany(req.body).then(function(element){
        res.send(element);
    }).catch(next);
});

module.exports = router