function pingRequest(req, res) {
    return res.send({ data: 'pong'});
}

module.exports = pingRequest;