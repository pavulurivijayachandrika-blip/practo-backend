const mongoose = require('mongoose');
require('dotenv').config();
const Doctor = require('./models/Doctor');

const doctors = [
  { name: "Dr. Arjun Sharma", specialization: "Cardiologist", experience: "10 years", rating: 4.8, fee: 500, hospital: "Apollo Hospital", image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg" },
  { name: "Dr. Priya Reddy", specialization: "Dentist", experience: "7 years", rating: 4.5, fee: 300, hospital: "Care Hospital", image: "https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827775.jpg" },
  { name: "Dr. Ravi Kumar", specialization: "Neurologist", experience: "12 years", rating: 4.9, fee: 700, hospital: "KIMS Hospital", image: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg" },
  { name: "Dr. Sneha Patel", specialization: "Pediatrician", experience: "8 years", rating: 4.7, fee: 400, hospital: "Rainbow Hospital", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg" },
  { name: "Dr. Vikram Nair", specialization: "Orthopedic", experience: "15 years", rating: 4.6, fee: 600, hospital: "Yashoda Hospital", image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg" },
  { name: "Dr. Ananya Singh", specialization: "Eye Specialist", experience: "9 years", rating: 4.8, fee: 450, hospital: "LV Prasad Eye", image: "https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827775.jpg" },
  { name: "Dr. Rahul Gupta", specialization: "Dermatologist", experience: "6 years", rating: 4.5, fee: 350, hospital: "Apollo Hospital", image: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg" },
  { name: "Dr. Meera Iyer", specialization: "Gynecologist", experience: "11 years", rating: 4.9, fee: 550, hospital: "Fernandez Hospital", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg" },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB Connected!');
    await Doctor.deleteMany({});
    await Doctor.insertMany(doctors);
    console.log('Doctors added successfully!');
    process.exit();
  })
  .catch(err => console.log(err));