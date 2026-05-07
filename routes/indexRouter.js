const { Router } = require("express");
const getMessageBoard = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getMessageBoard);

module.exports = indexRouter;
