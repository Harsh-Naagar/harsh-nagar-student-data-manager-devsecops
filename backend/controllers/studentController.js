const Student = require('../models/Student');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const student = new Student({ name, email, password: hash });
  await student.save();
  res.status(201).json({ message: 'Registered successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email });
  if (!student || !(await bcrypt.compare(password, student.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
  res.json({ token });
};

exports.getProfile = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};
