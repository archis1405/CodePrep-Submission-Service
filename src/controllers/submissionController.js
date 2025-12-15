async function pingRequest(req, res) {

    console.log(this.testService);

    const response = await this.testService.pingCheck();
    return res.send({data: response});
}


    async function createSubmission(req, reply) {
    try {
        const result = await req.server.submissionService.addSubmission(req.body);
        reply.code(201).send({
            error: {},
            data: result,
            success: true,
            message: 'Created submission successfully'
        });
    } catch (err) {
        reply.code(400).send({ error: err.message });
    }
}

module.exports =  {
    pingRequest,
    createSubmission
};