const messages = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

function getMessageDetails(req, res) {
    const messageRequest = messages.find((message) => {
        return message.id === req.params.messageId;
    });
    if (!messageRequest) {
        throw new CustomNotFoundError("Message not found");
    }

    res.render("pages/message-details", {
        title: "Message Details",
        message: messageRequest,
    });
}

module.exports = getMessageDetails;
