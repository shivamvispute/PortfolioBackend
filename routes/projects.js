import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// GET /api/projects - fetch all portfolio projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

export default router;
