import mongoose from "mongoose";


// define the schema
const incidentSchema = new mongoose.Schema({

    title:{
        type : String,
        required : true,

    },
    description:{
        type: String,
        required : true,

    },
    severity:{
        type: String,
        required : true,
    }


},{timestamps : true});

// create a collection

const incident = mongoose.model("Incident", incidentSchema);// this model method takes in name of the collection and schema

export default incident;