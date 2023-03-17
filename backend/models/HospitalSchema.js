const mongoose = require('mongoose');
const { Schema } = mongoose;

const HospitalSchema = new Schema({
        id:{
            type: String,
            required: true,
        },
        name : {
            type : String,
            required : true,
        },
        location:{
            type : String,
            required: true,
        },
        queue: {
            type: Number,
            default : 0,
        },
        type:{
            type : String,
            required: true,
        },
        
});
module.exports = mongoose.model('hospital', HospitalSchema)