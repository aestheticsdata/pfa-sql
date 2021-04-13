import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const deleteHelper = require('../helpers/deleteHelper');

module.exports = async (req, res) => {
  await deleteHelper(prisma.spendings, req.params.id, res);
};
