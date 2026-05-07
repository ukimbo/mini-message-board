const { Router } = require("express");
const {
    getNewMessagePage,
    createMessage,
} = require("../controllers/newController");
const newRouter = Router();

newRouter.get("/", getNewMessagePage);
newRouter.post("/", createMessage);

module.exports = newRouter;
