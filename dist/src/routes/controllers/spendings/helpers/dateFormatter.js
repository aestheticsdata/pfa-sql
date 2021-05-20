"use strict";
var format = require('date-fns').format;
module.exports = function (req) {
    var dateFormat = 'yyyy-MM-dd';
    // best explanation to date in js and timezone :
    // https://stackoverflow.com/questions/48172772/time-zone-issue-involving-date-fns-format
    // another solution to get rid of timezone is just to substring the date without the timezone
    var dateFrom = new Date(req.query.from);
    var dateFromWithoutTimezone = new Date(dateFrom.valueOf() + dateFrom.getTimezoneOffset() * 60 * 1000);
    var from = format(dateFromWithoutTimezone, dateFormat);
    var dateTo = new Date(req.query.to);
    var dateToWithoutTimezone = new Date(dateTo.valueOf() + dateTo.getTimezoneOffset() * 60 * 1000);
    var to = format(dateToWithoutTimezone, dateFormat);
    return {
        from: from,
        to: to,
    };
};
