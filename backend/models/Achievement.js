const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  title: String,
  description: String,
  date: Date,
  fileUrl: String,
});

module.exports = mongoose.model('Achievement', achievementSchema);
