const notFound = (req, res) => {
  res.status(404).send("ROute does not exist");
};

module.exports = notFound;
