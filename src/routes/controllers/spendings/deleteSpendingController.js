const prisma = require('../../../db/dbInit');
const deleteHelper = require('../helpers/deleteHelper');


module.exports = async (req, res) => {
  await deleteHelper(prisma.spendings, req.params.id, res);
};
