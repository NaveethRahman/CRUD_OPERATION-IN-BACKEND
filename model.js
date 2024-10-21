const mongoose = require("mongoose")

const Plantdetailsschema = new mongoose.Schema({
    plantName:{
        type: String,
        require: true,
    },
    plantDiscription:{
        type:String,
        require:true,
        unique:true,
    },
    price:{
        type:Number,
        require:true,
    },
    discount:{
        type:String,
    },
    fertilizer:{
        type:String,
    },

},
{timestamps: true}
);


const Plantdetails =mongoose.model("Plantdetails",Plantdetailsschema)


module.exports = Plantdetails;