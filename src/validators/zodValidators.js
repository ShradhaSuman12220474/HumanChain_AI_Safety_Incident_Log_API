export const validate = (schema)=>{
    return async(req,res, next)=>{
        try{
            schema.parse(req.body);
            next();
        }catch(error){
            console.log("from zod validators");
            console.log(error);


            return res.status(400).json({
                success : false,
                message : error.errors[0].message,
                expected : error.errors[0].expected,
            })
            

        }
    }
}