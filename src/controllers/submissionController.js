async function pingRequest(fastify, options) {
    console.log(this.testService);

    const response = await this.testService.pingCheck();
    return res.send({data: response});

}

async function createSumbission(req, res) {
    
}

module.exports = {
    pingRequest,
    createSumbission
};