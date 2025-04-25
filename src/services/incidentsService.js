import { deleteIncidentById, getAllIncidents, getIncidentById, postIncident } from "../repository/incidentRepository.js"

export const createIncidentService = async(incidentObject)=>{
    // take the incidentObject 
    // do any of the business logic

    // call the repo layer 
    try{
        const response = await postIncident(incidentObject);
        return response;
    }
    catch(error){
        console.log("Erron in creating a incident at the service layer");
        throw error;
    }

};

export const getAllIncidentsService = async()=>{
    try{
        const response = await getAllIncidents();
        return response;
    }
    catch(error){
        console.log("Error in getting all the incidents from the service layer");
        throw error;
    }
}

export const getIncidentByIdService = async(id)=>{
    try{
        const response = await getIncidentById(id);
        return response;
    }
    catch(error){
        // console.log(error);
        throw error;
    }
}

export const deleteIncidentByIdService = async(id)=>{
    try{
        const deletedIncident = await deleteIncidentById(id);
        console.log(deletedIncident);
        return deletedIncident;
    }
    catch(error){
        throw error;
    }
};

