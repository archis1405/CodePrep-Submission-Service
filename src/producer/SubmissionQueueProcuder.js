const SubmissionQueue = require('../queues/submissionQueue');

module.exports = async function(payload){
    await SubmissionQueue.add('processSubmission', payload);
    console.log('Submission added to queue');
}