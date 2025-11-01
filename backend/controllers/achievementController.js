const Achievement = require('../models/Achievement');

exports.createAchievement = async (req, res) => {
  const { studentId, title, description, date, fileUrl } = req.body;
  const achievement = new Achievement({ studentId, title, description, date, fileUrl });
  await achievement.save();
  res.status(201).json({ message: 'Achievement added' });
};

exports.getAchievements = async (req, res) => {
  const achievements = await Achievement.find({ studentId: req.params.studentId });
  res.json(achievements);
};
