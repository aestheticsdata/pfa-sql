const router = require('express').Router();
let Spending = require('../../models/spending.model');
let RecurringSpending = require('../../models/recurringSpending.model');
const checkToken = require('./helpers/checkToken');
const mongoose = require('mongoose');
const startOfMonth = require('date-fns/startOfMonth');
const format = require('date-fns/format');

router.get('/', checkToken, (req, res) => {
  Spending.aggregate([
      { $match : {
          createdBy : mongoose.Types.ObjectId(req.query.userID),
          date: {"$gte": new Date(req.query.from), "$lte": new Date(req.query.to)}
        }
      },
      { $group:{ _id: "$createdBy", total:{ $sum: "$amount" } } }
    ])
    .then(spendingsSum => RecurringSpending.aggregate([
      { $match : {
          createdBy : mongoose.Types.ObjectId(req.query.userID),
          dateFrom: {"$eq": new Date(format(startOfMonth(new Date(req.query.from)), 'yyyy-MM-dd'))}
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