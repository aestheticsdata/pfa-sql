// https://github.com/maitrungduc1410/node-scp-async
const scp = require("node-scp");
const fs = require("fs");

module.exports = async (src, dest) => {
  try {
    const client = await scp({
      host: process.env.PFA_BACKUP_SERVER_IP,
      port: 22,
      username: process.env.DEBIAN_OVH_VPS_SSH_USER,
      // password: process.env.DEBIAN_OVH_VPS_SSH_PASSWORD,
      privateKey: fs.readFileSync(process.env.DEBIAN_OVH_VPS_SSH_KEY_PATH),
    });
    await client.uploadFile(src, dest);
  } catch(e) {
    console.log('node-scp error : ', e);
  }
}
