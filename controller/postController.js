const contact = (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
};

module.exports = { contact };
