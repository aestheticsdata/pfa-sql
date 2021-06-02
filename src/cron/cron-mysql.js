const CronJob = require('cron').CronJob;


const mysqlDump = () => {
  console.log('mysqlDump', new Date());
  const exec = require('child_process').exec;
  exec(`mysqldump -u ${process.env.DB_USER} -p${process.env.DB_PASSWORD} ${process.env.DB} > ${process.env.PFA_DUMP_PATH}pfadump.sql`);
}

module.exports = () => {
  new CronJob(
    '0 0 */2 * * *', // warning: first star is second, it extends the classic cron syntax
    mysqlDump,
    null,
    true,
  );
}
