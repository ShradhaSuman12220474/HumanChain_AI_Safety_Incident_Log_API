import mongoose from 'mongoose';
import Incident from './src/schema/incident.js';
import { connectDB } from './src/config/dbConfig.js';

connectDB();

const seedIncidents = [
  {
    title: 'AI Misclassification in Medical Diagnosis',
    description: 'An AI system incorrectly diagnosed a patient, leading to delayed treatment.',
    severity: 'High',
  },
  {
    title: 'Autonomous Vehicle Near-Miss',
    description: 'Self-driving car failed to recognize a pedestrian, resulting in a near-miss.',
    severity: 'Medium',
  },
];

Incident.insertMany(seedIncidents)
  .then(() => {
    console.log('Sample incidents added.');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });
