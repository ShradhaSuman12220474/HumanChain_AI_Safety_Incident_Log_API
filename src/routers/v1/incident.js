import express from 'express';
import { deleteIncidentById, getAllIncidents, getIncidentById } from '../../controllers/incidnetController.js';
import { createIncident } from '../../controllers/incidnetController.js';
import { validate } from '../../validators/zodValidators.js';
import { zodIncidentSchema } from '../../validators/zodIncidentSchema.js';

const router = express.Router();

router.post('/',validate(zodIncidentSchema),createIncident);
router.get('/:id',getIncidentById);
router.get('/',getAllIncidents);
router.delete('/:id',deleteIncidentById);

export default router;
