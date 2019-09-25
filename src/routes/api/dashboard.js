const router = require('express').Router();
let Dashboard = require('../../models/dashboard.model');
const checkToken = require('./helpers/checkToken');

router.get('/', checkToken, (req, res) => {
  Dashboard.find({
    createdBy: req.query.userID,
    date: new Date(req.query.month),
  })
    .sort({ createdAt: 'asc' })
    .then(dashboard => res.json(dashboard))
    .catch(err => res.status(404).json(`Error : ${err}`));
});

router.post('/', checkToken, (req, res) => {
  const {
    date,
    initialAmount,
    userID,
  } = req.body;

  if (!initialAmount || !date) {
    return res.status(400).json({ msg: 'Please enter amount and a date' });
  }

  const newDashboard = new Dashboard({
    date,
    initialAmount,
    createdBy: userID,
  });

  newDashboard.save()
    .then(() => res.json('new dashboard added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.delete('/:id', checkToken, (req, res) => {
  Dashboard.findById(req.params.id)
    .then(
      dashboard => dashboard.remove().then(
        () => res.json({ success: true })
      )
    )
    .catch(() => res.status(404).json({ success: false }));
});

router.put('/:id', checkToken, (req, res) => {
  Dashboard.findById(req.params.id)
    .then(dashboard => {
      dashboard.label = req.body.date;
      dashboard.initialAmount = req.body.initialAmount;

      dashboard.save()
        .then(() => res.json('dashboard spending updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    });
});

module.exports = router;