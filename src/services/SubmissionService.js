const SubmissionProducer = require('../producer/SubmissionQueueProcuder');

class SubmissionService {
    constructor(){

    }

    async pingCheck(){
        return 'pong';
    }

    async addSubmission(submission){
        const response = await SubmissionProducer(submission);
    }
    
}

module.exports = SubmissionService;
