const router = require('express').Router();
let Spending = require('../../models/spending.model');
let RecurringSpending = require('../../models/recurringSpending.model');
const checkToken = require('./helpers/checkToken');
const mongoose = require('mongoose');
const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');
const format = require('date-fns/format');

router.get('/', checkToken, (req, res) => {
  const start = new Date(format(startOfMonth(new Date(req.query.from)), 'yyyy-MM-dd'));
  const end = new Date(format(endOfMonth(new Date(req.query.from)), 'yyyy-MM-dd'));

  Spending.aggregate([
      { $match : {
          createdBy : mongoose.Types.ObjectId(req.query.userID),
          date: {"$gte": start, "$lte": end}
        }
      },
      { $group:{ _id: "$createdBy", total:{ $sum: "$amount" } } }
    ])
    .then(spendingsSum => RecurringSpending.aggregate([
      { $match : {
          createdBy : mongoose.Types.ObjectId(req.query.userID),
          dateFrom: {"$eq": start}
        }
      },
      { $group:{ _id: "$createdBy", total:{ $sum: "$amount" } } }
    ])
      .then(recurringsSum =>  res.json( {spendingsSum, recurringsSum} ) )
      .catch(err => res.status(404).json(`Error : ${err}`))
    )
    .catch(err => res.status(404).json(`Error : ${err}`));
});

module.exports = router;