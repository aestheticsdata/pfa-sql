"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var prisma = require('../../../db/dbInit');
var uuidv1 = require('uuid').v1;
module.exports = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userID, label, amount, spendingID, _b, categoryID, color, name, createNewCategory, spending, spendingCurrentCategoryID, category, newCategory, newCategory, err_1;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.body, userID = _a.userID, label = _a.label, amount = _a.amount, spendingID = _a.id, _b = _a.category, categoryID = _b.ID, color = _b.color, name = _b.name;
                createNewCategory = function (name, color) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, prisma.categories.create({
                                    data: {
                                        ID: uuidv1(),
                                        userID: userID,
                                        name: name,
                                        color: color,
                                    }
                                })];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); };
                _d.label = 1;
            case 1:
                _d.trys.push([1, 16, , 17]);
                return [4 /*yield*/, prisma.spendings.findUnique({ where: { ID: spendingID } })];
            case 2:
                spending = _d.sent();
                spendingCurrentCategoryID = spending.categoryID;
                if (!(categoryID !== null && spendingCurrentCategoryID !== categoryID)) return [3 /*break*/, 9];
                return [4 /*yield*/, prisma.categories.findUnique({ where: { ID: categoryID } })];
            case 3:
                category = _d.sent();
                if (!(categoryID === category.ID)) return [3 /*break*/, 5];
                return [4 /*yield*/, prisma.spendings.update({
                        where: { ID: spendingID },
                        data: {
                            label: label,
                            amount: amount,
                            categoryID: categoryID,
                        },
                    })];
            case 4:
                _d.sent();
                return [3 /*break*/, 8];
            case 5: return [4 /*yield*/, createNewCategory(name, color)];
            case 6:
                newCategory = _d.sent();
                return [4 /*yield*/, prisma.spendings.update({
                        where: { ID: spendingID },
                        data: {
                            label: label,
                            amount: amount,
                            categoryID: newCategory.ID,
                        },
                    })];
            case 7:
                _d.sent();
                _d.label = 8;
            case 8: return [3 /*break*/, 15];
            case 9:
                if (!(categoryID === null)) return [3 /*break*/, 13];
                newCategory = null;
                if (!color) return [3 /*break*/, 11];
                return [4 /*yield*/, createNewCategory(name, color)];
            case 10:
                newCategory = _d.sent();
                _d.label = 11;
            case 11: return [4 /*yield*/, prisma.spendings.update({
                    where: { ID: spendingID },
                    data: {
                        label: label,
                        amount: amount,
                        categoryID: (_c = newCategory === null || newCategory === void 0 ? void 0 : newCategory.ID) !== null && _c !== void 0 ? _c : categoryID,
                    },
                })];
            case 12:
                _d.sent();
                return [3 /*break*/, 15];
            case 13: 
            // mettre à jour le label et/ou l'amount du spending uniquement et ne pas toucher à la catégorie
            return [4 /*yield*/, prisma.spendings.update({
                    where: { ID: spendingID },
                    data: {
                        label: label,
                        amount: amount,
                    },
                })];
            case 14:
                // mettre à jour le label et/ou l'amount du spending uniquement et ne pas toucher à la catégorie
                _d.sent();
                _d.label = 15;
            case 15:
                res.json({ success: true });
                return [3 /*break*/, 17];
            case 16:
                err_1 = _d.sent();
                console.log(err_1);
                res.status(500).json({ success: false });
                return [3 /*break*/, 17];
            case 17: return [2 /*return*/];
        }
    });
}); };
