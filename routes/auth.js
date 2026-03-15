const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await Patient.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already exists!' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const patient = new Patient({ name, email, password: hashedPassword });
    await patient.save();
    res.json({ message: 'Registered successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(400).json({ message: 'User not found!' });
    }
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET);
    res.json({ message: 'Login successful!', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;