function pingMiddleware (_req, res) {
  res.status(200).send('pong!')
}

module.exports = pingMiddleware;
