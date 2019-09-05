let jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {
  let token = req.headers.authorization;
  console.clear();
  console.log('token : ', token);
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
  }
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log('wtf ?? err : ', err);
        // return res.status(401).json({
        //   success: false,
        //   message: 'Token is not valid'
        // });
      } else {
        req.decoded = decoded;
        next();
      }
    })
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = checkToken;
