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
    console.log(req.body.id);
    HospitalSchema.create(req.body).then(function (element) {
        res.send(element);
    }).catch(next);
});


async function query(filename) {
    const data = fs.readFileSync("uploads/" + filename)
    const response = await axios.post(
        'https://api-inference.huggingface.co/models/google/vit-base-patch16-224',
        data,
        {
            headers: { Authorization: 'Bearer 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' },
        }
    );
    const result = response.data.map((each) => {
        return (
            each.label
        )
    })
    return result;
}



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post('/imagePost', upload.single("image"), async (req, res) => {
    console.log("in image post")
    const reqObjectData = JSON.parse(req.body.objectData)
    const modelTags = await query(req.file.filename)

    // console.log(modelTags)

    // console.log("in image post 2")
    // console.log(req.body.objectData)
    // console.log(JSON.parse(req.body.objectData))
    console.log(reqObjectData)

    // console.log(req.file)
    HospitalSchema.create({
        id: reqObjectData.id,
        email: reqObjectData.email,
        location: reqObjectData.location,
        image: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType: "image/png"
        },
        caption: reqObjectData.caption,
        tags: modelTags.concat(reqObjectData.tags),
        time: new Date().toLocaleString('en-US', { timeZone: "Asia/Kolkata", hour: 'numeric', minute: 'numeric', hour12: true }),

    })
        .then(function (element) {
            res.send(element);
        }).catch();
})

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