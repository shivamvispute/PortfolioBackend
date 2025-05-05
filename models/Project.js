import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  liveLink: String,
  githubLink: String,
  techStack: [String]
});

export default mongoose.model('Project', projectSchema);
