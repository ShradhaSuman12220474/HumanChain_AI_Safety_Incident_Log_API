import express from 'express';
import { getAllIncidents } from '../../controllers/incidnetController.js';
import { createIncident } from '../../controllers/incidnetController.js';
import { validate } from '../../validators/zodValidators.js';
import { zodIncidentSchema } from '../../validators/zodIncidentSchema.js';

const router = express.Router();

router.get('/',getAllIncidents);
router.post('/',validate(zodIncidentSchema),createIncident);

export default router;
