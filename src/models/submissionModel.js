const mongoose = require('mongoose');

const submiSchema = new mongoose.Schema({
    
    userId: {
        type: String,
        required: [true , "User ID is required"]
    },
    problemId: {
        type: String,
        required: [true , "Problem ID is required"]
    },
    code: {
        type: String,
        required: [true , "Code is required for the Submission"]
    },
    language: {
        type: String,
        required: [true , "Programming Language is required for the Submission"]
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Accepted', 'Wrong Answer', 'Compilation Error', 'Runtime Error', 'Time Limit Exceeded'],
        default: 'Pending'
    }

});

const Submission = mongoose.model('Submission', submissionSchema);
module.exports = Submission;