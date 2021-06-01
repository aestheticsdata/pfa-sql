const CronJob = require('cron').CronJob;

const mysqlDump = () => {
  const exec = require('child_process').exec;
  exec(`mysqldump -u ${process.env.DB_USER} -p ${process.env.DB_PASSWORD} ${process.env.DB} > ${process.env.PFA_DUMP_PATH}`);
}

module.exports = () => {
  new CronJob(
    '* * * * * *',
    mysqlDump,
    null,
    true,
  );
}
