import mongoose from 'mongoose';
import LearningContent from './models/LearningContent';  // Adjust path as necessary

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  try {
    const contents = await LearningContent.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
