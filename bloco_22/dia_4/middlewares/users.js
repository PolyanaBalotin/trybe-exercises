function users(req, res) {
  const { name, age } = req.body;
  res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade` })
}

module.exports = users;
