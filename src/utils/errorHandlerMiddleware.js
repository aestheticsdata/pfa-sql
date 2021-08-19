module.exports = async (err, req, res, _next) => {
  res.status(err.status ?? 500).send({ error: err.message });
};
