const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//database connection 
const connectToDatabase = async () =>  {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB successfully.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}
connectToDatabase(); 

//schema and model of database
const studentSchema = new mongoose.Schema({Name:String, Roll_No:Number})
const Student = mongoose.model('student',studentSchema)

//add data into collection
const addStudent = (data) => {
    const student = new Student(data)
    student.save().then(() => {
        console.log("Student data saved into the database")
    })    
}

const data = {
    Name:"Kaif Sayyed",
    Roll_No : 50
}
// addStudent(data)



app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});
