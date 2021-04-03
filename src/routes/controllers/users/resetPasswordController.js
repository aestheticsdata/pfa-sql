const bcrypt = require('bcryptjs');
const { User } = require('../../../db/dbInit');
const passwordgenerator = require('generate-password');
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_APIKEY);


module.exports = (req, res) => {
  const { email, subject, changedPassword } = req.body;

  const newPassword = changedPassword || passwordgenerator.generate({
    length: 10,
    numbers: true,
  });

  const msg = {
    to: email,
    from: 'hxf.finance@protonmail.com',
    subject,
    text: `your new password is: ${newPassword}`,
  };

  User.findOne({ where: { email } })
    .then(() => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error('There was an error during salt', err);
        else {
          bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) console.error('There was an error during hash', err);
            else {
              User.update({ password: hash }, { where: { email } })
                .then(() => {
                  console.log('user updated');
                  sendgrid.send(msg)
                    .then(() => res.json('sendgrid success'))
                    .catch(err => res.status(400).json('sendgrid error : ', err))
                })
                .catch(err => { console.log('error :', err) });
            }
          });
        }
      });
    })
    .catch(() => {
      res.status(400).json('no users registered with this email');
    });
}
