const express = require("express")
const router = express.Router()
const  PatientSchema = require("../models/PatientSchema.js")

// Get All UserSchema
router.get('/', function (req, res, next) {
    UserSchema.find({}).then(function (element) {
        res.send(element);
    }).catch(next);
});

//Get One UserSchema
router.get('/id/:id', function (req, res, next) {
    UserSchema.findOne({id: req.params.id}).then(function(element){
        res.send(element);
    }).catch(next);
});

//Get One UserSchema by email
router.get('/user/one/:email', function (req, res, next) {
    UserSchema.findOne({email: req.params.email}).then(function(element){
        res.send(element);
    }).catch(next);
});

//Get all UserSchema By email
router.get('/user/:email', function (req, res, next) {
    UserSchema.find({email: req.params.email}).then(function(element){
        res.send(element);
    }).catch(next);
});

// add a new UserSchema 
router.post('/',function(req,res,next){
    console.log(req.body.id);
    UserSchema.create(req.body).then(function(element){
        res.send(element);
    }).catch(next);
});

// update a UserSchema
router.put('/:id',function(req,res,next){
    UserSchema.findOneAndUpdate({id: req.params.id},req.body).then(function(element){
        UserSchema.findOne({id: req.params.id}).then(function(element){
            res.send(element);
        });
    });
});

// delete a UserSchema 
router.delete('/:id',function(req,res,next){
    UserSchema.findOneAndDelete({id: req.params.id}).then(function(element){
        res.send(element);
    });
});

// delete all UserSchema
router.delete('/',function(req,res,next){
    UserSchema.deleteMany(req.body).then(function(element){
        res.send(element);
    }).catch(next);
});

module.exports = router