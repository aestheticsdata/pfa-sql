// const { Spending, Category } = require('../../../db/dbInit');
// const { v1: uuidv1 } = require('uuid');
//
// module.exports = async (req, res) => {
//   const {
//     userID,
//     label,
//     amount,
//     id: spendingID,
//     category: {
//       ID: categoryID,
//       color,
//       name,
//     },
//   } = req.body;
//
//   try {
//     const currentSpending = await Spending.findByPk(spendingID);
//     const spendingCurrentCategoryID = currentSpending.categoryID;
//     const spending = await Spending.findByPk(spendingID);
//
//     const createNewCategory = async (name, color) => {
//       return await Category.create({
//         ID: uuidv1(),
//         userID,
//         name,
//         color,
//       });
//     };
//
//     if (categoryID !== null && spendingCurrentCategoryID !== categoryID) {
//       const category = await Category.findByPk(categoryID);
//       // les deux ids de categories sont differents alors
//       // si la nouvelle catégorie existe deja, changer l'id category du spending
//       if (categoryID === category.ID) {
//         spending.update(
//           {
//             label,
//             amount,
//             categoryID,
//           },
//           { where: { ID: spendingID } },
//         );
//       } else {
//         // si la nouvelle catégorie n'existe pas, créér la nouvelle catégorie, et mettre à jour l'id category du spending
//         const newCategory = await createNewCategory(name, color);
//         await Spending.update(
//           {
//             label,
//             amount,
//             categoryID: newCategory.ID,
//           },
//           { where: { ID: spendingID } },
//         );
//       }
//     } else {
//       // la catégorie est null
//       // mettre à jour le label et/ou l'amount, et mettre à null l'id de la catégorie du spending
//       if (categoryID === null) {
//         let newCategory = null;
//         if (color) {
//           newCategory = await createNewCategory(name, color);
//         }
//         await spending.update(
//           {
//             label,
//             amount,
//             categoryID : newCategory?.ID ?? categoryID,
//           },
//           { where: { ID: spendingID } },
//         );
//       } else {
//         // mettre à jour le label et/ou l'amount du spending uniquement et ne pas toucher à la catégorie
//         await spending.update(
//           {
//             label,
//             amount,
//           },
//           { where: { ID: spendingID } },
//         );
//       }
//     }
//     res.json({ success: true });
//   } catch (err) {
//     console.log(err);
//     res.status(404).json({ success: false });
//   }
// };
