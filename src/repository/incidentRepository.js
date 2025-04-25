import Incident from "../schema/incident.js";

export const getAllIncidents = async()=>{
    try{
        const incidents = await Incident.find();
        return incidents;
    }
    catch(error){
        console.log("Error in fetching the incidents form the db at the repo layer");
        // console.log(error);
        throw error;
    }
};

export const getIncidentById = async(id)=>{
    try{
        console.log(id);
        const incident = await Incident.findById(id);
        return incident;
    }
    catch(error){
        console.log("Error in fetching the incident by id at the repo layer");
        throw error;
    }
};


export const postIncident = async(incident)=>{
    try{
        const response = await Incident.insertOne(incident);// create 
        return response;
    }
    catch(error){
        console.log("Error in inserting the incident at the repo layer");
        // console.log(error);
        throw error;
    }
};


export const deleteIncidentById = async(id)=>{
    try{
        const response = await Incident.findByIdAndDelete(id);
        
        return response;
    }
    catch(error){
        console.log("Error in deleting the incident by id at the repo layer");
        // console.log(error);
        throw error;
    }
};


