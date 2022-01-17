function greetings(req, res) {
  const { name, age } = req.body;
  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({message: `Unauthorized`});
  }
  res.status(200).json({message: `Hello, ${name}`})
}

module.exports = greetings;
