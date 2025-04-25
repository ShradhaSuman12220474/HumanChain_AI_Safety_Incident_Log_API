import { getAllIncidents, postIncident } from "../repository/incidentRepository.js"

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

    }

};

export const getAllIncidentsService = async()=>{
    try{
        const response = await getAllIncidents();
        return response;
    }
    catch(error){
        console.log("Error in getting all the incidents from the service layer");
    }
}
