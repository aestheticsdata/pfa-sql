// https://github.com/kelektiv/node-cron#readme
const CronJob = require('cron').CronJob;

// https://github.com/maitrungduc1410/node-scp-async
const scp = require('node-scp');

const fs = require('fs');


const backupDB = async () => {
  console.log('backupDB');
  try {
    const client = await scp({
      host: process.env.PFA_BACKUP_SERVER_IP,
      port: 22,
      username: process.env.DEBIAN_OVH_VPS_SSH_USER,
      // password: process.env.DEBIAN_OVH_VPS_SSH_PASSWORD,
      privateKey: fs.readFileSync(process.env.DEBIAN_OVH_VPS_SSH_KEY_PATH),
    });
    await client.uploadFile(`${process.env.PFA_DUMP_PATH}pfadump.sql`, process.env.PFA_BACKUP_SERVER_PATH + 'pfadump.sql');
  } catch(e) {
    console.log('node-scp error : ', e);
  }
}

const mysqlDump = () => {
  console.log('mysqlDump', new Date());
  const exec = require('child_process').exec;
  exec(`
    mysqldump -u${process.env.DB_USER} -p${process.env.DB_PASSWORD} ${process.env.DB} > ${process.env.PFA_DUMP_PATH}pfadump.sql
  `,
    backupDB,
  );
}

module.exports = () => {
  new CronJob(
    '0 0 */12 * * *', // warning: first star is second, it extends the classic cron syntax
    mysqlDump,
    null,
    true,
  );
}
