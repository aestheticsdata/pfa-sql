const ssh = require('ssh2');
const fs = require("fs");

const config = {
  host: process.env.PFA_BACKUP_SERVER_IP,
  port: 22,
  username: process.env.DEBIAN_OVH_VPS_SSH_USER,
  // password: process.env.DEBIAN_OVH_VPS_SSH_PASSWORD,
  privateKey: fs.readFileSync(process.env.DEBIAN_OVH_VPS_SSH_KEY_PATH),
};

const connection = fn => {
  const conn = new ssh.Client();
  conn.on('ready', fn(conn)).connect(config);
}

module.exports.copy = (src, dest) => {
  const copy = conn => () => conn.sftp((err, sftp) => {
    sftp.fastPut(src, dest, {}, error => { console.log('sftp error: ', error) });
  });
  connection(copy);
};

module.exports.deleteFile = filepath => {
  const deleteFile = conn => () => conn.sftp((err, sftp) => {
    sftp.unlink(filepath);
  });
  connection(deleteFile);
};
