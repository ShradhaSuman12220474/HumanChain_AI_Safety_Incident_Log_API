import express from 'express';
import incidentRouter from './incident.js';
const router = express.Router();

router.use('/incident',incidentRouter);

export default router;
