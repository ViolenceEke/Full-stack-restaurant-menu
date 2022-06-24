"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodRouter = require('./routes/food');
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.json())
//app.use(express.urlencoded({ extended: false }))
app.use('/food', foodRouter);
app.get('/', (_, res) => {
    res.status(200).send("OK");
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map