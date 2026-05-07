const { Router } = require("express");
const getMessageDetails = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:messageId", getMessageDetails);

module.exports = messageRouter;
