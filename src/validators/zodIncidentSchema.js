import {z} from 'zod';

export const zodIncidentSchema = z.object({
    title : z.string({message : "title Should be string"}).min(1,{message : "Title should not be empty."}),
    description : z.string({message : "Description should be string"}).min(1,{message : "Description should not be empty."}),
    severity : z.enum(["Medium","High", "Low"], {message : "Please input the correct severity"}),
});

