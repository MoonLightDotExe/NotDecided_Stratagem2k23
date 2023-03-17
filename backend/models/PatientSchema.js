const mongoose = require('mongoose');
const { Schema } = mongoose;

const PatientSchema = new Schema({
        id:{
            type : String,
            required: true,
            unique: true,
        },
        name:{
            type: String,
            required :true,
        },
        emergencyType: {
            type: String,
            required: true,
        },
        location:{
            type : String,
            required : true,
        },
        medicalHistory:{
            type: String,
        },
        insurance:{
            type: Boolean,
        },
});
module.exports = mongoose.model('patient', PatientSchema)