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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
var express = require('express');
var router = express.Router();
const prisma = new client_1.PrismaClient();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let food = yield prisma.food.findMany();
        return res.status(200).json(Object.assign(Object.assign({}, req.resp), { data: food, success: true }));
    }
    catch (e) {
        return res.status(500).json(Object.assign(Object.assign({}, req.resp), { success: false }));
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //if (!req.body)
        let food = req.body;
        console.log("food", food);
        return res.status(200).json(Object.assign(Object.assign({ data: food }, req.resp), { success: true }));
    }
    catch (e) {
        return res.status(500).json(Object.assign(Object.assign({}, req.resp), { success: false }));
    }
}));
/* router.delete('') */
module.exports = router;
//# sourceMappingURL=food.js.map