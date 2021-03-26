module.exports = async (model, ID, res) => {
  try {
    await model.destroy({ where: { ID } });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json(`Error deleting recurring : ${err}`);
  }
};
