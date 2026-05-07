const { Router } = require("express");
const messages = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
    const messageRequest = messages.find((message) => {
        message.id === req.params.messageId;
    });
    if (!messageRequest) {
        throw new CustomNotFoundError("Message not found");
    }
});

module.exports = messageRouter;
