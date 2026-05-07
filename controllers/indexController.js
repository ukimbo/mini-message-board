const messages = require("../db");

function getMessageBoard(req, res) {
    res.render("pages/index", {
        title: "Mini Message Board",
        messages: messages,
    });
}

module.exports = getMessageBoard;
