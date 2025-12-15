const SubmissionProducer = require('../producer/SubmissionQueueProcuder');

class SubmissionService {
    constructor(submissionRepository){
        this.submissionRepository = submissionRepository;
    }

    async pingCheck(){
        return 'pong';
    }

    async addSubmission(submission){
        const createdSubmission = await this.submissionRepository.createSubmission(submission);
        
        if (!createdSubmission) {
            throw new SubmissionCreationError('Failed to create a submission in the repository');
        }

        console.log(createdSubmission);

        const response = await SubmissionProducer(createdSubmission);
        return { queueResponse: response, submission: createdSubmission };
    }
}

module.exports = SubmissionService;
