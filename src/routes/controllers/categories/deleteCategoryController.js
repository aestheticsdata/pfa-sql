import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
  log: [{
    emit: 'event',
    level: 'query',
  }]
});

prisma.$on('query', e => {
  console.log("Query: " + e.query)
  console.log("Duration: " + e.duration + "ms")
});


module.exports = async (req, res) => {
  const { id: ID } = req.params;
  try {
    await prisma.categories.delete({ where: { ID: req.params.id } });
    // UPDATE Spendings SET categoryID = null WHERE categoryID = '${ID}';
    await prisma.spendings.updateMany({
      where: {
        categoryID: ID,
      },
      data: {
        categoryID: null,
      }
    })
    res.json({ success: true });
  } catch (e) {
    console.log('err deleteing categories : ', e);
    res.status(500).json(e);
  }
};
