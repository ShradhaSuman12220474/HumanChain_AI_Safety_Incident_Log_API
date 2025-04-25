import { createIncidentService, deleteIncidentByIdService, getAllIncidentsService, getIncidentByIdService } from "../services/incidentsService.js"

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
            error : error,
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
            errror : error,
        })
    }
};

export const getIncidentById = async(req, res)=>{
    try{
        
        const response = await getIncidentByIdService(req.params.id);
        if(response == null){
            return res.status(404).json({
                success : false,
                message : "Data not found",
            });
        }
        return res.status(200).json({
            success : true,
            message : "Fetched successfully",
            data : response,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Invalid Id",
            error : error
        })
    }
};

export const deleteIncidentById = async(req, res)=>{
    try{
        const response = await deleteIncidentByIdService(req.params.id);
        if(response == null){
            return res.status(404).json({
                success : false,
                message : "Incident not found"
            })
        }
        res.status(200).json({
            success : true,
            message : "Incident deleted successfully.",
            deletedIncident : response,
        });
    }
    catch(error){
        return res.status(500).json({
            success : false,
            message : "internal Sever error",
            error : error,
        })
    }
};


