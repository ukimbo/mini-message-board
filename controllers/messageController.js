const messages = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

function getMessageDetails(req, res) {
    const messageRequest = messages.find((message) => {
        message.id === req.params.messageId;
    });
    if (!messageRequest) {
        throw new CustomNotFoundError("Message not found");
    }
}

module.exports = getMessageDetails;
