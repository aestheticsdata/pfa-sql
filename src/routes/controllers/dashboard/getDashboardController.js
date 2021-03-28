const { Dashboard } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  try {
    const dashboard = await Dashboard.findOne({
      where: {
        userID: req.query.userID,
        dateFrom: req.query.start,
      }
    });
    res.json(dashboard);
  } catch (err) {
    res.status(400).json(`Error getting dashboard : ${err}`);
  }
};


// Dashboard.findOne({
//   createdBy: req.query.userID,
//   dateFrom: {"$eq": new Date(req.query.start)},
// })
//   .then(dashboard => res.json(dashboard))
//   .catch(err => res.status(404).json(`Error : ${err}`));
