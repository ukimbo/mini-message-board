const { Router } = require("express");
const getMessageDetails = require("../controllers/messageDetailsController");

const messageRouter = Router();

messageRouter.get("/:messageId", getMessageDetails);

module.exports = messageRouter;
