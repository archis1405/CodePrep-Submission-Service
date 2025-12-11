async function pingRequest(req, res) {

    console.log(this.testService);

    const response = await this.testService.pingCheck();
    return res.send({data: response});
}


async function createSubmission(req, res) {
    

}

module.exports =  {
    pingRequest,
    createSubmission
};