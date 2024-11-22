const express = require('express');
const router = express.Router();

let projects = [];
let applications = [];

router.get('/', (req, res) => {
  res.json(projects);
});

router.post('/', (req, res) => {
  const { title, description, category, duration, paymentSchedule, numeration } = req.body;
  const newProject = { 
    title, description, category, duration, paymentSchedule, numeration, 
    _id: projects.length + 1, applicants: [] 
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

router.post('/apply', (req, res) => {
  const { projectId, applicant } = req.body;
  const project = projects.find(p => p._id === projectId);

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  applications.push({ projectId, applicant });
  project.applicants.push(applicant);
  
  res.status(201).json({ message: 'Application submitted successfully', applicant });
});

module.exports = router;