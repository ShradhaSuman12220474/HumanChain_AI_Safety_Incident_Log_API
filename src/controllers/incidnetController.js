import { createIncidentService, getAllIncidentsService } from "../services/incidentsService.js"

export const getAllIncidents = async(req,res)=>{
    try{
        const incidents = await getAllIncidentsService();
        return res.status(200).json({
            success : true,
            message : "All incidents fetched successfully",
            data : incidents,
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message : "internal Server Error",
        })
    }
}

export const createIncident = async(req, res)=>{
    // req object will be having the body 
    try{
        const response = await createIncidentService(req.body);
        return res.status(201).json({
            success : true,
            message : "Incident uploaded successfully",
            data : response,
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Unable to create Incident, internal Server error",
        })
    }
};

